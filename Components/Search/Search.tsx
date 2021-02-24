import React from 'react';
import { View, TextInput, Button, FlatList, ActivityIndicator } from 'react-native';
import {getFilmsFromApiWithSearchedText} from '../../API/TMDBApi'
import styles from './styles'
import FilmItem from '../FilmItem/FilmItem'


// toujours passer par setState pour manipuler les states


class Search extends React.Component {

    constructor(props) {
        super(props)

        this.searchedText = ""
        this.page = 0 // compteur de page
        this.totalPages = 0
        this.state = {
            films: [],
            isLoading: false
        }
    }

    // Method for load films
    _loadFilms () {
        //console.log('Load Films')
        if(this.searchedText.length > 0) {
            this.setState({ isLoading: true })
            getFilmsFromApiWithSearchedText(this.searchedText)
            .then(data => {
                this.page = data.page
                this.totalPages = data.total_pages
                this.setState({ 
                    films: [ ...this.state.films, ...data.results ],
                    isLoading: false
                })
            })
        }  
    }

    _searchTextInputChanged(text: String) {
        this.searchedText = text 
    }

    _searchFilms() {
        this.page = 0
        this.totalPage = 0
        this.setState({
            films: [],

        }, () => { 
            this._loadFilms()
        })
    }

    // Afficher l'indicateur de chargement
    _displayLoading () {
        if(this.state.isLoading) {
            return(
                <View style={ styles.loading_container}>
                    <ActivityIndicator size='large' />
                </View>
            )
        }
    }

    _displayFilmsDetails = (idFilm: string) => {
        console.log("Display film with id: " + idFilm)
        this.props.navigation.navigate("FilmsDetails", {idFilm: idFilm})
        
    }

    render() {

        //console.log('RENDER')
        return (
            // code here 
            <View style={styles.main_container}>
                <TextInput 
                    style={styles.textinput} 
                    placeholder='Titre du film'
                    onChangeText={(text) => this._searchTextInputChanged(text)}
                    onSubmitEditing={() => this._loadFilms()}
                />
                <Button title="Rechercher" onPress={ () =>  this._loadFilms() } />

                <FlatList
                data={this.state.films}
                keyExtractor={(item) => item.id.toString()}
                renderItem={({item}) => <FilmItem film={item} displayFilmsDetails={ this._displayFilmsDetails } />}
                onEndReachedThreshold={0.5}
                onEndReached={() => {
                    if (this.page < this.totalPages) {
                        this._loadFilms()
                    }
                }}
                />  
                {this._displayLoading()}
            </View>
        )
    }
}


export default Search;

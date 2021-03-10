import React from 'react';
import { View, TextInput, Button, FlatList, ActivityIndicator } from 'react-native';
import {getFilmsFromApiWithSearchedText} from '../../API/TMDBApi'
import { connect } from 'react-redux'


import styles from './styles'
import FilmList from '../FilmList/FilmList'


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

    _displayLoading () {
        if(this.state.isLoading) {
            return(
                <View style={ styles.loading_container}>
                    <ActivityIndicator size='large' />
                </View>
            )
        }
    }

    _showLoginScreen () {
        this.props.navigation.navigate('Login')
    }

    _showRegisterScreen () {
        this.props.navigation.navigate('Register')
    }

    _displayDetailForFilm = (idFilm) => {
        console.log("Display film with id " + idFilm)
        this.props.navigation.navigate("FilmDetail", { idFilm: idFilm })
    }

    // Method for load films
    _loadFilms () {
        if(this.searchedText.length > 0) {
            this.setState({ isLoading: true })
            getFilmsFromApiWithSearchedText(this.searchedText, this.page +1)
            .then(data => {
                this.page = data.page
                this.totalPages = data.total_pages
                this.setState({ 
                    films: [ ...this.state.films, ...data.results ],
                    //films: data.results,
                    isLoading: false
                })
            })
        }  
    }
    

    render() {

        return (
            // code here 
            <View style={styles.main_container}>
                <View style={styles.register_container}>
                    <Button title="Login" onPress={() => this._showLoginScreen()} />
                    <Button title="Register" onPress={ () => this._showRegisterScreen()} />
                </View>
                <TextInput 
                    style={styles.textinput} 
                    placeholder='Titre du film'
                    onChangeText={(text) => this._searchTextInputChanged(text)}
                    onSubmitEditing={() => this._searchFilms()}
                />
                <Button title="Rechercher" onPress={ () =>  this._searchFilms() } />
                <FilmList 
                    films={this.state.films}
                    navigation={this.props.navigation}
                    loadFilms={ this._loadFilms}
                    page={ this.page }
                    totalPages={ this.total_pages}
                />
                
                {this._displayLoading()}
            </View>
        )

       
    }
}

const mapStateToProps = state => {
    return {
        favoritesFilm: state.favoritesFilm
    }
}
export default  connect(mapStateToProps)(Search)

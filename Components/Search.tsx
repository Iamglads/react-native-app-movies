import React from 'react';
import { StyleSheet, View, TextInput, Button, FlatList } from 'react-native';
import {getFilmsFromApiWithSearchedText} from '../API/TMDBApi'


import FilmItem from '../Components/FilmItem'


// toujours passer par setState pour manipuler les states


class Search extends React.Component {

    constructor(props: Object) {

        super(props)
        
        this.state = {
            films: [],
            isLoading: false
        }

        this.searchedText = ""
    }

    _loadFilms () {
        //console.log('Load Films')
        if(this.searchedText.length > 0) {
            this.setState({ isLoading: true })
            getFilmsFromApiWithSearchedText(this.searchedText)
            .then(data => {
                this.setState({ 
                    films: data.results,
                    isLoading: false
                })
            })
        }  
    }

    _searchTextInputChanged(text: String) {
        this.searchedText = text 
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
                renderItem={({item}) => <FilmItem film={item}/>}
                />  
            </View>
        )
    }
}

// externaliser le style 
const styles = StyleSheet.create ({

    main_container: {
        padding: 5,
        marginTop: 40,
        flex: 1,
    },
    textinput: {
        height: 40,
        borderColor: 'grey',
        borderWidth: 1,
        borderRadius: 2,
    },
    style_button: {
        marginTop: 20
    }

})

export default Search;

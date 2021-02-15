import React from 'react';
import { StyleSheet, View, TextInput, Button, Image, FlatList } from 'react-native';
import {getFilmsFromApiWithSearchedText} from '../API/TMDBApi'


import FilmItem from '../Components/FilmItem'


class Search extends React.Component {

    constructor(props) {
        super(props)
        this._films = []
    }

    _loadFilms () {
        getFilmsFromApiWithSearchedText("star").then(data => {
            this._films = data.results
           this.forceUpdate()
        })
    }
    render() {
        return (
            // code here 
            <View style={styles.main_container}>
                <TextInput style={styles.textinput} placeholder='Titre du film'/>
                <Button title="Rechercher" onPress={ () =>  this._loadFilms } />

                <FlatList
                data={this._films}
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

import React from 'react';
import {  View, Text, Image, TouchableOpacity } from 'react-native';


import styles from './styles'
import { getImageFromApi } from '../../API/TMDBApi'


class FilmItem extends React.Component{

    _displayFavoriteImage() {
        if (this.props.isFilmFavorite) {
            return(
                <Image 
                style={styles.favorite_image}
                source={require('../../Images/coeur_plein.png')}
                />
            )
        }
    }

    

    render() {
        const film = this.props.film
        const displayDetailForFilm = this.props.displayDetailForFilm
         //const { film, displayDetailForFilm } = this.props
        return(
            <TouchableOpacity
            style={styles.main_container}
            onPress={() => displayDetailForFilm(film.id)}>
            <Image
              style={styles.image}
              source={{uri: getImageFromApi(film.poster_path)}}
            />
            <View style={styles.content_container}>
              <View style={styles.header_container}>
                {this._displayFavoriteImage()}
                <Text style={styles.title_text}>{film.title}</Text>
                <Text style={styles.vote_text}>{film.vote_average}</Text>
              </View>
              <View style={styles.description_container}>
                <Text style={styles.description_text} numberOfLines={6}>{film.overview}</Text>
              </View>
              <View>
                <Text style={styles.date_text}>Sorti le 13/12/2017</Text>
              </View>
            </View>
          </TouchableOpacity>
        )
    }
}






export default FilmItem
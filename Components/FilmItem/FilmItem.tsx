import React from 'react';
import {  View, Text, Image, TouchableOpacity } from 'react-native';
import styles from './styles'

import { getImageFromApi } from '../../API/TMDBApi'


class FilmItem extends React.Component{
    render() {
        const film = this.props.film
        const displayDetailsForFilm = this.props.displayFilmsDetails
        // const { film, displayDetailsForFilm } = this.props

        
        return(
            <TouchableOpacity 
            style={ styles.main_container }
            onPress={() => displayDetailsForFilm(film.id)}
            >
                <Image 
                style={ styles.image }
                    source={{uri: getImageFromApi(film.poster_path)}}
                />
                <View style={ styles.content_container }>
                    <View style={ styles.header_container }>
                        <Text style={ styles.title_text }> { film.title }</Text>
                        <Text style={ styles.vote_text }> { film.vote_average }</Text>
                    </View>
                    <View style={ styles.description_container }>
                        <Text style={ styles.description_text } numberOfLines={6}>{ film.overview }</Text>
                        <Text style={ styles.date_text }>Sorti le { film.release_date }</Text>
                    </View>
                </View>
            </TouchableOpacity>
        )
    }
}






export default FilmItem
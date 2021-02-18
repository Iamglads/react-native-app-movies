import React from 'react';
import { StyleSheet, View, Text, Image } from 'react-native';


import { getImageFromApi } from '../API/TMDBApi'





class FilmItem extends React.Component{
    render() {
        const film = this.props.film
        return(
            <View style={styles.main_container}>
                <Image 
                style={ styles.image}
                    source={{uri: getImageFromApi(film.poster_path)}}
                />
                <View style={ styles.content_container}>
                    <View style={ styles.header_container}>
                        <Text style={styles.title_text}> { film.title }</Text>
                        <Text style={styles.vote_text}> { film.vote_average }</Text>
                    </View>
                    <View style={ styles.description_container}>
                        <Text style={ styles.description_text} numberOfLines={6}>{ film.overview }</Text>
                        <Text style={ styles.date_text}>Sorti le { film.release_date }</Text>
                    </View>
                </View>
            </View>
        )
    }
}



const styles = StyleSheet.create({
    main_container: {
        height: 190,
        flexDirection: 'row'
    },
    title_text: {
        fontWeight: 'bold',
        fontSize: 15,
        flex: 1,
        flexWrap: 'wrap',
        paddingRight: 5
    },
    image: {
        width: 120,
        height: 180,
        margin: 5,
        backgroundColor: 'gray'
    },
    content_container: {
        flex: 1,
        margin:5
    },

    header_container: {
        flex: 3,
        flexDirection: 'row'
    },

    description_text: {
        fontStyle: 'italic',
        color: '#666666'
    },

    vote_text: {
        fontWeight: 'bold',
        fontSize: 20,
        color: '#666666'
      },
      description_container: {
        flex: 7
      },
      date_text: {
          textAlign: 'right',
          fontSize: 14
      }
})



export default FilmItem
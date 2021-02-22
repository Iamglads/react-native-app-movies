import React from 'react'
import { View, Text, StyleSheet, Image} from 'react-native'


class FilmDetails extends React.Component{
    render() {

        const idFilm = this.props.navigation.this.state.params.idFilm
        return(
            <View style={ styles.main_container }>
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
            </View>
        )
    }
}

const styles = StyleSheet.create({
    main_container: {
        flex: 1
    },

    content_container: {
         
    },

    header_container: {

    },

    title_text: {

    },

    description_container: {

    },

    description_text: {

    },

    date_text: {

    },

    vote_text: {

    }

})



export default FilmDetails
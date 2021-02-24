import React from 'react'
import { View, Text, StyleSheet, Image, ScrollView, ActivityIndicator} from 'react-native'
import moment from 'moment'
import {getFilmDetail, getImageFromApi} from '../../API/TMDBApi'
import styles from './styles'


class FilmDetails extends React.Component{
    constructor(props: string) {
        super(props)

        this.state = {
            film: undefined,
            isLoading: true
        }
    }

    componentDidMount() {
        getFilmDetail(this.props.navigation.state.params.idFilm)
        .then(data => {
            this.setState({
                film: data,
                isLoading: false
            })
        })
    }

    _displayLoading() {
        if(this.state.isLoading) {
            return(
            <View style={styles.loading_container}>
                <ActivityIndicator size='large' />
            </View>
        )
        }
    }

    _displayFilm() {
        const { film } = this.state
        if(film  != undefined) {
            return(
                <ScrollView style={ styles.scrollview_container }>
                <Image 
                style={ styles.image }
                    source={{uri: getImageFromApi(film.poster_path)}}
                />
                
            </ScrollView>
            )
        }
    }


    // RENDER 
    render() {

        //const idFilm = this.props.navigation.this.state.params.idFilm
        return(
            <View style={styles.main_container}>
                {this._displayLoading()}
                { this._displayFilm()}
            </View>
        )
    }
}



export default FilmDetails
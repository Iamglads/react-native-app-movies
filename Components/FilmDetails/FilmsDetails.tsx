import React from 'react'
import { View, Text, Image, ScrollView, ActivityIndicator, TouchableOpacity} from 'react-native'
import moment from 'moment'
import numeral from 'numeral'
import {getFilmDetail, getImageFromApi} from '../../API/TMDBApi'
import styles from './styles'

import { connect } from 'react-redux'


class FilmDetail extends React.Component{

   /*  static navigationOptions = ({ navigation }) => {
        const { params } = navigation.state
    } */
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

    // action for redux store
    _toggleFavorite() {
        const action = { type: "TOGGLE_FAVORITE", value: this.state.film}
        this.props.dispatch(action)
    }

    _displayFavoriteImage() {
        let sourceImage = require('../../Images/coeur_plein.png')
        if (this.props.favoritesFilm.findIndex(item => item.id === this.state.film.id) !== -1) {
            sourceImage = require('../../Images/coeur_vide.png')
        }

        return <Image source={sourceImage} style={ styles.favorite_image } />
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
                <Text style={ styles.title_text }> { film.title }</Text>
                <TouchableOpacity 
                style={styles.favorite_container}
                onPress={ () => this._toggleFavorite()}
                >
                    { this._displayFavoriteImage()}
                </TouchableOpacity>
                <Text style={ styles.description_text }> { film.overview }</Text>
                <Text style={ styles.default_text }> 
                    Sorti le {moment(new Date(film.release_date)).format('DD/MM/YYYY')} { film.overview }
                </Text>
                <Text style={ styles.default_text }>Note : { film.vote_average} /10 </Text>
                <Text style={ styles.default_text }>Nombre : { film.vote_count} </Text>
                <Text style={ styles.default_text }>Budget : { film.budget} </Text>
               
               
            </ScrollView>
            )
        }
    }


    // RENDER 
    render() {
       // console.log(this.props.navigation)
        
        return(
            <View style={styles.main_container}>
                {this._displayLoading()}
                {this._displayFilm()}
            </View>
        )
    }
}

const mapStateToProps = (state) => {
    return {
      favoritesFilm: state.favoritesFilm
    }
  }
  
  export default connect(mapStateToProps)(FilmDetail)
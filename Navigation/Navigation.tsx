// Navigation 
import React from 'react'
import { StyleSheet, Image } from 'react-native'
import 'react-native-gesture-handler'
import {createStackNavigator} from 'react-navigation-stack'
import {createAppContainer} from 'react-navigation'
import { createBottomTabNavigator } from 'react-navigation-tabs'


import Search from '../Components/Search/Search'
import FilmDetail from '../Components/FilmDetails/FilmsDetails'
import Favoris from '../Components/Favoris/Favoris'
import Login from '../Screens/Login/Login'
import Register from '../Screens/Register/Register'


const SearchStackNavigator = createStackNavigator({
    Search: {
        screen: Search,
        navigationOptions: {
            title: 'Rechercher'
        }
    },

    FilmDetail: {
        screen: FilmDetail
    },

    Login: {
        screen: Login
    },

    Register: {
        screen: Register
    }
})

const MoviesTabNavigator = createBottomTabNavigator(
    {
      Search: {
        screen: SearchStackNavigator,
        navigationOptions: {
          tabBarIcon: () => { // On définit le rendu de nos icônes par les images récemment ajoutés au projet
            return <Image
              source={require('../Images/search.png')}
              style={styles.icon}/> // On applique un style pour les redimensionner comme il faut
          }
        }
      },
      Favoris: {
        screen: Favoris,
        navigationOptions: {
          tabBarIcon: () => {
            return <Image
              source={require('../Images/coeur_plein.png')}
              style={styles.icon}/>
          }
        }
      }
    },
    {
      tabBarOptions: {
        activeBackgroundColor: '#DDDDDD', // Couleur d'arrière-plan de l'onglet sélectionné
        inactiveBackgroundColor: '#FFFFFF', // Couleur d'arrière-plan des onglets non sélectionnés
        showLabel: false, // On masque les titres
        showIcon: true // On informe le TabNavigator qu'on souhaite afficher les icônes définis
      }
    }
  )


export default createAppContainer(MoviesTabNavigator)



const styles = StyleSheet.create({
    icon: {
        width: 30,
        height: 30
    }
})
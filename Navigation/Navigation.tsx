// Navigation 

import 'react-native-gesture-handler'
import {createStackNavigator} from 'react-navigation-stack'
import {createAppContainer} from 'react-navigation'
import Search from '../Components/Search'
import FilmsDetails from '../Components/FilmsDetails'


const SearchStackNavigator = createStackNavigator({
    Search: {
        screen: Search,
        navigationOptions: {
            title: 'Rechercher'
        }
    },
    FilmsDetails: {
        screen: FilmsDetails
    }
})

 
export default createAppContainer(SearchStackNavigator)
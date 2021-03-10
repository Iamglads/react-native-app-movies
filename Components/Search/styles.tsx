// Search styles 


import { StyleSheet } from 'react-native'



// externaliser le style 
const styles = StyleSheet.create ({

    main_container: {
        padding: 5,
        flex: 1,
    },
    textinput: {
        height: 40,
        borderColor: 'grey',
        borderRadius: 5,
        borderWidth: 1,
        marginTop: 20,
        paddingLeft: 5
    },
    style_button: {
        marginTop: 20
    },

    loading_container: {
        position: 'absolute',
        left: 0,
        right: 0,
        top: 100,
        bottom: 0, 
        alignItems: 'center',
        justifyContent: 'center'
    },

    register_container:{
        flexDirection: 'row',
        justifyContent: 'space-between',
    }

})


export default styles 
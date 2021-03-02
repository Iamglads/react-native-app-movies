import { Platform, StyleSheet } from 'react-native'



const styles = StyleSheet.create({

    container: {
        flex: 1,
        backgroundColor: '#009387'
    },

    header: {
        flex: 1,
        justifyContent: 'flex-end',
        paddingHorizontal: 20,
        paddingBottom: 50
    },

    text_header: {
        color: 'white',
        fontWeight: 'bold',
        fontSize: 30
    },

    textInput: {
        //flex: 1,
        marginTop: Platform.OS === 'ios' ? 0 : -12,
        paddingLeft: 10,
        color: '#05375a'
    },

    footer: {
        flex: 3,
        backgroundColor: 'white',
        borderTopLeftRadius: 30,
        borderTopRightRadius: 30
    },

    text_footer: {
        color: '#05375a'
    },

    action:{
        flexDirection: "row",
        marginTop: 10,
        borderBottomWidth: 1,
        borderBottomColor: '#f2f2f2',
        paddingBottom: 5
    },

    button: {
        alignItems: 'center',
        marginTop: 50
    },

    signIn: {
        width: '1OO%',
        height: 50,
        justifyContent: 'center',
        alignItems: 'center',
        borderRadius: 10

    },

    textSign: {
        fontSize: 18,
        fontWeight: 'bold'
    }
})


export default styles
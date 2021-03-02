
import React from 'react'
import { View, Text, StatusBar, TextInput } from 'react-native'
import * as Animatable from 'react-native-animatable'
import FontAwesome from 'react-native-vector-icons/FontAwesome'
import Feather from 'react-native-vector-icons/Feather'
import LinearGradient from 'react-native-linear-gradient'
import { useTheme } from 'react-native-paper';


import styles from './styles'
import { TouchableOpacity } from 'react-native-gesture-handler'

const Login = () => {

    const { colors } = useTheme();


    return (
        <>
            <View style={ styles.container }>
                <StatusBar backgroundColor='#009387' barStyle="light-content" />
                <View style={ styles.header}>
                    <Text style={styles.text_header}> Se connecter </Text>
                </View>
            </View>

            <Animatable.View
            animation="fadeInUpBig"
            style={styles.footer}
            >
                <Text style={ styles.text_footer }> Username </Text>
                <View style={styles.action}>
                    <FontAwesome name="user-o" size={20} />
                    <TextInput style={styles.textInput} placeholder="Votre prénom" placeholderTextColor="#666666"/>
{/*                     <Animatable.View animation="bounceIn">
                        <Feather name="check-circle" color="green" size={20}/>
                    </Animatable.View> */}
                </View>
                <Text style={ styles.text_footer }>Mot de passe</Text>
                <View style={ styles.action }>
                    <Feather 
                    name="lock"
                    size={20}
                    />
                    <TextInput style={ styles.textInput } placeholder="Votre mot de passe" placeholderTextColor="#666666"/>
                </View>
                <TouchableOpacity >
                    <Text style={{color: '#009387', marginTop:15}}> Vous avez oublié votre mot de passe?</Text>
                </TouchableOpacity>
                <View style={ styles.button}>
                    <TouchableOpacity style={styles.signIn}>
                       {/*  <LinearGradient  colors={['#08d4c4', '#01ab9d']} style={styles.signIn}>
                            <Text style={ styles.textSign}> Se connecter </Text>
                        </LinearGradient> */}
                        
                    </TouchableOpacity>
                    <TouchableOpacity style={ styles.signIn}>
                        <Text style={ styles.textSign}> Créer un compte </Text>
                    </TouchableOpacity>
                </View>
            </Animatable.View>
        </>
    )
}


export default Login
 
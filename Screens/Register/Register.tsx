import React from 'react'
import { View, Text, Button, TouchableOpacity, Dimensions, TextInput, Platform, ScrollView, StatusBar} from 'react-native'

import * as Animatable from 'react-native-animatable';
import LinearGradient from 'react-native-linear-gradient';
import FontAwesome from 'react-native-vector-icons/FontAwesome';
import Feather from 'react-native-vector-icons/Feather';
import styles from './styles'

import { useTheme } from 'react-native-paper';



const Register = ({ navigation }) => {

    const [ data, setData ] = React.useState({
        username: '',
        password: '',
        confirm_password: '',
        secureTextEntry: true,
        confirm_secureTextEntry: 'true'
    })

    const { colors } = useTheme();

    return(
        <View style={styles.container}>
        <StatusBar backgroundColor='#009387' barStyle="light-content"/>
      <View style={styles.header}>
          <Text style={styles.text_header}>Register</Text>
      </View>
      <Animatable.View 
          animation="fadeInUpBig"
          style={styles.footer}
      >
          <ScrollView>
          <Text style={styles.text_footer}>Username</Text>
          <View style={styles.action}>
              <FontAwesome 
                  name="user-o"
                  color="#05375a"
                  size={20}
              />
              <TextInput 
                  placeholder="Your Username"
                  style={styles.textInput}
                  autoCapitalize="none"
              />
          </View>

          <Text style={[styles.text_footer, {
              marginTop: 35
          }]}>Mot de passe</Text>
          <View style={styles.action}>
              <Feather 
                  name="lock"
                  color="#05375a"
                  size={20}
              />
              <TextInput 
                  placeholder="Your Password"
                  style={styles.textInput}
                  autoCapitalize="none"
              />
          </View>

          <Text style={[styles.text_footer, {
              marginTop: 35
          }]}>Confirm Password</Text>
          <View style={styles.action}>
              <Feather 
                  name="lock"
                  color="#05375a"
                  size={20}
              />
              <TextInput 
                  placeholder="Confirm Your Password"
                  style={styles.textInput}
                  autoCapitalize="none"
              />
          </View>
          <View style={styles.button}>
              <TouchableOpacity
                  style={styles.signIn}
                  onPress={() => {}}
              >
                  <Text style={styles.textSign} >Sign Up</Text>
              </TouchableOpacity>

              <TouchableOpacity style={styles.signIn} onPress={ () => alert('Show Sign In Screen')}>
                  <Text style={styles.textSign}>Sign In</Text>
              </TouchableOpacity>
          </View>
          </ScrollView>
      </Animatable.View>
    </View>
  );

}


export default Register
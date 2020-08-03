import React from 'react'
import axios from 'axios'
import { StyleSheet, View, Button, TextInput, Image } from 'react-native'
import { NavigationContainer } from '@react-navigation/native'
import { createStackNavigator } from '@react-navigation/stack'



class LoginView extends React.Component {

    constructor(props) {
        super(props)
        this.state = {
            email: '',
            psw: ''
        }
    }

    // to get the inputs
    setEmail(email) {
        this.setState({ email })
    }
    setPsw(psw) {
        this.setState({ psw })
    }

    loginButton() {
        // Here a created regex
        const emailRegex = /[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,}$/
        const pswRegex = /^[a-zA-Z0-9-]{5,32}$/

        // I used regex to securise the request
        if (!emailRegex.test(this.state.email)) {
            alert('Email is not to the good format')
        } else if (!pswRegex.test(this.state.psw)) {
            alert('wrong password')
        } else {

            // if inputs are validates by regex
            axios.post("http://localhost:4000/users/login", {
                email: this.state.email,
                psw: this.state.psw,
            })
                .then((response) => {
                    // to check the status
                    if (response.status == 200) {
                        // just to see the information we ll send to the other view
                        console.log(response.data.token)
                        console.log(response.data.user_name)
                        console.log(this.state.email)
                        // we navigate to an other view
                        this.props.navigation.navigate('News feed',
                            {
                                token: response.data.token,
                                user_name: response.data.user_name,
                                user_email: this.state.email
                            })
                    } else {
                        // status is not 200
                        console.log("problem with connexion")
                    }
                })
                .catch((erreur) => {
                    console.log(erreur)
                })
        }
    }

    render() {
        return (
            <View style={styles.view}>
                <Image style={styles.image} source={require('../assets/icon.png')} />
                <TextInput style={styles.textInput} placeholder='email' autoCapitalize='none' onChangeText={(text) => this.setEmail(text)} value={this.state.email} />
                <TextInput style={styles.textInput} placeholder='Password' secureTextEntry={true} autoCapitalize='none' onChangeText={(text) => this.setPsw(text)} value={this.state.psw} />
                <Button color="pink" style={styles.button} title='Login' onPress={() => this.loginButton()} />
                <Button color="pink" style={styles.button} title='Or you can register here' onPress={() => this.props.navigation.navigate('Sign Up')} />
            </View>

        )
    }
}

const styles = StyleSheet.create({
    view: {
        flex: 1,
        justifyContent: "center",
        alignItems: 'center',
        backgroundColor: '#fff',

    },
    image: {
        width: 200,
        height: 200,
    },
    textInput: {
        borderWidth: 2,
        margin: 30,
        padding: 10,
        borderRadius: 20,
        borderColor: 'pink',
        width: 300,
    },
    button: {
        color: 'pink',
    }
})

export default LoginView
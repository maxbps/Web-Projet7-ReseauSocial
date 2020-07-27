import React from 'react'
import axios from 'axios'
import { StyleSheet, View, Button, TextInput, Image } from 'react-native'

class LoginView extends React.Component {

    constructor(props) {
        super(props)
        this.state = {
            email: '',
            psw: ''
        }
    }

    setEmail(email) {
        this.setState({ email })
    }
    setPsw(psw) {
        this.setState({ psw })
    }

    loginButton() {
        axios.post("http://localhost:4000/users/login", {
            email: this.state.email,
            psw: this.state.psw,
        })
            .then(function (reponse) {
                console.log(reponse)
            })
            .catch(function (erreur) {
                console.log(erreur)

            })

    }

    render() {
        return (
            <View style={styles.view}>
                <Image style={styles.image} source={require('../assets/icon.png')} />
                <TextInput style={styles.textInput} placeholder='email' onChangeText={(text) => this.setEmail(text)} value={this.state.email} />
                <TextInput style={styles.textInput} placeholder='Password' onChangeText={(text) => this.setPsw(text)} value={this.state.psw} />
                <Button color="pink" style={styles.button} title='Login' onPress={() => this.loginButton()} />
            </View>

        )
    }
}

const styles = StyleSheet.create({
    view: {
        flex: 1,
        justifyContent: "center",
        alignItems: 'center',

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
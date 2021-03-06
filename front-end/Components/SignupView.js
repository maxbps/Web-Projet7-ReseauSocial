import React from 'react'
import axios from 'axios'
import { StyleSheet, View, Button, TextInput, Image } from 'react-native'
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';

class SignupView extends React.Component {

    constructor(props) {
        super(props)
        this.state = {
            email: '',
            name: '',
            psw: ''
        }
    }

    //To modify the state of email
    setEmail(email) {
        this.setState({ email })
    }

    //To modify the state of name
    setName(name) {
        this.setState({ name })
    }

    //To modify the state of psw
    setPsw(psw) {
        this.setState({ psw })
    }

    //Called when pressed the signup Button
    signupButton() {
        // Creation of regex
        const emailRegex = /[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,}$/
        const nameRegex = /^[a-zA-Z0-9 -]{3,16}$/
        const pswRegex = /^[a-zA-Z0-9-]{3,16}$/

        // We check the inputs and we force the right format here
        if (!emailRegex.test(this.state.email)) {
            alert('Email is not to the good format')
        } else if (!nameRegex.test(this.state.name)) {
            alert('Name is not to the good format')
        } else if (!pswRegex.test(this.state.psw)) {
            alert('Please choose a stronger password')
        } else {

            //Here is the request
            axios.post("http://localhost:4000/users/signup", {
                email: this.state.email,
                name: this.state.name,
                psw: this.state.psw,
            })
                .then(function (response) {
                    if (response.status == 200) {
                        //The back-end send what is show to the user
                        alert(response.data)
                    } else {
                        alert("problem with connexion")
                    }
                })
                .catch(function (erreur) {
                    console.log(erreur)

                })
        }
    }


    render() {
        return (
            <View style={styles.view}>
                <Image style={styles.image} source={require('../assets/icon.png')} />
                <TextInput style={styles.textInput} placeholder='email' autoCapitalize='none' onChangeText={(text) => this.setEmail(text)} value={this.state.email} />
                <TextInput style={styles.textInput} placeholder='name' autoCapitalize='none' onChangeText={(text) => this.setName(text)} value={this.state.name} />
                <TextInput style={styles.textInput} placeholder='password' autoCapitalize='none' onChangeText={(text) => this.setPsw(text)} value={this.state.psw} />
                <Button color="pink" style={styles.button} title='Signup' onPress={() => this.signupButton()} />
            </View>

        )
    }
}

const styles = StyleSheet.create({
    view: {
        flex: 1,
        justifyContent: "center",
        alignItems: 'center',
        backgroundColor: '#fff'
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

export default SignupView
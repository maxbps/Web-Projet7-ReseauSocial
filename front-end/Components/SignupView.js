import React from 'react'
import axios from 'axios'
import { StyleSheet, View, Button, TextInput, Image } from 'react-native'

class SignupView extends React.Component {

    constructor(props) {
        super(props)
        this.state = {
            email: '',
            name: '',
            psw: ''
        }
    }

    setEmail(email) {
        this.setState({ email })
    }
    setName(name) {
        this.setState({ name })
    }
    setPsw(psw) {
        this.setState({ psw })
    }
    checkInputs(email, name, psw) {
        if (email != '' && name != '' && psw != '') {
            alert("succes")
        } else {
            alert("pb avec les input")
        }
    }
    signupButton() {
        //this.checkInputs(this.state.email, this.state.name, this.state.psw)
        axios.post("http://localhost:4000/users/signup", {
            email: this.state.email,
            name: this.state.name,
            psw: this.state.psw,
            picture: 'ca fonctionne !'
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
                <TextInput style={styles.textInput} placeholder='name' onChangeText={(text) => this.setName(text)} value={this.state.name} />
                <TextInput style={styles.textInput} placeholder='password' onChangeText={(text) => this.setPsw(text)} value={this.state.psw} />
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
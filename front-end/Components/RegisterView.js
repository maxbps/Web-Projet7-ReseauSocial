import React from 'react'
import { StyleSheet, View, Button, TextInput, Image } from 'react-native'

class RegisterView extends React.Component {
    render() {
        return (
            <View style={styles.view}>
                <Image style={styles.image} source={require('../assets/icon.png')} />
                <TextInput style={styles.textInput} placeholder='email' />
                <TextInput style={styles.textInput} placeholder='name' />
                <TextInput style={styles.textInput} placeholder='confirm password' />
                <Button color="pink" style={styles.button} title='Register' onPress={() => { }} />
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

export default RegisterView
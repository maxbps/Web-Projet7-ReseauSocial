import React from 'react'
import axios from 'axios'
import { StyleSheet, SafeAreaView, View, Button, TextInput, Text } from 'react-native'
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';

class CreatePostView extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            description: '',
            token: this.props.route.params.token,
            user_isAdm: this.props.route.params.user_isAdm,
            user_name: this.props.route.params.user_name,
            user_email: this.props.route.params.user_email
        }
    }

    setDescription(description) {
        this.setState({ description })
    }

    postButton(token, user_name, user_email) {
        //here is the request
        axios.post("http://localhost:4000/posts/newpost", {
            description: this.state.description,
            email: user_email,
            name: user_name,
        }, {
            headers: {
                // I had to separe it in two parts (split in back-end)
                'Authorization': `token ${token}`
            }
        })
            .then(function (response) {
                if (response.status == 200) {
                    alert('succesfuly added your post')
                } else {
                    console.log("problem with connexion")
                }
            })
            .catch(function (erreur) {
                console.log(erreur)

            })
    }


    render() {
        return (
            <SafeAreaView>
                <View style={styles.container}>
                    <TextInput style={styles.textInput} placeholder='Description' multiline={true} numberOfLines={4} onChangeText={(text) => this.setDescription(text)} value={this.state.description} />
                    <Button color="pink" title='Submit' onPress={() => this.postButton(this.state.token, this.state.user_name, this.state.user_email)} />
                </View>
            </SafeAreaView>
        )
    }
}


const styles = StyleSheet.create({
    container: {
    },
    textInput: {
        borderWidth: 2,
        margin: 30,
        padding: 10,
        borderRadius: 20,
        height: 200,
        borderColor: 'pink',
    },
})

export default CreatePostView
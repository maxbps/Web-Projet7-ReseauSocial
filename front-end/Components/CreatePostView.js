import React from 'react'
import axios from 'axios'
import { StyleSheet, SafeAreaView, View, Button, TextInput, Image, FlatList, Text } from 'react-native'
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import Constants from 'expo-constants';
import * as Permissions from 'expo-permissions';
import * as ImagePicker from 'expo-image-picker';



class CreatePostView extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            description: '',
            image: null,
        }
    }

    setDescription(description) {
        this.setState({ description })
    }

    componentDidMount() {
        this.getPermissionAsync()
    }

    getPermissionAsync = async () => {
        if (Constants.platform.ios) {
            const { status } = await Permissions.askAsync(Permissions.CAMERA_ROLL)
            if (status !== 'granted') {
                alert('Sorry, we need camera roll permissions to make this work!')
            }
        }
    }

    _pickImage = async () => {
        try {
            let result = await ImagePicker.launchImageLibraryAsync({
                mediaTypes: ImagePicker.MediaTypeOptions.All,
                allowsEditing: true,
                aspect: [4, 3],
                quality: 1,
            });
            if (!result.cancelled) {
                this.setState({ image: result.uri })
                data.append('file', {
                    uri: result.uri,
                    type: 'image/jpeg',
                    filename: result.uri.substr(result.uri.lastIndexOf('/') + 1)
                })

            }
        } catch (error) {
            console.log(error)
        }
    }

    postButton = async (image) => {
        let data = new FormData()
        data.append('submit', 'ok')
        data.append('postData', { email: 'maxime@email.fr', name: 'maxime', description: 'blbablabla' })
        data.append('file', { type: 'image/jpg', uri: image, name: "name.jpg" })
        console.log(data)
        axios.post('http://localhost:4000/posts/', data)
            .then(function (response) {
                if (response.status == 200) {
                    alert('succesfuly added you account')
                } else {
                    console.log("problem with connexion")
                }
            })
            .catch(function (erreur) {
                console.log(erreur)

            })

        // fetch("http://localhost:4000/posts/", {
        //     method: "post",
        //     body: data,
        // })
        //     .then(res => res.json())
        //     .then(res => {
        //         alert('sucess')
        //     })
        //     .catch(err => {
        //         console.error("error uploading", err)
        //     })
    }




    render() {
        let { image } = this.state;
        return (
            <SafeAreaView>
                <View>
                    <Button color="pink" title="Choose a picture" onPress={() => this._pickImage()} />
                    <View style={styles.image_container}>
                        {image && <Image source={{ uri: image }} style={{ width: "100%", height: "100%", borderRadius: 25 }} />}
                    </View>
                    <TextInput style={styles.textInput} placeholder='Description' multiline={true} numberOfLines={4} onChangeText={(text) => this.setDescription(text)} value={this.state.description} />
                    <Button color="pink" title='Submit' onPress={() => this.postButton(image)} />
                </View>
            </SafeAreaView>
        )
    }
}

const styles = StyleSheet.create({

    image_container: {
        justifyContent: "center",
        alignItems: 'center',
        marginHorizontal: 15,
        marginVertical: 15,
        height: 250,
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

import React from 'react'
import axios from 'axios'
import Swipeout from 'react-native-swipeout'
import { StyleSheet, View, Text, Image, Button, Alert } from 'react-native'



class PostItem extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            activeRowKey: null,
        }
    }


    render() {
        const post = this.props.post
        const user_isAdm = this.props.user_isAdm
        const token = this.props.token


        const swipeSettings = {
            backgroundColor: '#fff',
            autoClose: true,

            onOpen: (secId, rowIs, direction) => {
                this.setState({ activeRowKey: post.post_id })
                console.log(this.state.activeRowKey)
            },

            right: [
                {
                    onPress: () => {
                        Alert.alert(
                            'Alert',
                            'Are you sure you want to delete ?',
                            [
                                { text: 'No', onPress: () => console.log("canceled"), style: 'cancel' },
                                {
                                    text: 'Yes', onPress: () => {
                                        axios.post("http://localhost:4000/posts/deletepost", {
                                            post_id: this.state.activeRowKey,
                                        }, {
                                            headers: {
                                                // I had to separe it in two parts (split in back-end)
                                                'Authorization': `token ${this.props.token}`
                                            }
                                        })
                                    },
                                },
                            ]
                        )
                    },
                    text: 'Delete'
                }
            ],
            rowId: this.props.index,
            sectionId: 1,
        }


        function deletePost() {
            alert(user_isAdm)
        }

        return (
            <Swipeout{...swipeSettings}>
                <View style={styles.main_container}>
                    <View style={styles.title_container}>
                        <Image style={styles.title_image} source={require('../assets/user.png')} />
                        <Text style={styles.title_text}>{post.user_name}</Text>
                    </View>
                    <View style={styles.description_container}>
                        <Text style={styles.description_text}>{post.post_description}</Text>
                    </View>
                </View>
            </Swipeout>
        )
    }
}

const styles = StyleSheet.create({
    main_container: {
        flex: 1,
        marginBottom: 70,
    },
    title_container: {
        flexDirection: "row",
        justifyContent: "space-between",
        paddingHorizontal: 32,
        paddingVertical: 12,
        borderBottomWidth: 1,
        borderBottomColor: "#D8D9DB",
        alignItems: "center",

    },
    title_image: {
        width: 48,
        height: 48,
        borderRadius: 24,
        marginRight: 16

    },
    title_text: {
        fontSize: 22,
        fontWeight: 'bold',
        color: 'pink',
    },
    image_container: {
        justifyContent: "center",
        alignItems: 'center',
        marginHorizontal: 15,
        marginVertical: 15,
        height: 250,
    },
    image: {
        marginHorizontal: 32,

    },
    description_container: {

    },
    description_text: {
        marginHorizontal: 15,
        fontSize: 17,
        color: 'grey',

    },
})

export default PostItem
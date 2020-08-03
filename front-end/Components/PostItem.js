
import React from 'react'
import { StyleSheet, View, Text, Image } from 'react-native'

class PostItem extends React.Component {
    render() {
        const post = this.props.post
        return (
            <View style={styles.main_container}>
                <View style={styles.title_container}>
                    <Image style={styles.title_image} source={require('../assets/user.png')} />
                    <Text style={styles.title_text}>{post.user_name}</Text>
                </View>
                <View style={styles.description_container}>
                    <Text style={styles.description_text}>{post.post_description}</Text>
                </View>

            </View>
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

    }
})

export default PostItem
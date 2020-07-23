import React from 'react'
import FilmItem from './FilmItem'
import films from '../Helpers/filmData'
import { StyleSheet, View, Button, TextInput, Image, FlatList } from 'react-native'

class PostView extends React.Component {
    render() {
        return (
            <View>
                <FlatList
                    data={films}
                    keyExtractor={(item) => item.id.toString()}
                    renderItem={({ item }) => <FilmItem film={item} />}
                />
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

export default PostView
import React from 'react'
import FilmItem from './FilmItem'
import films from '../Helpers/filmData'
import { StyleSheet, SafeAreaView, View, Button, TextInput, Image, FlatList, Text } from 'react-native'
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';

class PostView extends React.Component {
    render() {
        return (
            <SafeAreaView>
                <View>
                    <View style={styles.hView}>
                        <Button color="pink" style={styles.button} title='Logout' onPress={() => this.props.navigation.navigate('Sign In')} />
                        <Button color="pink" style={styles.button} title='News Feed' />
                        <Button color="pink" style={styles.button} title='New Post' onPress={() => this.props.navigation.navigate('Create post')} />
                    </View>
                    <FlatList
                        data={films}
                        keyExtractor={(item) => item.id.toString()}
                        renderItem={({ item }) => <FilmItem film={item} />}
                    />
                    <Text>rhfoevevietlsnrhrhtytytyh(her</Text>
                </View>
            </SafeAreaView>
        )
    }
}

const styles = StyleSheet.create({
    hView: {
        flexDirection: 'row',
        justifyContent: 'space-around'
    },

})

export default PostView
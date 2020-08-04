import React from 'react'
import PostItem from './PostItem'
import axios from 'axios'
import { StyleSheet, SafeAreaView, View, Button, TextInput, Image, FlatList, Text } from 'react-native'
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';

class PostView extends React.Component {

    constructor(props) {
        super(props)
        this.state = {
            posts: [],
            //this is how we get informations from LoginView 
            token: this.props.route.params.token,
            user_isAdm: this.props.route.params.user_isAdm,
            user_name: this.props.route.params.user_name,
            user_email: this.props.route.params.user_email,
        }
    }

    setDescription(posts) {
        this.setState({ posts })
    }

    componentDidMount() {
        this.refreshPost()
    }

    refreshPost() {
        this.setState({ posts: [] })
        var option = {
            'method': 'GET',
            'headers': {
                'Authorization': `token ${this.state.token}`
            }
        }

        fetch('http://localhost:4000/posts', option)
            .then((response) => response.json())
            .then(data => {
                this.setState({
                    posts: [...this.state.posts, ...data],
                })
            })
            .catch((error) => console.log(error))
    }

    render() {
        return (
            <SafeAreaView>
                <View>
                    <View style={styles.hView}>
                        <Button color="pink" style={styles.button} title='Logout' onPress={() => this.props.navigation.navigate('Sign In')} />
                        <Button color="pink" style={styles.button} title='Refresh' onPress={() => this.refreshPost()} />
                        <Button color="pink" style={styles.button} title='New Post' onPress={() => this.props.navigation.navigate('Create post', { token: this.state.token, user_isAdm: this.state.user_isAdm, user_name: this.state.user_name, user_email: this.state.user_email })} />
                    </View>
                    <FlatList
                        data={this.state.posts}
                        keyExtractor={(item) => item.post_id.toString()}
                        renderItem={({ item }) => <PostItem post={item} user_isAdm={this.state.user_isAdm} token={this.state.token} />}
                    />
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
import React, {Component} from 'react';
import {
    TouchableHighlight, Image, AppRegistry,
    StyleSheet, Text, View
} from 'react-native';
import api from './api';
import {StackNavigator} from 'react-navigation';

export default class DetailScreen extends React.Component {
    static navigationOptions = ({navigation}) => ({
        title: `${navigation.state.params.title} movie`,
    });

    constructor(props) {
        super(props);
        this.state = {};
        api.view(this.props.rowData).then((data) => {
            this.setState(data);
        });
    }

    saperator() {
        return (
            <View style={{height: 1, backgroundColor: 'lightgray', margin: 5}}/>
        );
    }

    render() {
        const {params} = this.props.navigation.state;
        return (
            <View style={styles.container}>

                <View style={{flex: 1}}>
                    <Image style={styles.image} source={{uri: "http://image.tmdb.org/t/p/w342" + params.poster_path}}/>
                </View>
                <View style={{flex: 1, padding: 10, paddingTop: 10}}>
                    <Text style={styles.title}>{params.title} ({params.vote_average})</Text>
                    <Text>Genre: {params.release_date} ({params.vote_average})</Text>
                    {this.saperator()}
                    <Text>Released: {this.state.Released} [{params.vote_average}]</Text>
                    {this.saperator()}
                    <Text>{params.overview}</Text>
                    {this.saperator()}
                    <Text>Director: {params.release_date}</Text>
                    {this.saperator()}
                    <Text>Writer: {params.release_date}</Text>
                    {this.saperator()}
                    <Text>Actors: {params.release_date}</Text>
                </View>
            </View>
        );
    }
}

let styles = StyleSheet.create({
    container: {
        flex: 1,
        padding: 10,
        paddingTop: 70,
    },
    image: {
        paddingTop: 20,
        paddingBottom: 20,
        height: 200
    },
    title: {
        fontSize: 25
    },
    subTitle: {
        fontSize: 20
    }
});

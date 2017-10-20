import React, {Component} from 'react';
import {TouchableHighlight, Image, AppRegistry,
    StyleSheet, Text, View} from 'react-native';
import api from './api';
import {StackNavigator} from 'react-navigation';

export default class DetailScreen extends React.Component {
    static navigationOptions = ({navigation}) => ({
        title: `${navigation.state.params.movieName} movie`,
    });
    constructor(props){
        super(props);
        this.state = {};
        api.view(this.props.rowData).then((data)=>{
            this.setState(data);
        });
    }

    saperator(){
        return (
            <View style={{height:1, backgroundColor:'lightgray', margin:5}}/>
        );
    }
    render() {
        const {params} = this.props.navigation.state;
        return (
            <View style={styles.container}>

                <View style={{flex:1}}>
                    <Image style={styles.image} source={{uri: params.poster_url}}/>
                </View>
                <View style={{flex:1, padding: 10,paddingTop:10}}>
                    <Text style={styles.title}>{params.movieName} ({params.rating})</Text>
                    <Text>Genre: {params.genre} ({params.rating})</Text>
                    {this.saperator()}
                    <Text>Released: {this.state.Released} [{params.rating}]</Text>
                    {this.saperator()}
                    <Text>{params.plot}</Text>
                    {this.saperator()}
                    <Text>Director: {params.genre}</Text>
                    {this.saperator()}
                    <Text>Writer: {params.genre}</Text>
                    {this.saperator()}
                    <Text>Actors: {params.genre}</Text>
                </View>
            </View>
        );
    }
}

let styles = StyleSheet.create({
    container:{
        flex:1,
        padding: 10,
        paddingTop:70,
    },
    image:{
        paddingTop:20,
        paddingBottom:20,
        height: 200
    },
    title:{
        fontSize: 25
    },
    subTitle:{
        fontSize: 20
    }
});

import React from 'react';
import { StyleSheet, Text, View ,StatusBar} from 'react-native';
import { StackNavigator } from 'react-navigation';
import ListScreen from './src/ListScreen';
import DetailScreen from './src/DetailScreen';

const MovieApp = StackNavigator({
    List: { screen: ListScreen },
    Detail: {screen: DetailScreen},
});

export default class App extends React.Component {
    render() {
        return (
            <View style={styles.container}>
                <StatusBar
                backgroundColor='#000'
                barStyle="light-content"
                />
                <MovieApp />
            </View>
        );
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: 'red',

    }
});
import React, {Component} from 'react';
import {
    View,
    ListView,
    AppRegistry,
    Text,
    Button,
    TouchableHighlight,
    StyleSheet,
    Image,
    TouchableOpacity,
    TextInput,
} from 'react-native';
import {StackNavigator} from 'react-navigation';
import api from './api';

export default class ListScreen extends Component {
    constructor(props) {
        super(props);
        const ds = new ListView.DataSource({
                rowHasChanged: (r1, r2) => r1 !== r2
            }
        );
        this.state = {
            dataSource: ds.cloneWithRows([]),
            title: 'IronMan',
        };
    }

    searchMovie() {
        const ds = new ListView.DataSource({
                rowHasChanged: (r1, r2) => r1 !== r2
            }
        );
        api.result(this.state.title).then((data) => {
            console.log(data);
            this.setState({dataSource: ds.cloneWithRows(data)});
        });
    }

    static navigationOptions = {
        title: 'Movie Explore'
    };

    setNameMovie(text) {
        this.setState({title: text})
    }

    render() {
        const {navigate} = this.props.navigation;

        console.log(this.state.dataSource);
        return (
            <View style={{flex: 1}}>
                <TextInput style={styles.input}
                           placeholder="Movie Name"
                           onChangeText={(text) => {
                               this.setNameMovie(text)
                           }}/>
                <Button title="Search" onPress={() => {
                    this.searchMovie()
                }}/>
                <ListView style={styles.container}
                          dataSource={this.state.dataSource}
                          enableEmptySections={true}
                          renderRow={(rowData) => {
                              console.log('rowData', rowData);
                              return (
                                  <TouchableOpacity onPress={() => navigate('Detail', {
                                      title: `${rowData.title}`
                                      , overview: `${rowData.overview}`
                                      , release_date: `${rowData.release_date}`
                                      , vote_average: `${rowData.vote_average}`
                                      , poster_path: `${rowData.poster_path}`
                                  })}>
                                      <View style={styles.row}>
                                          <View style={{flex: 3}}>
                                              <Image style={styles.image}
                                                     source={{uri: "http://image.tmdb.org/t/p/w342" + rowData.poster_path}}/>
                                          </View>
                                          <View style={{flex: 10, padding: 10}}>
                                              <Text style={styles.title}>{rowData.title} {rowData.release_date}</Text>
                                          </View>
                                          <View style={{flex: 1, justifyContent: 'center'}}>
                                              <Text style={styles.title}>></Text>
                                          </View>
                                      </View>
                                  </TouchableOpacity>
                              )
                          }
                          }
                          renderSeparator={(sectionID, rowID, adjacentRowHighlighted) =>
                              <View key={rowID} style={{height: 1, backgroundColor: 'lightgray'}}/>
                          }
                />
            </View>


        );
    }
}

const styles = StyleSheet.create({
    container: {
        padding: 10,
        paddingTop: 65,
        flex: 1
    },
    row: {
        flexDirection: 'row',
        height: 100
    },
    image: {
        height: 100
    },
    title: {
        fontSize: 20
    },
    input: {
        margin: 15,
        height: 40,
        borderColor: '#7a42f4',
        borderWidth: 1
    },
});
import React, { Component } from 'react';
import {
  View,
  Text,
  StyleSheet,
  FlatList,
  TouchableOpacity
} from 'react-native';
import { List, ListItem } from 'native-base';

export default class Import extends Component {
  static navigationOptions = {
    headerTitle: 'Nama-Nama Buah',
    headerStyle: {
      backgroundColor: 'black'
    },
    headerTitleStyle: { color: 'white' }
  };
  constructor(props) {
    super(props);
    this.state = {
      food: [
        {
          id: '1',
          name: 'Apel',
          desc: 'Buah Apel manis'
        },
        {
          id: '2',
          name: 'Mangga',
          desc: 'Buah Mangga Kecut'
        }
      ]
    };
  }

  Description = item => {
    this.props.navigation.navigate('Detail', {
      itemId: item.id,
      name: item.name,
      desc: item.desc
    });
  };

  render() {
    return (
      <View style={styles.container}>
        <List>
          <FlatList
            data={this.state.food}
            keyExtractor={item => item.id}
            renderItem={({ item }) => (
              <ListItem>
                <TouchableOpacity
                  onPress={() => {
                    this.Description(item);
                  }}>
                  <Text>{item.name}</Text>
                </TouchableOpacity>
              </ListItem>
            )}
          />
        </List>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: '#FAFAFA',
    flex: 1
  },
  logo: {
    flex: 1,
    backgroundColor: 'green',
    margin: 5
  }
});

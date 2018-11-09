import React, { Component } from 'react';
import { View, Text } from 'react-native';

export default class Detail extends Component {
  static navigationOptions = ({ navigation }) => {
    return {
      title: navigation.getParam('name')
    };
  };

  constructor(props) {
    super(props);
    this.state = {};
  }

  render() {
    return (
      <View>
        <Text> {this.props.navigation.state.params.desc} </Text>
      </View>
    );
  }
}

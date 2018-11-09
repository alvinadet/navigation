import React from 'react';
import { StyleSheet, View } from 'react-native';
import { Root } from 'native-base';
import MainScreen from './counter/Router';

export default class App extends React.Component {
  render() {
    return (
      <Root>
        <MainScreen />
      </Root>
    );
  }
}

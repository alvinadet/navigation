import React from 'react';
import { Text, View, StyleSheet, Image } from 'react-native';
import { Root } from 'native-base';

const Logo = props => (
  <Root>
    <View>
      <Image style={styles.image} source={require('../asset/icon.png')} />
    </View>
    <View>
      <Image source={require('../asset/alumnus.png')} />
    </View>
    <View>
      <Text
        style={{
          color: props.warna,
          fontFamily: 'Roboto',
          fontWeight: 'bold',
          fontSize: 10
        }}>
        Track your alumni
      </Text>
    </View>
  </Root>
);

export default Logo;

const styles = StyleSheet.create({
  icon: {
    alignContent: 'center'
  },
  miniFont: {
    color: '#FFFF',
    fontFamily: 'Roboto',
    fontWeight: 'bold',
    fontSize: 10
  }
});

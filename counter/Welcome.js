import React, { Component } from 'react';
import { View, Image, StyleSheet, Text } from 'react-native';
import * as Animatable from 'react-native-animatable';
import { StackActions, NavigationActions } from 'react-navigation';

class componentName extends Component {
  static navigationOptions = {
    header: null
  };
  constructor(props) {
    super(props);
    this.state = {};
  }

  componentWillMount() {
    setTimeout(() => this.goToHome(), 3000);
  }

  goToHome = () => {
    const resetAction = StackActions.reset({
      index: 0,
      actions: [NavigationActions.navigate({ routeName: 'main' })]
    });

    this.props.navigation.dispatch(resetAction);
  };

  handleViewRef = ref => (this.view = ref);

  bounce = () =>
    this.view
      .bounce(1700)
      .then(endState =>
        console.log(endState.finished ? 'bounce finished' : 'bounce cancelled')
      );

  componentDidMount() {
    this.bounce();
  }

  render() {
    return (
      <View style={styles.container}>
        <View style={styles.icon}>
          <Animatable.View ref={this.handleViewRef}>
            <Image style={styles.image} source={require('../asset/icon.png')} />
          </Animatable.View>
        </View>
        <View>
          <Image source={require('../asset/alumnus.png')} />
        </View>
        <View>
          <Text
            style={{
              color: '#FFFF',
              fontFamily: 'Roboto',
              fontWeight: 'bold',
              fontSize: 10
            }}>
            Track your alumni
          </Text>
        </View>
      </View>
    );
  }
}

export default componentName;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#58B6F7',
    alignItems: 'center',
    justifyContent: 'center'
  },
  icon: {
    alignContent: 'center'
  },
  image: {
    width: 75,
    height: 110,
    aspectRatio: 0.6
  }
});

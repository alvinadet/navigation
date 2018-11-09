import {
  createStackNavigator,
  createBottomTabNavigator
} from 'react-navigation';
import { Welcome, Home } from './index';
import Detail from './Detail';

const MainScreen = createStackNavigator({
  Home: { screen: Home },
  Detail: { screen: Detail }
});

const TabNavigator = createStackNavigator({
  splash: {
    screen: Welcome
  },
  main: {
    screen: MainScreen,
    navigationOptions: {
      header: null
    }
  }
});

export default TabNavigator;

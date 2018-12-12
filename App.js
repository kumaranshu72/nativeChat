'use strict'
import React, {Component} from 'react';
import {Platform, StyleSheet, Text, View} from 'react-native';
import { Provider } from 'react-redux';
import store from './store';
import { createStackNavigator } from 'react-navigation';


type Props = {};
export default class App extends Component<Props> {
  render() {
    return (
      <View>
        <Text>Hello World</Text>
      </View>
    );
  }
}

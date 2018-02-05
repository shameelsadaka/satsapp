import React from 'react';
import { StyleSheet, Text, View,StatusBar } from 'react-native';

import Login from './app/components/Login';
import User from './app/components/User';

export default class App extends React.Component {
  render() {
    return (
      <User />
    );
  }
}

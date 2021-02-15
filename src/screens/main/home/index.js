/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow
 */

import React from 'react';
import {View, Text} from 'react-native';
import {Header, ProfileArea} from '../../../component';
import MyTabs from '../../../navigator/tab';
import styles from './style';

const App = () => {
  return (
    <View style={styles.container}>
      <Header />
      <ProfileArea />
      <MyTabs />
    </View>
  );
};

export default App;

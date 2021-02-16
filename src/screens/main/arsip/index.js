/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow
 */

import React from 'react';
import {View, Text, ScrollView} from 'react-native';
import {CardItem} from '../../../component';
import {dummyDataArsip} from '../../../config/constants';

import styles from './style';

const Arsip = (props) => {
  return (
    <View style={styles.container}>
      <ScrollView>
        <View style={styles.itemArea}>
          {dummyDataArsip.map((data, index) => {
            return (
              <CardItem
                onPress={() => props.navigation.navigate('Detail')}
                onPressMenu={() => props.navigation.navigate('ModalMenu')}
                key={index}
                data={data}
              />
            );
          })}
        </View>
      </ScrollView>
    </View>
  );
};

export default Arsip;

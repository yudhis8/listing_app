import React from 'react';
import {Text, View, Image, TouchableOpacity} from 'react-native';
import images from '../../../config/images';
import styles from './style';
import Foundation from 'react-native-vector-icons/Foundation';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
const ModalOption = (props) => {
  return (
    <View style={styles.container}>
      <View style={styles.modalBottom}>
        <TouchableOpacity
          onPress={() => props.navigation.goBack()}
          style={styles.modalItem}>
          <Foundation name="pencil" size={24} color="black" />
          <Text style={styles.text}>Ubah</Text>
        </TouchableOpacity>
        <View style={styles.divider}></View>
        <TouchableOpacity
          onPress={() => props.navigation.goBack()}
          style={styles.modalItem}>
          <Foundation name="trash" size={24} color="black" />
          <Text style={styles.text}>Hapus</Text>
        </TouchableOpacity>
        <View style={styles.divider}></View>
        <TouchableOpacity
          onPress={() => props.navigation.goBack()}
          style={styles.modalItem}>
          <MaterialCommunityIcons name="label" size={16} color="black" />
          <Text style={styles.text}>Tandai Terjual</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};

export default ModalOption;

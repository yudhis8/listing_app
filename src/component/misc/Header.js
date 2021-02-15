import React from 'react';
import {Text, View, StyleSheet} from 'react-native';
import {hp, wp} from '../../helper';
import MaterialIcons from 'react-native-vector-icons/MaterialIcons';
import AntDesign from 'react-native-vector-icons/AntDesign';
const Header = (props) => {
  return (
    <View style={styles.headerArea}>
      <View style={styles.left}>
        <MaterialIcons name="arrow-back" size={24} color="black" />
      </View>
      {props.showMiddle && (
        <>
          <View style={styles.body}>
            <Text>{props.title}</Text>
          </View>
          <View style={styles.right}>
            <AntDesign name="hearto" size={24} color="black" />
          </View>
        </>
      )}
    </View>
  );
};

const styles = StyleSheet.create({
  headerArea: {
    flexDirection: 'row',
    width: wp(100),
    height: hp(7),
    alignItems: 'center',
  },
  left: {
    width: wp(15),
    justifyContent: 'center',
    alignItems: 'center',
  },
  body: {
    width: wp(70),
    justifyContent: 'center',
  },
  right: {
    width: wp(15),
    justifyContent: 'center',
    alignItems: 'center',
  },
});

export default Header;

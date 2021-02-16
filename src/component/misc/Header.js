import React from 'react';
import {Text, View, StyleSheet, TouchableOpacity} from 'react-native';
import {fontSize, hp, wp} from '../../helper';
import MaterialIcons from 'react-native-vector-icons/MaterialIcons';
import AntDesign from 'react-native-vector-icons/AntDesign';
import fonts from '../../config/fonts';
const Header = (props) => {
  return (
    <View style={styles.headerArea}>
      <TouchableOpacity onPress={props.onBackPress} style={styles.left}>
        <MaterialIcons name="arrow-back" size={24} color="black" />
      </TouchableOpacity>
      {props.showMiddle && (
        <>
          <View style={styles.body}>
            <Text style={styles.titleHeader}>{props.title}</Text>
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
  titleHeader: {
    fontFamily: fonts.AVENIR_BOLD,
    fontSize: fontSize(14),
    marginTop: 5,
  },
});

export default Header;

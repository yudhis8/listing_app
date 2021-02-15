import React from 'react';
import {Text, View, StyleSheet, Image} from 'react-native';
import colors from '../../config/colors';
import fonts from '../../config/fonts';
import images from '../../config/images';
import {fontSize, hp, wp} from '../../helper';

const ProfileArea = (props) => {
  return (
    <View style={styles.container}>
      <View style={styles.imageArea}>
        <Image style={styles.image} source={images.profile} />
      </View>
      <Text style={styles.titleBold}>Henry Scott</Text>
      <Text style={styles.title}>Member Broker Century 21 BSD City</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    marginTop: -hp(4),
    width: wp(100),
    height: hp(18),
    alignItems: 'center',
    zIndex: 99,
  },
  imageArea: {
    width: wp(20),
    height: wp(20),
    borderRadius: 50,
    borderColor: colors.activeColor,
    borderWidth: 1,
    justifyContent: 'center',
    alignItems: 'center',
    marginBottom: 9,
  },
  image: {
    width: wp(18),
    height: wp(18),
  },
  titleBold: {
    fontFamily: fonts.AVENIR_BOLD,
    fontSize: fontSize(14),
  },
  title: {
    fontFamily: fonts.AVENIR_REGULAR,
    fontSize: fontSize(12),
    marginTop: 5,
  },
});

export default ProfileArea;

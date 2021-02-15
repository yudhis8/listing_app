import React from 'react';
import {
  Text,
  View,
  StyleSheet,
  Image,
  TouchableOpacity,
  ImageBackground,
} from 'react-native';
import colors from '../../config/colors';
import fonts from '../../config/fonts';
import {wp, hp, fontSize} from '../../helper';
import Entypo from 'react-native-vector-icons/Entypo';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
import images from '../../config/images';

const CardItem = (props) => {
  const labels = props.data.status == 0 ? 'Dijual' : 'Disewa';
  const theColor = props.data.status == 0 ? colors.blue : colors.green;
  return (
    <TouchableOpacity onPress={props.onPress} style={styles.container}>
      <View style={styles.headerArea}>
        <View style={styles.left}>
          <View style={styles.imageArea}>
            <Image style={styles.image} source={props.data.profile} />
          </View>
        </View>
        <View style={styles.body}>
          <Text style={styles.titleBold}>{props.data.name}</Text>
          <Text style={styles.title}>{props.data.from}</Text>
        </View>
        <View style={styles.right}>
          <TouchableOpacity onPress={props.onPressMenu}>
            <Entypo name="dots-three-vertical" size={24} color="black" />
          </TouchableOpacity>
        </View>
      </View>
      <ImageBackground style={styles.banner} source={props.data.image}>
        {props.data.rent ? (
          <View style={styles.statusArea}>
            <Text style={styles.statusInfo}>TERSEWA</Text>
          </View>
        ) : null}
        {props.data.sold ? (
          <View style={styles.statusArea}>
            <Text style={styles.statusInfo}>TERJUAL</Text>
          </View>
        ) : null}
      </ImageBackground>
      <View style={styles.descArea}>
        <Text numberOfLines={1} style={styles.place}>
          {props.data.place}
        </Text>
        <Text style={styles.price}>{props.data.price}</Text>
        <View style={styles.row}>
          <Text style={styles.type}>{props.data.type}</Text>
          <View style={[styles.labelArea, {backgroundColor: theColor}]}>
            <Text style={styles.label}>{labels}</Text>
          </View>
        </View>
        <View style={styles.row}>
          <MaterialCommunityIcons
            name="map-marker-outline"
            size={12}
            color={colors.text}
          />
          <Text style={styles.address}>{props.data.address}</Text>
        </View>
        <View style={styles.divider}></View>
        <View style={styles.row}>
          <View style={styles.itemArea}>
            <View style={styles.row}>
              <Image style={styles.icon} source={images.room}></Image>
              <Text style={styles.textBold}>{props.data.room}</Text>
            </View>
            <Text style={styles.address}>K. Tidur</Text>
          </View>
          <View style={styles.itemArea}>
            <View style={styles.row}>
              <Image style={styles.icon} source={images.bathroom}></Image>
              <Text style={styles.textBold}>{props.data.bathroom}</Text>
            </View>
            <Text style={styles.address}>K. Mandi</Text>
          </View>
          <View style={styles.itemArea}>
            <View style={styles.row}>
              <Image style={styles.icon} source={images.luas}></Image>
              <Text style={styles.textBold}>{props.data.area}</Text>
            </View>
            <Text style={styles.address}>L. Tanah</Text>
          </View>
        </View>
      </View>
    </TouchableOpacity>
  );
};
const styles = StyleSheet.create({
  container: {
    width: wp(90),
    backgroundColor: colors.white,
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.3,
    shadowRadius: 3,
    elevation: 3,
    marginBottom: 20,
    borderRadius: 20,
    paddingBottom: 12,
  },
  row: {
    flexDirection: 'row',
    alignItems: 'center',
    marginTop: 5,
  },
  headerArea: {
    flexDirection: 'row',
    width: '100%',
    height: hp(8),
    alignItems: 'center',
  },
  left: {
    width: '20%',
    justifyContent: 'center',
    alignItems: 'center',
  },
  imageArea: {
    width: wp(12),
    height: wp(12),
    borderRadius: 50,
    borderColor: colors.activeColor,
    borderWidth: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  image: {
    width: wp(11),
    height: wp(11),
  },
  banner: {
    width: '100%',
    height: hp(20),
    justifyContent: 'center',
    alignItems: 'center',
  },
  statusArea: {
    padding: 10,
    paddingHorizontal: 20,
    backgroundColor: colors.whiteTransparent,
    transform: [{rotate: '-10deg'}],
    borderWidth: 3,
    borderColor: colors.activeColor,
    borderStyle: 'dotted',
  },
  statusInfo: {
    fontSize: fontSize(14),
    fontFamily: fonts.AVENIR_REGULAR,
    letterSpacing: 2.66,
    color: colors.activeColor,
  },
  body: {
    width: '70%',
    justifyContent: 'center',
  },
  titleBold: {
    fontFamily: fonts.AVENIR_BOLD,
    fontSize: fontSize(14),
  },
  title: {
    fontFamily: fonts.AVENIR_REGULAR,
    fontSize: fontSize(10),
    marginTop: 5,
  },
  right: {
    width: '10%',
    justifyContent: 'center',
    alignItems: 'center',
  },
  divider: {
    borderBottomColor: colors.text,
    borderBottomWidth: 0.3,
    paddingBottom: 10,
  },
  descArea: {
    width: '95%',
    alignSelf: 'center',
  },
  place: {
    fontFamily: fonts.AVENIR_REGULAR,
    fontSize: fontSize(14),
    color: colors.black,
    marginVertical: 5,
    width: '63%',
  },
  price: {
    fontFamily: fonts.AVENIR_BOLD,
    fontSize: fontSize(20),
  },
  type: {
    fontFamily: fonts.AVENIR_REGULAR,
    fontSize: fontSize(14),
    color: colors.black,
  },
  labelArea: {
    justifyContent: 'center',
    alignItems: 'center',
    padding: 3,
    backgroundColor: colors.blue,
    marginLeft: 10,
    borderRadius: 2,
    paddingHorizontal: 10,
  },
  label: {
    fontFamily: fonts.AVENIR_BOLD,
    fontSize: fontSize(10),
    color: colors.white,
  },
  address: {
    fontFamily: fonts.AVENIR_REGULAR,
    fontSize: fontSize(10),
    color: colors.text,
  },
  itemArea: {
    padding: 5,
    width: '33%',
  },
  icon: {
    width: wp(7),
    height: wp(7),
    resizeMode: 'stretch',
    marginRight: wp(6),
    marginBottom: 5,
  },
  textBold: {
    fontFamily: fonts.AVENIR_BOLD,
    fontSize: fontSize(16),
  },
});

export default CardItem;

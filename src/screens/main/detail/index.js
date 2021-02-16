import React from 'react';
import {
  Text,
  View,
  ImageBackground,
  Image,
  ScrollView,
  TouchableOpacity,
} from 'react-native';
import {Header} from '../../../component';
import images from '../../../config/images';
import styles from './style';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
import FontAwesome from 'react-native-vector-icons/FontAwesome';
import colors from '../../../config/colors';
import TabDetail from '../../../navigator/tabDetail';
const Detail = ({params}) => {
  return (
    <View style={styles.container}>
      <Header showMiddle={true} title={'Detail Listing #80889'} />
      <ScrollView>
        <ImageBackground style={styles.imageArea} source={images.detail}>
          <View style={styles.countArea}>
            <Text style={styles.textCount}>1/5</Text>
          </View>
        </ImageBackground>
        <View style={styles.titleArea}>
          <Text style={styles.place}>Nava Park BSD City</Text>
          <Text style={styles.price}>Rp. 6.500.000.000</Text>
          <View style={styles.divider}></View>
          <View
            style={[
              styles.row,
              {width: '100%', justifyContent: 'space-between'},
            ]}>
            <View>
              <Text style={styles.type}>Rumah untuk Dijual</Text>
              <View style={styles.row}>
                <MaterialCommunityIcons
                  name="map-marker-outline"
                  size={12}
                  color={colors.text}
                />
                <Text style={styles.address}>
                  Jl. Edutown Kav III.1, BSD, Tangerang Selatan
                </Text>
              </View>
            </View>
            <Image style={styles.image} source={images.marker}></Image>
          </View>
        </View>
        <View style={styles.bodyArea}>
          <TabDetail />
        </View>

        <View style={styles.bottomArea}>
          <View style={styles.row}>
            <Image style={styles.icon} source={images.lock} />
            <Text style={styles.textRegular}>Catatan Internal</Text>
          </View>
          <Text style={styles.warningText}>
            Hanya akan dilihat oleh Marketing satu perusahaan.
          </Text>
          <Text style={styles.place}>
            Alamat Details: {'\n'}NavaPark Cluster Moonlight Blok 38D No. 55
          </Text>
        </View>

        <View style={[styles.bottomArea, {marginBottom: 80}]}>
          <View style={styles.row}>
            <Image style={styles.icon} source={images.lock} />
            <Text style={styles.textRegular}>Owner Properti</Text>
          </View>
          <Text style={styles.warningText}>
            Hanya anda yang dapat melihat informasi ini.
          </Text>
          <Text style={styles.place}>
            Nama: <Text style={{fontWeight: 'bold'}}>Jois Apprilio</Text>
          </Text>
          <Text style={styles.place}>
            No. HP: <Text style={{fontWeight: 'bold'}}>0813888099999</Text>
          </Text>
          <View
            style={[
              styles.row,
              {
                width: '100%',
                justifyContent: 'space-around',
                marginTop: 15,
              },
            ]}>
            <TouchableOpacity style={styles.button}>
              <Image style={styles.icon} source={images.call}></Image>
              <Text style={styles.type}>Telepon</Text>
            </TouchableOpacity>
            <TouchableOpacity style={styles.button}>
              <Image style={styles.icon} source={images.wa}></Image>
              <Text style={styles.type}>WhatsApp</Text>
            </TouchableOpacity>
          </View>
        </View>
      </ScrollView>
      <View style={styles.flyArea}>
        <TouchableOpacity style={styles.buttonFly}>
          <FontAwesome name="share-square-o" size={20} color={colors.white} />
          <Text style={styles.textButton}>Promosikan</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};

export default Detail;

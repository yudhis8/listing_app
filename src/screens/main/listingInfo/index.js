import React from 'react';
import {Image, View, Text} from 'react-native';
import {dummyListingInfo} from '../../../config/constants';
import images from '../../../config/images';
import styles from './style';
const Item = ({data}) => {
  return (
    <View style={styles.item}>
      <View style={styles.imageArea}>
        <Image style={styles.image} source={data.image}></Image>
      </View>
      <View>
        <Text style={styles.title}>{data.name}</Text>
        <Text style={styles.value}>{data.value}</Text>
      </View>
    </View>
  );
};
const ListingInfo = ({params}) => {
  return (
    <View style={styles.container}>
      <View style={styles.itemArea}>
        {dummyListingInfo.map((data, index) => {
          return <Item key={index} data={data} />;
        })}
      </View>
      <View style={styles.divider}></View>
      <View style={styles.row}>
        <Image style={styles.icon} source={images.sertifikat} />
        <Text style={styles.textRegular}>Sertifikat Hak Milik</Text>
      </View>
      <View style={styles.divider}></View>
      <View style={styles.row}>
        <Image style={styles.icon} source={images.time} />
        <Text style={styles.textRegular}>Diposting pada: 24-Dec-2019</Text>
      </View>
    </View>
  );
};

export default ListingInfo;

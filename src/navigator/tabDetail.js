import React from 'react';
import {createMaterialTopTabNavigator} from '@react-navigation/material-top-tabs';
import {ListingInfo} from '../navigator';
import colors from '../config/colors';
import fonts from '../config/fonts';
import {fontSize} from '../helper';
const Tab = createMaterialTopTabNavigator();

function TabDetail() {
  return (
    <Tab.Navigator
      tabBarOptions={{
        inactiveTintColor: colors.black,
        activeTintColor: colors.activeColor,
        indicatorStyle: {
          backgroundColor: colors.activeColor,
        },
        labelStyle: {
          fontFamily: fonts.AVENIR_DEMI,
          fontSize: fontSize(14),
          textTransform: 'none',
        },
      }}>
      <Tab.Screen name="Listing Info" component={ListingInfo} />
      <Tab.Screen name="Deskripsi" component={ListingInfo} />
    </Tab.Navigator>
  );
}

export default TabDetail;

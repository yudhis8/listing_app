import React from 'react';
import {createMaterialTopTabNavigator} from '@react-navigation/material-top-tabs';
import {Listing, Favorite, Arsip} from '../navigator';
import colors from '../config/colors';
import fonts from '../config/fonts';
import {fontSize} from '../helper';
const Tab = createMaterialTopTabNavigator();

function MyTabs() {
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
      <Tab.Screen name="Listing" component={Listing} />
      <Tab.Screen name="Favorite" component={Favorite} />
      <Tab.Screen name="Arsip" component={Arsip} />
    </Tab.Navigator>
  );
}

export default MyTabs;

/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow
 */

import React, {useEffect} from 'react';
import {View, Text} from 'react-native';
import {Header, ProfileArea} from '../../../component';
import MyTabs from '../../../navigator/tab';
import styles from './style';
import messaging from '@react-native-firebase/messaging';
import {useDispatch} from 'react-redux';
import {
  notifications,
  NotificationMessage,
  Android,
} from 'react-native-firebase-push-notifications';
import {setToken} from './../../../store/auth/action';
const App = () => {
  const dispatch = useDispatch();
  useEffect(() => {
    registerDevice();
    const unsubscribe = messaging().onMessage(async (remoteMessage) => {
      console.log('A new FCM message arrived!', JSON.stringify(remoteMessage));
      onDisplayNotification(remoteMessage);
    });

    return unsubscribe;
  }, []);

  async function onDisplayNotification(props) {
    console.log(
      '🚀 ~ file: index.js ~ line 55 ~ onDisplayNotification ~ props',
      props,
    );
    const channel = new Android.Channel(
      'upload-channel',
      'Upload Channel',
      Android.Importance.Max,
    ).setDescription('My apps upload channel');

    // for android create the channel
    notifications.android().createChannel(channel);
    await notifications.displayNotification(
      new NotificationMessage()
        .setNotificationId(props.messageId)
        .setTitle(props.data.title)
        .setBody(props.data.body)
        .android.setChannelId('upload-channel'), //required for android
    );
  }

  const registerDevice = async () => {
    // Register the device with FCM
    await messaging().registerDeviceForRemoteMessages();

    // Get the token
    const token = await messaging().getToken();
    console.log(
      '🚀 ~ file: index.js ~ line 78 ~ registerDevice ~ token',
      token,
    );
    dispatch(setToken(token));
  };
  return (
    <View style={styles.container}>
      <Header />
      <ProfileArea />
      <MyTabs />
    </View>
  );
};

export default App;

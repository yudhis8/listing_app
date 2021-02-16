import * as React from 'react';

import {NavigationContainer} from '@react-navigation/native';
import {createStackNavigator} from '@react-navigation/stack';

import {Provider} from 'react-redux';

import {store} from './src/store';
import {Home, Detail, ModalOption} from './src/navigator';
const Stack = createStackNavigator();
const RootStack = createStackNavigator();

function App() {
  return (
    <Stack.Navigator headerMode={'none'}>
      <Stack.Screen name="Home" component={Home} />
      <Stack.Screen name="Detail" component={Detail} />
    </Stack.Navigator>
  );
}

function RootStackScreen() {
  const modalOptions = {
    headerShown: false,
    cardStyle: {backgroundColor: 'transparent'},
    cardOverlayEnabled: true,
    cardStyleInterpolator: ({current: {progress}}) => ({
      overlayStyle: {
        opacity: progress.interpolate({
          inputRange: [0, 1],
          outputRange: [0, 0.6],
          extrapolate: 'clamp',
        }),
      },
    }),
  };

  return (
    <Provider store={store}>
      <NavigationContainer>
        <RootStack.Navigator mode="modal" headerMode={'none'}>
          <RootStack.Screen
            name="Main"
            component={App}
            options={{headerShown: false}}
          />
          <RootStack.Screen
            name="ModalMenu"
            options={modalOptions}
            component={ModalOption}
          />
        </RootStack.Navigator>
      </NavigationContainer>
    </Provider>
  );
}

export default RootStackScreen;

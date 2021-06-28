import 'react-native-gesture-handler';
import * as React from 'react';
import {
  ImageBackground,
  StyleSheet,
  FlatList,
  Linking,
  Text,
  Button,
  TouchableOpacity,
  View,
  Image,
} from 'react-native';

import {NavigationContainer} from '@react-navigation/native';
import {createStackNavigator} from '@react-navigation/stack';
import {createDrawerNavigator} from '@react-navigation/drawer';

import MockTestScreen from '../screens/MockTestScreen';
import DailyTestSeries from '../screens/DailyTestSeries';
import Question_1 from '../screens/Question_1';
import Question_2 from '../screens/Question_2';
import CustomDrawer from '../screens/CustomDrawer';

const DrawerQ1 = createDrawerNavigator();
const DrawerQ2 = createDrawerNavigator();
const Stack = createStackNavigator();

const DefaultDrawerQ1 = props => (
  <DrawerQ1.Navigator
    openByDefault={false}
    drawerPosition="right"
    drawerContentOptions={{
      activeTintColor: '#fff',
      itemStyle: {marginVertical: 5},
    }}
    drawerContent={(props, navigation) => (
      <CustomDrawer {...props} {...navigation} />
    )}>
    <DrawerQ1.Screen
      name="Question_1"
      component={Question_1}
      drawerContent={(props, navigation) => (
        <CustomDrawer {...props} {...navigation} />
      )}
    />
  </DrawerQ1.Navigator>
);

const DefaultDrawerQ2 = props => (
  <DrawerQ2.Navigator
    openByDefault={false}
    drawerPosition="right"
    drawerContentOptions={{
      activeTintColor: '#fff',
      itemStyle: {marginVertical: 5},
    }}
    drawerContent={(props, navigation) => (
      <CustomDrawer {...props} {...navigation} />
    )}>
    <DrawerQ2.Screen
      name="Question_2"
      component={Question_2}
      drawerContent={(props, navigation) => (
        <CustomDrawer {...props} {...navigation} />
      )}
    />
  </DrawerQ2.Navigator>
);

const AppNavigator = props => {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen
          name="MockTestScreen"
          component={MockTestScreen}
          options={{
            headerShown: false,
          }}
        />

        <Stack.Screen
          name="DailyTestSeries"
          component={DailyTestSeries}
          options={{
            title: 'Daily Test Series',
            headerTitleStyle: {
              fontWeight: 'bold',
              // alignSelf:'center',
              color: '#000',
              fontSize: 18,
            },
          }}
        />

        <Stack.Screen
          name="Question_1"
          component={DefaultDrawerQ1}
          options={{
            title: 'Question 1',
            headerTitleStyle: {
              fontWeight: 'bold',
              alignSelf: 'center',
              color: '#000',
            },
          }}
        />

        <Stack.Screen
          name="Question_2"
          component={DefaultDrawerQ2}
          options={{
            title: 'Question 2',
            headerTitleStyle: {
              fontWeight: 'bold',
              alignSelf: 'center',
              color: '#000',
            },
          }}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default AppNavigator;

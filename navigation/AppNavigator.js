import 'react-native-gesture-handler';
import * as React from 'react';
import { ImageBackground, StyleSheet,FlatList,Linking, Text,Button, TouchableOpacity, View ,Image} from "react-native";

import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import { createDrawerNavigator } from '@react-navigation/drawer';

import Question_1 from '../screens/Question_1';
import CustomDrawer from '../screens/CustomDrawer';

const Drawer = createDrawerNavigator();
const Stack = createStackNavigator();

const DefaultDrawer = (props) => (
  
    <Drawer.Navigator
        openByDefault={false}
        drawerContentOptions={{
        activeTintColor: '#fff',
        itemStyle: {marginVertical: 5},
      }}
       drawerContent={(props) => <CustomDrawer {...props} />}>
       
        <Drawer.Screen
         name="Question_1"
         component={Question_1}
        />
      </Drawer.Navigator>
  );

//   const NavigationDrawerStructure = (props)=> {
//     //Structure for the navigatin Drawer
//     const toggleDrawer = () => {
//       //Props to open/close the drawer
//       props.navigationProps.toggleDrawer();
//     };
  
//     return (
//       <View style={{ flexDirection: 'row' }}>
//         <TouchableOpacity onPress={()=> toggleDrawer()}>
//           {/*Donute Button Image */}
//           <Image
//             source={{uri: 'https://raw.githubusercontent.com/AboutReact/sampleresource/master/drawerWhite.png'}}
//             style={{
//               width: 25,
//               height: 25,
//               marginLeft: 5
//             }}
//           />
//         </TouchableOpacity>
//       </View>
//     );
//   }

const  AppNavigator = (props) => {
    return (
        <NavigationContainer>
            <Stack.Navigator > 
                
                 <Stack.Screen
                    name="Question_1"
                    component={DefaultDrawer}
                    options={{
                        title:"Question 1",
                        // headerLeft: ()=>
                        // <NavigationDrawerStructure
                        //     navigationProps={navigation}
                        // />,
                        // headerStyle: {
                        // backgroundColor: '#f4511e', //Set Header color
                        // },
                        // headerTintColor: '#fff', //Set Header text color
                        headerTitleStyle: {
                        fontWeight: 'bold', 
                        alignSelf:'center',
                        color:'#f4511e'
                        },
                        
                    }}
                />

            </Stack.Navigator>
        </NavigationContainer>
    )
};

export default AppNavigator;

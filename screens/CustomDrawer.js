
import React,{useState} from 'react';
import {View, StyleSheet,ImageBackground,Image,Dimensions, TouchableOpacity,StatusBar,Alert} from 'react-native';
import { DrawerContentScrollView,} from '@react-navigation/drawer';

import {
  widthPercentageToDP as wp,
  heightPercentageToDP as hp,
  widthPercentageToFonts as wf,
  heightPercentageToFonts as hf,
  widthPercentageToDP,
} from "react-native-responsive-screen-font";
import {
     Container,
     Header,
     Title,
     Content,
     Footer,
     FooterTab,
     Text,
     Icon,
     ListItem,
     Separator,Left, Right,Body, 
   } from "native-base";
   
   
   
   import {menuStyles} from '../App/AppNavigation/style';
   import {HeaderStyle} from '../App//AppNavigation/HeaderStyles';
import Util from '../App/Common/util';
import helper from '../App/Common/helper';
const windowWidth = Dimensions.get('window').width;
const windowHeight = Dimensions.get('window').height;

const CustomSidebarMenu = (props) => {
  const   logout = () => {
          Alert.alert(
            'Confirmation',
            'Are you sure you want to logout ?',
            [
                {
                    text: 'Yes', onPress: () => {
                        helper.clear_Async();
                       props.navigation.navigate('Login')
                    }
                },
                {
                    text: 'Cancel',
                    onPress: () => console.log('Cancel Pressed'),
                    style: 'cancel',
                },
            ],
            { cancelable: false },
        );
        };
return (
  
<View style={{flex:1}}>

  <DrawerContentScrollView {...props}  style={{}}>

    
         
  <Header style={menuStyles.header}>
              <View style={{backgroundColor:'white', width:70, height:70, borderRadius:50}}>
                <Image source={""} style={{width:70, height:70, borderRadius:50}}/>
              </View>
              <Body style={HeaderStyle.Body}>
              <Text style={[HeaderStyle.text,{fontSize: Util.normalize(11)}]}>{"NEXTMCQ"}</Text>
                {/* <Text style={HeaderStyle.text}> MAKE  MY  HOUSE</Text>*/}
                </Body> 
              {/* <Right style={HeaderStyle.Right}> */}
              {/* <Image source={menuButton} style={{ height: 30, width: 30, marginTop: -2, marginLeft: 0, alignSelf: 'flex-end' }} /> */}
              {/* </Right> */}
        </Header>
        <Content>
          {/* <Separator bordered>
            <Text style={{ fontSize: width * 0.03, fontFamily: "Roboto" }}>
             All Category
            </Text>
          </Separator> */}  
          <ListItem >
          <Icon name='home' type='AntDesign' style={{fontSize: 22}}/>
            <Text style={menuStyles.headText}>
             HOME
            </Text>
          </ListItem>
          <ListItem >
          <Icon name='user' type='AntDesign' style={{fontSize: 22}}/>
         <Text style={menuStyles.headText}>
          PROFILE
         </Text>
       </ListItem>
          <ListItem >
          <Icon name='edit' type='AntDesign' style={{fontSize: 22}}/>
            <Text style={menuStyles.headText}>
             TEST
            </Text>
          </ListItem>
          <ListItem >
          <Icon name='book' type='AntDesign' style={{fontSize: 22}}/>
            <Text style={menuStyles.headText}>
             PREPARE
            </Text>
          </ListItem>
          {/* <ListItem onPress={() => this.designs()}>
          <Image source={require('../../Assets/floorPlan.png')} style={{height:25, width:25}}/>
            <Text style={menuStyles.headText}>
             DESIGNS
            </Text>
          </ListItem>      */}
          <ListItem last onPress={() => logout()}>
          <Icon name='logout' type='AntDesign' style={{fontSize: 22}}/>
            <Text style={menuStyles.headText}>
              LOGOUT
            </Text>
          </ListItem>
        
        </Content>
        <Footer style={{marginTop:widthPercentageToDP(90),backgroundColor:'white'}}>
          
          <FooterTab style={{ backgroundColor:'white' }} />
          <Image source={require('../App/Assets/nextmcq.png')} resizeMode='contain' style={{width:'100%',height:'100%', alignSelf:'center', bottom:10, position:'absolute'}}/>
        </Footer>
    
      
</DrawerContentScrollView>
</View>
     
);
};
const styles = StyleSheet.create({

customItem: {
  flexDirection: 'row',
  justifyContent:'space-around',
  marginVertical:10,
  marginHorizontal:10,
  padding:10,
},
Profile_image:
{
  height: hp("12%"), // 70% of height device screen
  width: wp("23%"), 
  borderRadius: 50,
  overflow: 'hidden'
},
contentstyle:
{
  fontSize: wf("5%"),
},
  text_Card:
{
  width:'50%',  
},
drink_water_title:
{
color:'#fff',
fontSize:15,
textAlign:'center',
width:100,
},
drink_water1:
{
color:'#fff',
fontSize: wf("5%"),
textAlign:'center', 
},
Top_Card:
{
borderBottomRightRadius:10,
borderBottomLeftRadius:10,
padding:5,
},
profile_Name:
{
color:'#fff',
fontSize: wf("5%"),
},
icon_card:
{
  width:20,
  height:20,
  alignItems:'center',
  justifyContent:'center',
},

  profileContainer:{
    flexDirection:'row',
    margin:'5%'
 },

    profileRow:{
        height: 130, 
        //width: Math.round((windowWidth)/2.3), 
        borderRadius: 50, 
        justifyContent:'center',
        alignItems:'center',
        }
});

export default CustomSidebarMenu;

import React, {useState, useEffect} from 'react';
import {  StyleSheet, Text, TouchableOpacity, View } from "react-native";
import { Icon } from 'native-base';

export default function MockTestScreen({route,navigation}) {

return (

<View style={styles.container}>

  <View style={{alignSelf:'flex-end'}}>
    <Icon name="at-sharp" style={{color:'#000'}}/>
  </View>  

  <View style={{padding:10}}>
      <Text style={{fontSize:20,color:'#000',fontWeight:'bold'}}>
          INICET 2021 Mock Test
      </Text>
      <Text style={{color:'#000',fontSize:15,fontWeight:'bold'}}>200 quetions</Text>
      <Text style={{color:'#000',fontSize:15,fontWeight:'bold'}}>180 minutes</Text>
      
      <Text style={{fontSize:20,color:'#000',fontWeight:'bold'}}>
          Instructions:
      </Text>
     
      <View style={styles.intructions_view}>
        <Text style={{color:'#000',fontSize:15,}}>1. In layman's terms, Lorem Ipsum is a dummy or placeholder text. It's often used in laying out print, infographics, or web design.</Text>
        <Text style={{color:'#000',fontSize:15,}}>2. In layman's terms, Lorem Ipsum is a dummy or placeholder text. </Text>
      </View>
      
  </View>

    <View style={{flex:1,justifyContent:"flex-end",alignSelf:'center'}}>
      <TouchableOpacity onPress= {() => navigation.navigate('DailyTestSeries')}>
        <View style={{backgroundColor:'green',marginVertical:5,width:170,height:40,
            borderRadius:3,padding:8,shadowOpacity: 1,shadowColor:'#000',elevation: 4}}>
                <Text style={{color:'white',fontSize:18,textAlign:'center'}}>START TEST</Text>
        </View>
        </TouchableOpacity>
    </View>

</View>
    );

}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: "column"
  },
  intructions_view:{
    
  },

});

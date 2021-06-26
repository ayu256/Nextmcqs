import React, {useState, useEffect} from 'react';
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
import {ScrollView} from 'react-native-gesture-handler';
import {Card} from 'react-native-shadow-cards';
import Axios from 'axios';
import {CheckBox} from 'react-native-elements';

export default function Question_1({route, navigation}) {
  const [checked, setChecked] = useState();

  return (
    <View style={styles.container}>
      <Text style={{fontSize: 15, color: '#000', padding: 10}}>
        Lorem ipsum, or lipsum as it is sometimes known, is dummy text used in
        laying out print, graphic or web designs.{' '}
      </Text>
      <View style={{padding: 10}}>
        <Image
          style={styles.tinyLogo}
          source={require('../assets/bgimage.jpg')}
        />
        <CheckBox
          style={{backgroundColor: 'grey'}}
          title="Acute mylegeonous leukemia"
          checkedIcon=""
          uncheckedIcon=""
          checked={checked}
          onPress={() => setChecked(!checked)}
        />
        <CheckBox
          style={{backgroundColor: 'grey'}}
          title="Acute mylegeonous leukemia"
          checkedIcon=""
          uncheckedIcon=""
          checked={checked}
          onPress={() => setChecked(!checked)}
        />
        <CheckBox
          style={{backgroundColor: 'grey'}}
          title="Click Here"
          checkedIcon=""
          uncheckedIcon=""
          checked={checked}
          onPress={() => setChecked(!checked)}
        />
        <CheckBox
          style={{backgroundColor: 'grey'}}
          title="Click Here"
          checkedIcon=""
          uncheckedIcon=""
          checked={checked}
          onPress={() => setChecked(!checked)}
        />
      </View>

      <View style={{flex: 1, justifyContent: 'flex-end', alignSelf: 'center'}}>
        <TouchableOpacity onPress={() => navigation.navigate('Question_2')}>
          <View
            style={{
              backgroundColor: 'green',
              marginVertical: 5,
              width: 150,
              height: 40,
              borderRadius: 3,
              padding: 8,
              shadowOpacity: 1,
              shadowColor: '#000',
              elevation: 4,
            }}>
            <Text style={{color: 'white', fontSize: 18, textAlign: 'center'}}>
              Skip
            </Text>
          </View>
        </TouchableOpacity>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: 'column',
  },
  item: {
    padding: 10,
    fontSize: 18,
    height: 44,
  },
  tinyLogo: {
    width: '100%',
    height: '40%',
  },
});

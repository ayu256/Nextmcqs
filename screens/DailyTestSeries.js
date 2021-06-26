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

export default function DailyTestSeries({route, navigation}) {
  return (
    <View style={styles.container}>
      <ScrollView>
        <View style={styles.series_view}>
          <View
            style={{
              backgroundColor: '#e6d9ec',
              marginVertical: 5,
              width: 50,
              borderRadius: 5,
              padding: 5,
              shadowOpacity: 1,
              shadowColor: '#000',
              elevation: 4,
              left: 10,
            }}>
            <TouchableOpacity>
              <Text
                style={{
                  color: '#5b0dad',
                  fontFamily: 'Poppins-Bold',
                  fontSize: 14,
                  textAlign: 'center',
                }}>
                Now 07 jun
              </Text>
            </TouchableOpacity>
          </View>

          <View>
            <Text style={{color: '#000', fontSize: 14, fontWeight: 'bold'}}>
              INICET 2021 MOCK TEST
            </Text>
            <Text style={{color: 'grey', fontSize: 12}}>200 Qs,180 mins</Text>
          </View>

          <View style={styles.start_button_view}>
            <TouchableOpacity onPress={() => navigation.navigate('Question_1')}>
              <View
                style={{
                  backgroundColor: '#5b0dad',
                  marginVertical: 5,
                  width: 70,
                  height: 30,
                  borderRadius: 3,
                  padding: 5,
                  shadowOpacity: 1,
                  shadowColor: '#000',
                  elevation: 4,
                }}>
                <Text
                  style={{
                    color: 'pink',
                    fontFamily: 'Poppins-Bold',
                    fontSize: 14,
                    textAlign: 'center',
                  }}>
                  START
                </Text>
              </View>
            </TouchableOpacity>
            <Text style={{color: 'grey', fontSize: 12}}>Ends in:1 day</Text>
          </View>
        </View>

        <View
          style={{
            borderBottomColor: 'grey',
            borderBottomWidth: 1,
          }}
        />

        <View style={styles.series_view}>
          <View
            style={{
              backgroundColor: '#e6d9ec',
              marginVertical: 5,
              width: 50,
              borderRadius: 5,
              padding: 5,
              shadowOpacity: 1,
              shadowColor: '#000',
              elevation: 4,
              left: 10,
            }}>
            <TouchableOpacity>
              <Text
                style={{
                  color: '#5b0dad',
                  fontFamily: 'Poppins-Bold',
                  fontSize: 14,
                  textAlign: 'center',
                }}>
                Now 07 jun
              </Text>
            </TouchableOpacity>
          </View>

          <View>
            <Text style={{color: '#000', fontSize: 14, fontWeight: 'bold'}}>
              INICET 2021 MOCK TEST
            </Text>
            <Text style={{color: 'grey', fontSize: 12}}>200 Qs,180 mins</Text>
          </View>

          <View style={styles.start_button_view}>
            <View
              style={{
                backgroundColor: '#5b0dad',
                marginVertical: 5,
                width: 70,
                height: 30,
                borderRadius: 3,
                padding: 5,
                shadowOpacity: 1,
                shadowColor: '#000',
                elevation: 4,
              }}>
              <TouchableOpacity>
                <Text
                  style={{
                    color: 'pink',
                    fontFamily: 'Poppins-Bold',
                    fontSize: 14,
                    textAlign: 'center',
                  }}>
                  START
                </Text>
              </TouchableOpacity>
            </View>
            <Text style={{color: 'grey', fontSize: 12}}>Ends in:1 day</Text>
          </View>
        </View>

        <View
          style={{
            borderBottomColor: 'grey',
            borderBottomWidth: 1,
          }}
        />

        <View style={styles.series_view}>
          <View
            style={{
              backgroundColor: '#e6d9ec',
              marginVertical: 5,
              width: 50,
              borderRadius: 5,
              padding: 5,
              shadowOpacity: 1,
              shadowColor: '#000',
              elevation: 4,
              left: 10,
            }}>
            <TouchableOpacity>
              <Text
                style={{
                  color: '#5b0dad',
                  fontFamily: 'Poppins-Bold',
                  fontSize: 14,
                  textAlign: 'center',
                }}>
                Now 07 jun
              </Text>
            </TouchableOpacity>
          </View>

          <View>
            <Text style={{color: '#000', fontSize: 14, fontWeight: 'bold'}}>
              INICET 2021 MOCK TEST
            </Text>
            <Text style={{color: 'grey', fontSize: 12}}>200 Qs,180 mins</Text>
          </View>

          <View style={styles.start_button_view}>
            <View
              style={{
                backgroundColor: '#5b0dad',
                marginVertical: 5,
                width: 70,
                height: 30,
                borderRadius: 3,
                padding: 5,
                shadowOpacity: 1,
                shadowColor: '#000',
                elevation: 4,
              }}>
              <TouchableOpacity>
                <Text
                  style={{
                    color: 'pink',
                    fontFamily: 'Poppins-Bold',
                    fontSize: 14,
                    textAlign: 'center',
                  }}>
                  START
                </Text>
              </TouchableOpacity>
            </View>
            <Text style={{color: 'grey', fontSize: 12}}>Ends in:1 day</Text>
          </View>
        </View>

        <View
          style={{
            borderBottomColor: 'grey',
            borderBottomWidth: 1,
          }}
        />

        <View style={styles.series_view}>
          <View
            style={{
              backgroundColor: '#e6d9ec',
              marginVertical: 5,
              width: 50,
              borderRadius: 5,
              padding: 5,
              shadowOpacity: 1,
              shadowColor: '#000',
              elevation: 4,
              left: 10,
            }}>
            <TouchableOpacity>
              <Text
                style={{
                  color: '#5b0dad',
                  fontFamily: 'Poppins-Bold',
                  fontSize: 14,
                  textAlign: 'center',
                }}>
                Now 07 jun
              </Text>
            </TouchableOpacity>
          </View>

          <View>
            <Text style={{color: '#000', fontSize: 14, fontWeight: 'bold'}}>
              INICET 2021 MOCK TEST
            </Text>
            <Text style={{color: 'grey', fontSize: 12}}>200 Qs,180 mins</Text>
          </View>

          <View style={styles.start_button_view}>
            {/* <View style={{backgroundColor:'#5b0dad',marginVertical:5,width:70,height:30,
                    borderRadius:3,padding:5,shadowOpacity: 1,
                    shadowColor:'#000', 
                    elevation: 4}}>
                    <TouchableOpacity>
                        <Text style={{color:'pink',fontFamily:'Poppins-Bold',fontSize:14,textAlign:'center'}}>START</Text>
                    </TouchableOpacity>
                </View> */}
            <Text style={{color: 'grey', fontSize: 12}}>Runs in:1 day</Text>
          </View>
        </View>

        <View
          style={{
            borderBottomColor: 'grey',
            borderBottomWidth: 1,
          }}
        />

        <View style={styles.series_view}>
          <View
            style={{
              backgroundColor: '#e6d9ec',
              marginVertical: 5,
              width: 50,
              borderRadius: 5,
              padding: 5,
              shadowOpacity: 1,
              shadowColor: '#000',
              elevation: 4,
              left: 10,
            }}>
            <TouchableOpacity>
              <Text
                style={{
                  color: '#5b0dad',
                  fontFamily: 'Poppins-Bold',
                  fontSize: 14,
                  textAlign: 'center',
                }}>
                Now 07 jun
              </Text>
            </TouchableOpacity>
          </View>

          <View>
            <Text style={{color: '#000', fontSize: 14, fontWeight: 'bold'}}>
              INICET 2021 MOCK TEST
            </Text>
            <Text style={{color: 'grey', fontSize: 12}}>200 Qs,180 mins</Text>
          </View>

          <View style={styles.start_button_view}>
            {/* <View style={{backgroundColor:'#5b0dad',marginVertical:5,width:70,height:30,
                    borderRadius:3,padding:5,shadowOpacity: 1,
                    shadowColor:'#000', 
                    elevation: 4}}>
                    <TouchableOpacity>
                        <Text style={{color:'pink',fontFamily:'Poppins-Bold',fontSize:14,textAlign:'center'}}>START</Text>
                    </TouchableOpacity>
                </View> */}
            <Text style={{color: 'grey', fontSize: 12}}>Runs in:1 day</Text>
          </View>
        </View>

        <View
          style={{
            borderBottomColor: 'grey',
            borderBottomWidth: 1,
          }}
        />

        <View style={styles.series_view}>
          <View
            style={{
              backgroundColor: '#e6d9ec',
              marginVertical: 5,
              width: 50,
              borderRadius: 5,
              padding: 5,
              shadowOpacity: 1,
              shadowColor: '#000',
              elevation: 4,
              left: 10,
            }}>
            <TouchableOpacity>
              <Text
                style={{
                  color: '#5b0dad',
                  fontFamily: 'Poppins-Bold',
                  fontSize: 14,
                  textAlign: 'center',
                }}>
                Now 07 jun
              </Text>
            </TouchableOpacity>
          </View>

          <View>
            <Text style={{color: '#000', fontSize: 14, fontWeight: 'bold'}}>
              INICET 2021 MOCK TEST
            </Text>
            <Text style={{color: 'grey', fontSize: 12}}>200 Qs,180 mins</Text>
          </View>

          <View style={styles.start_button_view}>
            {/* <View style={{backgroundColor:'#5b0dad',marginVertical:5,width:70,height:30,
                    borderRadius:3,padding:5,shadowOpacity: 1,
                    shadowColor:'#000', 
                    elevation: 4}}>
                    <TouchableOpacity>
                        <Text style={{color:'pink',fontFamily:'Poppins-Bold',fontSize:14,textAlign:'center'}}>START</Text>
                    </TouchableOpacity>
                </View> */}
            <Text style={{color: 'grey', fontSize: 12}}>Runs in:1 day</Text>
          </View>
        </View>

        <View
          style={{
            borderBottomColor: 'grey',
            borderBottomWidth: 1,
          }}
        />

        <View style={styles.series_view}>
          <View
            style={{
              backgroundColor: '#e6d9ec',
              marginVertical: 5,
              width: 50,
              borderRadius: 5,
              padding: 5,
              shadowOpacity: 1,
              shadowColor: '#000',
              elevation: 4,
              left: 10,
            }}>
            <TouchableOpacity>
              <Text
                style={{
                  color: '#5b0dad',
                  fontFamily: 'Poppins-Bold',
                  fontSize: 14,
                  textAlign: 'center',
                }}>
                Now 07 jun
              </Text>
            </TouchableOpacity>
          </View>

          <View>
            <Text style={{color: '#000', fontSize: 14, fontWeight: 'bold'}}>
              INICET 2021 MOCK TEST
            </Text>
            <Text style={{color: 'grey', fontSize: 12}}>200 Qs,180 mins</Text>
          </View>

          <View style={styles.start_button_view}>
            {/* <View style={{backgroundColor:'#5b0dad',marginVertical:5,width:70,height:30,
                    borderRadius:3,padding:5,shadowOpacity: 1,
                    shadowColor:'#000', 
                    elevation: 4}}>
                    <TouchableOpacity>
                        <Text style={{color:'pink',fontFamily:'Poppins-Bold',fontSize:14,textAlign:'center'}}>START</Text>
                    </TouchableOpacity>
                </View> */}
            <Text style={{color: 'grey', fontSize: 12}}>Runs in:1 day</Text>
          </View>
        </View>

        <View
          style={{
            borderBottomColor: 'grey',
            borderBottomWidth: 1,
          }}
        />

        <View style={styles.series_view}>
          <View
            style={{
              backgroundColor: '#e6d9ec',
              marginVertical: 5,
              width: 50,
              borderRadius: 5,
              padding: 5,
              shadowOpacity: 1,
              shadowColor: '#000',
              elevation: 4,
              left: 10,
            }}>
            <TouchableOpacity>
              <Text
                style={{
                  color: '#5b0dad',
                  fontFamily: 'Poppins-Bold',
                  fontSize: 14,
                  textAlign: 'center',
                }}>
                Now 07 jun
              </Text>
            </TouchableOpacity>
          </View>

          <View>
            <Text style={{color: '#000', fontSize: 14, fontWeight: 'bold'}}>
              INICET 2021 MOCK TEST
            </Text>
            <Text style={{color: 'grey', fontSize: 12}}>200 Qs,180 mins</Text>
          </View>

          <View style={styles.start_button_view}>
            {/* <View style={{backgroundColor:'#5b0dad',marginVertical:5,width:70,height:30,
                    borderRadius:3,padding:5,shadowOpacity: 1,
                    shadowColor:'#000', 
                    elevation: 4}}>
                    <TouchableOpacity>
                        <Text style={{color:'pink',fontFamily:'Poppins-Bold',fontSize:14,textAlign:'center'}}>START</Text>
                    </TouchableOpacity>
                </View> */}
            <Text style={{color: 'grey', fontSize: 12}}>Runs in:1 day</Text>
          </View>
        </View>

        <View
          style={{
            borderBottomColor: 'grey',
            borderBottomWidth: 1,
          }}
        />

        <View style={styles.series_view}>
          <View
            style={{
              backgroundColor: '#e6d9ec',
              marginVertical: 5,
              width: 50,
              borderRadius: 5,
              padding: 5,
              shadowOpacity: 1,
              shadowColor: '#000',
              elevation: 4,
              left: 10,
            }}>
            <TouchableOpacity>
              <Text
                style={{
                  color: '#5b0dad',
                  fontFamily: 'Poppins-Bold',
                  fontSize: 14,
                  textAlign: 'center',
                }}>
                Now 07 jun
              </Text>
            </TouchableOpacity>
          </View>

          <View>
            <Text style={{color: '#000', fontSize: 14, fontWeight: 'bold'}}>
              INICET 2021 MOCK TEST
            </Text>
            <Text style={{color: 'grey', fontSize: 12}}>200 Qs,180 mins</Text>
          </View>

          <View style={styles.start_button_view}>
            {/* <View style={{backgroundColor:'#5b0dad',marginVertical:5,width:70,height:30,
                    borderRadius:3,padding:5,shadowOpacity: 1,
                    shadowColor:'#000', 
                    elevation: 4}}>
                    <TouchableOpacity>
                        <Text style={{color:'pink',fontFamily:'Poppins-Bold',fontSize:14,textAlign:'center'}}>START</Text>
                    </TouchableOpacity>
                </View> */}
            <Text style={{color: 'grey', fontSize: 12}}>Runs in:1 day</Text>
          </View>
        </View>

        <View
          style={{
            borderBottomColor: 'grey',
            borderBottomWidth: 1,
          }}
        />
      </ScrollView>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: 'column',
  },
  series_view: {
    justifyContent: 'space-between',
    flexDirection: 'row',
    padding: 10,
  },
  start_button_view: {
    marginLeft: '5%',
  },
});

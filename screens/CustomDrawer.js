
import React, {useState} from 'react';
import {
  View,
  StyleSheet,
  ImageBackground,
  Image,
  Dimensions,
  Text,
  TouchableOpacity,
} from 'react-native';
import {DrawerContentScrollView} from '@react-navigation/drawer';

import {
  widthPercentageToDP as wp,
  heightPercentageToDP as hp,
  widthPercentageToFonts as wf,
  heightPercentageToFonts as hf,
} from 'react-native-responsive-screen-font';

const windowWidth = Dimensions.get('window').width;
const windowHeight = Dimensions.get('window').height;

const CustomSidebarMenu = props => {
  return (
    <View style={{flex: 1}}>
      <DrawerContentScrollView {...props} style={{}}>
        <View style={{marginBottom: '5%'}}>
          <Text style={styles.ques_card}>Question cards</Text>
        </View>
        <View
          style={{
            borderBottomColor: '#f1f1f1',
            borderBottomWidth: 2,
          }}
        />

        <View style={{marginBottom: '5%'}}>
          <Text style={styles.ans_card}>Answers</Text>
          <Text style={styles.ans_card}>Marked for Review</Text>
          <Text style={styles.ans_card}>Answered & Marked for Review</Text>
        </View>
        <View
          style={{
            borderBottomColor: '#f1f1f1',
            borderBottomWidth: 2,
          }}
        />

        <View
          style={{
            flexDirection: 'row',
            padding: 25,
          }}>
          <View
            style={{
              backgroundColor: '#c9d8ec',
              marginVertical: 5,
              width: 70,
              borderRadius: 5,
              padding: 5,
              shadowOpacity: 1,
              shadowColor: '#000',
              elevation: 4,
              right: 5,
            }}>
            <TouchableOpacity>
              <Text
                style={{
                  color: '#000',
                  fontFamily: 'Poppins-Bold',
                  fontSize: 14,
                  textAlign: 'center',
                }}>
                Que1
              </Text>
            </TouchableOpacity>
          </View>

          <View
            style={{
              backgroundColor: '#c9d8ec',
              marginVertical: 5,
              width: 70,
              borderRadius: 5,
              padding: 5,
              shadowOpacity: 1,
              shadowColor: '#000',
              elevation: 4,
            }}>
            <TouchableOpacity>
              <Text
                style={{
                  color: '#000',
                  fontFamily: 'Poppins-Bold',
                  fontSize: 14,
                  textAlign: 'center',
                }}>
                Que1
              </Text>
            </TouchableOpacity>
          </View>

          <View
            style={{
              backgroundColor: '#c9d8ec',
              marginVertical: 5,
              width: 70,
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
                  color: '#000',
                  fontFamily: 'Poppins-Bold',
                  fontSize: 14,
                  textAlign: 'center',
                }}>
                Que1
              </Text>
            </TouchableOpacity>
          </View>
        </View>

        <View
          style={{
            flexDirection: 'row',
            padding: 25,
          }}>
          <View
            style={{
              backgroundColor: '#c9d8ec',
              marginVertical: 5,
              width: 70,
              borderRadius: 5,
              padding: 5,
              shadowOpacity: 1,
              shadowColor: '#000',
              elevation: 4,
              right: 5,
            }}>
            <TouchableOpacity>
              <Text
                style={{
                  color: '#000',
                  fontFamily: 'Poppins-Bold',
                  fontSize: 14,
                  textAlign: 'center',
                }}>
                Que1
              </Text>
            </TouchableOpacity>
          </View>

          <View
            style={{
              backgroundColor: '#c9d8ec',
              marginVertical: 5,
              width: 70,
              borderRadius: 5,
              padding: 5,
              shadowOpacity: 1,
              shadowColor: '#000',
              elevation: 4,
            }}>
            <TouchableOpacity>
              <Text
                style={{
                  color: '#000',
                  fontFamily: 'Poppins-Bold',
                  fontSize: 14,
                  textAlign: 'center',
                }}>
                Que1
              </Text>
            </TouchableOpacity>
          </View>

          <View
            style={{
              backgroundColor: '#c9d8ec',
              marginVertical: 5,
              width: 70,
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
                  color: '#000',
                  fontFamily: 'Poppins-Bold',
                  fontSize: 14,
                  textAlign: 'center',
                }}>
                Que1
              </Text>
            </TouchableOpacity>
          </View>
        </View>

        <View
          style={{
            flexDirection: 'row',
            padding: 25,
          }}>
          <View
            style={{
              backgroundColor: '#c9d8ec',
              marginVertical: 5,
              width: 70,
              borderRadius: 5,
              padding: 5,
              shadowOpacity: 1,
              shadowColor: '#000',
              elevation: 4,
              right: 5,
            }}>
            <TouchableOpacity>
              <Text
                style={{
                  color: '#000',
                  fontFamily: 'Poppins-Bold',
                  fontSize: 14,
                  textAlign: 'center',
                }}>
                Que1
              </Text>
            </TouchableOpacity>
          </View>

          <View
            style={{
              backgroundColor: '#c9d8ec',
              marginVertical: 5,
              width: 70,
              borderRadius: 5,
              padding: 5,
              shadowOpacity: 1,
              shadowColor: '#000',
              elevation: 4,
            }}>
            <TouchableOpacity>
              <Text
                style={{
                  color: '#000',
                  fontFamily: 'Poppins-Bold',
                  fontSize: 14,
                  textAlign: 'center',
                }}>
                Que1
              </Text>
            </TouchableOpacity>
          </View>

          <View
            style={{
              backgroundColor: '#c9d8ec',
              marginVertical: 5,
              width: 70,
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
                  color: '#000',
                  fontFamily: 'Poppins-Bold',
                  fontSize: 14,
                  textAlign: 'center',
                }}>
                Que1
              </Text>
            </TouchableOpacity>
          </View>
        </View>

        <View
          style={{
            flexDirection: 'row',
            padding: 25,
          }}>
          <View
            style={{
              backgroundColor: '#c9d8ec',
              marginVertical: 5,
              width: 70,
              borderRadius: 5,
              padding: 5,
              shadowOpacity: 1,
              shadowColor: '#000',
              elevation: 4,
              right: 5,
            }}>
            <TouchableOpacity>
              <Text
                style={{
                  color: '#000',
                  fontFamily: 'Poppins-Bold',
                  fontSize: 14,
                  textAlign: 'center',
                }}>
                Que1
              </Text>
            </TouchableOpacity>
          </View>

          <View
            style={{
              backgroundColor: '#c9d8ec',
              marginVertical: 5,
              width: 70,
              borderRadius: 5,
              padding: 5,
              shadowOpacity: 1,
              shadowColor: '#000',
              elevation: 4,
            }}>
            <TouchableOpacity>
              <Text
                style={{
                  color: '#000',
                  fontFamily: 'Poppins-Bold',
                  fontSize: 14,
                  textAlign: 'center',
                }}>
                Que1
              </Text>
            </TouchableOpacity>
          </View>

          <View
            style={{
              backgroundColor: '#c9d8ec',
              marginVertical: 5,
              width: 70,
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
                  color: '#000',
                  fontFamily: 'Poppins-Bold',
                  fontSize: 14,
                  textAlign: 'center',
                }}>
                Que1
              </Text>
            </TouchableOpacity>
          </View>
        </View>

        <View
          style={{
            flexDirection: 'row',
            padding: 25,
          }}>
          <View
            style={{
              backgroundColor: '#c9d8ec',
              marginVertical: 5,
              width: 70,
              borderRadius: 5,
              padding: 5,
              shadowOpacity: 1,
              shadowColor: '#000',
              elevation: 4,
              right: 5,
            }}>
            <TouchableOpacity>
              <Text
                style={{
                  color: '#000',
                  fontFamily: 'Poppins-Bold',
                  fontSize: 14,
                  textAlign: 'center',
                }}>
                Que1
              </Text>
            </TouchableOpacity>
          </View>

          <View
            style={{
              backgroundColor: '#c9d8ec',
              marginVertical: 5,
              width: 70,
              borderRadius: 5,
              padding: 5,
              shadowOpacity: 1,
              shadowColor: '#000',
              elevation: 4,
            }}>
            <TouchableOpacity>
              <Text
                style={{
                  color: '#000',
                  fontFamily: 'Poppins-Bold',
                  fontSize: 14,
                  textAlign: 'center',
                }}>
                Que1
              </Text>
            </TouchableOpacity>
          </View>

          <View
            style={{
              backgroundColor: '#c9d8ec',
              marginVertical: 5,
              width: 70,
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
                  color: '#000',
                  fontFamily: 'Poppins-Bold',
                  fontSize: 14,
                  textAlign: 'center',
                }}>
                Que1
              </Text>
            </TouchableOpacity>
          </View>
        </View>

        <View
          style={{
            flexDirection: 'row',
            padding: 25,
          }}>
          <View
            style={{
              backgroundColor: '#c9d8ec',
              marginVertical: 5,
              width: 70,
              borderRadius: 5,
              padding: 5,
              shadowOpacity: 1,
              shadowColor: '#000',
              elevation: 4,
              right: 5,
            }}>
            <TouchableOpacity>
              <Text
                style={{
                  color: '#000',
                  fontFamily: 'Poppins-Bold',
                  fontSize: 14,
                  textAlign: 'center',
                }}>
                Que1
              </Text>
            </TouchableOpacity>
          </View>

          <View
            style={{
              backgroundColor: '#c9d8ec',
              marginVertical: 5,
              width: 70,
              borderRadius: 5,
              padding: 5,
              shadowOpacity: 1,
              shadowColor: '#000',
              elevation: 4,
            }}>
            <TouchableOpacity>
              <Text
                style={{
                  color: '#000',
                  fontFamily: 'Poppins-Bold',
                  fontSize: 14,
                  textAlign: 'center',
                }}>
                Que1
              </Text>
            </TouchableOpacity>
          </View>

          <View
            style={{
              backgroundColor: '#c9d8ec',
              marginVertical: 5,
              width: 70,
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
                  color: '#000',
                  fontFamily: 'Poppins-Bold',
                  fontSize: 14,
                  textAlign: 'center',
                }}>
                Que1
              </Text>
            </TouchableOpacity>
          </View>
        </View>

        <View
          style={{
            flexDirection: 'row',
            padding: 25,
          }}>
          <View
            style={{
              backgroundColor: '#c9d8ec',
              marginVertical: 5,
              width: 70,
              borderRadius: 5,
              padding: 5,
              shadowOpacity: 1,
              shadowColor: '#000',
              elevation: 4,
              right: 5,
            }}>
            <TouchableOpacity>
              <Text
                style={{
                  color: '#000',
                  fontFamily: 'Poppins-Bold',
                  fontSize: 14,
                  textAlign: 'center',
                }}>
                Que1
              </Text>
            </TouchableOpacity>
          </View>

          <View
            style={{
              backgroundColor: '#c9d8ec',
              marginVertical: 5,
              width: 70,
              borderRadius: 5,
              padding: 5,
              shadowOpacity: 1,
              shadowColor: '#000',
              elevation: 4,
            }}>
            <TouchableOpacity>
              <Text
                style={{
                  color: '#000',
                  fontFamily: 'Poppins-Bold',
                  fontSize: 14,
                  textAlign: 'center',
                }}>
                Que1
              </Text>
            </TouchableOpacity>
          </View>

          <View
            style={{
              backgroundColor: '#c9d8ec',
              marginVertical: 5,
              width: 70,
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
                  color: '#000',
                  fontFamily: 'Poppins-Bold',
                  fontSize: 14,
                  textAlign: 'center',
                }}>
                Que1
              </Text>
            </TouchableOpacity>
          </View>
        </View>
      </DrawerContentScrollView>
    </View>
  );
};
const styles = StyleSheet.create({
  customItem: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    marginVertical: 10,
    marginHorizontal: 10,
    padding: 10,
  },
  Profile_image: {
    height: hp('12%'), // 70% of height device screen
    width: wp('23%'),
    borderRadius: 50,
    overflow: 'hidden',
  },
  contentstyle: {
    fontSize: wf('5%'),
  },
  text_Card: {
    width: '50%',
  },
  drink_water_title: {
    color: '#fff',
    fontSize: 15,
    textAlign: 'center',
    width: 100,
  },
  drink_water1: {
    color: '#fff',
    fontSize: wf('5%'),
    textAlign: 'center',
  },
  Top_Card: {
    borderBottomRightRadius: 10,
    borderBottomLeftRadius: 10,
    padding: 5,
  },
  profile_Name: {
    color: '#fff',
    fontSize: wf('5%'),
  },
  icon_card: {
    width: 20,
    height: 20,
    alignItems: 'center',
    justifyContent: 'center',
  },

  profileContainer: {
    flexDirection: 'row',
    margin: '5%',
  },

  profileRow: {
    height: 130,
    //width: Math.round((windowWidth)/2.3),
    borderRadius: 50,
    justifyContent: 'center',
    alignItems: 'center',
  },
  ques_card: {
    fontSize: 20,
    fontWeight: 'bold',
    left: '8%',
  },
  ans_card: {
    fontSize: 15,
    left: '8%',
    // fontWeight:'bold',
  },
});

export default CustomSidebarMenu;

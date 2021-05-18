import React from 'react';

import {
  View,
  Text,
  TouchableOpacity,
  Image,
  StyleSheet,
  ImageBackground,
  StatusBar,
  Dimensions,
} from 'react-native';

const App = () => {
  const {width, height} = Dimensions.get('screen');
  return (
    <View style={Styles.contaner}>
      <StatusBar translucent backgroundColor="transparent" />
      <ImageBackground
        style={Styles.bgImage}
        source={require('./src/assets/images/bgImage.png')}
      />

      <View style={Styles.contentContainer}>
        <View style={Styles.header}>
          <Image
            style={Styles.serachIcon}
            source={require('./src/assets/images/searchIcon.png')}
          />
          <Image
            style={Styles.serachIcon}
            source={require('./src/assets/images/3.png')}
          />
        </View>

        <View style={Styles.cityDateContainer}>
          <View>
            <Text style={Styles.cityText}>Bhopal</Text>
          </View>
          <View>
            <Text style={Styles.dateText}>Tue, 18 May, 2021</Text>
          </View>
        </View>

        <View style={Styles.tempContainer}>
          <View>
            <Text style={Styles.tempText}>32</Text>
          </View>
          <View
            style={{
              flex: 1,
              flexDirection: 'row',
              alignItems: 'center',
              marginTop: -25,
            }}>
            <View>
              <Image
                style={{width: 60, height: 60}}
                source={{
                  uri: 'https://icons.iconarchive.com/icons/icons-land/weather/256/Sunny-icon.png',
                }}
              />
            </View>
            <View>
              <Text style={{color: 'white', fontSize: 30}}>Sunny</Text>
            </View>
          </View>
        </View>

        <View style={[Styles.border, {width: width - 30}]} />

        <View
          style={{
            flexDirection: 'row',
            justifyContent: 'space-around',
            marginRight: 100,
            bottom: 200,
          }}>
          <View>
            <Text style={Styles.optionText}>Wind</Text>
          </View>
          <View>
            <Text style={Styles.optionText}>Rain</Text>
          </View>
          <View>
            <Text style={Styles.optionText}>Humidity</Text>
          </View>
        </View>
      </View>
    </View>
  );
};

const Styles = StyleSheet.create({
  contaner: {flex: 1, marginTop: -5},
  bgImage: {width: '100%', height: '105%'},
  contentContainer: {flex: 1, position: 'absolute', height: '100%'},
  header: {
    width: '76%',
    marginTop: 60,
    paddingHorizontal: 20,
    flex: 1,
    justifyContent: 'space-between',
    flexDirection: 'row',
  },
  serachIcon: {
    width: 25,
    height: 25,
  },
  cityDateContainer: {
    marginTop: 150,
    position: 'absolute',
    paddingHorizontal: 20,
  },
  cityText: {color: 'white', fontSize: 52},
  dateText: {color: 'white', fontSize: 20},
  tempContainer: {
    position: 'absolute',
    bottom: 260,
    paddingHorizontal: 20,
  },
  tempText: {color: 'white', fontSize: 130},
  border: {
    height: 3,
    backgroundColor: 'gray',
    bottom: 230,
    marginHorizontal: 20,
  },
  optionText: {color: 'white', fontSize: 20},
});

export default App;

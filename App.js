import React from 'react';

import {
  View,
  Text,
  TouchableOpacity,
  Image,
  StyleSheet,
  ImageBackground,
  StatusBar,
} from 'react-native';

const App = () => {
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
      </View>
    </View>
  );
};

const Styles = StyleSheet.create({
  contaner: {flex: 1, marginTop: -5},
  bgImage: {width: '100%', height: '105%'},
  contentContainer: {flex: 1, position: 'absolute'},
  header: {
    width: '76%',
    top: 50,
    paddingHorizontal: 20,
    flex: 1,
    justifyContent: 'space-between',
    flexDirection: 'row',
  },
  serachIcon: {
    width: 25,
    height: 25,
  },
});

export default App;

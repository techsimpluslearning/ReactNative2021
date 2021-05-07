import React from 'react';
import {
  View,
  Text,
  StyleSheet,
  TouchableOpacity,
  StatusBar,
} from 'react-native';

const App = () => {
  const [bgColor, setBgColor] = React.useState('#00365a');
  const bgColorArray = [
    '#44582C',
    '#7D3C98',
    '#C0392B',
    '#E67E22',
    '#273746',
    '#D35400',
    '#0E6655',
    '#F1C40F',
  ];

  const changeColor = () => {
    var colorIndex = Math.floor(Math.random() * 7);
    setBgColor(bgColorArray[colorIndex]);
  };

  return (
    <>
      <StatusBar backgroundColor={bgColor} />
      <View style={[styles.container, {backgroundColor: bgColor}]}>
        <TouchableOpacity onPress={changeColor}>
          <Text style={styles.clickButton}>Click Me</Text>
        </TouchableOpacity>
      </View>
    </>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  clickButton: {
    backgroundColor: 'white',
    color: 'black',
    paddingHorizontal: 20,
    paddingVertical: 10,
    borderRadius: 20,
    borderTopLeftRadius: 0,
  },
});

export default App;

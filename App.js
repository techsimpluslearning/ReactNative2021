import React from 'react';
import {Text, View, StyleSheet, TouchableOpacity, Image} from 'react-native';
import One from './assets/images/1.png';
import Two from './assets/images/2.png';
import Three from './assets/images/3.png';
import Four from './assets/images/4.png';
import Five from './assets/images/5.png';
import Six from './assets/images/6.png';

const App = () => {
  const [dice, setDice] = React.useState(One);

  const playButtonClicked = () => {
    var randomNumber = Math.floor(Math.random() * 6) + 1;
    switch (randomNumber) {
      case 1:
        setDice(One);
        break;

      case 2:
        setDice(Two);
        break;

      case 3:
        setDice(Three);
        break;

      case 4:
        setDice(Four);
        break;

      case 5:
        setDice(Five);
        break;

      case 6:
        setDice(Six);
        break;

      default:
        setDice(One);
        break;
    }
  };

  return (
    <View style={styles.container}>
      <View style={styles.headingContainer}>
        <Text style={styles.headingText}>Hi!</Text>
        <Text style={styles.headingText}>Dice Roller</Text>
      </View>

      <View style={styles.buttonContainer}>
        <View style={styles.imageContainer}>
          <Image source={dice} style={styles.image} />
        </View>

        <TouchableOpacity onPress={playButtonClicked}>
          <Text style={styles.playButton}>Play</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  headingContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    paddingHorizontal: 20,
    marginVertical: 10,
  },
  headingText: {fontSize: 20, color: '#00365A'},
  buttonContainer: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  playButton: {
    paddingHorizontal: 35,
    paddingVertical: 10,
    backgroundColor: '#E67E22',
    color: 'white',
    width: 100,
    borderRadius: 20,
  },
  imageContainer: {marginBottom: 20},
  image: {
    width: 100,
    height: 100,
    borderRadius: 20,
    borderColor: 'gray',
    borderWidth: 1,
  },
});

export default App;

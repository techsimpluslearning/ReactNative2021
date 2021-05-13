import React, {useState} from 'react';
import {View, Text, TouchableOpacity, Image} from 'react-native';
import PopUp from './components/popup';
import * as ImagePicker from 'react-native-image-picker';

const launchCam = setImage => {
  var options = {
    storageOptions: {
      skipBackup: true,
      path: 'images',
    },
  };

  ImagePicker.launchCamera(options, response => {
    if (response.uri !== undefined) {
      setImage(response.uri);
    }
  });
};

const launchGal = setImage => {
  var options = {
    storageOptions: {
      skipBackup: true,
      path: 'images',
    },
  };

  ImagePicker.launchImageLibrary(options, response => {
    if (response.uri !== undefined) {
      setImage(response.uri);
    }
  });
};

const SelectOption = props => {
  return (
    <PopUp
      bottom={0}
      corners={{TL: 40, TR: 10}}
      elevation={4}
      width="100%"
      height={120}>
      <TouchableOpacity
        onPress={props.onCloseModel}
        style={{
          flexDirection: 'row',
          justifyContent: 'flex-end',
          marginRight: 20,
          marginTop: 20,
        }}>
        <Image
          source={{
            uri: 'https://cdn4.iconfinder.com/data/icons/ionicons/512/icon-close-512.png',
          }}
          style={{width: 20, height: 20}}
        />
      </TouchableOpacity>
      <View
        style={{
          flex: 1,
          justifyContent: 'space-evenly',
          alignItems: 'center',
          flexDirection: 'row',
        }}>
        <TouchableOpacity onPress={() => launchCam(props.setImage)}>
          <Image
            source={{
              uri: 'https://cdn4.iconfinder.com/data/icons/ionicons/512/icon-camera-512.png',
            }}
            style={{width: 70, height: 70}}
          />
        </TouchableOpacity>

        <TouchableOpacity onPress={() => launchGal(props.setImage)}>
          <Image
            source={{
              uri: 'https://cdn.iconscout.com/icon/free/png-256/gallery-1635450-1390073.png',
            }}
            style={{width: 70, height: 70}}
          />
        </TouchableOpacity>
      </View>
    </PopUp>
  );
};

const App = () => {
  const [modelState, setModelState] = useState(false);
  const [image, setImage] = useState(
    'https://www.planetware.com/wpimages/2020/01/india-in-pictures-beautiful-places-to-photograph-the-ganges-river-varanasi.jpg',
  );
  return (
    <View style={{flex: 1, justifyContent: 'center', alignItems: 'center'}}>
      {modelState ? (
        <SelectOption
          setImage={setImage}
          onCloseModel={() => setModelState(false)}
        />
      ) : null}
      <TouchableOpacity onPress={() => setModelState(true)}>
        <Image
          source={{uri: image}}
          style={{width: 350, height: 350, borderRadius: 20}}
        />
      </TouchableOpacity>
    </View>
  );
};

export default App;

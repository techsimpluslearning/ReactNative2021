import React, {useState} from 'react';
import {View, Text, TouchableOpacity} from 'react-native';
import * as Animatable from 'react-native-animatable';

const PopUp = props => {
  return (
    <Animatable.View
      animation="zoomIn"
      style={{
        position: 'absolute',
        bottom: 0,
        width: '100%',
        height: 300,
        // backgroundColor: 'gray',
        borderTopLeftRadius: 30,
        borderTopRightRadius: 30,
        elevation: 5,
      }}>
      <View style={{flex: 1, justifyContent: 'center', alignItems: 'center'}}>
        <TouchableOpacity onPress={props.onCloseModel}>
          <Text
            style={{
              paddingHorizontal: 20,
              paddingVertical: 10,
              backgroundColor: '#00365a',
              color: 'white',
              borderRadius: 10,
            }}>
            Close Model
          </Text>
        </TouchableOpacity>
      </View>
    </Animatable.View>
  );
};

const App = () => {
  const [modelState, setModelState] = useState(false);

  return (
    <View style={{flex: 1, justifyContent: 'center', alignItems: 'center'}}>
      {modelState ? <PopUp onCloseModel={() => setModelState(false)} /> : null}
      <TouchableOpacity onPress={() => setModelState(true)}>
        <Text
          style={{
            paddingHorizontal: 20,
            paddingVertical: 10,
            backgroundColor: '#00365a',
            color: 'white',
            borderRadius: 10,
          }}>
          Open Model
        </Text>
      </TouchableOpacity>
    </View>
  );
};

export default App;

import React, {useState} from 'react';
import {View, Text, TouchableOpacity} from 'react-native';
import * as Animatable from 'react-native-animatable';

const PopUp = props => {
  var {top, bottom, corners, elevation, width, height} = props;
  var {TL, TR, BL, BR} = corners;

  return (
    <Animatable.View
      animation="zoomIn"
      style={{
        position: 'absolute',
        bottom: bottom,
        top: top,
        width: width,
        height: height,
        // backgroundColor: 'gray',
        borderTopLeftRadius: TL !== undefined ? TL : null,
        borderTopRightRadius: TR !== undefined ? TR : null,
        borderBottomLeftRadius: BL !== undefined ? BL : null,
        borderBottomRightRadius: BR !== undefined ? BR : null,
        elevation: elevation,
      }}>
      {props.children}
    </Animatable.View>
  );
};

export default PopUp;

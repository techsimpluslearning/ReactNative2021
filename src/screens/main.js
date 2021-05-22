import React from 'react';
import {View, Text, TouchableOpacity, StyleSheet, Image} from 'react-native';
import {Switch, Drawer} from 'react-native-paper';

const Home = props => {
  const [active, setActive] = React.useState('first');
  const [isSwitchOn, setIsSwitchOn] = React.useState(false);

  const onToggleSwitch = () => setIsSwitchOn(!isSwitchOn);

  const MyDrawer = () => {
    return (
      <Drawer.Section
        title="Some title"
        style={{
          width: '60%',
          height: '100%',
          backgroundColor: '#F9F9F9',
          position: 'absolute',
          zIndex: 1,
          paddingTop: 40,
        }}>
        <Drawer.Item
          label="First Item"
          active={active === 'first'}
          onPress={() => setActive('first')}
        />
        <Drawer.Item
          label="Second Item"
          active={active === 'second'}
          onPress={() => setActive('second')}
        />
      </Drawer.Section>
    );
  };

  return (
    <>
      {isSwitchOn ? <MyDrawer /> : null}
      <View style={Styles.container}>
        <View
          style={{
            top: 50,
            paddingHorizontal: 20,
            flex: 1,
            justifyContent: 'space-between',
            width: '100%',
            flexDirection: 'row',
          }}>
          <Image
            style={{width: 30, height: 30}}
            source={require('../assets/images/3.png')}
          />
          <Switch value={isSwitchOn} onValueChange={onToggleSwitch} />
        </View>
        <View
          style={{
            position: 'absolute',
            flex: 1,
            justifyContent: 'center',
            alignItems: 'center',
            width: '100%',
            height: '100%',
          }}>
          <Text>First Screen</Text>
          <TouchableOpacity
            onPress={() => {
              props.navigation.navigate('Login');
            }}>
            <Text>Next Screen</Text>
          </TouchableOpacity>
        </View>
      </View>
    </>
  );
};

const Styles = StyleSheet.create({
  container: {flex: 1, height: '100%', width: '100%'},
});

export default Home;

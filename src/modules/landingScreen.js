import React from 'react';
import {Button, StyleSheet, View} from 'react-native';

const landingScreen = ({navigation}) => {
  return (
    <View style={styles.container}>
      <Button
        title="Auto center ball"
        onPress={() => {
          navigation.navigate('AutoCenterBall');
        }}
      />
      <Button
        title="Hidden Message"
        onPress={() => {
          navigation.navigate('Hidden Message');
        }}
      />
      <Button
        title="Loader"
        onPress={() => {
          navigation.navigate('Loader');
        }}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
});

export default landingScreen;

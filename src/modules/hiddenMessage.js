import React, {useState} from 'react';
import {
  LayoutAnimation,
  Platform,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from 'react-native';

const hiddenMessage = () => {
  const [expanded, setExpanded] = useState(false);

  return (
    <View style={style.container}>
      <TouchableOpacity
        onPress={() => {
          LayoutAnimation.configureNext(LayoutAnimation.Presets.spring);
          setExpanded(!expanded);
        }}>
        <Text style={style.text}>
          Press to {expanded ? 'close' : 'open'} message!
        </Text>
      </TouchableOpacity>
      {expanded && (
        <View style={style.tile}>
          <Text style={style.text}>Hidden message</Text>
        </View>
      )}
    </View>
  );
};

const style = StyleSheet.create({
  tile: {
    backgroundColor: 'yellow',
    borderWidth: 0.5,
    borderColor: '#d6d7da',
  },
  text: {
    padding: 20,
    fontSize: 20,
  },
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    overflow: 'hidden',
  },
});

export default hiddenMessage;

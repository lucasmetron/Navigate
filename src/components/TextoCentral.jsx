import React from 'react';
import {StyleSheet, View, Text} from 'react-native';

const TextoCentral = props => {
  return (
    <View
      style={[styles.container, {backgroundColor: props.corFundo || 'black'}]}>
      <Text style={[styles.text, {color: props.corTexto || 'white'}]}>
        {props.children}
      </Text>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },

  text: {
    fontSize: 50,
  },
});

export default TextoCentral;

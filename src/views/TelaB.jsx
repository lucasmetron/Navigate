import React from 'react';
import {Button, StyleSheet, View} from 'react-native';
import TextoCentral from '../components/TextoCentral';

const TelaB = props => {
  return (
    <View style={{flex: 1}}>
      <TextoCentral corFundo="blue">Tela B</TextoCentral>
      <Button
        title="open drawer"
        onPress={() => {
          props.navigation.openDrawer();
        }}
      />
    </View>
  );
};

const styles = StyleSheet.create({});

export default TelaB;

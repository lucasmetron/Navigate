import React from 'react';
import {StyleSheet, View, Button} from 'react-native';

const PassoStack = props => {
  return (
    <View style={styles.container}>
      {props.avancar && (
        <View style={styles.ViewSmall}>
          <Button
            title="Avançar"
            onPress={() => {
              props.navigation.navigate(props.avancar);
            }}
          />
        </View>
      )}

      {props.voltar && (
        <View style={styles.ViewSmall}>
          <Button
            title="Voltar"
            onPress={() => {
              props.navigation.goBack();
            }}
          />
        </View>
      )}

      <View style={styles.ViewBigger}>{props.children}</View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },

  ViewSmall: {},

  ViewBigger: {
    flex: 1,
  },
});

export default PassoStack;

import React from 'react';
import {StyleSheet, SafeAreaView} from 'react-native';
import TextoCentral from './components/TextoCentral';

const App = () => {
  return (
    <SafeAreaView style={styles.container}>
      <TextoCentral>App</TextoCentral>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
});

export default App;

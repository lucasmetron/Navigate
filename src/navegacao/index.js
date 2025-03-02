import React from 'react';
import {SafeAreaView, StyleSheet} from 'react-native';
import {NavigationContainer} from '@react-navigation/native';
// import Stack from './Stack';
import Tab from './Tab';
// import Drawer from './Drawer';

const Index = () => {
  return (
    <SafeAreaView style={styles.container}>
      <NavigationContainer>
        {/* <Stack /> */}
        <Tab />
        {/* <Drawer /> */}
      </NavigationContainer>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
});

export default Index;

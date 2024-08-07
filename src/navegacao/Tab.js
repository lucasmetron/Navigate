import React from 'react';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import TelaA from '../views/TelaA';
import TelaB from '../views/TelaB';
import TelaC from '../views/TelaC';
import Ionicons from 'react-native-vector-icons/Ionicons';

const Tab = createBottomTabNavigator();

export default props => (
  <Tab.Navigator
    initialRouteName="TelaB"
    screenOptions={({route}) => ({
      tabBarIcon: ({focused, color, size}) => {
        let iconName;
        switch (route.name) {
          case 'TelaA':
            iconName = focused
              ? 'ios-information-circle'
              : 'ios-information-circle-outline';
            break;

          case 'TelaB':
            iconName = focused
              ? 'ios-information-circle'
              : 'ios-information-circle-outline';
            break;

          case 'TelaC':
            iconName = focused
              ? 'ios-information-circle'
              : 'ios-information-circle-outline';
            break;
        }
        return <Ionicons name={iconName} size={size} color={color} />;
      },
      tabBarLabelStyle: {fontSize: 15},
      tabBarActiveTintColor: 'tomato',
      tabBarInactiveTintColor: 'gray',
    })}>
    <Tab.Screen name="TelaA" component={TelaA} />
    <Tab.Screen name="TelaB" component={TelaB} />
    <Tab.Screen name="TelaC" component={TelaC} />
  </Tab.Navigator>
);

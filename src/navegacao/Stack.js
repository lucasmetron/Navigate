import React from 'react';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import TelaA from '../views/TelaA';
import TelaB from '../views/TelaB';
import TelaC from '../views/TelaC';
import PassoStack from '../components/PassoStack';

const Stack = createNativeStackNavigator();

export default props => (
  <Stack.Navigator initialRouteName="TelaA" screenOptions={{headerShown: true}}>
    <Stack.Screen name="TelaA" options={{title: 'Informações inciais'}}>
      {propsTelaA => (
        <PassoStack {...propsTelaA} avancar="TelaB">
          <TelaA />
        </PassoStack>
      )}
    </Stack.Screen>

    <Stack.Screen name="TelaB">
      {propsTelaB => (
        <PassoStack {...propsTelaB} avancar="TelaC" voltar>
          <TelaB />
        </PassoStack>
      )}
    </Stack.Screen>

    <Stack.Screen name="TelaC">
      {propsTelaC => (
        <PassoStack {...propsTelaC} voltar avancar="TelaC">
          <TelaC />
        </PassoStack>
      )}
    </Stack.Screen>
  </Stack.Navigator>
);

import React from 'react';
import TextoCentral from '../components/TextoCentral';

const TelaA = ({navigation}) => {
  navigation.navigate('TelaB');
  return <TextoCentral corFundo="red">Tela A</TextoCentral>;
};

export default TelaA;

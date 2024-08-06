import React from 'react';
import TextoCentral from '../components/TextoCentral';

const TelaC = props => {
  return (
    <TextoCentral corFundo="purple">
      Tela C - {props.route.params.number}
    </TextoCentral>
  );
};

export default TelaC;

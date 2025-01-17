import React from 'react';
import {TouchableOpacity, Image, StyleSheet} from 'react-native';

import estrela from '../assets/estrela.png';
import estrelaCinza from '../assets/estrelaCinza.png';

export default function Estrela({
  onPress,
  desabilitada = true,
  preechida,
  grande = false,
}) {
  const estilos = estilosFuncao(grande);

  const getImage = index => {
    if (preechida) {
      return estrela;
    } else {
      return estrelaCinza;
    }
  };

  return (
    <TouchableOpacity onPress={onPress} disabled={desabilitada}>
      <Image source={getImage()} style={estilos.estrela} />
    </TouchableOpacity>
  );
}

const estilosFuncao = grande =>
  StyleSheet.create({
    estrela: {
      width: grande ? 36 : 12,
      height: grande ? 36 : 12,
      marginRight: 2,
    },
  });

import React from 'react';
import {Image, StyleSheet, Text, View} from 'react-native';

import {carregaTopo} from '../../../servicos/carregaDados';

class Topo extends React.Component {
  state = {
    topo: {
      boasVindas: '',
      legenda: '',
    },
  };

  atualizaTopo() {
    const retorno = carregaTopo();
    this.setState({topo: retorno});
  }

  componentDidMount() {
    this.atualizaTopo();
  }

  render() {
    return (
      <View style={estilos.topo}>
        <Image
          source={require('../../../assets/logo.png')}
          style={estilos.imagem}
        />
        <Text style={estilos.boasVindas}>{this.state.topo.boasVindas}</Text>
        <Text style={estilos.legendas}>{this.state.topo.legenda}</Text>
      </View>
    );
  }
}

const estilos = StyleSheet.create({
  topo: {
    backgroundColor: '#F6F6F6',
    padding: 16,
  },
  imagem: {
    width: 70,
    height: 28,
  },
  boasVindas: {
    marginTop: 24,
    fontSize: 26,
    lineHeight: 42,
    fontWeight: 'bold',
    color: `#464646`,
  },
  legendas: {
    fontSize: 16,
    lineHeight: 26,
    color: `#A3A3A3`,
  },
});

export default Topo;

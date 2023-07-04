import { View, StyleSheet, Text, Image, TextInput, TouchableOpacity } from 'react-native';
import { LinearGradient } from 'expo-linear-gradient';
import { styles } from '../styles/style';
import { useEffect, useState } from 'react';

import { api } from "../utils/api";

import { useContext } from 'react';
import { AuthContext } from '../context/authContext';
import { CaronasContext } from '../context/caronasContext';

export function TelaCriarCarona() {
  const [mensagem, setMensagem] = useState('');

  const [saida, setSaida] = useState('');
  const [destino, setDestino] = useState('');
  const [data, setData] = useState('');
  const [horario, setHorario] = useState('');
  // const [dataHorario, setDataHorario] = useState('');
  const [numVagas, setNumVagas] = useState();
  const [preco, setPreco] = useState(0.0);
  const [observacoes, setObservacoes] = useState('');
  const [refreshing, setRefreshing] = useState(true);

  const { dadosUsuario } = useContext(AuthContext);
  const { setMinhasCaronas } = useContext(CaronasContext);


  function cadastrarCarona() {
    
    const dataFormatada = data.split('/').reverse().join('-');

    api.post('Carona/cadastrar', {
      crn_saida: saida,
      crn_destino: destino,
      crn_data_horario: `${dataFormatada}T${horario}`,
      crn_num_vagas: parseInt(numVagas),
      crn_preco: parseFloat(preco),
      crn_observacoes: observacoes
    })
      .then(resJson => {
        console.log(resJson.data);
        setMinhasCaronas(resJson.data.crn_id);
        setRefreshing(false);
      })
      .catch(e => {
        setRefreshing(false);
      });

  }


  return (
    <LinearGradient
      style={estilo.fundo}
      colors={['#87CEEB', 'rgba(135, 206, 235, 0)']}>
      <View style={estilo.container}>
        <Image
          source={require('../assets/Clouds.png')}
          style={estilo.nuvem}
        />
        <Image
          source={require('../assets/Birds.png')}
          style={estilo.passaros}
        />
      </View>
      <View style={estilo.teste}>
        <View style={estilo.formCadastro}>

          <Text style={estilo.tituloForm}>Cadastro de Carona</Text>

          <TextInput
            style={estilo.inputForm}
            placeholderTextColor="white"
            placeholder="saida"
            autoCapitalize="none"
            autoCorrect={true}
            onChangeText={(event) => setSaida(event)}
          />

          <TextInput
            style={estilo.inputForm}
            placeholderTextColor="white"
            placeholder="destino"
            autoCapitalize="none"
            autoCorrect={true}
            onChangeText={(event) => setDestino(event)}
          />

          <TextInput
            style={estilo.inputForm}
            placeholderTextColor="white"
            placeholder="data"
            autoCapitalize="none"
            autoCorrect={true}
            onChangeText={(event) => setData(event)}
          />

          <TextInput
            style={estilo.inputForm}
            placeholderTextColor="white"
            placeholder="horario"
            autoCapitalize="none"
            autoCorrect={true}
            onChangeText={(event) => setHorario(event)}
          />

          <TextInput
            style={estilo.inputForm}
            placeholderTextColor="white"
            placeholder="número de Vagas"
            autoCapitalize="none"
            onChangeText={(event) => setNumVagas(event)}
          />

          <TextInput
            style={estilo.inputForm}
            placeholderTextColor="white"
            placeholder="Preço"
            autoCapitalize="none"
            onChangeText={(event) => setPreco(event)}
          />

          <TextInput
            style={estilo.inputForm}
            placeholderTextColor="white"
            placeholder="Observações"
            autoCapitalize="none"
            onChangeText={(event) => setObservacoes(event)}
          />

          <TouchableOpacity
            style={estilo.buttonForm}
            onPress={() => cadastrarCarona()}>
            <Text style={estilo.textButton}>Cadastrar</Text>
          </TouchableOpacity>

          <Text style={styles.textAlert}>{mensagem}</Text>
        </View>
      </View>
    </LinearGradient>
  );
}

const estilo = StyleSheet.create({
  fundo: {
    flex: 1,
    width: '100%',
    height: 711
  },
  container: {
    display: "flex",
    flexDirection: "row",
    justifyContent: "space-between",
    paddingTop: 50,
    paddingLeft: 20,
    paddingRight: 20,
  },
  formCadastro: {
    width: "90%",
    alignItems: 'center',
    justifyContent: 'center',
    borderRadius: 30,
    backgroundColor: "white"
  },
  tituloForm: {
    fontSize: 24,
    fontWeight: 'bold',
    color: '#87CEEB',
  },
  inputForm: {
    backgroundColor: '#87CEEB',
    marginTop: 13,
    width: 250,
    height: 35,
    borderRadius: 5,
    padding: 5
  },
  teste: {
    marginTop: 90,
    alignItems: 'center',
    justifyContent: 'center'
  },
  buttonForm: {
    backgroundColor: '#87CEEB',
    width: 100,
    height: 30,
    borderRadius: 5,
    marginTop: 13,
    alignItems: 'center',
    justifyContent: 'center',
  },
  textButton: {
    color: '#fff',
    fontWeight: 'bold',
  }
});
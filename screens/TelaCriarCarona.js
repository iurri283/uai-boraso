import { View, StyleSheet, Text, Image, TextInput, TouchableOpacity } from 'react-native';
import { LinearGradient } from 'expo-linear-gradient';
import { styles } from '../styles/style';
import { useState } from 'react';

export function TelaCriarCarona() {
  const [mensagem, setMensagem] = useState('');

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
            placeholder="nome"
            autoCompleteType="name"
            autoCapitalize="none"
            autoCorrect={true}
            onChangeText={(event) => setNome(event)}
          />

          <TextInput
            style={estilo.inputForm}
            placeholderTextColor="white"
            placeholder="email"
            autoCompleteType="email"
            autoCapitalize="none"
            autoCorrect={true}
            onChangeText={(event) => setEmail(event)}
          />

          <TextInput
            style={estilo.inputForm}
            placeholderTextColor="white"
            placeholder="cpf"
            autoCapitalize="none"
            autoCorrect={true}
            onChangeText={(event) => setCpf(event)}
          />

          <TextInput
            style={estilo.inputForm}
            placeholderTextColor="white"
            placeholder="Telefone"
            autoCompleteType="tel"
            autoCapitalize="none"
            onChangeText={(event) => setTelefone(event)}
          />

          <TextInput
            style={estilo.inputForm}
            placeholderTextColor="white"
            placeholder="Senha"
            autoCompleteType="current-password"
            autoCapitalize="none"
            secureTextEntry={true}
            onChangeText={(event) => setSenha(event)}
          />

          <TouchableOpacity
            style={estilo.buttonForm}
            onPress={() => verificaCadastro()}>
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
    padding: 5,
    opacity: '.5'
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
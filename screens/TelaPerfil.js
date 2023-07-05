import { useState } from 'react';
import { View } from 'react-native';
import { Image, StyleSheet, Text, TextInput, TouchableOpacity } from 'react-native';

export function TelaPerfil() {

  const [mensagem, setMensagem] = useState('');
  const [nome, setNome] = useState('');
  const [email, setEmail] = useState('');
  const [telefone, setTelefone] = useState('');
  const [senha, setSenha] = useState('');


  function atualizarUsuario(){

  }

  function getUsuario(){
    
  }

  return (

    <View style={styles.container}>
      <Image
        source={require('../assets/perfil.png')}
        style={estilo.perfil}
      />
      <View style={estilo.formCadastro}>

        <Text style={estilo.tituloForm}>Cadastro de Carona</Text>

        <TextInput
          style={estilo.inputForm}
          placeholderTextColor="white"
          placeholder="nome"
          autoCapitalize="none"
          autoCorrect={true}
          onChangeText={(event) => setNome(event)}
        />

        <TextInput
          style={estilo.inputForm}
          placeholderTextColor="white"
          placeholder="email"
          autoCapitalize="none"
          autoCorrect={true}
          onChangeText={(event) => setEmail(event)}
        />

        <View style={estilo.inputMenor}>
          <TextInput
            style={estilo.inputFormTel}
            placeholderTextColor="white"
            placeholder="telefone"
            autoCapitalize="none"
            autoCorrect={true}
            onChangeText={(event) => setTelefone(event)}
          />

          <TextInput
            style={estilo.inputFormSenha}
            placeholderTextColor="white"
            placeholder="Senha"
            autoCompleteType="current-password"
            autoCapitalize="none"
            secureTextEntry={true}
            onChangeText={(event) => setSenha(event)}
          />
        </View>
        <TouchableOpacity
          style={estilo.buttonForm}
          onPress={() => atualizarUsuario()}>
          <Text style={estilo.textButton}>Cadastrar</Text>
        </TouchableOpacity>

        <Text style={styles.textAlert}>{mensagem}</Text>
      </View>
    </View>

  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    // justifyContent:"center",
  }
});

const estilo = StyleSheet.create({
  perfil: {
    justifyContent: "center",
    marginTop: 200,
    width: 100,
    height: 100,
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
  inputMenor:{
    width: 250,
    alignItems: 'flex-start', // Alterado para alinhar à esquerda
    display: 'flex',
    flexDirection: 'column',
    left: 0
  },
  inputFormTel: {
    backgroundColor: '#87CEEB',
    marginTop: 13,
    marginLeft: 0,
    width: 150,
    height: 35,
    borderRadius: 5,
    padding: 5
  },
  inputFormSenha: {
    backgroundColor: '#87CEEB',
    marginTop: 13,
    width: 150,
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
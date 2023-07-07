import { useState } from 'react';
import { View } from 'react-native';
import { Image, StyleSheet, Text, TextInput, TouchableOpacity } from 'react-native';

import { api } from "../utils/api";
import { useContext } from 'react';
import { AuthContext } from '../context/authContext';

export function TelaPerfil() {

  const { dadosUsuario, setDadosUsuario } = useContext(AuthContext);

  const [mensagem, setMensagem] = useState('');
  const [nome, setNome] = useState(dadosUsuario.usu_nome);
  const [email, setEmail] = useState(dadosUsuario.usu_email);
  const [telefone, setTelefone] = useState(dadosUsuario.usu_telefone);
  const [senha, setSenha] = useState(dadosUsuario.usu_senha);

  const [refreshing, setRefreshing] = useState(true);

  
  


  function atualizarUsuario(){

    console.log(dadosUsuario.usu_id);
    console.log(nome);
    console.log(email);
    console.log(telefone);
    console.log(senha);

    var userObj = {
      usu_nome: nome,
      usu_email: email,
      usu_telefone: parseInt(telefone),
      usu_senha: senha
    };

    var jsonBody = JSON.stringify(userObj);

    api.put('usu_editarInfo/'+dadosUsuario.usu_id, userObj)
      .then(resJson => {
        console.log(resJson.data);
        if(resJson.data.affectedRows > 0){
          setMensagem("Usuario atualizado com sucesso!");
          setDadosUsuario({
            usu_nome: nome,
            usu_email: email,
            usu_cpf: dadosUsuario.usu_cpf,
            usu_telefone: telefone,
            usu_senha: senha
          });
          setRefreshing(false);
        }else{
          setMensagem("Erro ao atualizar usuário!");
        }
        setRefreshing(false);
      })
      .catch(e => {
        setRefreshing(false);
      });
  }

  return (

    <View style={styles.container}>
      <Image
        source={require('../assets/perfil.png')}
        style={estilo.perfil}
      />
      <View style={estilo.formCadastro}>

        <Text style={estilo.tituloForm}>Dados Pessoais</Text>

        <TextInput
          style={estilo.inputForm}
          placeholderTextColor="white"
          placeholder="nome"
          autoCapitalize="none"
          autoCorrect={true}
          onChangeText={(event) => setNome(event)}
          defaultValue={dadosUsuario.usu_nome}
        />

        <TextInput
          style={estilo.inputForm}
          placeholderTextColor="white"
          placeholder="email"
          autoCapitalize="none"
          autoCorrect={true}
          onChangeText={(event) => setEmail(event)}
          defaultValue={dadosUsuario.usu_email}
        />

        <View style={estilo.inputMenor}>
          <TextInput
            style={estilo.inputFormTel}
            placeholderTextColor="white"
            placeholder="telefone"
            autoCapitalize="none"
            autoCorrect={true}
            onChangeText={(event) => setTelefone(event)}
            defaultValue={dadosUsuario.usu_telefone.toString()}
          />

          <TextInput
            style={estilo.inputFormSenha}
            placeholderTextColor="white"
            placeholder="Senha"
            autoCompleteType="current-password"
            autoCapitalize="none"
            secureTextEntry={true}
            onChangeText={(event) => setSenha(event)}
            defaultValue={dadosUsuario.usu_senha}
          />
        </View>
        <TouchableOpacity
          style={estilo.buttonForm}
          onPress={() => atualizarUsuario()}>
          <Text style={estilo.textButton}>Atualizar</Text>
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
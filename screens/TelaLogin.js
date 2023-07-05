import React, { useState } from 'react';
import {
  View,
  Text,
  TouchableOpacity,
  TextInput,
  TouchableWithoutFeedback,
  Keyboard,
} from 'react-native';
import { styles } from '../styles/style';
import { useContext } from 'react';
import { AuthContext } from '../context/authContext';
import { api } from '../utils/api';



export function TelaLogin({ navigation }) {

  const { setDadosUsuario, handleTokenLogin } = useContext(AuthContext);

  const [cpf, setCpf] = useState('');
  const [senha, setSenha] = useState('');
  const [mensagem, setMensagem] = useState('');

  async function verificarLogin() {
    var userObj = { usu_cpf: cpf, usu_senha: senha };

    const { data, headers } = await api.post('login', userObj)
    const token = headers['x-access-token'];
    if (token) {
      api.defaults.headers.common['Authorization'] = token;
      setDadosUsuario(data);
      // console.log(data);
      handleTokenLogin(token);
      setMensagem('Login efetuado!');
    } else {
      console.log(data);
      setMensagem('CPF ou senha inválidos!');
    }
  }

  return (
    <TouchableWithoutFeedback onPress={() => Keyboard.dismiss()}>
      <View style={styles.container}>
        <View style={styles.form}>
          <TextInput
            style={styles.inputForm}
            placeholder="Cpf"
            autoCompleteType="cpf"
            autoCapitalize="none"
            autoCorrect={true}
            onChangeText={(event) => setCpf(event)}
          />
          <TextInput
            style={styles.inputForm}
            placeholder="Senha"
            autoCompleteType="current-password"
            autoCapitalize="none"
            secureTextEntry={true}
            onChangeText={(event) => setSenha(event)}
          />
          <TouchableOpacity
            style={styles.buttonForm}
            onPress={() => verificarLogin()}>
            <Text style={styles.textButton}>Entrar</Text>
          </TouchableOpacity>
          <TouchableOpacity
            style={styles.buttonForm}
            onPress={() => navigation.navigate('TelaCadastro', {})}>
            <Text style={styles.textButton}>Cadastrar</Text>
          </TouchableOpacity>
          <Text style={styles.textAlert}>{mensagem}</Text>
        </View>
      </View>
    </TouchableWithoutFeedback>
  );
}

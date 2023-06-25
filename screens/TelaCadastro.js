import { useState } from 'react';
import {
  View,
  Text,
  TouchableOpacity,
  TextInput,
  TouchableWithoutFeedback,
  Keyboard,
} from 'react-native';
import { styles } from '../styles/style';

export function TelaCadastro({ navigation }) {
  const [nome, setNome] = useState('');
  const [email, setEmail] = useState('');
  const [cpf, setCpf] = useState('');
  const [telefone, setTelefone] = useState('');
  const [senha, setSenha] = useState('');
  const [mensagem, setMensagem] = useState('');

  function verificaCadastro() {
    var userObj = {
      usu_nome: nome,
      usu_email: email,
      usu_cpf: cpf,
      usu_telefone: parseInt(telefone),
      usu_senha: senha
      };

    var jsonBody = JSON.stringify(userObj);

    fetch('https://iuriwerneck-boraso.glitch.me/usu_cadastrar', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        Accept: 'application/json',
      },
      body: jsonBody,
    })
      .then((response) => response.json())
      .then((data) => {
        const cadastro = data.affectedRows;//affectedRows = 1 -> cadastrou usuário
        if(cadastro == 1){
          setMensagem("Usuario cadastrado com sucesso!");
        }else{
          setMensagem("Erro ao cadastrar usuário!");
        }
      })
      .catch((err) => {
        console.log(err);
      });
  }

  return (
    <TouchableWithoutFeedback onPress={() => Keyboard.dismiss()}>
      <View style={styles.container}>
        <View style={styles.form}>

          <TextInput
            style={styles.inputForm}
            placeholder="nome"
            autoCompleteType="name"
            autoCapitalize="none"
            autoCorrect={true}
            onChangeText={(event) => setNome(event)}
          />

          <TextInput
            style={styles.inputForm}
            placeholder="email"
            autoCompleteType="email"
            autoCapitalize="none"
            autoCorrect={true}
            onChangeText={(event) => setEmail(event)}
          />

          <TextInput
            style={styles.inputForm}
            placeholder="cpf"
            autoCapitalize="none"
            autoCorrect={true}
            onChangeText={(event) => setCpf(event)}
          />

          <TextInput
            style={styles.inputForm}
            placeholder="Telefone"
            autoCompleteType="tel"
            autoCapitalize="none"
            onChangeText={(event) => setTelefone(event)}
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
            onPress={() => verificaCadastro()}>
            <Text style={styles.textButton}>Cadastrar</Text>
          </TouchableOpacity>

          <Text style={styles.textAlert}>{mensagem}</Text>
        </View>
      </View>
    </TouchableWithoutFeedback>
  );
}

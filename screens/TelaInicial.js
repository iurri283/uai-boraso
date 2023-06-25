import React, { useState, useContext } from 'react';
import {
  View,
  Text,
  TouchableOpacity,
  TextInput,
  Keyboard,
} from 'react-native';
import { styles } from '../styles/style';
import { LinearGradient } from 'expo-linear-gradient';
import { AuthContext } from '../context/authContext';

export function TelaInicial({ navigation }) {
  const objeto = useContext(AuthContext);
  return (
      <LinearGradient
        style={styles.container}
        colors={["#87CEEB", "rgba(135, 206, 235, 0)"]}
      >
        <View style={styles.form}>
          <TouchableOpacity
            style={styles.buttonForm}
            onPress={() => navigation.navigate('TelaLogin', {})}>
            <Text style={styles.textButton}>Entrar</Text>
          </TouchableOpacity>

          <TouchableOpacity
            style={styles.buttonForm}
            onPress={() => navigation.navigate('TelaCadastro', {})}>
            <Text style={styles.textButton}>Cadastrar</Text>
          </TouchableOpacity>

        </View>
      </LinearGradient>
  );
}


import { View } from 'react-native';
import { Tabmenu } from '../components/Tabmenu.js';
import { ImageBackground, StyleSheet, Text } from 'react-native';
import { LinearGradient } from 'expo-linear-gradient';

export function TelaPerfil() {
  return (
    <LinearGradient
      style={styles.container}
      colors={['#87CEEB', 'rgba(135, 206, 235, 0)']}>
      
    </LinearGradient>
  );
}

const styles = StyleSheet.create({
  container: {
    flex:1,
    justifyContent:"center",
    width: '100%',
    height: 711,
  }
});
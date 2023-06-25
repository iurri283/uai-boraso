import { TelaInicial } from '../screens/TelaInicial';
import { TelaLogin } from '../screens/TelaLogin';
import { TelaCadastro } from '../screens/TelaCadastro';
import { createStackNavigator } from '@react-navigation/stack';
import AsyncStorage from '@react-native-async-storage/async-storage';

const Stack = createStackNavigator();

export async function getToken(){
  return await AsyncStorage.getItem("token");
}

export function Autentica() {
  return (
    <Stack.Navigator initialRouteName="TelaInicial" detachInactiveScreens>

      <Stack.Screen
        name="TelaInicial"
        component={TelaInicial}
        options={{ headerShown: false }}
      />
      <Stack.Screen
        name="TelaLogin"
        component={TelaLogin}
        options={{ headerShown: false }}
      />
      
      <Stack.Screen
        name="TelaCadastro"
        component={TelaCadastro}
        options={{ headerShown: false }}
      />
    </Stack.Navigator>
  );
}

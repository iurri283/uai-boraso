import { Text, View, StyleSheet, Image, TouchableOpacity } from 'react-native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';

import { TelaViagens } from '../screens/TelaViagens.js';
import { TelaCriarCarona } from '../screens/TelaCriarCarona.js';
import { TelaListarCaronas } from '../screens/TelaListarCaronas.js';
import { TelaMensagens } from '../screens/TelaMensagens.js';
import { TelaPerfil } from '../screens/TelaPerfil.js';
import { FontAwesome5, AntDesign, Ionicons, FontAwesome } from '@expo/vector-icons';

const Tab = createBottomTabNavigator();

export function TabMenu() {
  return (
    <Tab.Navigator
      initialRouteName="listarCaronas"
      screenOptions={(props) => ({
        headerShown: false,
        tabBarIcon: ({ focused, color, size }) => {
          let rn = props.route.name;

          if (rn == 'viagens') {
              if(focused){
                 return <FontAwesome5 name="history" size={24} color="white"/>;
              }else{
                return <FontAwesome5 name="history" size={24} color="#374957"/>;
              }
          } else if (rn == 'criarCarona') {
            if(focused){
              return <AntDesign name="pluscircleo" size={24} color="white"/>;
           }else{
              return <AntDesign name="pluscircleo" size={24} color="#374957"/>;
           }
            
          } else if (rn == 'listarCaronas') {
            if(focused){
              return <FontAwesome name="search" size={24} color="white"/>;
           }else{
              return <FontAwesome name="search" size={24} color="#374957"/>;;
           }
          } else if (rn == 'mensagens') {
            if(focused){
              return <AntDesign name="message1" size={24} color="white"/>;
           }else{
              return <AntDesign name="message1" size={24} color="#374957"/>;
           }
          } else if (rn == 'perfil') {
            if(focused){
              return <Ionicons name="person-circle-outline" size={24} color="white"/>;
           }else{
              return <Ionicons name="person-circle-outline" size={24} color="#374957"/>;
           }
          }
        },
        tabBarLabelStyle: { fontSize: 10, color: "#374957" },
         tabBarStyle:{backgroundColor: "#87CEEB"},
        tabBarHideOnKeyboard: true
      })}>
      <Tab.Screen name="viagens" component={TelaViagens} />

      <Tab.Screen name="criarCarona" component={TelaCriarCarona} />

      <Tab.Screen name="listarCaronas" component={TelaListarCaronas} />

      <Tab.Screen name="mensagens" component={TelaMensagens} />

      <Tab.Screen name="perfil" component={TelaPerfil} />
    </Tab.Navigator>
  );
}

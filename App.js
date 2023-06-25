import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import { useContext } from 'react';
import { AuthContext } from './context/authContext';
import { LinearGradient } from 'expo-linear-gradient';
import { Autentica } from './routes/Autentica';
import { NavigationContainer } from '@react-navigation/native';
import { AuthContextProvider } from './context/authContext';
import { TabMenu } from './components/Tabmenu';


function Router() {
  const { logado } = useContext(AuthContext);

  return (
    <NavigationContainer>
      {!logado ? <Autentica /> : <TabMenu />}
    </NavigationContainer>
  );
}

export default function App() {
  return (
    < AuthContextProvider >
      <Router />
    </AuthContextProvider >
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});

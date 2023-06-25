import { createContext, useContext, useState } from 'react';
import AsyncStorage from '@react-native-async-storage/async-storage';

export const AuthContext = createContext({});

export function AuthContextProvider({children}) {

  const [token, setToken] = useState("");
  const [dadosUsuario, setDadosUsuario] = useState({});

  async function handleTokenLogin (newToken){
    setToken(newToken);
    return await AsyncStorage.setItem("token", newToken);
  }

  const logado = !!token;

  return (
    <AuthContext.Provider value={{handleTokenLogin, logado, setDadosUsuario, dadosUsuario}}>
      {children}
    </AuthContext.Provider>
  )
}
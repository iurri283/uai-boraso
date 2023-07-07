import React, { useState, useEffect } from "react";
import { StyleSheet, Text, View, FlatList, TouchableOpacity } from 'react-native';
import { api } from "../utils/api";
import { LinearGradient } from 'expo-linear-gradient';

import { useContext } from 'react';
import { AuthContext } from '../context/authContext';
import { CaronasContext } from '../context/caronasContext';

export function TelaListarCaronas() {
  const [data, setData] = useState([]);
  const [refreshing, setRefreshing] = useState(true);

  const { dadosUsuario } = useContext(AuthContext);
  const { minhasCaronas, setMinhasCaronas } = useContext(CaronasContext);

  function fetchCarona() {
    setRefreshing(true);
    api.get('Carona/listar-caronas')
      .then(resJson => {
        setData(resJson.data);
        setRefreshing(false);
      })
      .catch(e => {
        setRefreshing(false);
      });
  }

  useEffect(() => {
    fetchCarona();
  }, [minhasCaronas]);

  const ItemSeparator = () => (
    <View style={{
      height: 1,
      backgroundColor: "rgba(0,0,0,0.5)",
      marginLeft: 5,
      marginRight: 5,
    }} />
  );

  const handleRefresh = () => {
    setRefreshing(false);
  };

  function entrarCarona(crn_id){
    // console.log(crn_id, dadosUsuario.usu_id);
    api.post('Carona_has_Usuario/add_passageiro/'+crn_id, {
      usu_id: dadosUsuario.usu_id
    })
        .then(resJson => {
          fetchCarona();
          setMinhasCaronas(crn_id);
          setRefreshing(false);
        })
        .catch(e => {
          setRefreshing(false);
        });
  }

  const CaronaItem = ({ item }) => {
    const [dateTimeString] = useState(item.crn_data_horario);
    const [datePart, timePart] = dateTimeString.split('T');

    const [year, month, day] = datePart.split('-');
    const [hour, minute] = timePart.split(':');

    const date = new Date(year, month - 1, day);
    const time = hour + ':' + minute;

    return (
      <View style={styles.listItem}>
        <View style={{ alignItems: "center", flex: 1, paddingTop: 10, justifyContent: "center" }}>
          <Text style={{ fontWeight: "bold" }}>{item.crn_saida} --&gt; {item.crn_destino}</Text>
          <Text style={{ fontWeight: "bold" }}>Data: {date.toLocaleDateString()}</Text>
          <Text style={{ fontWeight: "bold" }}>Horário: {time}</Text>
          <Text style={{ fontWeight: "bold" }}>Vagas: {item.vagas}</Text>
          <Text style={{ fontWeight: "bold" }}>Preço: R${item.crn_preco} </Text>
        </View>
        <View style={styles.botoes}>
          <TouchableOpacity
            style={styles.buttonEntrar}
            onPress={() => {entrarCarona(item.crn_id)}}
          >
            <Text style={{ color: "white", fontWeight: 'bold' }}>Entrar</Text>
          </TouchableOpacity>
          <TouchableOpacity
            style={styles.buttonEntrar}
            onPress={() => { alert("Obervações: " + item.crn_observacoes); }}
          >
            <Text style={{ color: "white", fontWeight: 'bold' }}>OBS</Text>
          </TouchableOpacity>
        </View>
      </View>
    );
  };

  return (
    <LinearGradient
      style={styles.container}
      colors={['#87CEEB', 'rgba(135, 206, 235, 0)']}>
      <FlatList
        data={data}
        renderItem={({ item }) => <CaronaItem item={item} />}
        keyExtractor={item => item.crn_id.toString()}
        ItemSeparatorComponent={ItemSeparator}
        refreshing={refreshing}
        onRefresh={handleRefresh}
      />
    </LinearGradient>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#F7F7F7',
    marginTop: 30
  },
  listItem: {
    margin: 10,
    padding: 10,
    backgroundColor: "#FFF",
    width: "80%",
    height: 170,
    flex: 1,
    alignSelf: "center",
    flexDirection: "row",
    borderRadius: 5
  },
  botoes:{
    justifyContent: 'space-evenly',
  },
  buttonEntrar: {
    height: 30,
    width: 55,
    borderWidth: 3,
    borderColor: 'rgba(23, 120, 184, 1)',
    backgroundColor: 'rgba(23, 120, 184, 0.57)',
    borderRadius: 5,
    justifyContent: "center",
    alignItems: "center"
  }
});

import React, { useState, useEffect } from "react";
import { FlatList, StyleSheet, Text, View, TouchableOpacity, Alert, Modal, Pressable } from 'react-native';
import { LinearGradient } from 'expo-linear-gradient';
import { api } from "../utils/api";
import { Ionicons, AntDesign } from '@expo/vector-icons';

import { useContext } from 'react';
import { CaronasContext } from '../context/caronasContext';


export function TelaViagens() {
  const [data, setData] = useState([]);
  const [refreshing, setRefreshing] = useState(true);

  const { minhasCaronas } = useContext(CaronasContext);
  
  function fetchHistoricoCarona() {
    setRefreshing(true);
    api.get('Carona/historico')
      .then(resJson => {
        setData(resJson.data);
        setRefreshing(false);
      })
      .catch(e => {
        setRefreshing(false);
      });
  }

  useEffect(() => {
    fetchHistoricoCarona();
  }, [minhasCaronas]);

  const ItemSeparator = () => (
    <View style={{
      height: 1,
      backgroundColor: "rgba(0,0,0,0.5)",
      marginLeft: 5,
      marginRight: 5,
    }} />
  );

  function excluirCarona(crn_id){
    api.delete('Carona/cancelar/'+crn_id)
        .then(resJson => {
          fetchHistoricoCarona();
          setRefreshing(false);
        })
        .catch(e => {
          setRefreshing(false);
        });
  }

  const handleRefresh = () => {
    setRefreshing(false);
  };

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
          <Text style={{ fontWeight: "bold" }}>Vagas: {item.crn_num_vagas}</Text>
          <Text style={{ fontWeight: "bold" }}>Preço: R${item.crn_preco} </Text>
          <Text style={{ fontWeight: "bold", paddingTop: 10 }}>Observações: {item.crn_observacoes}</Text>
        </View>
        <TouchableOpacity
          style={{ position:"absolute", right:5, top:5}}
          onPress={() => { excluirCarona(item.crn_id) }}
        >
          <AntDesign name="closecircle" size={24} color="#374957"/>
        </TouchableOpacity>
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
    flex: 1,
    alignSelf: "center",
    flexDirection: "row",
    borderRadius: 5
  }, lista: {
    marginTop: 100
  }, modalView: {
    zIndex: 99,
    margin: 20,
    backgroundColor: 'white',
    borderRadius: 20,
    padding: 35,
    alignItems: 'center',
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 4,
    elevation: 5,
  },
  button: {
    borderRadius: 20,
    padding: 10,
    elevation: 2,
  },
  buttonOpen: {
    backgroundColor: '#F194FF',
  },
  buttonClose: {
    backgroundColor: '#2196F3',
  },
  textStyle: {
    color: 'white',
    fontWeight: 'bold',
    textAlign: 'center',
  },
  modalText: {
    marginBottom: 15,
    textAlign: 'center',
  },
});
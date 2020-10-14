import React, { useState, useEffect } from 'react';
import { SafeAreaView, Image, FlatList, StyleSheet, Text, StatusBar } from 'react-native';
import { TouchableOpacity } from 'react-native-gesture-handler';

import api from '../../untils/api';


const HomeScreen = ({navigation}) => {

    const [contacts, setContacts] = useState(null);


    api.get('/contatos').then(response =>{
      if(response.ok){
        setContacts(response.data)
      }
    })
    
    const renderItem = ({ item }) => (
      <TouchableOpacity style={styles.item} onPress={()=> navigation.navigate('Details', {contactId: item.id})}>
        <Image
          style={styles.tinyLogo}
          source={{
            uri: 'https://reactnative.dev/img/tiny_logo.png',
          }}
        />
        <Text style={styles.title}>{item.nome}</Text>
      </TouchableOpacity>
    );

    return (
        <SafeAreaView style={styles.container}>
          <FlatList
              data={contacts}
              renderItem={renderItem}
          />
        </SafeAreaView>
    );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    marginTop: StatusBar.currentHeight || 0,
  },
  item: {
    flexDirection: 'row',
    alignItems: 'center',
    textAlign: 'center',
    backgroundColor: '#f9c2ff',
    padding: 20,
    marginVertical: 8,
    marginHorizontal: 16,
  },
  title: {
    fontSize: 32,
  },
  tinyLogo: {
    width: 50,
    height: 50,
    marginRight: 60,
  }
});

export default HomeScreen;
import React, { useState, useEffect } from 'react';
import { SafeAreaView, Image, FlatList, Text, ActivityIndicator, View } from 'react-native';
import { TouchableOpacity } from 'react-native-gesture-handler';

import api from '../../untils/api';
import styles from './styles'


const HomeScreen = ({navigation}) => {

    const [contacts, setContacts] = useState([]);
    const [loading, setLoadings] = useState(true);


    

    useEffect(() => {
      api.get('/contatos').then(response =>{
        if(response.ok){
          setContacts(response.data);
          setLoadings(false);
        }
      });
    }, []);

    if(loading){
      return(
        <View style={styles.viewActiviti}>
          <ActivityIndicator size="large" color="#00ff00" />
        </View>
      )
    }
    
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
              keyExtractor={(item) => item.id.toString()}
          />
          <TouchableOpacity style={styles.item} onPress={()=> navigation.navigate('Create')}>
            <Text>Cadastrar</Text>
          </TouchableOpacity>
        </SafeAreaView>
    );
}

export default HomeScreen
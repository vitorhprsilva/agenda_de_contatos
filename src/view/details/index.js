import React, { useState, useEffect } from 'react';
import { View, Text, StyleSheet, Image, ActivityIndicator } from 'react-native';

import api from '../../untils/api'

const DetailsScreen = ({route}) => {

    const [contacts, setContacts] = useState([]);
    const [loading, setLoadings] = useState(true);
    const { contactId } = route.params;

    

    useEffect(() => {

        api.get(`/contatos/${contactId}`).then(response=>{
            if(response.ok){
                setContacts(response.data)
                setLoadings(false); 
            }
        })
         
    }, []);

    if(loading){
      return(
        <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center'}}>
          <ActivityIndicator size="large" color="#00ff00" />
        </View>
      )
    }
    

    return (
        <View style={{ flex: 1, alignItems: 'center'}}>
            <View style={{flex: 1, alignItems: 'center'}}>
                <Image
                    style={styles.tinyLogo}
                    source={{
                        uri: 'https://reactnative.dev/img/tiny_logo.png',
                    }}
                />
            </View>
            <View style={{flex: 1, alignItems: 'center', justifyContent: 'center'}}>
                <Text style={styles.nome}> {contacts.nome} </Text>
                <Text style={styles.email}> {contacts.email} </Text>
                <Text> {} </Text>
            </View>
        </View>
    );
}

const styles = StyleSheet.create({
    tinyLogo: {
      width: 100,
      height: 100,
      margin: 50,
    },
    nome: {
        fontSize: 50,
        fontWeight: "bold",
    },
    email:{
        fontSize: 30,
    }
  });

export default DetailsScreen;
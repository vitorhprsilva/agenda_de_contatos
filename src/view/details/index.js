import React, { useState, useEffect } from 'react';
import { View, Text, StyleSheet, Image } from 'react-native';

import api from '../../untils/api'

const DetailsScreen = ({navigation, route}) => {

    const [contacts, setContacts] = useState([]);

    const { contactId } = route.params;

    api.get(`/contatos/${contactId}`).then(response=>{
        if(response.ok){
            setContacts(response.data)
        }
    })

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
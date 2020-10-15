import React, { useState, useEffect } from 'react';
import { View, Text, Image, ActivityIndicator } from 'react-native';

import api from '../../untils/api'
import styles from './styles'

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
        <View style={styles.container}>
          <ActivityIndicator size="large" color="#00ff00" />
        </View>
      )
    }
    

    return (
        <View style={styles.content}>
            <View style={styles.content}>
                <Image
                    style={styles.tinyLogo}
                    source={{
                        uri: 'https://reactnative.dev/img/tiny_logo.png',
                    }}
                />
            </View>
            <View style={styles.container}>
                <Text style={styles.nome}> {contacts.nome} </Text>
                <Text style={styles.email}> {contacts.email} </Text>
                <Text> {} </Text>
            </View>
        </View>
    );
}


export default DetailsScreen;
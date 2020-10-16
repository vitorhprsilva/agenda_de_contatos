import React, { useState, useEffect } from 'react';
import { View, Text} from 'react-native';
import { TextInput, IconButton } from 'react-native-paper';

import api from '../../untils/api'
import styles from './styles'

const CreateScreen = () => {

    const [contacts, setContacts] = useState([]);
    const [loading, setLoadings] = useState(true);
    const [name, setName] = React.useState('');
    const [email, setEmail] = React.useState('');
    

    // useEffect(() => {

    //     api.post(`/contatos/`, {params: {name: contacts.name, email: contacts.email}}).then(response=>{
    //         if(response.ok){
    //             setContacts(response.data)
    //             setLoadings(false); 
    //         }
    //     })
         
    // }, []);

    // if(loading){
    //   return(
    //     <View style={styles.container}>
    //       <ActivityIndicator size="large" color="#00ff00" />
    //     </View>
    //   )
    // }


    function enviar(){
        
        api.post(`/contatos/`, {params: {name: name, email: email}})
        .then(response=>{
            if(response.ok){
                setContacts(response.data)
            }
        })

    };
    

    return (
        <View>
            <TextInput
                label="name"
                value={name}
                onChangeText={text => setName(text)}
            />

            <TextInput
                label="email"
                value={email}
                onChangeText={text => setEmail(text)}
            />

            <IconButton
                icon="send"
                color="#00ff00"
                style={styles.buttonSend}
                size={40}
                onPress={enviar}
            />
            <Text>{name}</Text>
            <Text>{email}</Text>

        </View>

    );
}


export default CreateScreen;
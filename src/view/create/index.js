import React, { useState, useEffect } from 'react';
import { View, ActivityIndicator } from 'react-native';
import { TextInput } from 'react-native-paper';

import api from '../../untils/api'
import styles from './styles'

const CreateScreen = () => {

    const [contacts, setContacts] = useState([]);
    const [loading, setLoadings] = useState(true);
    const [text, setText] = React.useState('');

    

    useEffect(() => {

        api.post(`/contatos/`, {params: {name: contacts.name, email: contacts.email}}).then(response=>{
            if(response.ok){
                setContacts(response.data)
                setLoadings(false); 
            }
        })
         
    }, []);

    // if(loading){
    //   return(
    //     <View style={styles.container}>
    //       <ActivityIndicator size="large" color="#00ff00" />
    //     </View>
    //   )
    // }
    

    return (
            <TextInput
                label="Email"
                value={text}
                onChangeText={text => setText(text)}
            />

    );
}


export default CreateScreen;
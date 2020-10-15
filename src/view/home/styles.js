
import {StyleSheet, StatusBar} from 'react-native';

const styles = StyleSheet.create({
    container: {
      flex: 1,
      marginTop: StatusBar.currentHeight || 0,
    },
    viewActiviti: { 
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center'
    },
    item: {
      flexDirection: 'row',
      alignItems: 'center',
      textAlign: 'center',
      backgroundColor: '#f9c2ff',
      borderRadius: 20,
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

  export default styles;
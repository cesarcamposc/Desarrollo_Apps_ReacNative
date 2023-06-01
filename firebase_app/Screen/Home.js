import { StyleSheet, Text, TouchableOpacity, View } from 'react-native'
import React from 'react'
import { useNavigation } from '@react-navigation/native';
import { auth } from '../firebase';


const Home = () => {
    const navigation = useNavigation();

    const handleSignOut = ()=>{
        auth
        .signOut()
        .then(() =>{navigation.replace("Login")});
    };

    return (
    <View style = {styles.container}>
        <Text>Tu email es </Text>
        <TouchableOpacity style = {styles.button} onPress={handleSignOut}>
            <Text style= {styles.buttonText}>Sign Out</Text>
        </TouchableOpacity>
    </View>
  )
}

export default Home

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
    },

    button:{
        backgroundColor: 'blue',
        width: '50%',
        padding: 15,
        borderRadius: 10,
        alignItems: 'center',
        marginTop: 50,
    },

    buttonText:{
        color: 'white',
        fontWeight: 'bold',
        fontSize: 15,
    }
})
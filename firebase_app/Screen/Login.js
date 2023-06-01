import { KeyboardAvoidingView, StyleSheet, Text, TextInput, TouchableOpacity, View } from 'react-native';
import React, { useState, useEffect } from 'react';
import { useNavigation } from '@react-navigation/core';
import { auth } from '../firebase';

const Login = () => {

  const [email,setEmail] = useState("");
  const [password, setPassword] = useState("");

 const navigation = useNavigation();

  useEffect(()=>{
    const userState = auth.onAuthStateChanged()
  });

  const handleSignUp = ()=>{
    auth
    .createUserWithEmailAndPassword(email,password)
    .then((userCredentials)=> {
      const user = userCredentials.user;
    })
  };

  const handleLogin = ()=>{
    auth
    .signInWithEmailAndPassword(email,password)
    .then((userCredentials)=> {
      const user = userCredentials.user;
    })
  };


  return (
    <KeyboardAvoidingView style ={styles.container}>
      <View>
        <Text style={styles.title} >Login / Register Screen</Text>
      </View>
      <View>
        <TextInput 
        style={styles.input}
        placeholder='Email'
        value = {email}
        onChangeText = {(text) => setEmail(text)}
        />
        <TextInput
        style={styles.input}
        placeholder='Password'
        value={password}
        onChangeText={(text) => setPassword(text)}
        secureTextEntry = {true}
        />

      </View>

      <View style={styles.buttonContainer}>
        <TouchableOpacity style={styles.button} onPress={handleLogin}>
          <Text style={styles.textButton}> Login </Text>
        </TouchableOpacity>

        <TouchableOpacity style = {styles.button} onPress={handleSignUp}>
          <Text style= {styles.textButtonOut}>Register</Text>
        </TouchableOpacity>
      </View>
    </KeyboardAvoidingView>


  )
}

export default Login

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },

  title:{
    fontSize: 50,
    fontWeight: 'bold',
    color: 'blue'
  },

  input: {
    backgroundColor: 'white',
    borderRadius: 10,
    paddingHorizontal: 10,
    paddingVertical: 10,
    marginTop: 5,
    width:'80%',
  },

  buttonContainer:{
    display:flex,
    flexDirection: 'row',
    width:'50%',
    justifyContent: 'center',
    alignItems: 'center',
    marginTop: 50,
  },

  button:{
    backgroundColor: 'orange',
    width: '80%',
    borderRadius: 10,
    alignItems: 'center',

  },

  textButton: {
    color: 'white',
    fontWeight: 'bold',
    fontSize: 20,
  },

  textButtonOut:{
    color: 'orange',
    fontWeight: 'bold',
    fontSize: 20,
  }

})
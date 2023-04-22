import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, TextInput, Button, Image, TouchableOpacity } from 'react-native';


export default function App() {
  return (
    <View style={styles.container}>
      <Image style={styles.image} source={require("./assets/logopng.png")} />
      <Text style={styles.titulo} ></Text>
      <Text style={styles.subtitulo}> Inicia sesión en tu cuenta</Text>
      <TextInput placeholder = " ingrese su email" style = {styles.TextInput}/>
      <TextInput placeholder = " ingrese su password" style = {styles.TextInput}/>
      
      {/* <Button style={styles.buttonLogin} title='Iniciar Sesión'/> */}
      <TouchableOpacity style= {styles.buttonLogin}>
        <Text > LOGIN </Text>
      </TouchableOpacity>
      <StatusBar style="auto" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },

  image:{

    width: 200,
    height: 200,    
    marginBottom: 30,

  },

  titulo:{
    fontSize : 70,
    color: 'red',
    fontWeight: 'bold', 
  },
  subtitulo: {
    fontSize: 25,
    color: 'gray',
    fontWeight: 'bold'
  },

  TextInput:{
    borderWidth:2,
    borderColor: 'orange',
    width: '80%',
    height: 50,
    padding: 10,
    marginTop:30,
    borderRadius: 10,
  },

  buttonLogin:{
    alignItems: 'center',
    width: "80%",
    height: 50,
    borderRadius: 25,
    marginTop: 30,
    justifyContent: 'center',
    backgroundColor: '#FF1592',

  },

});

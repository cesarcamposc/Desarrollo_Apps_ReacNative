import { StatusBar } from 'expo-status-bar';
import { useState } from 'react';
import { FlatList, SafeAreaView, StyleSheet, Text, TouchableOpacity, View } from 'react-native';

const listTab = [
  {
    status: 'Home'
  },
  {
    status: 'About',
  },

  {
    status: 'Contact',
  }
]

const data = [
  {
    name: 'Home content',
    text: 'This is my homepage. Here I welcome you to my website and try me best to make a good impression. I tell you about the services I provide and encourage you to venture into my site.',
    status: 'Home'
  },

  {
    name: 'About content',
    text: 'Here I go into details about myself and my business, including the services we provide, how we started and our overall ethos.',
    status: 'About'
  },

  {
    name: 'Contact content',
    text: 'Here we give you information on how to contact us for business discussions and possible collaborations',
    status: 'Contact'
  },
]

export default function App() {
  
  const [status,setStatus] = useState('Home');

  const [dataList, setDataList] = useState([...data.filter(index => index.status == 'Home')])

  const setStatusFilter = status =>{
    if (status !== 'Home') {
      setDataList([...data.filter(index => index.status == status)])      
    } else {
      setDataList([...data.filter(index => index.status == 'Home')])      
    }

    setStatus(status)
  }

  const renderItem = ({item, index})=>{
    return(
      <View key = {index} style={styles.container}>
        <Text style = {styles.itemName}>{item.name}</Text>
        <Text>{item.text}</Text>
      </View>
      
    )

  }
  
  return (

    <SafeAreaView style = {styles.itemContainer}>
      <View style = {styles.listTab}>
        {
          listTab.map((index) => {

            return(
              <TouchableOpacity style = {[styles.btnTab, status == index.status && styles.btnTabActive]} onPress={()=> setStatusFilter(index.status)}>
                <Text style = {[styles.textTab, status == index.status && styles.textTabActive]}>{index.status}</Text>
               
              </TouchableOpacity>
            )
          })
        }
      </View>

      <FlatList data = {dataList} keyExtractor={(item)=>item.toString()} renderItem={renderItem}/>

    </SafeAreaView>
    
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: 'row',
    paddingHorizontal: 10,
    paddingLeft: '10%',
    justifyContent: 'center',
  },

  listTab: {

    backgroundColor: '#fff',
    flexDirection: 'column',
    justifyContent: 'flex-start',
    marginTop: 20,
    marginLeft: 10,
    height:150,

  },

  btnTab:{
    width: 80,
    flexDirection: 'row',
    marginBottom: 10,
    paddingHorizontal: 15,
    paddingVertical: 15,
    justifyContent: 'center',
  },

  textTab: {
    fontSize: 15,
  },

  btnTabActive: {
    backgroundColor: 'purple',
    borderRadius: 5,
  },

  textTabActive: {
    color: 'white',
  },

  itemContainer: {
    //justifyContent: 'flex-end',
    paddingVertical: 10,
    marginLeft: 30,
    marginTop: 10
  },
  
  itemName: {
    fontWeight : 'bold',
    fontSize: 25,
    marginBottom: 5,
  }  

});

import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, Button } from 'react-native';
import React, {useState, useEffect} from 'react';
export default function App() {
  const [Jokes, SetJokes] =useState("")

  const getJoke= async()=>{
     const res=await fetch("http://api.icndb.com/jokes/random?firstName=Ramesh&lastName=Suresh")
       const result= await res.json();
       SetJokes(result.value.joke)
  }
  useEffect(()=>{
    getJoke()

  }, []);

  return (
    <View style={styles.container}>
      <Text style={styles.headerText}>Jokes App</Text>
      
      {Jokes ? <Text style={styles.jokesText}> {Jokes}</Text>: null}
      <Button
      title="Get Jokes"
      onPress={()=>{getJoke()
      }} />
      <View style={styles.footerText}>
        <Text> Made By Abhishek Giri</Text>
      </View>

      <StatusBar style="auto" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    marginTop: 50,
    //backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: "oldlace",
   // justifyContent: 'flex-end',
    

  },
  headerText:{
    marginBottom: 10,
    fontSize: 20,
    fontWeight: "bold",
    color: 'red',

  },

  jokesText:{
    marginTop: 10,
    fontSize: 20,
    fontWeight: "bold",
    //flexWrap:"wrap",
    // marginLeft: 5,
    // marginRight:5,
     marginBottom:20,
   
    paddingLeft:30,
    paddingRight:30,
    textShadowColor:'#ffff',
    textShadowOffset:{width: 5, height: 5},
    textShadowRadius:5,
    color: 'blue',
    borderColor: 'black',
    borderWidth: 2
  },
  footerText:{
  //  justifyContent:"bottom"
  //flex: 1,
  justifyContent: 'flex-end',
  marginTop:200
  }
});

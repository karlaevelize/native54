import React, { useEffect, useState } from "react";
import { Text, ScrollView, Image, Button, Alert, TouchableOpacity, View, StyleSheet } from "react-native";
import axios from "axios"

export default function App() {

  const [ data, setData ] = useState([])

  const fetchData = async () => {
    const response = await axios.get("https://hp-assessment-api.herokuapp.com/characters")
    console.log("response", response)
    setData(response.data)
  }

  useEffect(() => {
    fetchData()
  }, [])

  return (
    <ScrollView style={{marginVertical: 50}}>
      <Text style={{fontSize: 24, fontWeight: "bold", textAlign: "center"}}>
        Hello from React Native!
      </Text>
      <TouchableOpacity onPress={() => Alert.alert("Squeeze me!")}>
        <Image 
          source={{uri: "https://images.immediate.co.uk/production/volatile/sites/3/2021/06/Fortnite-rubber-ducks-8ab8d63.jpeg?quality=90&resize=620,413"}} 
          style={{width: "100%", height: 200, marginVertical: 20}}
        />
      </TouchableOpacity>
      <Button
        title="Click me"
        color="green"
        onPress={() => Alert.alert("Quack quack")}
      />
      {data.map(char => <View style={{alignItems: "center"}}>
        <Text style={styles.mapText}>{char.name}</Text>
        <Image source={{uri: char.imgUrl}} style={styles.mapImage}/>
      </View>)}
    </ScrollView>
  );s
}

const styles = StyleSheet.create({
  mapImage: {
    width: "50%",
    height: 150
  },
  mapText: {
    fontSize: 20,
    fontWeight: "bold",
    margin: 10 
  }
})
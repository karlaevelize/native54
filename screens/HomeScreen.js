import React, { useState, useEffect } from "react";
import axios from "axios"
import { ScrollView, Text, Image, Button, Alert, TouchableOpacity, View, StyleSheet } from "react-native";

export default function HomeScreen(){

  const [ data, setData ] = useState([])

  const fetchData = async () => {
    const response = await axios.get("https://hp-assessment-api.herokuapp.com/characters")
    setData(response.data)
  }

  console.log("data", data)

  useEffect(() => {
    fetchData()
  }, [])

  return (
    <ScrollView style={{marginVertical: 60}}>
      <Text style={{fontSize: 24, fontWeight: "bold", textAlign: "center"}}>
        Hello from React Native
      </Text>
      {/* what if I want to click the image? */}
      {/* use "TouchableOpacity" to make all clickable */}
      <TouchableOpacity onPress={() => Alert.alert("Love the Sheltie")}>
        {/* needs a source and style to show up depending on size */}
        <Image 
          source={{uri:"https://media-01.imu.nl/storage/aniekwendt.nl/518/sheltie-shetland-sheepdog-800x342.png"}}
          style={{ width: "100%", height: 150, marginVertical: 20 }}
        />
      </TouchableOpacity>
      {/* you can use alert.alert or alert.prompt */}
      {/* prompt get input from user */}
      <Button 
        onPress={() => Alert.alert("Shelties are great!")}
        title="Click me"
        color="blue"
      />
      {data.map(char => {
        return (
          <View style={{marginHorizontal: 95}}>
            <Text style={{textAlign: "center", fontWeight: "bold"}}>{char.name}</Text>
            <Image 
              source={{uri: char.imgUrl}}
              style={styles.image}
            />
          </View>
        )
      })}
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  image: {
    width: 200, 
    height: 200, 
    marginVertical: 20
  }
})
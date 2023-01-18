import React from "react";
import { View, StyleSheet, StatusBar} from "react-native";
import Primeiro from "./src/components/Primeiro";

export default function App(){

  return(
    <View style={styles.container}>
      <Primeiro/>
    </View>
  )
}

const styles = StyleSheet.create({
  container:{
      marginTop: StatusBar.currentHeight? StatusBar.currentHeight:30,
  },
})
import React, { useEffect } from "react";
import { View, StyleSheet, StatusBar} from "react-native";

/* import Primeiro from "./src/components/Primeiro";
import CompDefault ,{ Comp2, Comp3 } from "./src/components/Multi"; //puxando como item específico e o default  */ 
import MinMax from "./src/components/MinMax";

export default function App(){

  /* useEffect(()=>{
    StatusBar.setBackgroundColor("#345cab")
  },[]) */

  return(
    <View style={styles.container}>
      {/* <Primeiro/>
      <CompDefault />
      <Comp3 />
      <Comp2 /> */}
      <MinMax min={3} max={30} />
      <MinMax min={1} max={10} />
    </View>
  )
}

const styles = StyleSheet.create({
  container:{
      marginTop: StatusBar.currentHeight? StatusBar.currentHeight:30,
      paddingLeft: 150,
      paddingRight: 150,
      flex: 1,
      justifyContent: "center",
      alignItems: "center",
  },
})
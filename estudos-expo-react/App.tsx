import React, { useEffect } from "react";
import { View, StyleSheet, StatusBar, Text} from "react-native";
import Botao from "./src/components/Botao";
import Pai from "./src/components/direta/Pai";
import Pai2 from "./src/components/indireta/Pai2";
import Count from "./src/components/Contador";

/* import Primeiro from "./src/components/Primeiro";
import CompDefault ,{ Comp2, Comp3 } from "./src/components/Multi"; //puxando como item específico e o default  */ 
import MinMax from "./src/components/MinMax";
import RandomActivitie from "./src/components/TarefaRandomNumber";
import TituloFrag from "./src/components/TituloFragment";
import ContV2 from "./src/components/contador/ContadorV2";
import DiferenciarSO from "./src/components/Diferenciar";

export default function App(){

  /* useEffect(()=>{
    StatusBar.setBackgroundColor("#345cab")
  },[]) */

  return(
    <View style={styles.container}>
      {/* <Primeiro/>
      <CompDefault />
      <Comp3 />
      <Comp2 />
      <MinMax min={3} max={30} />
      <MinMax min={1} max={10} />
      <RandomActivitie min={5} max={20} />
      <RandomActivitie min={5} max={20} />
      <RandomActivitie min={5} max={20} />
      <RandomActivitie min={5} max={15} />
      <TituloFrag titulo="Cadastro" subtitulo="Tela de Cadastro" />
      <Botao/>
      <Count />
      <Pai2/>
      <ContV2/>
      */}
      <DiferenciarSO />
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
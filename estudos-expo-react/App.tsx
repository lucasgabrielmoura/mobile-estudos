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
import DiferenciarParImpar from "./src/components/difParImpar";
import Familia from "./src/components/relacao/Familia";
import Membro from "./src/components/relacao/Membro";
import UsuarioLogado from "./src/components/UsuarioLogado";
import Produtos from "./src/components/produtos/Produtos";
import ProdutosV2 from "./src/components/produtos/ProdutosV2";
import DigiteSeuNome from "./src/components/TypeSeuNomeControle";
import Quadrado from "./src/components/layout/Quadrado";
import FlexBoxV1 from "./src/components/layout/FlexBoxV1";
import FlexBoxV2 from "./src/components/layout/FlexBoxV2";
import FlexBoxV3 from "./src/components/layout/FlexBoxV3";
import FlexBoxV4 from "./src/components/layout/FlexBoxV4";
import Mega from "./src/components/megabaseadoclasse/Mega";

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
      <DiferenciarSO />
      <DiferenciarParImpar numero={1}/>
      <Familia>
        <Membro nome="Flavio" sobrenome="Arruda" />
        <Membro nome="Carlos" sobrenome="Arruda" />
      </Familia>
      <Familia>
        <Membro nome="Juradir" sobrenome="Silva" />
        <Membro nome="José" sobrenome="Silva" />
      </Familia>
      <UsuarioLogado nome="lucas" email="lucas@gmail.com"/> // funciona
      <UsuarioLogado nome="lucas"/> //não funciona por conta de props vazios
      <UsuarioLogado email="lucas@gmail.com"/> //não funciona por conta de props vazios
      <Produtos />
      <ProdutosV2 />
      <DigiteSeuNome />
      <FlexBoxV1/>
      <FlexBoxV2/>
      <FlexBoxV3/>
      <FlexBoxV4/>
      */}
      <Mega qtdDeNumeros={12}/>

    </View>
  )
}

const styles = StyleSheet.create({
  container:{
      padding: StatusBar.currentHeight? StatusBar.currentHeight:30,
      flex: 1,
      justifyContent: "center",
      alignItems: "center",
  },
})
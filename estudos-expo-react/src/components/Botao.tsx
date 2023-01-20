import React from "react";
import { Button, StyleSheet } from "react-native";

export default function Botao(){

    function inform1(){
        console.warn("Funcionou 1!")
    }
    function inform2(){
        console.warn("Funcionou 2!")
    }

    return(
        <> 
            <Button color={"#000"} title="Executar" onPress={inform1} />
            <Button color={"#000"} title="Executar" onPress={inform2} />
            <Button color={"#000"} title="Executar" onPress={() => console.warn("Funcionou 3!")} />
        </>
    )   
}

const style = StyleSheet.create({
    botao:{
        width:200,
    }
})
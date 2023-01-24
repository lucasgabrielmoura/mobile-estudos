import React from "react";
import { Button, Text, View } from "react-native";
type propstipo = {
    min:number,
    max:number,
    funcaoExibir: (n:number) => void,
}

export default function Filho2(props:propstipo){

    function gerarNumero(min:number,max:number){
        return Math.floor(Math.random() * (max - min + 1) + min)
    }

    return(
        <Button color={"#345cab"} title="Executar" onPress={() => props.funcaoExibir(gerarNumero(props.min, props.max))}  />
    )   
}


import React from "react";
import { Text } from "react-native";
import estilo from "../styles/estilo";

interface valoresprop{
    min: number;
    max: number;
}

export default function MinMax(props:valoresprop){
    return(
        <Text style={estilo.global}>O valor {props.max} é maior que o valor {props.min}</Text>
    )
}

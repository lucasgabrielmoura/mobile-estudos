import React from "react";
import { View, Text } from "react-native";
import estilo from "../styles/estilo";

type propstipo = {
    titulo:string,
    subtitulo:string,
}

export default function TituloFrag(props:propstipo){
    return(
        <>
            <Text style={estilo.global}>{props.titulo}</Text>
            <Text>{props.subtitulo}</Text>
        </>
    )   
}
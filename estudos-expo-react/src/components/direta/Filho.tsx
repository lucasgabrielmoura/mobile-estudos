import React from "react";
import { Text, View } from "react-native";
import estilo from "../../styles/estilo";

type propstipo = {
    titulo:string,
    subtitulo:string,
}

export default function Filho(props:propstipo){
    return(
        <View>
            <Text style={estilo.global}>{props.titulo}</Text>
            <Text>{props.subtitulo}</Text>
        </View>
    )   
}

import React from "react"
import { Text } from "react-native"
import estilo from "../styles/estilo"

type typeparimpar = {
    numero: number;
}

export default function DiferenciarParImpar(props:typeparimpar){
    return(
        <>
            {props.numero % 2 === 0?<Text style={estilo.global}>Par</Text>:props.numero % 1 === 0?<Text style={estilo.global}>Impar</Text>:false}
        </>
    )
}
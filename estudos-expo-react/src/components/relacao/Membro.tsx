import React from "react"
import { Text } from "react-native"
import estilo from "../../styles/estilo";

type nomes = {
    nome: string;
    sobrenome: string;
}

export default function Membro(props:nomes){
    return(
        <>
            <Text style={estilo.global}>
                {props.nome} {props.sobrenome}
            </Text>
        </>
    )
}
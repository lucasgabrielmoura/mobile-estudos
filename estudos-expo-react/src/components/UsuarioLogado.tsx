import React from "react"
import { Text } from "react-native"
import estilo from "../styles/estilo"
import { RendCondi } from "./If";

type usertype = {
    nome?:string;
    email?:string;
}

export default function UsuarioLogado(props:usertype){
    return(
        <RendCondi teste={props.nome && props.email?true:false}>
            <Text style={estilo.global}>Usuário Logado</Text>
            <Text style={estilo.global}>
                {props.nome} - {props.email}
            </Text>
        </RendCondi>
    )
}
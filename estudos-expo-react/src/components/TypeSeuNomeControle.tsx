import React, { useState } from "react"
import { Text, TextInput, View } from "react-native"
import estilo from "../styles/estilo"


export default function DigiteSeuNome(){

    const [nome, setNome] = useState("")

    //let nome = "Teste" 

    return(
        <View>
            <Text style={estilo.global}>{nome}</Text>
            <TextInput placeholder="Digite seu Nome" value={nome} onChangeText={nome => setNome(nome)}/>
        </View>
    )
} 
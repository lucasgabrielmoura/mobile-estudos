import React from "react"
import { View, Text, StyleSheet, StatusBar } from "react-native";

import estiloGlobal from "../styles/estilo";



export default function Primeiro(){
    console.warn("Olá!")
    return(
        <View>
            <Text style={estiloGlobal.global}>Primeiro Componentes!</Text>
        </View>
    )
}
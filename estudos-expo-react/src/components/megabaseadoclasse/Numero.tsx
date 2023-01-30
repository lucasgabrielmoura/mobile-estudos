import React from "react";
import { Text, View, StyleSheet } from "react-native";
import estilo from "../../styles/estilo";


type megaNumero = { 
    numeromega: number
}

export default function Numero(props:megaNumero){
    const styles = StyleSheet.create({
        container:{
            width: 50,
            alignItems: "center",
            justifyContent: "center",
            height: 50,
            borderRadius: 50,
            backgroundColor: "#000",
            margin: 5,
        },
        texto:{
            color:"#fff",
            fontSize: 20
        }
    })



    return(
        <View style={styles.container}>
            <Text style={styles.texto}>
                {props.numeromega}
            </Text>
        </View>
    )
}

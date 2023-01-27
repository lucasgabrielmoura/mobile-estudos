import React from "react"
import { View, StyleSheet, Text } from "react-native"

type cortipo = {
    color?: string,
    letra?: string,
    lado?: number,
}

export default function Quadrado(props:cortipo){

    const styles = StyleSheet.create({
        container:{
            alignItems: "center",
            justifyContent: "center",
            height: props.lado || 100,
            width: props.lado || 100,
            backgroundColor: props?.color || "#000",
        },
        texts:{
            fontSize: props.lado || 60,
            color: "#fff"
        }
    })
      

    return(
        <View style={styles.container}>
            <Text style={styles.texts}>{props?.letra}</Text>
        </View>
    )
} 
import React from "react"
import { View, StyleSheet, Text } from "react-native"

type cortipo = {
    color?: string,
    letra: string,
}

export default function Quadrado(props:cortipo){

    const styles = StyleSheet.create({
        container:{
            alignItems: "center",
            justifyContent: "center",
            height: 100,
            width: 100,
            backgroundColor: props?.color || "#000",
            margin: 10,
        },
        texts:{
            fontSize: 60,
            color: "#fff"
        }
    })
      

    return(
        <View style={styles.container}>
            <Text style={styles.texts}>{props?.letra}</Text>
        </View>
    )
} 
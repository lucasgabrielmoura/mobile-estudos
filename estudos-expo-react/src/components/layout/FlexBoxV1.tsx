import React from "react";
import { View, StyleSheet } from "react-native";
import Quadrado from "./Quadrado";

export default function FlexBoxV1(){

    const styles = StyleSheet.create({
        container:{
            flexGrow: 1,
            justifyContent: "space-between",
            backgroundColor: "#000",
        }
    })


    return(
        <View style={styles.container}>   
            <Quadrado letra="G" color="#510399"/>
            <Quadrado letra="A" color="#342cab"/>
            <Quadrado letra="B" color="#993399"/>
            <Quadrado letra="I" color="#400023"/>
            <Quadrado letra="❦" color="#6B0000"/>
        </View>
    )
}
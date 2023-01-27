import React from "react";
import { View, StyleSheet } from "react-native";
import Quadrado from "./Quadrado";

export default function FlexBoxV3(){

    const styles = StyleSheet.create({
        container:{
            height: 650,
            flexDirection: "row",
            justifyContent: "space-evenly",
            alignItems: "flex-start",
            width: "100%",
            backgroundColor: "#000",
        }
    })


    return(
        <View style={styles.container}>   
            <Quadrado color="#510399" lado={20}/>
            <Quadrado color="#342cab" lado={30}/ >
            <Quadrado color="#993399" lado={40}/>
            <Quadrado color="#400023" lado={50}/>
            <Quadrado color="#6B0000" lado={60}/>
        </View>
    )
}
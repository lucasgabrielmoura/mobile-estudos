import React, { useState } from "react";
import { Text, View, StyleSheet } from "react-native";
import estilo from "../../styles/estilo";
import ContBotoes from "./ContadorBotoes";

type conttipo = {
    number: number;
}


export default function ContDisplay(props:conttipo){


    return(
        <View style={styles.display}>
            <Text style={[estilo.global, styles.diplayText]}>{props.number}</Text>
        </View>
    )   
}

const styles = StyleSheet.create({
    display:{
        backgroundColor: "#000",
        padding: 20,
        width: 300,
        borderRadius: 10,
    },
    diplayText:{
        color: "#fff",
    }
})
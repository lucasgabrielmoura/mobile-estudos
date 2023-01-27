import React from "react";
import { View, StyleSheet } from "react-native";
import Quadrado from "./Quadrado";

export default function FlexBoxV4(){

    const styles = StyleSheet.create({
        container:{
            flexGrow: 1,
            width: 100,
            backgroundColor: "#000",
        },
        v1:{
            backgroundColor:"#090",
            flexGrow: 1,
        },
        v2:{
            backgroundColor:"#009",
            flexGrow: 1,
        },
        v0:{
            backgroundColor:"#002345",
            height: 300,
        }
    })


    return(
        <View style={styles.container}>
            <View style={styles.v0}></View>
            <View style={styles.v1}></View>
            <View style={styles.v2}></View>
        </View>
    )
}
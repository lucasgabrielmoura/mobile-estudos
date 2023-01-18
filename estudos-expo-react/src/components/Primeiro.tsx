import React from "react"
import { View, Text, StyleSheet, StatusBar } from "react-native";



export default function Primeiro(){
    return(
        <View>
            <Text style={styles.titulo}>Primeiro Componentes!</Text>
            <Text>{1+3}</Text>
        </View>
    )
}

const styles = StyleSheet.create({
    titulo:{
        fontSize: 50,  
        textAlign: 'center',
        color: '#345cab',
    },
})
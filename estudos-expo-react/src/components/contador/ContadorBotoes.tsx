import React, { useState } from "react";
import { Button, Pressable, StyleSheet, View, Text } from "react-native";

type functionstype = {
    incluir: () => void;
    diminuir: () => void;
    zerar: () => void;
    dado20: () => void;
}

export default function ContBotoes(props:functionstype){


    return(
        <>
            <View style={styles.caixaBotoes}>
                <Pressable style={styles.button} onPress={props.incluir}>
                    <Text style={styles.textStyle}>+</Text>
                </Pressable>
                <Pressable style={styles.button} onPress={props.diminuir}>
                    <Text style={styles.textStyle}>-</Text>
                </Pressable>
            </View>
            <View style={styles.caixaBotoes}>
                <Pressable style={styles.button} onPress={props.zerar}>
                    <Text style={styles.textStyle}>0</Text>
                </Pressable>
                <Pressable style={styles.button} onPress={props.dado20}>
                    <Text style={styles.textStyle}>d20</Text>
                </Pressable>
            </View>
        </>
    )   
}

const styles = StyleSheet.create({
    caixaBotoes:{
        flexDirection: "row",
        justifyContent: "space-between",
        width: 300,
    },
    button: {
        alignItems: 'center',
        justifyContent: 'center',
        width: 140,
        marginTop: 10,
        paddingVertical: 12,
        paddingHorizontal: 32,
        borderRadius: 20,
        elevation: 3,
        backgroundColor: 'black',
    },
    textStyle: {
        color: "#fff",
        fontSize: 40,
    }
})
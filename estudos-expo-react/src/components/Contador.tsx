import React, { useState } from "react";
import { View, Text, Button, StyleSheet } from "react-native";

export default function Count(){

    const [count, setCount] = useState<number>(0);

    return(
        <View style={styles.container}>
            <Text style={styles.texto}>Valor atual: {count}</Text>
            <Button color={"#000"} title="+" onPress={() => setCount(count + 1)} />
            <Button color={"#000"} title="-" onPress={() => setCount(count - 1)} />
        </View>
    )
}

const styles = StyleSheet.create({
    container:{
        borderWidth: 10,
        width: 300,
        height: 300,
        justifyContent: "space-between",
        
    },
    texto:{
        fontSize: 30,
    }
})
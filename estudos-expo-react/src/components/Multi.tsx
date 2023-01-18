import React from "react";
import { Text } from "react-native";
import estiloGlobal from "../styles/estilo";

export default function Comp1() {
    return(
        <Text style={estiloGlobal.global}>Comp #01</Text>
    )
}

export function Comp2() {
    return(
        <Text style={estiloGlobal.global}>Comp #02</Text>
    )
}

export function Comp3() {
    return(
        <Text style={estiloGlobal.global}>Comp #03</Text>
    )
}


//export {Comp1, Comp2} UMA OPÇÃO
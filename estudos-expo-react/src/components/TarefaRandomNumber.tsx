import React, { useEffect, useState } from "react";
import { Text } from "react-native";
import estilo from "../styles/estilo";

interface valoresprop{
    min: number;
    max: number;
}

export default function RandomActivitie(props:valoresprop){

    const [random, setRandom] = useState<number>(0)
 
    useEffect(()=>{
        setRandom(Math.floor(Math.random() * (props.max - props.min + 1) + props.min))
    })

    return(
        <Text style={estilo.global}>O número aleatório gerado de {props.min} a {props.max} foi {random}</Text>
    )
}

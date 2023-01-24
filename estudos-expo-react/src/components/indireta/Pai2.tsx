import React, { useState } from "react";
import { Text } from "react-native";
import Filho from "./Filho2";
import estilo from "../../styles/estilo";



export default function Pai2(){

    const [numeroText, setNumeroText] = useState<number>(0);

    function exibirNumero(n:number){
        setNumeroText(n)
    }

    return(
        <>
            <Text style={estilo.global}>{numeroText}</Text>
            <Filho 
                min={10} 
                max={30} 
                funcaoExibir={exibirNumero} 
            />
        </>
    )   
}
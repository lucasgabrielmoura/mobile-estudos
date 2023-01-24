import React, { useState } from "react";
import { Text, View } from "react-native";
import estilo from "../../styles/estilo";
import ContBotoes from "./ContadorBotoes";
import ContDisplay from "./ContadorDisplay";


export default function ContV2(){

    const [num, setNum] = useState<number>(0);

    function incluir(){
        setNum(num + 1)
    }

    function diminuir(){
        setNum(num - 1)
    }

    function zerar(){
        setNum(0)
    }

    function dado20(){
        setNum(Math.floor(Math.random() * (20 - 0 + 1) + 0))
    }

    return(
        <>
            <Text style={estilo.global}>Contador V2</Text>
            <ContDisplay number={num} />
            <ContBotoes diminuir={diminuir} incluir={incluir} zerar={zerar} dado20={dado20}/>
        </>
    )   
}

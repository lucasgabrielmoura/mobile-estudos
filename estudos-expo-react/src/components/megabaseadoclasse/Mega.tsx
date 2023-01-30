import React from "react";
import { Button, Text, TextInput, View, StyleSheet } from "react-native";
import estilo from "../../styles/estilo";
import Numero from "./Numero";


type numerosTipo = {
    qtdDeNumeros: number,
}

type numerosTipoState = {
    qtdDeNumeros: number,
    numeros: Number[],
}

const styles = StyleSheet.create({
    containerBalls:{
        flexWrap: "wrap",
        flexDirection: "row",
        marginTop: 10,
        justifyContent: "center",
    }
})

export default class Mega extends React.Component<numerosTipo, numerosTipoState>{

    state = {
        qtdDeNumeros: this.props.qtdDeNumeros,
        numeros: []
    }

    alterarQtdNumero(qtdeNova:string){
        this.setState({qtdDeNumeros: +qtdeNova})
    }

    setNumeroAleatorio(nums:Number[]):number{
        const novo:number = Math.floor(Math.random() * 60) + 1;
        return nums.includes(novo) ? this.setNumeroAleatorio(nums) : novo;
    }

    gerarNumeros(){
        const numeros:number[] = []
        for(let n = 0; n < this.state.qtdDeNumeros; n++){
            numeros.push(this.setNumeroAleatorio(numeros))
        }

        this.setState({numeros: numeros.sort((a,b) => a - b)})
    }

    render(): React.ReactNode {

        return(
            <>  
                <Text style={estilo.global}>
                    Gerador de Mega - {this.state.qtdDeNumeros}
                </Text>
                <TextInput 
                style={{borderBottomWidth: 1, textAlign: "center"}} 
                keyboardType="numeric"
                placeholder="Quantidade de numeros" 
                value={this.state.qtdDeNumeros.toString()} 
                onChangeText={text => this.alterarQtdNumero(text)}>   
                </TextInput>
                <Button color={"#000"} title="Gerar" onPress={() => this.gerarNumeros()} />
                <View style={styles.containerBalls}>
                    {this.state.numeros.map(number => {
                        return(
                            <React.Fragment key={number}>
                                <Numero numeromega={number} />
                            </React.Fragment>
                        )
                    })}
                </View>
                
            </> 
        )
    }
}
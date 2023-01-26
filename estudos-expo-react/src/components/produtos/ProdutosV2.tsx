import React from "react"
import { Text, FlatList, ListRenderItem } from "react-native"
import estilo from "../../styles/estilo"

type listtipo = {
    id:number,
    nome:string,
    preco:number
}

export default function ProdutosV2(){

    const produt = [
        {id:1, nome:"Last Of Us 2", preco:105.50},
        {id:2, nome:"Caderno", preco:10.50},
        {id:3, nome:"PS5", preco:40.50},
        {id:4, nome:"Minecraft", preco:60.50},
        {id:5, nome:"PC Gamer", preco:1000.50},
        {id:6, nome:"Fifa 2021", preco:90.50},
        {id:7, nome:"10 jogos aleatórios", preco:20.50},
        {id:8, nome:"Fifa 20", preco:10.50},
        {id:9, nome:"XBOX 360", preco:10.50}
    ]

    const produtosTipado: ListRenderItem<listtipo> = ({item:p}) => (
        <React.Fragment key={p?.id}>
            <Text style={{fontSize:22, paddingTop: 30, textAlign: "left"}}>{p?.id}º {p?.nome} - R$ {p?.preco}</Text>
        </React.Fragment>
    );

    return(
        <>
            <Text style={estilo.global}>Lista de produtos:</Text>
            <FlatList data={produt} renderItem={produtosTipado} />
        </>
    )
} 
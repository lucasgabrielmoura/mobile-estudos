import React from "react"
import { Text } from "react-native"

type childrentype = {
    children: string | JSX.Element | JSX.Element[]
}

export default function Familia(props:childrentype){
    return(
        <>
            <Text>___________________</Text>
            <Text>Membros da Família:</Text>
            {props.children}
            <Text>___________________</Text>
        </>
    )
}
import React from "react"
import { Text, Platform } from "react-native"

export default function Diferenciar(){
    return(
        <>
            {Platform.OS === "android"?<Text>Android</Text>:Platform.OS === "ios"?<Text>IOS</Text>:<Text>Unknown</Text>}
        </>
    )
}
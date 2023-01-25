import { ReactElement } from "react";

type tipo = {
    teste:boolean;
    children: any;
}

export function RendCondi(props:tipo){
    if(props.teste === true){
        return(
            props.children
        )
    }else{
        return false
    }
}
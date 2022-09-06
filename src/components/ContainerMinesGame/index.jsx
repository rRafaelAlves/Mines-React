import React from "react";
import { Container, BtnCasa} from "./styles";

export default function ContainerMinesGame(props){

    

    
     


    return(
    <Container> 
    {props.casas.map((itens, index)=>{
        return(
            <BtnCasa onClick={(e)=>props.verificarBomba(e.target.innerHTML)} key={index}>{itens}</BtnCasa>
        )
    })}
    </Container>
    )
}
import React from "react";
import { Container, BtnCasa} from "./styles";

export default function ContainerMinesGame(props){

     


    return(
    <Container> 
    {props.casas.map((itens, index)=>{
        return(
            <BtnCasa  id={index+1}  onClick={(e)=>props.verificarBomba(e)} key={index}>{itens}</BtnCasa>
        )
    })}
    </Container>
    )
}
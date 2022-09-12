import React from "react";
import { Container, BtnCasa, Lose} from "./styles";


export default function ContainerMinesGame(props){

   


    return(
        
    <Container> 
    {props.casas.map((itens, index)=>{
        return(
            <BtnCasa  id={`casa_${index+1}`}  onClick={(e)=>props.verificarBomba(e)} key={index}>{itens}</BtnCasa>
        )
    })}

   {props.isBomb && <Lose>BOMBA!</Lose>}
    </Container>
    
    )
}
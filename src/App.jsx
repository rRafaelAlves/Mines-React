import React, { useEffect, useState, useRef, useLayoutEffect } from "react";
import { Body } from "./styles";
import ContainerMinesControler from "./components/ContainerMinesControler";
import ContainerMinesGame from "./components/ContainerMinesGame";
import './global.css'


function App() {

  const [casas, setCasas] = useState([])
  const [casasSorteadas, setCasasSorteadas] = useState([])
  const [numeroMines, setNumeroMines] = useState(2)
  const [isBomb, setIsBomb] = useState(false)

 

  const onChange = (e)=>{
      
      setNumeroMines(e)
  }




  useEffect(()=>{
      const i = []
      for (let index = 1; index <=25; index++) {
          i.push(index)
          
          
      }
      setCasas(i)
  },[])






  function sortearMines(){
      for (let index = 1; index <= numeroMines; index++) {
          casasSorteadas.push(Math.floor(Math.random() * 25) + 1)
          console.log(casasSorteadas)

          
      }

     
        
  }


function verificarBomba(e){

  const divBotaoClicado = e.target


    e.target.setAttribute('className','bomb')




  const casaClicada = parseFloat(e.target.innerHTML)

 
  const found = casasSorteadas.find(element => element == casaClicada) 

  
  if(  casasSorteadas.includes(casaClicada)){
    console.log('bomba')
  }else{console.log('safe')}

  
  
  if(found){
    
    console.log(found )
    setIsBomb(true)
    
    
  }
  

}
  
  



  return (
    <Body>

<ContainerMinesControler sortearMines={sortearMines} onChange={onChange} />
<ContainerMinesGame casas={casas} casasSorteadas={casasSorteadas} sortearMines={sortearMines} verificarBomba={verificarBomba} isBomb={isBomb}/>



    
    </Body>
  );
}

export default App;

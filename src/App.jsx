import React, { useEffect, useState } from "react";
import { Body } from "./styles";
import ContainerMinesControler from "./components/ContainerMinesControler";
import ContainerMinesGame from "./components/ContainerMinesGame";
import './global.css'


function App() {

  const [casas, setCasas] = useState([])
  const [casasSorteadas, setCasasSorteadas] = useState([])
  const [numeroMines, setNumeroMines] = useState(2)
  const [isBomb, setIsBomb] = useState(false)
  const [gameStart, setGameStart] = useState(false)

 
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
    setGameStart(true)
    setIsBomb(false)
    

      for (let index = 1; index <= numeroMines; index++) {
        casasSorteadas.push(Math.floor(Math.random() * 25) + 1)
          console.log(casasSorteadas)

          
      }

     
        
  }


function verificarBomba(e){

  const divBotaoClicado = e.target

  console.log(divBotaoClicado)






  const casaClicada = parseFloat(e.target.innerHTML)

 
  const found = casasSorteadas.find(element => element == casaClicada) 

  
  if(casasSorteadas.includes(casaClicada)){

    e.target.style.backgroundImage = 'url(https://www.freeiconspng.com/thumbs/bomb-icon/bomb-icon-2.png)'
    e.target.style.backgroundSize = '100%';
    setCasasSorteadas([])
    

  }else{
    e.target.style.backgroundImage = 'url(https://www.seekpng.com/png/full/344-3447692_diamantes-desenho-png-diamond-symbol.png)'
    e.target.style.backgroundSize = '100%'
    e.target.style.backgroundRepeat = 'no-repeat'
    setIsBomb(false)
  }

  
  
  if(found){
    
    setTimeout(function(){
      setIsBomb(true)
    }, 1000)

    setTimeout(function(){
      setGameStart(false)
    }, 3000)
  }
}

  return (
    <Body>

<ContainerMinesControler sortearMines={sortearMines} onChange={onChange} gameStart={gameStart} />
{gameStart && <ContainerMinesGame casas={casas} verificarBomba={verificarBomba} isBomb={isBomb}/>}



    
    </Body>
  );
}

export default App;

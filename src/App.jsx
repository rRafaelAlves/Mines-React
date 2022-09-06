import React, { useEffect, useState } from "react";
import { Body } from "./styles";
import ContainerMinesControler from "./components/ContainerMinesControler";
import ContainerMinesGame from "./components/ContainerMinesGame";
import './global.css'

function App() {

  const [casas, setCasas] = useState([])
  const [casasSorteadas, setCasasSorteadas] = useState([])
  const [numeroMines, setNumeroMines] = useState(2)

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
  console.log(casasSorteadas)
  const found = casasSorteadas.find(element => element == e) 
  
  if(found){
    alert('BOMBA!')
  }
  

}
  
  



  return (
    <Body>

<ContainerMinesControler sortearMines={sortearMines} onChange={onChange} />
<ContainerMinesGame casas={casas} casasSorteadas={casasSorteadas} sortearMines={sortearMines} verificarBomba={verificarBomba} />



    
    </Body>
  );
}

export default App;

import styled from "styled-components"

export const Container = styled.div`
display: flex;
flex-direction: column;
background-color: #1a242d;
width: 220px;
height: 400px;
border-radius: 4px 0 0 4px;
border-right: 1px solid #36404a;
align-items: center;
padding: 20px;


&.displayMobile{
   
}

@media (max-width: 768px) {
   &.displayMobile{
    display: none;
   }
  }

`

export const SeletorMines = styled.select`
width: 100%;
border: none;
border-radius: 0;
background-color: #0f1923;
padding: 12px;
color: #797b95;
font-size: 12px;
` 

export const LabelMines = styled.p`

color: #797b95;
font-size: 10px;
text-transform: uppercase;
font-weight: 700;
letter-spacing: -.3px;

`

export const BotaoStartGame = styled.button`
border: none;
width: 100%;
background-color: #f12c4c;
color: #fff;
text-align: center;
border-radius: 4px;
padding: 15px;
font-weight: 600;
font-size: 12px;
letter-spacing: -.3px;
cursor: pointer;
margin-top: 16px;


&:hover{
    transition: 0.8s;
    background-color: #ff2d4c;
}
`
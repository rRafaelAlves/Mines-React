import styled from "styled-components";


export const Container = styled.div`
position: relative;
display: grid;
background-color: #1a242d;
width: 500px;
height: 400px;
border-radius: 0 4px 4px 0;
grid-template-columns: repeat(5, 100px);
justify-content:center;
align-items: center;
padding: 20px;

@media (max-width: 768px) {
    
    width: 280px;
    border-radius: 4;
    grid-template-columns: repeat(5, 60px);
  }

`

export const BtnCasa = styled.div`

font-size: 0px;
width: 60px;
height: 60px;
background-color: #1d272f;
border-radius: 4px;
box-shadow: 0px 0px 15px 0px rgba(0,0,0,0.51);

&:hover{
    background-color: #262d35;
    cursor: pointer;
}

@media (max-width: 768px) {
    width: 40px;
    height: 40px;
  }

`

export const Lose = styled.div`
display: flex;
justify-content: center;
align-items: center;
position: absolute;
widht: 280px;
height: 100px;
background-color: #0f1920;
color: #ff1231;
border-radius: 8px;
font-size: 42px;
top: 25%;
left: 25%;
padding: 12px;
border: 1px solid rgba(0,0,0,0.11);
box-shadow: 0px 0px 15px 0px rgba(0,0,0,0.71);
`
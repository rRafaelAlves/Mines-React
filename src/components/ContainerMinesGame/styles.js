import styled from "styled-components";


export const Container = styled.div`
display: grid;
background-color: #1a242d;
width: 680px;
height: 700px;
border-radius: 0 4px 4px 0;
grid-template-columns: repeat(5, 100px);
justify-content:center;
align-items: center;
padding: 20px;
`

export const BtnCasa = styled.div`

font-size: 0px;
width: 80px;
height: 80px;
background-color: #1d272f;
border-radius: 4px;
box-shadow: 0px 0px 15px 0px rgba(0,0,0,0.51);

&:hover{
    background-color: #262d35;
    cursor: pointer;
}

&.bomb{
    background-image: url(https://www.freeiconspng.com/thumbs/bomb-icon/bomb-icon-2.png);
    background-size: 100%;
    
}

&.safe{
    background-image: url(https://www.seekpng.com/png/full/344-3447692_diamantes-desenho-png-diamond-symbol.png);
    background-size: 100%;
    background-repeat: no-repeat;
}



`
import { CircularProgressbar, buildStyles } from "react-circular-progressbar"
import styled from "styled-components"

export default function Footer(){
    return (
        <SCFooter>
            <p>Hábitos</p>
            {/* <CircularProgressbar value={50} text='Hoje' style={buildStyles({
                textSize: '18px',
                backgroundColor:'#52B6FF'
            })} /> */}
            <p>Histórico</p>
        </SCFooter>
    )
}

const SCFooter = styled.div`
    width:100vw;
    height:70px;
    background-color:#ffffff;
    
    display:flex;
    justify-content:space-between;
    align-items:center;
    padding:0 32px;

    position:fixed;
    bottom:0;

    p{
        font-family: 'Lexend Deca';
        font-style: normal;
        font-weight: 400;
        font-size: 17.976px;
        line-height: 22px;
        text-align: center;
        color:#52B6FF;
    }
    
`
import { useContext } from "react"
import styled from "styled-components"
import { MyContext } from "../contexts/MyContext"
import { useNavigate } from "react-router-dom";

export default function Header(){

    const {profileImage} = useContext(MyContext);
    const navigate = useNavigate();

    return (
        <SCHeader data-test='header'>
            <h1 onClick={() => navigate('/')} >TrackIt</h1>
            <img src={profileImage} alt="Imagem de perfil" data-test='avatar' />
        </SCHeader>
    )
}

const SCHeader = styled.div`
    width:100%;
    height:70px;
    background-color:#126BA5;
    padding:0 18px;
    
    display:flex;
    justify-content:space-between;
    align-items:center;

    position:fixed;
    top:0;

    h1{
        font-family: 'Playball';
        font-style: normal;
        font-weight: 400;
        font-size: 38.982px;
        line-height: 49px;
        color:#ffffff;
    }
    img{
        width:51px;
        height:51px;
        border-radius: 98.5px;
    }
`
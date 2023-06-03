import styled from "styled-components";
import {GlobalBodyStyle} from '../assets/styles/GlobalBodyStyle';
import Header from "../components/Header";
import Footer from "../components/Footer";
import CheckHabit from "../components/CheckHabit";
import { useContext, useEffect, useState } from "react";
import { MyContext } from "../contexts/MyContext";
import { useLocation } from "react-router-dom";
import axios from "axios";
import { URL_BASE } from "../constants/url";
import dayjs from "dayjs";
import 'dayjs/locale/pt-br';



export default function TodayPage(){

    let [habits, setHabits] = useState([]);
    let [render, setRender] = useState(false);
    
    const { token, count, setPercentage, percentage } = useContext(MyContext);

    let day = dayjs().locale('pt-br').format('dddd, DD/MM');
    day = day.charAt(0).toUpperCase() + day.slice(1);
    
    useEffect(() =>{

        const config={
            headers:{
                "Authorization": `Bearer ${token}`
            }
        }

        axios.get(`${URL_BASE}/habits/today`, config)
            .then(response => setHabits(response.data))
            .catch(error => alert(`O erro foi: ${error.response.data}`));
        
        setRender(false);

        setPercentage(Math.floor((count/habits.length)*100))

    },[render])

    // if(habits.length===0){
    //     return <div>Carregando...</div>
    // }

    return (
        <>
            <GlobalBodyStyle />
            <Header />
            
            <SCDate>
                <h2 data-test='today' >{day}</h2>
                {(habits.length===0) && (<p data-test='today-counter' >Nenhum hábito concluído ainda</p>)}
                {(habits.length>0) && (<p data-test='today-counter' >{percentage}% dos hábitos concluídos</p>)}
            </SCDate>

            {habits.map(habit => <CheckHabit key={habit.id} habit={habit} setRender={setRender} />)}

            <Footer />
        </>
    )
}

const SCDate = styled.div`
    width:100%;
    height:auto;
    padding:18px;
    margin-top:90px;

    display:flex;
    flex-direction:column;
    align-items:flex-start;
    justify-items:center;

    h2{
        font-family: 'Lexend Deca';
        font-style: normal;
        font-weight: 400;
        font-size: 22.976px;
        line-height: 29px;
        color:#126BA5;
    }
    p{
        font-family: 'Lexend Deca';
        font-style: normal;
        font-weight: 400;
        font-size: 17.976px;
        line-height: 22px;
        color: #BABABA; //#8FC549
    }
`
import './Main.css'
import React from 'react';

import avAliados_sm from "../img/Porto/AvAliados-small.jpg"
import bridge_sm from "../img/Porto/bridge-small.jpg"
import Casamusica_sm from "../img/Porto/Casamusica-small.jpg"
import douroRiver_sm from "../img/Porto/douroRiver-small.jpg"
import eletrico_sm from "../img/Porto/eletrico-small.jpg"
import forteSaoFrancisco_sm from "../img/Porto/forteSaoFrancisco-small.jpg"

import avAliados_lg from "../img/Porto/AvAliados-large.jpg"
import bridge_lg from "../img/Porto/bridge-large.jpg"
import Casamusica_lg from "../img/Porto/Casamusica-large.jpg"
import douroRiver_lg from "../img/Porto/douroRiver-large.jpg"
import eletrico_lg from "../img/Porto/eletrico-large.jpg"
import forteSaoFrancisco_lg from "../img/Porto/forteSaoFrancisco-large.jpg"

import {useRef, useLayoutEffect, useState, useEffect} from 'react';
import { Patreons } from './Patreons';
import { Annoucements } from './Annoucements';

function getWindowDimensions() {
    const {innerWidth: width, innerHeight: height} = window;
    return width;
}


function Timer(props: any) {

    const [time, setTime] = useState(Date.now());

    useEffect(() => {
        const interval = setInterval(() => setTime(Date.now()), 1000);
        return () => {
            clearInterval(interval);
        };
    }, []);

    const inforumDate = Date.parse(props.time)
    const now = (new Date()).getTime()

    const oneDay = 1000 * 60 * 60 * 24
    const oneHour = 1000 * 60 * 60
    const oneMinute = 1000 * 60
    const oneSecond = 1000

    let days = Math.floor((inforumDate - now) / oneDay) 
    const milDays = days * oneDay
    let hours = Math.floor((inforumDate - now - milDays) / oneHour)
    const milHours = milDays + hours * oneHour
    let minutes = Math.floor((inforumDate - now - milHours) / oneMinute)
    const milMinutes = milHours + minutes * oneMinute
    let seconds = Math.floor((inforumDate - now - milMinutes) / oneSecond)


    if(now > inforumDate){
        days = 0
        hours = 0
        minutes = 0
        seconds = 0
    }

    return <>
        <div className="Timer">

            {/* eslint-disable-next-line jsx-a11y/anchor-is-valid */}
            <p><a className='TimerClock'>{days} dias</a> : <a className='TimerClock'>{hours} horas</a> : <a
                className='TimerClock'>{minutes} minutos</a> : <a className='TimerClock'>{seconds} segundos</a></p>
        </div>

    </>
}

function Slider() {

    const slideImages = [
        {
            url: avAliados_lg,
            caption: 'Av. dos Aliados'
        },
        {
            url: bridge_lg,
            caption: 'Ponte D.Luís'
        },
        {
            url: Casamusica_lg,
            caption: 'Casa da Música'
        },
        {
            url: douroRiver_lg,
            caption: 'Rio Douro'
        }, {
            url: eletrico_lg,
            caption: 'Elétrico'
        }, {
            url: forteSaoFrancisco_lg,
            caption: 'Forte de São Francisco'
        },
    ]

    const animation = 11

    const [time, setTime] = useState(Date.now());

    useEffect(() => {
        const interval = setInterval(() => setTime(Date.now()), 10);
        return () => {
            clearInterval(interval);
        };
    }, []);

    const now = (new Date()).getTime()

    const oneSecond = 1000

    const seconds = now / oneSecond

    const second = Math.floor(now / oneSecond)

    const pos = (second - (second % animation)) % slideImages.length

    const lapse_time = animation / 2

    const op = (seconds % animation) < lapse_time ?
        (seconds % lapse_time) * (1 / lapse_time) :
        1 - (seconds % lapse_time) * (1 / lapse_time)

    const divStyle = {
        opacity: op,
    };


    return <>
        <div style={divStyle} className='SlideImageContainer'>

            <img className="SlideImage" src={slideImages[pos].url} title={slideImages[pos].caption}></img>

    
        </div>
    </>

}

export function Initial(props: any) {


    return <>
        <div className="Intro">
            <Slider></Slider>


            <div className='IntroInternal'>

            

            <Patreons></Patreons>

            <div className='InsideIntro'>

                <h2>Bem-vindo ao INForum 2023</h2>

                <p> Reunindo a comunidade nacional, o INForum é um local privilegiado para a divulgação, discussão e
                    reconhecimento de trabalhos científicos e de inovação e avanços tecnológicos em Informática. O INForum
                    oferece assim um palco especializado para promover, por um lado, o intercâmbio de conhecimento e
                    experiência entre a academia e a indústria e, por outro lado, a estreia de jovens investigadores que
                    procuram a divulgação, a crítica construtiva e o encorajamento do seu trabalho. Assim, o INForum é um
                    evento nacional de partilha e de fortalecimento do espírito de comunidade.
                </p>
                <p>A Informática é uma área de Investigação e Desenvolvimento consolidada em Portugal, suportada numa rede
                    de centros de investigação reconhecidos internacionalmente e na oferta de cursos de licenciatura e
                    pós-graduação por praticamente todas as instituições portuguesas de ensino superior. É igualmente uma
                    área na qual várias empresas nacionais apresentam resultados de I&D de relevância internacional.
                </p>
                <p>O INForum é organizado em sessões temáticas sobre tópicos propostos pela comunidade e selecionados pela
                    organização. Os tópicos têm comissões de programa (CP) próprias, que se articulam com os Presidentes da
                    Comissão de Programa nos processos de organização das sessões (apelo a submissões, revisão e seleção de
                    artigos, publicação de atas, etc.) de forma a tirar partido de uma única infraestrutura de suporte e
                    garantir a coerência do evento.
                </p>
                <p>A edição de 2023, o 14º INForum, decorrerá na Faculdade de Engenharia da Universidade do Porto nos dias 7
                    e 8 de setembro. Contamos com a presença de todos!
                </p>

               
                <p>O INForum começa em:</p>
                <Timer time={props.time}/>

                
                <div className='Patreons'>
            
                <p style={{paddingBottom: 10}}></p>

                <h2>Rede Wifi</h2>

                <p><b>Username: </b>INForum</p>
                <p><b>Password: </b>INForum23</p>
                <p><b>Network: </b>UPorto</p>

                <p style={{paddingBottom: 10}}></p>

                </div>

            </div>

            

                <Annoucements/>
            

        </div>
        </div>


    </>
}

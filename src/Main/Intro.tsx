import './Main.css'
import 'react-slideshow-image/dist/styles.css'
import React from 'react';


import {useState, useEffect} from 'react';
import { Slider } from './Sliders';

function getWindowDimensions() {
    const {innerWidth: width, innerHeight: height} = window;
    return width;
}


function Timer(props: any) {

    const inforumDate = Date.parse(props.time)
    const now = (new Date()).getTime()

    const oneDay = 1000 * 60 * 60 * 24
    const oneHour = 1000 * 60 * 60
    const oneMinute = 1000 * 60
    const oneSecond = 1000

    const days = Math.floor((inforumDate - now) / oneDay)
    const milDays = days * oneDay
    const hours = Math.floor((inforumDate - now - milDays) / oneHour)
    const milHours = milDays + hours * oneHour
    const minutes = Math.floor((inforumDate - now - milHours) / oneMinute)
    const milMinutes = milHours + minutes * oneMinute
    const seconds = Math.floor((inforumDate - now - milMinutes) / oneSecond)

    return <>
        <div className="Timer">

            {/* eslint-disable-next-line jsx-a11y/anchor-is-valid */}
            <p><a className='TimerClock'>{days} dias</a> : <a className='TimerClock'>{hours} horas</a> : <a
                className='TimerClock'>{minutes} minutos</a> : <a className='TimerClock'>{seconds} segundos</a></p>
        </div>

    </>
}

export function Initial(props: any) {

    return <>
        <div className="Intro">


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

        
        <div>

               {/* <div className="slide-container" >
                    <Slide>
                        {slideImages.map((slideImage, index) => (
                            <div key={index}>
                                <div className={"divStyle"} style={{'backgroundImage': `url(${slideImage.url})`}}>
                                    <span className={"spanStyle"}>{slideImage.caption}</span>
                                </div>
                            </div>

                        ))}
                    </Slide>
                </div>
                */}

              <Slider></Slider>

            
        </div>
                        
            <p>O INForum começa em:</p>
            <Timer time={props.time}/>
        </div>

    </>
}

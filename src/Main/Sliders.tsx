import './Slider.css'
import 'react-slideshow-image/dist/styles.css'
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

import {useState, useEffect} from 'react';

export function Slider(props: any) {
    
    let slide_pos = 0

    const next_slide = () => {
        slide_pos += 1
    }

    const prev_slide = () => {
        slide_pos -= 1
    }

    return <>
        <div className="Slider">


                <div className="slideshow-container">

                <div className="mySlides">
                <div className="numbertext">1 / 3</div>
                <img src={avAliados_lg}/>
                <div className="text">Caption Text</div>
                </div>

                <div className="mySlides">
                <div className="numbertext">2 / 3</div>
                <img src={bridge_lg}/>
                <div className="text">Caption Two</div>
                </div>

                <a className="prev" onClick={prev_slide}>&#10094;</a>
                <a className="next" onClick={next_slide}>&#10095;</a>
                </div>


            
        </div>
                        

    </>
}

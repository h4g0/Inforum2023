import './Main.css'
import {useSelector, useDispatch} from 'react-redux'
import {Form, Button} from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import inforum from "../img/inforum.png"


import {
    BrowserRouter as Router,
    Route,
    Link,
    useParams,
    Routes,
    useNavigate,
} from "react-router-dom";
import {useEffect, useReducer, useState} from 'react'
import {Initial} from './Intro';
import {Location} from './Location';
import {People} from './People';
import {Keynote} from './Keynote';
import {Dates} from './Dates';
import {Accommodation} from './Accommodation';
import {Previous} from './Previous';
import {Program} from './Program';

import {Registration} from './Registration';
import {Track1_CRC} from './Tracks/Track1_CRC';
import {Track2_SOFTCRC} from './Tracks/Track2_SOFTCRC';
import {Track3_CD} from './Tracks/Track3_CD';
import {Track4_SIntel} from './Tracks/Track4_SIntel';
import {Track5_ASPI} from './Tracks/Track5_ASPI';
import {Tracks} from './Tracks';
import {Track6_SCF} from './Tracks/Track6_SCF';
import {Track7_CPD} from './Tracks/Track7_CPD';


const inforumTime = '7 Sep 2023 08:00:00 GMT'

function Footer(props: any) {
    return <div className='footer'></div>
}

export function Login(this: any, props: any) {

    let id = useParams()

    console.log(id)
    /*
    return ( <div className="login-div-external">
                <h1 className="login-message"> Login backoffice </h1>
                 <div className="login-div-internal">
                        <input type="username" className="login-username" placeholder="Username" onChange={updateUsername}/>
                        <input type="password" className="login-password" placeholder="Password" onChange={updatePassword}/>
                        <div>
                            <button className="login-new-account" onClick={createNewAccount} > Request new account </button>
                            <button className="login-login-button" onClick={getToken}> Login </button>
                        </div>
                    </div>   
                </div>)
                */


    return (
        <Router>
            <div className="Menu">

                <Link to="/">

                    <img className="logo" src={inforum}></img>

                </Link>

                <Link to="/program">

                    {/*<button>Programa</button>*/}

                </Link>

                <Link to="/dates">
                    <button>Chamadas</button>
                </Link>

                {/*<Link  to="/Tracks">
                    <button>Tracks</button>
    </Link>*/}

                {/*                <Link to="Tracks/CRC">
                    <button>Track CRC</button>
                </Link>
                <Link to="Tracks/SOFTCRC">
                    <button>Track SOFTCRC</button>
                </Link>
                <Link to="Tracks/CD">
                    <button>Track CD</button>
                </Link>
                <Link to="Tracks/SIntel">
                    <button>Track SIntel</button>
                </Link>
                <Link to="Tracks/ASPI">
                    <button>Track ASPI</button>
                </Link>*/}


                <Link to="/registration">

                    {/*<button>Inscrições</button>*/}

                </Link>

                {/*<a target="_blank" rel="noopener noreferrer" href="https://inforum.org.pt/sites/default/files/2022-09/Actas_INForum.pdf">
                <button>Atas Inforum</button>
                </a>*/}


                <Link to="/people">

                    <button>Organização</button>

                </Link>

                <Link to="/keynote">

                    {/*<button>Keynote</button>*/}

                </Link>


                <Link to="/location">

                    <button>Como chegar</button>

                </Link>

                <Link to="/accommodation">

                    <button>Alojamento</button>

                </Link>

                {/* 
                <Link to="/Keynote">            

                <button> O que fazer no Porto</button>

                </Link>
                */}

                <Link to="/previous">

                    <button>Edições Anteriores</button>

                </Link>


                <Footer/>


            </div>

            <Routes>


                <Route path="/" element={<Initial time={inforumTime}/>}/>

                <Route path="program" element={<Program/>}/>

                <Route path="tracks/crc" element={<Track1_CRC/>}/>
                <Route path="tracks/softcrc" element={<Track2_SOFTCRC/>}/>
                <Route path="tracks/cd" element={<Track3_CD/>}/>
                <Route path="tracks/sintel" element={<Track4_SIntel/>}/>
                <Route path="tracks/aspi" element={<Track5_ASPI/>}/>
                <Route path="/tracks/cpsapps" element={<Track6_SCF/>}/>
                <Route path="/tracks/cpdla" element={<Track7_CPD/>}/>


                <Route path="tracks" element={<Tracks/>}/>

                <Route path="location" element={<Location/>}/>

                <Route path="publications" element={<Initial time={inforumTime}/>}/>

                <Route path="education" element={<Initial time={inforumTime}/>}/>

                <Route path="people" element={<People/>}/>

                <Route path="keynote" element={<Keynote/>}/>

                <Route path="dates" element={<Dates/>}/>

                <Route path="accommodation" element={<Accommodation/>}/>

                <Route path="previous" element={<Previous/>}/>

                <Route path="registration" element={<Registration/>}/>

            </Routes>

        </Router>


    )

}

export default Login

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

                <Link to="/Program">

                    {/*<button>Programa</button>*/}

                </Link>

                <Link to="/Dates">
                    <button>Chamadas</button>
                </Link>

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


                <Link to="/Registration">

                    {/*<button>Inscrições</button>*/}

                </Link>

                {/*<a target="_blank" rel="noopener noreferrer" href="https://inforum.org.pt/sites/default/files/2022-09/Actas_INForum.pdf">
                <button>Atas Inforum</button>
                </a>*/}


                <Link to="/People">

                    <button>Organização</button>

                </Link>

                <Link to="/Keynote">

                    {/*<button>Keynote</button>*/}

                </Link>


                <Link to="/Location">

                    <button>Como chegar</button>

                </Link>

                <Link to="/Accommodation">

                    <button>Alojamento</button>

                </Link>

                {/* 
                <Link to="/Keynote">            

                <button> O que fazer no Porto</button>

                </Link>
                */}

                <Link to="/Previous">

                    <button>Edições Anteriores</button>

                </Link>


                <Footer/>


            </div>

            <Routes>


                <Route path="/" element={<Initial time={inforumTime}/>}/>

                <Route path="Program" element={<Program/>}/>

                <Route path="Tracks/CRC" element={<Track1_CRC/>}/>
                <Route path="Tracks/SOFTCRC" element={<Track2_SOFTCRC/>}/>
                <Route path="Tracks/CD" element={<Track3_CD/>}/>
                <Route path="Tracks/SIntel" element={<Track4_SIntel/>}/>
                <Route path="Tracks/ASPI" element={<Track5_ASPI/>}/>


                <Route path="Location" element={<Location/>}/>

                <Route path="Publications" element={<Initial time={inforumTime}/>}/>

                <Route path="Education" element={<Initial time={inforumTime}/>}/>

                <Route path="People" element={<People/>}/>

                <Route path="Keynote" element={<Keynote/>}/>

                <Route path="Dates" element={<Dates/>}/>

                <Route path="Accommodation" element={<Accommodation/>}/>

                <Route path="Previous" element={<Previous/>}/>

                <Route path="Registration" element={<Registration/>}/>

            </Routes>

        </Router>


    )

}

export default Login

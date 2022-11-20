import './Main.css'
import { useSelector,useDispatch } from 'react-redux'
import { Form, Button } from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import inforum from "./../img/logo.png"


import {
    BrowserRouter as Router,
    Route,
    Link,
    useParams,
    Routes,
    useNavigate,
  } from "react-router-dom";
import { useEffect, useReducer, useState } from 'react'
import { Initial } from './Intro';
import { Location } from './Location';
import { People } from './People';
import { Keynote } from './Keynote';
import { Dates } from './Dates';
import { Accommodation } from './Accommodation';
import { Previous } from './Previous';
import { Program } from './Program';
import { Registration } from './Registration';

const inforumTime = '20 Sep 2023 00:00:00 GMT'

export function Login(this: any, props: any) {
        
    let id  = useParams()

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

                
         
                
             
                
            
      
                
    const [time, setTime] = useState(Date.now());

    useEffect(() => {
        const interval = setInterval(() => setTime(Date.now()), 1000);
        return () => {
        clearInterval(interval);
    };
    }, []);     

    return (
        <Router>
        



                <div className="Menu">

                <Link to="/">            

                <img className="logo" src={inforum}></img>

                </Link>

                <div className="Options">


                <Link to="/Program">            

                {/*<button>Programa</button>*/}

                </Link>

                <Link to="/Dates">            

                <button>Chamadas</button>

                </Link>

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
            
                </div>


                </div>

                <Routes>        

            
                <Route path="/" element={<Initial time={inforumTime} />} />

                <Route path="Program" element={<Program />} />

                <Route path="Location" element={<Location />} />

                <Route path="Publications" element={<Initial time={inforumTime}/>} />

                <Route path="Education" element={<Initial time={inforumTime} />} />

                <Route path="People" element={<People />} />

                <Route path="Keynote" element={<Keynote />} />

                <Route path="Dates" element={<Dates />} />

                <Route path="Accommodation" element={<Accommodation />} />

                <Route path="Previous" element={<Previous />} />

                <Route path="Registration" element={<Registration/>}/>

                </Routes>

        </Router>


      
    )
    
}

export default Login
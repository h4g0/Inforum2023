import './Main.css'
import { useSelector,useDispatch } from 'react-redux'
import { Form, Button } from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import inforum from "./../inforum.png"


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


                <Link to="/Bio">            

                <button>Programa</button>

                </Link>

                <Link to="/Dates">            

                <button>Datas</button>

                </Link>

                <Link to="/Publications">            

                <button>Inscrições</button>

                </Link>

                <Link to="/Education">            

                <button>Atas Inforum</button>

                </Link>


                <Link to="/People">            

                <button>Pessoas</button>

                </Link>

                <Link to="/Keynote">            

                <button>Keynote</button>

                </Link>

                
                <Link to="/Location">            

                <button>Como chegar</button>

                </Link>
                
                <Link to="/Keynote">            

                <button>Alojamento</button>

                </Link>

                <Link to="/Keynote">            

                <button> O que fazer no Porto</button>

                </Link>

                </div>


                </div>

                <Routes>        

            
                <Route path="/" element={<Initial />} />

                <Route path="Bio" element={<Initial />} />

                <Route path="Location" element={<Location />} />


                <Route path="Publications" element={<Initial />} />

                <Route path="Education" element={<Initial />} />

                <Route path="People" element={<People />} />

                <Route path="Keynote" element={<Keynote />} />

                <Route path="Dates" element={<Dates />} />

                </Routes>

        </Router>


      
    )
    
}

export default Login
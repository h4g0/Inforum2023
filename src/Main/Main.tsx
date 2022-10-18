import './Main.css'
import { get_token } from './get_token'
import { useSelector,useDispatch } from 'react-redux'
import { Form, Button } from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import hugo from "./../hugo.jpg"
import inforum from "./../inforum.png"

import {
    BrowserRouter as Router,
    Route,
    Link,
    useParams,
    Routes,
    useNavigate,
  } from "react-router-dom";
import { useReducer } from 'react'


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

                
              
            function Timer(props: any) {
                const inforumDate = Date.parse('20 Sep 2023 00:00:00 GMT')
                const now = ( new Date() ).getTime()

                const oneDay = 1000*60*60*24
                const oneHour = 1000*60*60
                const oneMinute = 1000*60
                const oneSecond = 1000

                const days = Math.floor(( inforumDate - now ) / oneDay)
                const milDays =  days * oneDay
                const hours =  Math.floor( (inforumDate - now - milDays) / oneHour )
                const milHours = milDays + hours * oneHour
                const minutes = Math.floor(  (inforumDate - now - milHours) /oneMinute)
                const milMinutes = milHours + minutes * oneMinute
                const seconds = Math.floor(  (inforumDate - now - milMinutes) /oneSecond)

                return <>
                    <div className="Timer">
                
                            <p><a className='TimerClock'>{days}</a> : {hours} : {minutes} : {seconds}</p>
                    </div>
                
                </>
            }

            function Educaton(props: any) {
                return <><div className="Intro">
                    
                    <h2>Bem-vindo ao INForum 2023</h2>
                    <p>Um local privilegiado para a divulgação, discussão e reconhecimento de trabalhos científicos e avanços tecnológicos em Informática</p>
                    <h2>FEUP - Faculdade de Engenharia da Universidade do Porto</h2>
                    <p>Consulte o programa do Inforum 2023</p>
                    <p>O INForum começa em</p>
                    <Timer></Timer>
                    </div>
                </>
                }
                
                function Bio(props: any) {
                    return <><div className="ButtonContainer">
                    <p>
                    Hi, my name is Hugo da Gião, I am currently doing research at the intersection of DevOps and Model-driven engineering, and i am a researcher at HASLab/INESC TEC. I am also a Ph.D. student in Informatics Engineering at FEUP working on a thesis titled "A Model-driven approach to DevOps" whose end goal is to research methodologies and tools that would allow developers to create different DevOps pipelines without resorting to the use of specific tools. I also did research in the field of visual languages where I worked on creating a visual language to allow non-technical users to solve optimization problems.
                    </p>
                    <p>My CV can accessed <a href="https://h4g0.github.io/cv.pdf">here</a>
.</p>

<img className="profilePic" src={hugo}></img>


                       </div> </>
        
        }

        function Interests(props: any) {
            return <><div className="ButtonContainer">
            <p>
            My current research interests are the following: </p>     
         <ul>
            <li>
            Software engineering
            </li>
            <li>
                DevOps
            </li>
            <li>
                Model-driven software engineering
            </li>
            <li>
                Human-centered computing
            </li>
            <li>
                Visual languages
            </li>
         </ul>

               </div> </>

}
                
              

    return (
        <Router>
        



                <div className="Menu">

                <img className="logo" src={inforum}></img>


                <div className="Options">


                <Link to="/Bio">            

                <button>Programa</button>

                </Link>

                <Link to="/Interests">            

                <button>Datas</button>

                </Link>

                <Link to="/Publications">            

                <button>Inscrições</button>

                </Link>

                <Link to="/Education">            

                <button>Atas Inforum</button>

                </Link>

                <Link to="/Education">            

                <button>Localização</button>

                </Link>

                <Link to="/Education">            

                <button> Convidados</button>

                </Link>


                

                </div>


         
             

                </div>

                <Routes>        

            
                <Route path="/" element={<Bio />} />

                <Route path="Bio" element={<Bio />} />

                <Route path="Interests" element={<Interests />} />


                <Route path="Publications" element={<Educaton />} />

                <Route path="Education" element={<Educaton />} />

                </Routes>

        </Router>


      
    )
    
}

export default Login
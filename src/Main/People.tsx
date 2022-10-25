import './Main.css'
import { Patreons } from './Patreons'
import hugo from "./../hugo.jpg"
import lazaro from "./../lazaro.jpg"
import jacome from "./../jacome.jpg"
import jas from "./../jas.jpg"
import jpf from "./../jpf.png"
import jl from "./../jl.jpg"
import lv from "./../lv.png"

function Person(props: any){
    
    return <>
        <div >
            <h4>{props.name}</h4>
            <div className="Person">
            <img width="120" height="100"src={props.picture}></img>
            <div>
            <p><b>Afiliação:</b> {props.afiliation}</p>
            <p><a target="_blank" rel="noopener noreferrer" href={props.page}>{props.page}</a></p>

            </div>
            </div>
        </div>
    </>
}

export function People(props: any){
    return <><div className="People">
        
        <div>
            <Patreons></Patreons>
        </div>

        <div>
        <h2>
        Organização Local:
                </h2>

        <Person name="Jácome Cunha" picture={jacome} afiliation="FEUP & HASLab/INESC TEC" page="https://web.fe.up.pt/~jacome/"></Person>
        <Person name="João Paulo Fernandes" picture={jpf} afiliation="FEUP & LIACC" page="https://web.fe.up.pt/~jpaulo/Site/Home.html"></Person>
        <Person name="João Saraiva" picture={jas} afiliation="University of Minho & HASLab/INESC TEC" page="https://haslab.uminho.pt/jas/"></Person>

        <h2>Comissão de programa</h2>
        <Person name="João Carlos Antunes Leitão" picture={jl} afiliation="NOVA University Lisbon & NOVA Laboratory for Computer Science and Informatics"  page="https://asc.di.fct.unl.pt/~jleitao/"></Person>
        <Person name="Luís Antunes Veiga" picture={lv} afiliation="IST & INESC ID Lisboa" page="https://www.gsd.inesc-id.pt/~lveiga/"></Person>

        <h2>Divulgação e Web</h2>
        <Person name="Hugo da Gião" picture={hugo} afiliation="FEUP & HASLab/INESC TEC" page="https://h4g0.vercel.app/"></Person>
        <Person name="Lazaro Costa" picture={lazaro} afiliation="FEUP & HASLab/INESC TEC" page="https://lazarocosta.github.io/"></Person>
        </div>

       
        </div>
        </>

}
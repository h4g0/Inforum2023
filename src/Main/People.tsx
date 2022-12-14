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
            <img className="PersonImage" width="110" height="110" src={props.picture} alt="{props.name}'s photo"></img>
            <div>
            <p>{props.job}</p>
            <p>{props.afiliation}</p>
            <p><a target="_blank" rel="noopener noreferrer" href={props.page}>Homepage</a></p>

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
        Organização Local
                </h2>

        <Person name="Jácome Cunha" job="Presidente" picture={jacome} afiliation="Faculty of Engineering of University of Porto & HASLab/INESC TEC" page="https://web.fe.up.pt/~jacome/"></Person>
        <Person name="João Paulo Fernandes" job="Catering" picture={jpf} afiliation="Faculty of Engineering of University of Porto & LIACC" page="https://web.fe.up.pt/~jpaulo/Site/Home.html"></Person>
        <Person name="João Saraiva" job="Patrocínios" picture={jas} afiliation="University of Minho & HASLab/INESC TEC" page="https://haslab.uminho.pt/jas/"></Person>

        <h2>Presidentes da Comissão de Programa</h2>
        <Person name="João Carlos Antunes Leitão" picture={jl} afiliation="NOVA University Lisbon & NOVA LINCS"  page="https://asc.di.fct.unl.pt/~jleitao/"></Person>
        <Person name="Luís Antunes Veiga" picture={lv} afiliation="Instituto Superior Técnico & INESC ID Lisboa" page="https://www.gsd.inesc-id.pt/~lveiga/"></Person>

        <h2>Divulgação e Web</h2>
        <Person name="Hugo da Gião" picture={hugo} afiliation="Faculty of Engineering of University of Porto & HASLab/INESC TEC" page="https://h4g0.vercel.app/"></Person>
        <Person name="Lazaro Costa" picture={lazaro} afiliation="Faculty of Engineering of University of Porto & HASLab/INESC TEC" page="https://lazarocosta.github.io/"></Person>
        </div>

       
        </div>
        </>

        {/* 

IV. ORGANIZAÇÃO


Presidência da Comissão de Programa:

     João Leitão, U. Nova de Lisboa

     Luís Veiga, U. Lisboa


Comissão Organizadora:

     Lázaro Costa, U. Porto

     Jácome Cunha (Presidente), U. Porto

     João Pascoal Faria, U. Porto

     João Paulo Fernandes, U. Porto

     Hugo da Gião, U. Porto

     Rui Maranhão, U. Porto

     João Saraiva, U. Minho


Comissão Coordenadora:

    Ana Paula Afonso, U. Lisboa

    António Teixeira, U. Aveiro

    Bruno Cabral, U. Coimbra

    Francisco Martins, U. Açores

    Henrique Santos, U. Minho

    Irene Rodrigues, U. Évora

    Jácome Cunha, U. Porto

    João Leitão, U. Nova Lisboa

    João Lourenço, U. Nova Lisboa

    José Fonseca, IPG

    Lúcio Ferrão, OutSystems (Presidente)

    Luís Veiga, U. Lisboa

    Mário Freire, U. Beira Interior

    Matilde Pato, ISEL

    Noélia Correia, U. Algarve

    Nuno Antunes, U. Coimbra
 */}

}
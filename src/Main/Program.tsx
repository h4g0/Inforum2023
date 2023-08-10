import { isConstructorDeclaration } from 'typescript'
import { getArticles } from './Data/GetArticles'
import { getCommunications } from './Data/GetCommunications'
import { getDemos } from './Data/GetDemos'
import { getPoster } from './Data/GetPoster'
import './Main.css'
import {Patreons} from './Patreons'

function Now(props: any) {

    let itemClass = "now"
    itemClass = Date.parse(props.end) < (new Date()).getTime() ? "past" : itemClass
    itemClass = Date.parse(props.start) > (new Date()).getTime() ? "future" : itemClass
    const happeningnow = itemClass === "now" ? true : false
    const oneMinute = 1000 * 60
    const remainingMinutes = Math.ceil((Date.parse(props.start) - (new Date()).getTime()) / oneMinute)

    if (happeningnow) {
        return <><p className='agora'><b>A decorrer AGORA</b></p></>
    } else if (remainingMinutes < 30 && remainingMinutes >= 0) {
        return <><p className='dentro'><b>Começa dentro de {remainingMinutes} minutos</b></p></>
    } else {
        return <></>
    }
}

function ProgramItem(props: any) {

    const itemClass = "now"


    return <>
        <div className={itemClass}>
            <div className="itemInfo">

                <p><b>{props.title} </b>&nbsp; ({props.type})</p>
            </div>
            <div className="itemAbstract">
                <p><b></b>{props.author}</p>
            </div>
        </div>
    </>
}

function Articles(props: any) {

    const articles = props.articles

    return <>
                {articles.map((article: any,index) => {
                    return (<ProgramItem  title={article[0]}
                    author={article[1]}
                   track={article[2]}/>)
                })}            
    </>
}


function Papers(props: any) {

    const articles = props.articles.map(a => {return [a, "Artigo" , 0]})
    const demos = props.demos.map(a => {return [a, "Demo", 3]})
    const comm = props.comm.map(a => {return [a, "Comunicação", 1]})
    const poster = props.poster.map(a => {return [a, "Póster", 2]})

    var allps = [...articles, ...demos,  ...comm, ...poster]



    var allpubs = allps.filter(x => x[0][2] === props.track )
                                        .sort((x, y) => x[0][0] > y[0][0] ? 1 : -1).sort((x,y) => x[2] > y[2] ? 1 : -1)

    console.log(allps)

    return <>
                {allpubs.map((article: any,index) => {
                    return (<ProgramItem  title={article[0][0]}
                    author={article[0][1]}
                   track={article[0][2]} type={article[1]} key={article[0]}/>)
                })}            
    </>
}


export function Program(props: any) {
    return <>
        <div className="People">


            <Patreons/>
            
            <div className="InsideIntro">
                <h2>Programa</h2>
                
                    
                    
                    
                        <p><b><a href="#cd">CD</a> | <a href="#soft">SOFT-PT</a> | 
                        &nbsp;<a href="#cplda">CPDLA</a> | &nbsp;<a href="#crc">CRC</a>
                        &nbsp;| <a href="#cps">CPS&Apps</a> | <a href='#taaemi'>TAAEMI</a></b></p>

                        
                   
                
                
                

                

                <div id="cd" className="ProgramDay">
                    <h4>Ciência de Dados (CD)</h4>

                    <Papers track={"CD 2023"} poster={getPoster()} articles={getArticles()} demos={getDemos()} comm={getCommunications()} ></Papers>

                </div>

                <div id="soft" className="ProgramDay">
                    <h4>Ciência e Engenharia de Software (SOFT-PT)</h4>

                    <Papers track={"SOFT-PT 2023"} poster={getPoster()} articles={getArticles()} demos={getDemos()} comm={getCommunications()} ></Papers>

                </div>

                <div id="cpdla" className="ProgramDay">
                    <h4>Computação Paralela, Distribuída e de Larga Escala (CPDLA)</h4>

                    <Papers track={"CPDLA 2023"} poster={getPoster()} articles={getArticles()} demos={getDemos()} comm={getCommunications()} ></Papers>

                </div>

                <div id="crc" className="ProgramDay">
                    <h4>Comunicações e Redes de Computadores (CRC)</h4>

                    <Papers track={"CRC 2023"} poster={getPoster()} articles={getArticles()} demos={getDemos()} comm={getCommunications()} ></Papers>

                </div>

                <div id="cps" className="ProgramDay">
                    <h4>Sistemas Ciber-Físicos Confiáveis e Aplicações (CPS&Apps)</h4>

                    <Papers track={"SCF-CA 2023"} poster={getPoster()} articles={getArticles()} demos={getDemos()} comm={getCommunications()} ></Papers>

                </div>

                <div id="taaemi" className="ProgramDay">
                    <h4>Tópico Aberto em Áreas Emergentes, Multidisciplinares e Interdisciplinares (TAAEMI)</h4>

                    <Papers track={"TAAEMI"} poster={getPoster()} articles={getArticles()} demos={getDemos()} comm={getCommunications()} ></Papers>

                </div>
                
                
            </div>

        </div>
    </>

}

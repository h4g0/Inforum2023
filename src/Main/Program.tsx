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

                <p><b>{props.title}</b></p>
            </div>
            <div className="itemAbstract">
                <p><b>Authors: </b>{props.author}</p>
                <p><b>Track: </b>{props.track}</p>
            </div>
        </div>
    </>
}

function Articles(props: any) {

    const articles = props.articles

    console.log(articles)

    return <>
                {articles.map((article: any,index) => {
                    return (<ProgramItem  title={article[0]}
                    author={article[1]}
                   track={article[2]}/>)
                })}            
    </>
}




export function Program(props: any) {
    return <>
        <div className="People">


            <Patreons/>
            
            <div className="InsideIntro">
                <h2>Programa:</h2>
                <div className="ProgramDay">

                    <div className='now'>

                    <div className="itemInfo">

                    
                        <p><b><a href="#Articles">Artigos</a> | <a href="#Communications">Comunicações</a> | <a href="#Demos">Demos</a> | <a href="#Posters">Posters</a></b></p>

                        </div>

                    </div>
                
                </div>

                <div id="Articles" className="ProgramDay">
                    <h4>Artigos:</h4>

                    <Articles articles={getArticles()}></Articles>

                </div>

                <div id="Communications" className="ProgramDay">
                    <h4>Comunicações:</h4>

                    <Articles articles={getCommunications()}></Articles>


                </div>


                <div id="Demos" className="ProgramDay">
                    <h4>Demos:</h4>

                    <Articles articles={getDemos()}></Articles>


                </div>

                <div id="Posters" className="ProgramDay">
                    <h4>Posters:</h4>

                    <Articles articles={getPoster()}></Articles>


                </div>

            </div>

        </div>
    </>

}

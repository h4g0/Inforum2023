import './Main.css'
import { Patreons } from './Patreons'


function ProgramItem(props: any){

    let itemClass = "now"
    itemClass = Date.parse(props.end) > (new Date()).getTime() ? "past" : itemClass
    itemClass = Date.parse(props.start) < (new Date()).getTime() ? "future" : itemClass

    return <>
    <div className={itemClass}>
        <p>{props.title}</p>
        <p>{props.author}</p>
        <p>{props.abstract}</p>
    </div></>
}

export function Program(props: any){
    return <><div className="Program">
        
        
            
            <div>
           <Patreons></Patreons>
            </div>
            <div>
               
            </div>
            
        </div>
        </>

}
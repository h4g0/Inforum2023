import './Main.css'
import { Patreons } from './Patreons'

function Now(props: any){

    let itemClass = "now"
    itemClass = Date.parse(props.end) < (new Date()).getTime() ? "past" : itemClass
    itemClass = Date.parse(props.start) > (new Date()).getTime() ? "future" : itemClass
    const happeningnow = itemClass === "now" ?  true : false
    const oneMinute = 1000*60
    const remainingMinutes = Math.ceil((Date.parse(props.start) - (new Date()).getTime()) / oneMinute)
    
    if(happeningnow){
        return <><p className='agora'><b>A decorrer AGORA</b></p></>}
    else if(remainingMinutes < 30 && remainingMinutes >= 0){
        return <><p className='dentro'><b>Começa dentro de {remainingMinutes} minutos</b></p></>
    }
    else {
        return <></>
    }
}

function ProgramItem(props: any){

    const itemClass = "now"
    

    return <>
    <div className={itemClass}>
        <div className="itemInfo">
        <Now start={props.start} end={props.end}></Now>

        <p><b>{props.title}</b></p>
        <p className="itemAuthor">{props.author}</p>
     </div>
     <div className="itemAbstract">
        <p>{props.abstract}</p>
     </div>
    </div></>
}

export function Program(props: any){
    return <><div className="Program">
        
        
            
            <div>
           <Patreons></Patreons>
            </div>
            <div>
                <h2>Programa:</h2>
                <div  className="ProgramDay">
                <h4>Quarta feira dia 20 de setembro de 2023</h4>
               
               <ProgramItem start= '20 Sep 2023 00:00:00 GMT' end='20 Sep 2023 00:30:00 GMT' title="Item1" author="Author number 1" abstract="Machine Learning"></ProgramItem>
               <ProgramItem title="Item1" author="Author number 1" abstract="Machine Learning"></ProgramItem>
                </div>
                
                <div  className="ProgramDay">
                <h4>Quinta feira dia 21 de setembro de 2023</h4>

                <ProgramItem title="Item1" author="Author number 1" abstract="Machine Learning"></ProgramItem>
                <ProgramItem title="Item1" author="Author number 1" abstract="Machine Learning"></ProgramItem>

                </div>
               
              

            </div>
            
        </div>
        </>

}
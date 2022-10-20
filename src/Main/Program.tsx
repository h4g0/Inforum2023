import './Main.css'
import { Patreons } from './Patreons'

function Now(props: any){

    if(props.now){
        return <><p className='agora'><b>A decorrer AGORA</b></p></>}
        else {
            return <></>
        }
}

function ProgramItem(props: any){

    let itemClass = "now"
    itemClass = Date.parse(props.end) < (new Date()).getTime() ? "past" : itemClass
    itemClass = Date.parse(props.start) > (new Date()).getTime() ? "future" : itemClass
    const happeningnow = itemClass === "now" ?  true : false

    return <>
    <div className={itemClass}>
        <div className="itemInfo">
        <Now now={happeningnow}></Now>

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
               
               <h5>Machine learning</h5>
               <ProgramItem start= '20 Sep 2023 00:00:00 GMT' end='20 Sep 2023 00:30:00 GMT' title="Item1" author="Author number 1" abstract="abstract"></ProgramItem>
               <ProgramItem title="Item1" author="Author number 1" abstract="abstract"></ProgramItem>
                </div>
                
                <div  className="ProgramDay">
                <h4>Quinta feira dia 21 de setembro de 2023</h4>

                <ProgramItem title="Item1" author="Author number 1" abstract="abstract"></ProgramItem>
                <ProgramItem title="Item1" author="Author number 1" abstract="abstract"></ProgramItem>

                </div>
               
              

            </div>
            
        </div>
        </>

}
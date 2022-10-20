import './Main.css'
import portiari from "./../portiari.jpg"
import ibis from "./../ibis.jpg"
import aerosa from "./../aerosa.jpg"
import { Patreons } from './Patreons'

export function Accommodation(props: any){
    return <><div className="Accommodation">
        
        
            
            <div>
            <Patreons></Patreons>
            </div>
            <div className='ImportantDates'>
                <h2>Alojamento</h2>
                <p>Existem varios hoteis a distancia a pé da FEUP alguns deles incluem:</p>
                <h3><a href="https://www.hotelportinari.com/">Hotel Portinari</a></h3>
                <p><b>Preço:</b> 47€ por pessoa por noite</p>
                <img src={portiari}></img>

                <h3><a href="https://all.accor.com/hotel/3227/index.pt.shtml">Ibis Porto São João</a></h3>
                <p><b>Preço:</b> 58€ por pessoa por noite</p>
                <img src={ibis}></img>

            </div>
            
        </div>
        </>

}
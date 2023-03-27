import './Main.css'
import portiari from "../img/portiari.jpg"
import ibis from "../img/ibis.jpg"
import { Patreons } from './Patreons'

export function Accommodation(props: any){
    return <><div className="Accommodation">
        
        
            
            <div>
            <Patreons/>
            </div>
            <div className='ImportantDates'>
                <h2>Alojamento</h2>
                <p>Existem vários hotéis a distância a menos de 15 minutos a pé ou de transportes públicos da FEUP alguns deles incluem:</p>
                <h3><a href="https://www.hotelportinari.com/">Hotel Portinari</a></h3>
                <p><b>Preço:</b> 47€ por pessoa por noite</p>
                <img src={portiari} alt="Hotel Portinari"/>

                <h3><a href="https://all.accor.com/hotel/3227/index.pt.shtml">Ibis Porto São João</a></h3>
                <p><b>Preço:</b> 58€ por pessoa por noite</p>
                <img src={ibis}alt="Hotel Ibis"/>

            </div>
            
        </div>
        </>

}

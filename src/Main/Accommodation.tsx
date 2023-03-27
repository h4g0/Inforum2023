import './Main.css'
import portiari from "../img/portiari.jpg"
import ibis from "../img/ibis.jpg"
import hNobre from "../img/hNobre.jpg"
import hQuasar from "../img/hQuasar.jpg"
import {Patreons} from './Patreons'

export function Accommodation(props: any) {

    return <>
        <div className="Accommodation">
            <div>
                <Patreons/>
            </div>
            <div className='ImportantDates'>
                <h2>Alojamento</h2>
                <p>Existem vários hotéis a distância a menos de 15 minutos a pé ou de transportes públicos da FEUP
                    alguns deles incluem:</p>

                <h3 className="mt-4"><a href="https://www.hotelportinari.com/">Hotel Portinari</a></h3>
                <img src={portiari} alt="Hotel Portinari"/>
                <p><b>Distância: </b>700m</p>
                <p><b>Preço:</b> +/-50€ por pessoa por noite</p>

                <br></br>
                <h3 className="mt-4"><a href="https://all.accor.com/hotel/3227/index.pt.shtml">Ibis Porto São João</a></h3>
                <img src={ibis} alt="Ibis Porto São João"/>
                <p><b>Distância: </b>700m</p>
                <p><b>Preço:</b> +/-65€ por pessoa por noite</p>

                <br></br>
                <h3 className="mt-4" ><a href="https://portonobre.net/">Hotel Porto Nobre</a></h3>
                <img src={hNobre} alt="Hotel Porto Nobre"/>
                <p><b>Distância: </b>1.8Km</p>
                <p><b>Preço:</b> +/-60€ por pessoa por noite</p>

                <br></br>
                <h3 className="mt-4"><a href="https://quasar.hotelporto.net/pt/">Hotel Quasar</a></h3>
                <img src={hQuasar} alt="Hotel Quasar"/>
                <p><b>Distância: </b>2.2Km</p>
                <p><b>Preço:</b> +/-50€ por pessoa por noite</p>
            </div>

        </div>
    </>

}

import './Main.css'
import portiari from "../img/portiari.jpg"
import ibis from "../img/ibis.jpg"
import hNobre from "../img/hNobre.jpg"
import hQuasar from "../img/hQuasar.jpg"
import {Patreons} from './Patreons'

function  Hotel(props: any){
    
    return <>
        <div className="card">
        <img src={props.img} alt={props.imgName}/>
        <div className="container">

        <h3 className="mt-4"><a href={props.url}>{props.name}</a></h3>

        <p><b>Distância: </b>{props.distance}</p>
        <p><b>Preço:</b> +/-{props.price}€ por pessoa por noite</p>
        
        </div>
        </div>
    </>

}
export function Accommodation(props: any) {

    return <>
        <div className="Accommodation">
            <div>
                <Patreons/>
            </div>
            <div className='ImportantDates'>
                <h2>Alojamento</h2>
                <p>Existem vários hotéis a menos de 15 minutos a pé ou de transportes públicos da FEUP
                    alguns deles incluem:</p>

                <div className='Hotels'>

                <Hotel img={portiari} name="Hotel Portinari" distance={"700m"} price={50} url={"https://www.hotelportinari.com/"} ></Hotel>
                


                <Hotel img={ibis} name="Ibis Porto São João" distance={"700m"} price={65} url={"https://all.accor.com/hotel/3227/index.pt.shtml"} ></Hotel>



                <Hotel img={hNobre} name="Hotel Porto Nobre" distance={"1.8Km"} price={60} url={"https://portonobre.net/"} ></Hotel>

               


                <Hotel img={hQuasar} name="Hotel Quasar" distance={"2.2Km"} price={50} url={"https://quasar.hotelporto.net/pt/"} ></Hotel>

                </div>

            </div>

        </div>
    </>

}

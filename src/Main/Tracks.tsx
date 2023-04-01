import {Link} from 'react-router-dom'
import './Main.css'
import {Patreons} from './Patreons'

export function Tracks(props: any) {
    return <>
        <div className="Accommodation">


            <div>
                <Patreons/>
            </div>
            <div className='TrackList'>
                
                <h2>Sessões</h2>

                <ul>
                    <li>
                    
                    <Link to="/tracks/crc">
                    Comunicações e Redes de Computadores (CRC)
                    </Link>

                    </li>

                    <li>
                        
                        <Link to="/tracks/softcrc">
                        Ciência e Engenharia de Software (SOFT-PT 2023)
                        </Link>

                    </li>

                    <li>

                        <Link to="/tracks/cd">
                        Ciência de Dados
                        </Link>
                        
                    </li>

                    <li>

                        <Link to="/tracks/sintel">
                        Sistemas Inteligentes (SIntel)
                        </Link>
                    </li>


                    <li>
  
                        <Link to="/tracks/aspi">
                        Aspetos Sócio-Profissionais da Informática
                        </Link>
                        
                    </li>

                    <li>

                        <Link to="/tracks/cpsapps">
                        Sistemas Ciber-Físicos Confiáveis e Aplicações (CPS&Apps)
                        </Link>

                    </li>

                    <li>

                        <Link to="/tracks/cpdla">
                        Computação Paralela, Distribuída e de Larga Escala (CPDLA)
                        </Link>

                    </li>

                </ul>
              
               
             
             
          

            </div>

        </div>
    </>

}

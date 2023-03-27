import {Link} from 'react-router-dom'
import './Main.css'
import {Patreons} from './Patreons'

export function Tracks(props: any) {
    return <>
        <div className="Accommodation">


            <div>
                <Patreons/>
            </div>
            <div className='ImportantDates'>
                <h2>Tracks</h2>

                <Link to="/tracks/crc">
                    <p>Comunicações e Redes de Computadores (CRC)</p>
                </Link>
                <Link to="/tracks/softcrc">
                    <p>Ciência e Engenharia de Software (SOFT-PT 2023)</p>
                </Link>
                <Link to="/tracks/cd">
                    <p>Ciência de Dados</p>
                </Link>
                <Link to="/tracks/sintel">
                    <p>Sistemas Inteligentes (SIntel)</p>
                </Link>
                <Link to="/tracks/aspi">
                    <p>Aspetos Sócio-Profissionais da Informática</p>
                </Link>
                <Link to="/tracks/cpsapps">
                    <p>Sistemas Ciber-Físicos Confiáveis e Aplicações (CPS&Apps)</p>
                </Link>
                <Link to="/tracks/cpdla">
                    <p>Computação Paralela, Distribuída e de Larga Escala (CPDLA)</p>
                </Link>

            </div>

        </div>
    </>

}

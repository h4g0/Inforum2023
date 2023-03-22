import { Link } from 'react-router-dom'
import './Main.css'
import { Patreons } from './Patreons'

export function Tracks(props: any){
    return <><div className="Accommodation">
        
        
            
            <div>
            <Patreons/>
            </div>
            <div className='ImportantDates'>
                <h2>Tracks</h2>
                
                <Link to="/Tracks/CRC">
                    <p>Comunicações e Redes de Computadores (CRC)</p>
                </Link>
                <Link to="/Tracks/SOFTCRC">
                    <p>Ciência e Engenharia de Software (SOFT-PT 2023)</p>
                </Link>
                <Link to="/Tracks/CD">
                    <p>Ciência de Dados</p>
                </Link>
                <Link to="/Tracks/SIntel">
                    <p>Aspetos Sócio-Profissionais da Informática</p>
                </Link>
                <Link to="/Tracks/ASPI">
                    <p>Comunicações e Redes de Computadores (CRC)</p>
                </Link>

            </div>
            
        </div>
        </>

}

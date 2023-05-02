import './Main.css'
import inesctec from "../img/advertisers/inesctec.svg"
import critical from "../img/advertisers/critical.svg"
import { Link, Router } from 'react-router-dom'

export function Patreons(props: any) {
    return <>

        <div className='PatreonsExternal'>

        <Link to={"/patreons"} style={{ textDecoration: 'none' }}>

        <div className="Patreons">



            <div>

                <h2>Patrocinadores</h2>

              

                <h3 className='PlatinumSponsor'>Platinum</h3>

                <img className="SponsorImage" src={critical} title={"Critical Software"}></img>

                <h3 className='GoldSponsor'>Gold</h3>

                <img className="SponsorImage" src={inesctec} title={"INESC TEC"}></img>

            </div>
            



            </div>

        
        </Link>

        </div>

    
    </>

}

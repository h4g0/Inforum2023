import './Main.css'
import inesctec from "../img/advertisers/inesctec.png"
import critical from "../img/advertisers/critical.svg"
import axians from "../img/advertisers/axians.png"

import { Link, Router } from 'react-router-dom'


export function PatreonsTracks(props: any){
   
   return <>

    <Link to={"/patreons"} style={{ textDecoration: 'none' }}>

    <div className="PatreonsTracks">



        <div>

            <h2>Patrocinadores</h2>

          

          


            <h3 className='PlatinumSponsor'>Platinum</h3>

            <img className="SponsorImage" src={critical} title={"Critical Software"}></img>


         

            <h3 className='GoldSponsor'>Gold</h3>

            <img className="SponsorImage" src={inesctec} title={"INESC TEC"}></img>


            <h3 className='SilverSponsor'>Silver</h3>

            <img className="SponsorImage" src={axians} title={"Axians PT"}></img>

        </div>
        



        </div>

    
    </Link>



</>
}

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

                <h3 className='SilverSponsor'>Silver</h3>

                <img className="SponsorImage" src={axians} title={"Axians PT"}></img>


            </div>
            



            </div>

        
        </Link>

        </div>

    
    </>

}

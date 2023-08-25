import './Main.css'
import inesctec from "../img/advertisers/inesctec.png"
import critical from "../img/advertisers/critical.svg"
import axians from "../img/advertisers/axians.png"
import visitporto from "../img/advertisers/LogoVisitPorto&North_rbg_pos.jpg"

import { Link, Router } from 'react-router-dom'

export function PatreonsFull(props: any) {
    return <>

        <div className="PatreonsFull">


            <h2>Patrocinadores</h2>

           
            <h3 className='PlatinumSponsor'>Platinum</h3>

            <img className="SponsorImage" src={critical} title={"Critical Software"}></img>

            

            <h3 className='GoldSponsor'>Gold</h3>

            <img className="SponsorImage" src={inesctec} title={"INESC TEC"}></img>


            <h3 className='SilverSponsor'>Silver</h3>

            <img className="SponsorImage" src={axians} title={"Axians PT"}></img>

            <h2>Apoios</h2>

            <img className="SponsorImage" src={visitporto} title={"Visit Porto Norte"}></img>
        </div>

    </>

}

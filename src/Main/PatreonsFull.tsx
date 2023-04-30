import './Main.css'
import inesctec from "../img/advertisers/inesctec.svg"
import critical from "../img/advertisers/critical.svg"
import { Link, Router } from 'react-router-dom'

export function PatreonsFull(props: any) {
    return <>

        <div className="PatreonsFull">


            <h2>Patrocinadores:</h2>

            <h3 className='GoldSponsor'>Gold sponsor:</h3>

            <img className="SponsorImage" src={inesctec} title={"INESC TEC"}></img>

            <h3 className='PlatinumSponsor'>Platinum sponsor:</h3>

            <img className="SponsorImage" src={critical} title={"Critical Software"}></img>

        </div>

    </>

}

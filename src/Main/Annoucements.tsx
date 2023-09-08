import './Main.css'
import { Link, Router } from 'react-router-dom'

export function Annoucements(props: any) {
    return <>

        <div className='PatreonsExternal'>

        

        <div className="Patreons">



            <div className='AnnoucementsShort'>

                <h2>Anúncios</h2>

              
                <ul>
                    <li>
                    <h2>Rede Wifi</h2>
                    <p>Network: UPorto</p>
                    <p>Username: INForum</p>
                    <p>Password: INForum23</p>

                    </li>
                <li>É com enorme prazer que anunciamos que o Pedro Saleiro, da Feedzai, aceitou ser um dos <Link to="/keynote">palestrantes convidados</Link> no INForum 2023!</li>

                <li>É com enorme prazer que anunciamos que a Professora Cristina Videira Lopes aceitou ser uma das <Link to="/keynote">palestrantes convidadas</Link> no INForum 2023!</li>

                <li>Graças aos nossos patrocinadores, este temos temos 17 <Link to="/grants">bolsas</Link> para estudantes!</li>    
                </ul>

            </div>
            

            </div>

        

        </div>

    
    </>

}

import './Main.css'
import {Patreons} from './Patreons'

export function Grants(props: any) {
    return <>
        <div className="Grants">

            
                <Patreons/>
            
            <div className='InsideIntro'>
                

                <h2>
                Bolsas para Estudantes
                </h2>

                <p>
                    Graças aos nossos patrocinadores, este ano temos 17 bolsas para estudantes que pretendam participar no INForum.
                    Cada bolsa cobre a inscrição de um estudante (Lic., MSc ou PhD). Os restantes custos (alojamento, desclocações, etc.) não serão suportados pelas bolsas.
                </p>
                <p>
                    Mais detalhes sobre as candidaturas serão divulgados em breve.
                </p>

            </div>
        </div>
    </>

}

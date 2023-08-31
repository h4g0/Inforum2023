import './Main.css'
import {Patreons} from './Patreons'

import crista from "../img/crista.jpeg"
import pedro from "../img/Pedro Bizarro.png"


function KeynoteP(props: any) {

    return <>
        <div>
            
            <div className="KeynoteP">
                <img className="PersonImage" width="150" height="150" src={props.picture} alt="{props.name}'s photo"/>
                <div>
                <h4><a  style={{ textDecoration: 'none' }} href={props.page}>{props.name}</a></h4>
                    <p>{props.afiliation}</p>

                    <p><b>Localização:</b> Auditório</p>
                    
                    <p>Apresentação: <h4>{props.title}</h4></p>

                    <p>{props.bio}</p>

                    
                    

                </div>
            </div>
        </div>
    </>
}

export function Keynote(props: any) {
    return <>
        <div className="Keynote">

            
            <Patreons/>
            

                <div className="InsideIntro">

                    <KeynoteP id="CristinaVideiraLopes" name="Cristina Videira Lopes" picture={crista} afiliation="University of California, Irvine"
                            page="https://www.ics.uci.edu/~lopes/"
                            bio="Cristina (Crista) Lopes é Chancellor's Professor na School of Information and Computer Sciences at University of California, Irvine, com interesses de investigação em Linguagens de Programação, Engenharia de Software e Ambientes Virtuais Distribuídos. É IEEE Fellow e ACM Distinguished Scientist. Ela é a vencedora do Prêmio Pizzigati de 2016 para Software de Interesse Público pelo seu trabalho na plataforma de mundo virtual OpenSimulator. O seu livro 'Exercises in Programming Style' recebeu críticas excelentes, incluindo ter sido escolhido como 'Livro Notável' pelas revisões do ACM Best of Computing."
                            title="O Fim da Programação (como a conhecemos)"
                            abstract=""
                            />


                    <KeynoteP name="Pedro Bizarro" picture={pedro} afiliation="Co-fundador e Diretor de Ciência da Feedzai"
                            page="https://feedzai.com/leadership/pedro-bizarro/"
                            title="Mais detalhes em breve."
                            />
                            
                            
                
                </div>
            
            
        </div>
    
    </>

}

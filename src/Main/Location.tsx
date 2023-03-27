import './Main.css'
import satelite from "../img/ComoChegar2.png"
import metro from "../img/mapa-metro-oporto.png"
import {Patreons} from './Patreons'

export function Location(props: any) {
    return <>
        <div className="Location">

            <div>
                <Patreons/>
            </div>

            <div>

                <h2>Como chegar a FEUP</h2>

                <p>A FEUP localiza-se em Portugal, no limite norte da cidade do Porto, perto da Estrada da Circunvalação
                    (EN12) e junto ao Hospital de São João.</p>
                <p><b>Coordenadas:</b> 41.1780, -8.5980 (41o 10’ 40.8’’ N, 8o 35’ 52.8’’ W)</p>
                <img src={satelite} alt="cordenadas satélite"/>
                <h3>De metro</h3>
                <ul>
                    <li> A linha D (amarela) liga o Pólo Universitário à Câmara de Gaia em cerca de 15 minutos, passando
                        pela Trindade, onde tem ligação com as linhas A (azul), B (vermelha) e C (verde). Saindo na
                        estação do Pólo Universitário, deverá virar à esquerda na Rua do Dr. Manuel Pereira da Silva e,
                        depois de passar o cemitério de Paranhos, virar à esquerda para a Rua do Dr. Roberto Frias.
                        Continue até encontrar a FEUP do seu lado direito.
                    </li>
                    <li>Saindo no IPO, deverá percorrer toda a extensão da Rua do Dr. Plácido da Costa e atravessar a
                        rua do Dr. Roberto Frias. Estará agora em frente à FEUP.
                    </li>
                    <li>Saindo no Hospital de São João, siga pela estrada da circunvalação até encontrar o cruzamento
                        com a Rua do Dr. Roberto Frias. Percorra esta rua até ao cruzamento com Rua do Dr. Plácido da
                        Costa. Terá agora a FEUP do seu lado esquerdo.
                    </li>
                </ul>
                <img src={metro} alt="Metro do Porto"/>
                <h3>De Autocarro</h3>
                <p>Existem 4 linhas de autocarro na zona da Faculdade: 204, 300, 301 e 803.

                    Também estão disponíveis, a partir do Hospital de S.João, outras linhas dos STCP, bem como carreiras
                    regulares para outras cidades.

                    De forma a escolher qual o autocarro que se adequa melhor ao seu percurso, visite os sites: <a
                        href="https://www.stcp.pt">www.stcp.pt</a> e <a
                        href="https://www.itinerarium.net">www.itinerarium.net</a>. É possível também apanhar um
                    autocarro de <a href="https://rede-expressos.pt/">rede nacional de expressos</a> até a estação campo
                    24 de agosto e proceder de metro até a FEUP. </p>
                <h3>De Automóvel</h3>
                <p>A melhor forma de encontrar a Faculdade de Engenharia, é seguir as indicações para o Hospital de São
                    João. Apresentam-se agora as rotas para as principais origens tendo como destino a FEUP.</p>
                <h4>Vindo de Ermesinde, Gondomar e Valongo pela estrada da Circunvalação (EN12)</h4>
                <p>Deverá seguir pela EN12 até encontrar o Hospital de São João à sua esquerda. Continue em frente nos
                    semáforos com a Rua Dr. Roberto Frias e mantenha-se à esquerda. No próximo cruzamento com semáforos,
                    vire à esquerda para a Rua António Bernardino Almeida (terá o IPO à sua direita) e siga em frente
                    até ao cruzamento com a Rua do Dr. Plácido da Costa, onde deverá continuar em frente. Mantenha-se à
                    esquerda até ao próximo cruzamento, onde deverá virar à esquerda. Siga em frente por essa rua até
                    chegar a outro cruzamento onde deverá virar à esquerda. Siga até ao fim da estrada que termina na
                    Rua do Dr. Roberto Frias, onde deverá virar à esquerda. Mantenha-se na direita até ao cruzamento com
                    a Via Estruturante, onde deverá virar à direita.</p>
                <h4>Vindo da Maia e Matosinhos pela estrada da Circunvalação (EN12)</h4>
                <p>Deverá seguir pela EN12 até encontrar o IPO à sua direita. Coloque-se à direita nos semáforos para
                    virar à direita para a Rua António Bernardino Almeida (contornando o IPO) e siga em frente até ao
                    cruzamento com a Rua do Dr. Plácido da Costa, onde deverá continuar em frente. Mantenha-se à
                    esquerda até ao próximo cruzamento, onde deverá virar à esquerda. Siga em frente por essa rua até
                    chegar a outro cruzamento onde deverá virar à esquerda. Siga até ao fim da estrada que termina na
                    Rua do Dr. Roberto Frias, onde deverá virar à esquerda. Mantenha-se na direita até ao cruzamento com
                    a Via Estruturante, onde deverá virar à direita.</p>
                <h4>Parque Automóvel</h4>
                <p>A FEUP possui três parques para automóveis. Todos eles têm acesso a partir da Via Estruturante
                    (perpendicular à Rua Doutor Roberto Frias) que contorna o perímetro sul da Faculdade.</p>
                <ol>
                    <li>Acesso ao parque para docentes e funcionários (pessoal permanente) e ao parque de visitas;</li>
                    <li>Acesso ao parque para alunos;</li>
                    <li>Acesso ao parque para alunos pessoal não permanente</li>
                </ol>
                <h3>De comboio</h3>
                <p>Se chega à cidade do Porto de comboio, tem duas hipóteses:</p>
                <ul>
                    <li>Se sair na estação de Campanhã, deverá apanhar o metro e optar por uma das seguintes linhas: A
                        (azul), B (vermelha), C (verde) ou E (roxa). Terá de efetuar transbordo na estação da Trindade e
                        apanhar a linha D (amarela). Deverá seguir as indicações dadas na opção “De metro”.
                    </li>
                    <li>Se sair na estação de S. Bento, deverá apanhar a linha D (amarela) do metro e seguir as
                        indicações dadas na opção “De metro”.
                    </li>
                </ul>

                <h3>De avião (Aeroporto Sá Carneiro)</h3>
                <p>A maneira mais rápida de chegar à FEUP, caso não tenha veículo próprio à espera ou não pretenda ir de
                    táxi, é apanhar o metro, linha E (roxa). Deverá efetuar transbordo na estação da Trindade e apanhar
                    a linha D (amarela). Depois, deverá seguir as indicações dadas na opção “De Metro”.</p>

            </div>

        </div>

    </>
}

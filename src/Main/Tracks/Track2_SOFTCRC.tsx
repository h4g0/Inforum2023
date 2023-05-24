import {InforumDates, InforumDatesTracks} from '../Dates';
import '../Main.css'
import {Patreons, PatreonsTracks} from "../Patreons";
import { SortedCommission } from '../Tracks';

export function Track2_SOFTCRC(props: any) {
    const co_cor = [
        "Luís Caires, Universidade Nova de Lisboa",
        "Carla Ferreira, Universidade Nova de Lisboa",
        "Luis Barbosa, Universidade do Minho",
        "Antónia Lopes, Universidade Lisboa",
        "João Pascoal Faria, Universidade do Porto",
        "Salvador Abreu, Universidade de Évora",
        "Simão Melo de Sousa, Universidade da Beira Interior",
        "Vasco Thudichum Vasconcelos, Universidade Lisboa"
    ]

    const cor_pro = [
        "Jorge Sousa Pinto, Universidade do Minho (coord.)"
    ]

    const co_pro = [
        "Alexandra Mendes, Universidade do Porto",
        "Ana Almeida Matos, Universidade Lisboa",
        "Antónia Lopes, Universidade Lisboa",
        "Carla Ferreira, Universidade Nova de Lisboa",
        "Cláudio Lourenço, Huawei Central Software Institute (UK)",
        "Daniela Cruz, Checkmarx",
        "David Pereira, ISEP, Instituto Politécnico do Porto",
        "Francisco Martins, Universidade dos Açores",
        "Hugo Macedo, Aarhus University (Denmark)",
        "Isabel Sousa Brito, Instituto Politécnico de Beja",
        "João Saraiva, Universidade do Minho",
        "João Paulo Fernandes, Universidade do Porto",
        "Joaquim Tojal, Critical Software",
        "Luís Caires, Universidade Nova de Lisboa",
        "Marco Vieira, Universidade de Coimbra",
        "Maria João Frade, Universidade do Minho",
        "Mário Florido, Universidade do Porto",
        "Mário Pereira, Universidade Nova de Lisboa",
        "Miguel Oliveira e Silva, Universidade de Aveiro",
        "Salvador Abreu, Universidade de Évora",
        "Sandra Alves, Universidade do Porto",
        "Simão Melo de Sousa, Universidade da Beira Interior",
        "Vasco Vasconcelos, Universidade de Lisboa",
        "Victor Miraldo, Channable (The Netherlands)" 
    ]

    return <>
        <div className="Accommodation">

            <div className='Tracks'>
                <div className='TracksOne'>

                    <h1>Ciência e Engenharia de Software (SOFT-PT 2023)</h1>

                    <p>O SOFT-PT (Ciência e Engenharia de Software) é uma das sessões do INForum
                        (https://inforum.org.pt/),
                        um encontro de investigadores académicos e industriais que trabalham em temas relacionados com a
                        ciência e engenharia de software, unindo a teoria à prática através de princípios, metodologias,
                        sistemas e ferramentas. Já na sua 14ª edição, o SOFT-PT estabeleceu-se como um ponto de encontro
                        privilegiado para os especialistas nacionais com interesse nesta área.</p>

                    <h2>Lista de tópicos</h2>

                    <p>Solicitam-se artigos com contribuição original em todos os tópicos relacionados com o software,
                        nomeadamente (mas não apenas) trabalhos que se enquadrem nas seguintes áreas:</p>

                    <ul>
                        <li>Modelos de computação e de programação</li>
                        <li>Fundamentos da engenharia de software</li>
                        <li>Metodologias de desenvolvimento de software</li>
                        <li>Princípios, desenho e implementação de linguagens de programação e de modelação</li>
                        <li>Especificação, análise, verificação, validação e testes de software</li>
                        <li>Segurança e fiabilidade de software</li>
                        <li>Análise de requisitos e arquiteturas de software</li>
                        <li>Processos de desenvolvimento, manutenção e qualidade de software</li>
                        <li>Ambientes e ferramentas para o desenvolvimento de software</li>
                        <li>Desenho e análise de algoritmos, pesquisa e optimização</li>
                        <li>Casos de estudo e relatos de experiências na indústria de software</li>
                    </ul>
                </div>

                <div className='TracksTwo'>

                    <div className='InsideTracksTwo'>

                    <div className='Submission'>
                    <h2>Link de submissão</h2>

                    <a href="https://easychair.org/conferences/?conf=inforum2023">https://easychair.org/conferences/?conf=inforum2023</a>

                    </div>
                        <h2>Datas importantes</h2>

                        <InforumDatesTracks></InforumDatesTracks>


                       

                        <h2>Comissão de programa</h2>

                        <SortedCommission cord={cor_pro} people={co_pro}></SortedCommission>


                        <h2>Comissão coordenadora</h2>

                            
                        <SortedCommission people={co_cor}></SortedCommission>

                        <PatreonsTracks></PatreonsTracks>

                    </div>

                </div>
            </div>
        </div>

    </>

}

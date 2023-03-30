import {InforumDates, InforumDatesTracks} from '../Dates';
import '../Main.css'
import {Patreons} from "../Patreons";

export function Track2_SOFTCRC(props: any) {
    return <>
        <div className="Accommodation">


            <div>
                <Patreons/>
            </div>
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

                        <ul>
                            <li>Luís Caires, lcaires@fct.unl.pt</li>
                            <li>Carla Ferreira, carla.ferreira@fct.unl.pt</li>
                            <li>Luis Barbosa, lsb@di.uminho.pt</li>
                            <li>Antónia Lopes, malopes@ciencias.ulisboa.pt</li>
                            <li>João Pascoal Faria, jpf@fe.up.pt</li>
                            <li>Salvador Abreu, spa@uevora.pt</li>
                            <li>Simão Melo de Sousa, desousa@di.ubi.pt</li>
                            <li>Vasco Thudichum Vasconcelos, vmvasconcelos@ciencias.ulisboa.pt</li>
                        </ul>


                        <h2>Comissão coordenadora</h2>

                        <ul>
                            <li>Jorge Sousa Pinto, Universidade do Minho (coord.)</li>
                            <li>Alexandra Mendes, Universidade do Porto</li>
                            <li>Ana Almeida Matos, Universidade Lisboa</li>
                            <li>Antónia Lopes, Universidade Lisboa</li>
                            <li>Carla Ferreira, Universidade Nova de Lisboa</li>
                            <li>Cláudio Lourenço, Huawei Central Software Institute (UK)</li>
                            <li>Daniela Cruz, Checkmarx</li>
                            <li>David Pereira, ISEP, Instituto Politécnico do Porto</li>
                            <li>Francisco Martins, Universidade dos Açores</li>
                            <li>Hugo Macedo, Aarhus University (Denmark)</li>
                            <li>Isabel Sousa Brito, Instituto Politécnico de Beja</li>
                            <li>João Saraiva, Universidade do Minho</li>
                            <li>João Paulo Fernandes, Universidade do Porto</li>
                            <li>Joaquim Tojal, Critical Software</li>
                            <li>Luís Caires, Universidade Nova de Lisboa</li>
                            <li>Marco Vieira, Universidade de Coimbra</li>
                            <li>Maria João Frade, Universidade do Minho</li>
                            <li>Mário Florido, Universidade do Porto</li>
                            <li>Mário Pereira, Universidade Nova de Lisboa</li>
                            <li>Miguel Oliveira e Silva, Universidade de Aveiro</li>
                            <li>Salvador Abreu, Universidade de Évora</li>
                            <li>Sandra Alves, Universidade do Porto</li>
                            <li>Simão Melo de Sousa, Universidade da Beira Interior</li>
                            <li>Vasco Vasconcelos, Universidade de Lisboa</li>
                            <li>Victor Miraldo, Channable (The Netherlands)</li>
                        </ul>


                    </div>

                </div>
            </div>
        </div>

    </>

}

import {InforumDates, InforumDatesTracks} from '../Dates';
import '../Main.css'
import {Patreons, PatreonsTracks} from "../Patreons";
import { SortedCommission } from '../Tracks';

export function Track4_SIntel(props: any) {
    
    const cor_pro = [
        "Henrique Lopes Cardoso, Faculdade de Engenharia da Universidade do Porto (coord.)",
        "Luís Filipe Teixeira, Faculdade de Engenharia da Universidade do Porto (coord.)"
    ]

    const co_pro = [ 
    "Alberto Simões, Instituto Politécnico do Cávado e do Ave",
    "António Abelha, Universidade do Minho",
    "Ana Paula Rocha, Faculdade de Engenharia da Universidade do Porto",
    "Artur Pereira, Universidade de Aveiro",
    "Brígida Mónica Faria, ESS/Instituto Politécnico do Porto",
    "César Analide, Universidade do Minho",
    "Daniel Castro Silva, Faculdade de Engenharia da Universidade do Porto",
    "Gil Gonçalves, Faculdade de Engenharia da Universidade do Porto",
    "Hélder Oliveira, Faculdade de Ciências da Universidade do Porto",
    "Joana Campos, INESC-ID",
    "João Balsa, Faculdade de Ciências da Universidade do Lisboa",
    "João Cordeiro, Universidade da Beira Interior",
    "João C. Neves, Universidade da Beira Interior",
    "João Rodrigues, Universidade de Aveirolg",
    "João Ricardo Silva, Faculdade de Ciências da Universidade do Lisboa",
    "Jorge Alves da Silva, Faculdade de Engenharia da Universidade do Porto",
    "Liliana Ferreira, Fraunhofer AICOS",
    "Luís Nunes, Instituto Universitário de Lisboa",
    "Luis Rosado, Fraunhofer AICOS",
    "Maria Vasconcelos, Fraunhofer AICOS",
    "Nelson Rodrigues, Instituto Politécnico de Bragança",
    "Nuno Gonçalves, Universidade de Coimbra",
    "Pedro Melo-Pinto, Universidade de Trás-os-Montes e Alto Douro",
    "Pedro Moreira, Instituto Politécnico de Viana do Castelo",
    "Ricardo Campos, Instituto Politécnico de Tomar"]

    return <>
        <div className="Accommodation">

            <div className='Tracks'>
                <div className='TracksOne'>

                    <h1>Sistemas Inteligentes (SIntel)</h1>
                    <p>A sofisticação de sistemas informáticos modernos exige uma cada vez maior integração de
                        mecanismos avançados e inteligentes de suporte à tomada de decisão e de interação com humanos. O
                        tópico Sistemas Inteligentes agrega a inclusão em sistemas informáticos de componentes
                        relacionados com a tomada de decisão inteligente.


                        De facto, temos assistido, nos últimos anos, a uma relevância crescente de soluções baseadas em
                        inteligência artificial, com promessas crescentes de contribuirem para a resolução de problemas
                        cada vez mais exigentes. As abordagens baseadas em inteligência artificial deixaram de gravitar
                        em redor dos meios científicos e académicos, encontrando-se em franca expansão em diversas áreas
                        e mercados.


                        Nos sistemas inteligentes destacam-se três tarefas: percepção, raciocínio e interação. A
                        percepção é responsável pela compreensão do ambiente, obtendo informação semântica através de
                        várias modalidades, como imagem, texto, som, ou outras. O raciocínio ajuda o sistema a tomar
                        decisões, resolver problemas complexos e gerar novos conhecimentos usando a informação recolhida
                        da percepção e de outras fontes. A interação permite que o sistema comunique e colabore com
                        outros agentes, como humanos ou outros sistemas inteligentes, permitindo operar em ambientes
                        complexos e dinâmicos. Ao realizar essas tarefas, os sistemas inteligentes permitem abordar de
                        formas inovadoras problemas do mundo real em virtualmente qualquer domínio de aplicação, desde a
                        saúde, indústria, transportes, agricultura, serviços, arte, etc.
                    </p>


                    <h2>Lista de tópicos</h2>


                    <li>Análise de imagem</li>
                    <li>Confiança, transparência e explicabilidade em sistemas inteligentes</li>
                    <li>Computação evolucionária</li>
                    <li>Ética em inteligência artificial</li>
                    <li>Geração automática de texto, imagem e vídeo</li>
                    <li>Inteligência Artificial</li>
                    <li>Interação com sistemas inteligentes</li>
                    <li>Interfaces conversacionais</li>
                    <li>Meta-heurísticas e optimização</li>
                    <li>Processamento de linguagem natural</li>
                    <li>Robótica inteligente</li>
                    <li>Sistemas multi-agente</li>
                    <li>Sistemas baseados em conhecimento</li>
                    <li>Sistemas periciais e de apoio à decisão</li>
                    <li>Visão por computador</li>
                    <li>Visualização inteligente de informação</li>

                </div>

                <div className='TracksTwo'>
                    <div className='InsideTracksTwo'>

                    <div className='Submission'>
                        
                    <h2>Link de submissão</h2>

                    <a href="https://easychair.org/conferences/?conf=inforum2023">https://easychair.org/conferences/?conf=inforum2023</a>

                    </div>

                        <h2>Datas importantes</h2>

                        <InforumDatesTracks></InforumDatesTracks>


                        
                        <h2>Comissão coordenadora</h2>

                        <ul>
                            <li>Henrique Lopes Cardoso, Faculdade de Engenharia da Universidade do Porto</li>
                            <li>Luís Filipe Teixeira, Faculdade de Engenharia da Universidade do Porto</li>
                        </ul>

                        <h2>Comissão de programa</h2>

                       <SortedCommission cord={cor_pro} people={co_pro}></SortedCommission>
                        <PatreonsTracks></PatreonsTracks>
                    </div>
                </div>
            </div>
        </div>
    </>

}

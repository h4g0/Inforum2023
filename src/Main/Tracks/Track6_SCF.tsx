import {InforumDates, InforumDatesTracks} from '../Dates';
import '../Main.css'
import {Patreons, PatreonsTracks} from "../Patreons";
import { SortedCommission } from '../Tracks';

export function Track6_SCF(props: any) {

    const cor_pro = [
        "José Cecílio, LASIGE/Faculdade de Ciências da Universidade de Lisboa (coord.)",
        "Pedro Fonseca, Universidade de Aveiro/IT (coord.)",
        "Ricardo Severino, Instituto Politécnico do Porto (coord.)"
    ]

    const co_pro = [
                            "Aleksandar Ilic, INESC-ID/Instituto Superior Técnico",
                            "António Casimiro, LASIGE/Faculdade de Ciências da Universidade de Lisboa",
                            "Armando Sousa, Faculdade de Engenharia da Universidade do Porto/INESC-TEC",
                            "Carlos Almeida, Instituto Superior Técnico-Universidade de Lisboa",
                            "Carlos Gonçalves, EFACEC/ Instituto Superior de Engenharia do Porto",
                            "Daniel Silveira, GMVIS",
                            "Filipe Pinto, AlticeLabs",
                            "João Bispo, Faculdade de Engenharia da Universidade do Porto/INESCTEC",
                            "João Carlos Ferreira, ISCTE-Instituto Universitário de Lisboa",
                            "João Cunha, Instituto Superior de Engenharia de Coimbra-Instituto Politécnico de Coimbra",
                            "Joaquim Ferreira, IT/Universidade de Aveiro",
                            "Jorge Pinto, HASLab/INESC TEC/U.Minho",
                            "Luis Gomes, UNINOVA",
                            "Luis Lino Ferreira, INESC-TEC/ Instituto Superior de Engenharia do Porto",
                            "Luis Moutinho, ESTG Águeda/Universidade de Aveiro/IT",
                            "Lurien Klein, Virtual Power Solutions",
                            "Nuno Macedo, University of Porto & INESC TEC",
                            "Paulo Pedreiras, IT/DETI-Universidade de Aveiro",
                            "Paulo Bartolomeu, IT/DETI-Universidade de Aveiro",
                            "Pedro Ferreira, LASIGE/Faculdade de Ciências da Universidade de Lisboa",
                            "Pedro Lousã, Beyond Vision",
                            "Sandro Pinto, Centro ALGORITMI/Uminho",
                            "Sérgio Ivan Lopes, ESTG/Instituto Politécnico de Viana do Castelo",
                            "William Correia Xavier, Wiseware"
    ]

    return <>
        <div className="Accommodation">
            
            <div className='Tracks'>
                <div className='TracksOne'>

                    <h1>Sistemas Ciber-Físicos Confiáveis e Aplicações (CPS&Apps)</h1>

                    <p>
                        Os avanços nos tópicos de sistemas embebidos, potenciados pelas diversas tecnologias de
                        comunicação digitais têm vindo a dar origem a uma nova geração de sistemas, caracterizados pela
                        sua próxima interação com o ambiente físico e os humanos – os sistemas ciber-físicos. Estes
                        sistemas, têm frequentemente, por estas razões, requisitos extremamente exigentes em termos de
                        confiabilidade e segurança, verificação e validação, desempenho, resposta temporal,
                        determinismo, consumo energético, dissipação de potência, e de interligação com outros sistemas
                        e ambientes através de sensores e atuadores. Por essa razão, as interfaces hardware-software
                        necessitam de ser projetadas considerando a sua interdependência, nas dimensões dos sistemas
                        embebidos, comunicações e controlo, impondo novas competências que combinam o conhecimento de
                        hardware com o de software.
                        Esta geração de sistemas ciber-físicos, componente fundamental no paradigma da Indústria 4.0,
                        são utilizados numa vasta gama de aplicações em áreas como as comunicações, a robótica, o espaço
                        ou os veículos autónomos não tripulados. Em particular, é de salientar a cada vez maior
                        dependência de comunicações sem fios, como da “IoT - Internet of Things”, para suportar serviços
                        que se querem cada vez mais ubíquos, potenciando a cooperação entre diversos sistemas
                        ciber-físicos, originando sistemas de sistemas (SoS) de maior complexidade - sistemas
                        ciberfísicos cooperantes como formações de veículos terrestres e aéreos.
                        Este tipo de sistemas têm sido explorados no contexto nacional por diferentes grupos de
                        investigação, dinamizado num leque abrangente de disciplinas ao nível do ensino pós-graduado e
                        concretizado por um número crescente de projetos desenvolvidos por empresas nacionais (e.g.
                        Critical Software, Deimos Engenharia, EDISOFT, EFACEC, EMPORDEF-TI, GMV Skysoft, PDM&FC, NAV
                        Portugal EPE, Nokia, Siemens Networks, Bosch, Capgemini).
                        Nesta sessão em Sistemas Ciber-Físicos Confiáveis e Applicações, pretende-se manter a ligação à
                        indústria, instituída logo na primeira edição da sessão original (SETR - Sistemas Embebidos e de
                        Tempo Real) e que tem vindo a ser progressivamente atualizada, inclusivamente no seu âmbito,
                        abraçando aplicações de sistemas ciber-físicos mais genéricas, tocando as áreas de IoT, robótica
                        e Indústria 4.0.
                    </p>

                    <h2>Lista de tópicos</h2>

                    <ul>

                        <li>Tecnologias de suporte a sistemas ciber-físicos</li>
                        <ul>
                            <li>Computação e comunicação em tempo-real</li>
                            <li>Tecnologias de redes para sistemas embebidos</li>
                            <li>Redes de sensores sem fios</li>
                            <li>Confiabilidade e segurança em sistemas embebidos</li>
                            <li>Autonomia e reconfiguração</li>
                        </ul>

                        <li>Desenho e métodos em sistemas ciber-físicos</li>
                        <ul>
                            <li>Desenho e implementação</li>
                            <li>Metodologias de desenho e ferramentas</li>
                            <li>Co-desenho hardware/software</li>
                            <li>Sistemas críticos</li>
                            <li>Processos de desenvolvimento</li>
                            <li>Modelos de computação e métodos formais</li>
                            <li>Verificação, validação e qualificação</li>
                        </ul>

                        <li>Componentes e plataformas em sistemas ciber-físicos</li>
                        <ul>
                            <li>Sistemas distribuídos</li>
                            <li>Sistemas integrados e arquiteturas</li>
                            <li>Núcleos, sistemas operativos e middleware</li>
                            <li>Linguagens de programação e compiladores</li>
                        </ul>

                        <li>Algoritmos e controlo em sistemas ciber-fĩsicos</li>
                        <ul>
                            <li>Gestão de recursos em tempo-real e escalonamento</li>
                            <li>Controlo da qualidade de serviço</li>
                            <li>Perceção e redução do consumo energético</li>
                        </ul>

                        <li>Sistemas Ciberfísicos na Internet das Coisas e Indústria 4.0</li>
                        <ul>
                            <li>Aquisição, processamento e transmissão de dados</li>
                            <li>Tecnologias de transmissão de dados: 5G, NB-IOT, LoRa, ...</li>
                            <li>Controlo e robótica</li>
                            <li>Aspetos de segurança e confiabilidade</li>
                            <li>Middleware e protocolos de comunicação</li>
                            <li>Processamento e análise de dados em tempo-real</li>
                            <li>Aplicações e computação na núvem para a Internet das Coisas</li>
                        </ul>

                        <li>Estudos de caso e aplicações</li>
                        <ul>
                            <li>Estudos de caso: automação industrial, domótica, robótica, veículos automóveis, aviação,
                                aeroespacial, telecomunicações, saúde, …
                            </li>
                            <li>Aplicações: condução autónoma, monitorização ambiental, e Agricultura, ...</li>
                        </ul>

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
                        <PatreonsTracks></PatreonsTracks>
                    </div>


                </div>
            </div>
        </div>

    </>

}

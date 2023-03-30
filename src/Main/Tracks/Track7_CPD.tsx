import {InforumDates, InforumDatesTracks} from '../Dates';
import '../Main.css'
import {Patreons} from "../Patreons";

export function Track7_CPD(props: any) {
    return <>
        <div className="Accommodation">

            <div>
                <Patreons/>
            </div>

            <div className='Tracks'>
                <div className='TracksOne'>

                    <h1>Computação Paralela, Distribuída e de Larga Escala (CPDLA)</h1>

                    <p>
                        As comunidades industrial e académica têm mostrado um interesse crescente em
                        maximizar e otimizar a utilização dos recursos computacionais através do
                        desenvolvimento e utilização de sistemas paralelos, distribuídos e de larga escala.
                        Assim, a motivação para uma sessão na área da Computação Paralela, Distribuída e
                        de Larga Escala (CPDLA) advém naturalmente da importância crescente que esta
                        área assume nos vários setores da sociedade.
                        A computação paralela e os sistemas distribuídos são áreas clássicas da Informática,
                        contando com décadas de eventos e publicações. Esta área envolve um conjunto
                        relevante e alargado de temas, como o uso de processadores gráficos para
                        computação geral, o suporte transacional em hardware, as redes sociais e os sistemas
                        distribuídos de grande escala suportados por diferentes tipos de nuvens
                        computacionais, proporcionando sinergias e colaborações entre a comunidade
                        científica e a indústria nacional e internacional. O estudo destes temas é apoiado e
                        patrocinado por entidades internacionais como a ACM, IEEE, USENIX e IFIP.
                        Esta sessão de CPDLA pretende reunir num mesmo fórum de discussão todos
                        aqueles que em Portugal desenvolvem trabalho nesta área, seja este de índole
                        científica, técnica, ou de transferência de tecnologia proveniente tanto da comunidade
                        académica como do tecido empresarial. Procuramos a submissão de artigos (em
                        português ou inglês) na área da Computação Paralela, Distribuída e de Larga Escala
                        no seu sentido lato, sendo ilustrada, de forma não exaustiva, pela lista de tópicos de
                        interesse desta sessão.
                    </p>

                    <h2>Lista de tópicos</h2>

                    <ul>

                        <li>Sistemas Entre-Pares e Computação na Periferia da Rede</li>
                        <li>Arquiteturas, Middleware, Runtimes e Aplicações de Alto Desempenho</li>
                        <li>Sistemas Robustos, Replicados e Geo-Distribuidos</li>
                        <li>Computação Escalável e de Alto Desempenho</li>
                        <li>Grid, Utility e Cloud Computing</li>
                        <li>Computação Autonómica</li>
                        <li>Computação Paralela com Aceleradores (GPGPU, FPGA)</li>
                        <li>Aplicações de Grande Escala e big Data</li>
                        <li>Suporte e Gestão de Hardware Inovador (e.g., Memórias Persistentes)</li>
                        <li>Segurança e privacidade</li>

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
                            <li>Ricardo Vilaça, Universidade of Minho</li>
                            <li>Luís Veiga, Instituto Superior Técnico / INESC-ID Lisboa</li>
                            <li>Vitor Duarte, NOVA LINCS / Universidade NOVA de Lisboa</li>
                            <li>Luís Rodrigues, Instituto Superior Técnico / INESC-ID Lisboa</li>
                            <li>Óscar Mortágua Pereira, Universidade de Aveiro</li>
                            <li>José Simão, Instituto Superior de Engenharia de Lisboa - Instituto Politécnico de Lisboa
                                / INESC-ID Lisboa
                            </li>
                            <li>João Nuno Silva, Instituto Superior Técnico / INESC-ID Lisboa</li>
                            <li> Miguel Matos, Instituto Superior Técnico / INESC-ID Lisboa</li>
                            <li>Francisco Maia, Universidade do Minho</li>
                            <li>Hugo Miranda, Universidade de Lisboa -Faculdade de Ciências / LaSIGE</li>
                            <li>Salvador Abreu, LISP &amp; CRI / University of Évora</li>
                            <li>João Lourenço, NOVA LINCS / Universidade NOVA de Lisboa</li>
                            <li>Paula Prata, Universidade da Beira Interior</li>
                            <li>Carlos Goncalves, Instituto Superior de Engenharia de Lisboa, Instituto Politécnico de
                                LisboaInstituto Politécnico de Lisboa
                            </li>
                            <li>Luís Antunes, Faculdade de Ciências da Universidade do Porto - Universidade do Porto
                            </li>
                            <li>Carlos Baquero, Faculdade de Engenharia da Universidade do Porto - Universidade do
                                Porto
                            </li>
                            <li>Nuno Santos, Instituto Superior Técnico / INESC-ID Lisboa</li>
                            <li>Hervé Paulino, NOVA LINCS / Universidade NOVA de Lisboa</li>
                        </ul>


                    </div>


                </div>
            </div>
        </div>

    </>

}

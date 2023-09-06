import { Link } from 'react-router-dom'
import './Main.css'
import { Patreons } from './Patreons'

export function Schedule(props: any) {
    return <>
        <div className="Dates">


            <Patreons />

            <div className="InsideIntro">

                <div>

            <h1>Programa</h1>

            <p>
                As apresentações dos artigos completos não devem ultrapassar os 20 minutos, as das comunicações
                os 10 minutos, e as das demonstrações os 4 minutos, tempos que devem incluir Q&A.
            </p>

            <p>
                Neste evento ocorrerão duas sessões a <b>sessão A</b> será realizada no Auditório e a <b>sessão B</b> na sala B033.
            </p>

            <h2>7 de setembro</h2>

            <table className='RegistrationTable'>
                <tr>


                    <th></th>
                    <th>Sessão A (Auditório)</th>
                    <th></th>
                    <th>Sessão B (B033)</th>
                   


                </tr>
                
                <tr>
                    <td><b>11:00</b></td>
                    <td colSpan={3}>Registo</td>
                  
                </tr>

                <tr>
                    <td ><b>12:00</b></td>
                    <td colSpan={3}>Almoço</td>
                   
                </tr>

                <tr>
                    <td ><b>13:20</b></td>
                    <td colSpan={3}>Abertura</td>
                 
                </tr>


                <tr>
                    <td  width={80} ><b>13:30</b></td>
                    <td  width={150}><b><a style={{ textDecoration: 'none' }} href="#CPDLA1">CPDLA</a></b></td>
                    <td  width={80}><b>13:30</b></td>
                    <td width={150}><b><a style={{ textDecoration: 'none' }} href="#CSAPPS1">CPS&Apps</a></b></td>
                </tr>

                
                <tr>
                    <td ><b>14:55</b></td>
                    <td colSpan={3}>Intervalo</td>
                   
                </tr>


                <tr>
                    <td ><b>15:00</b></td>
                    <td colSpan={3}><Link style={{ textDecoration: 'none' }} to="/keynote"><b>Keynote: Cristina Videira Lopes</b></Link></td>
                  
                </tr>

                <tr>
                    <td ><b>16:00</b></td>
                    <td colSpan={3}>Coffee break / <b><a style={{ textDecoration: 'none' }} href="#posters1">Primeira sessão de posters</a></b></td>
                  
                </tr>


                <tr>
                    <td ><b>16:30</b></td>
                    <td ><b><a style={{ textDecoration: 'none' }} href="#softpt1">SOFT-PT</a></b></td>
                    <td ><b>16:30</b></td>
                    <td ><b><a style={{ textDecoration: 'none' }} href="#cd1">CD</a></b></td>
                </tr>

                <tr>
                    <td ><b>18:10</b></td>
                    <td colSpan={3}></td>
                  
                </tr>

                <tr>
                    <td ><b>20:00</b></td>
                    <td colSpan={3}>Jantar</td>
                   
                </tr>
            </table>

            <br/>

            <h2>8 de setembro</h2>

  <table className='RegistrationTable'>
                <tr>


                
                    <th></th>
                    <th>Sessão A (Auditório)</th>
                    <th></th>
                    <th>Sessão B (B033)</th>
                   


                </tr>
                
                
                <tr>
                    <td width={80}><b>09:00</b></td>
                    <td width={150}><b><a style={{ textDecoration: 'none' }} href="#cpdla2">CPDLA</a></b></td>
                    <td width={80}><b>09:00</b></td>
                    <td width={150}><b><a style={{ textDecoration: 'none' }} href="#softpt2">SOFT-PT</a></b></td>
                </tr>

                <tr>
                    <td ><b>09:50</b></td>
                    <td colSpan={3}>Intervalo</td>
                  
                </tr>


                <tr>
                    <td ><b>10:00</b></td>
                    <td colSpan={3}><Link style={{ textDecoration: 'none' }} to="/keynote"><b>Keynote: Pedro Saleiro</b></Link></td>
                 
                </tr>

                
                <tr>
                    <td ><b>11:00</b></td>
                    <td colSpan={3}>Coffee break / <b><a style={{ textDecoration: 'none' }} href="#posters2">Segunda sessão de posters</a></b></td>

                </tr>


                
                <tr>
                    <td ><b>11:30</b></td>
                    <td colSpan={3}>Sponsor talk</td>
                    
                </tr>

                <tr>
                    <td ><b>11:40</b></td>
                    <td colSpan={3}>Business Meeting</td>
                 
                </tr>


                <tr>
                    <td ><b>12:20</b></td>
                    <td colSpan={3}>Almoço</td>
                
                </tr>

                <tr>
                    <td ><b>13:40</b></td>
                    <td ><b><a style={{ textDecoration: 'none' }} href="#cpdla3">CPDLA</a></b></td>
                    <td ><b>13:40</b></td>
                    <td ><b><a style={{ textDecoration: 'none' }} href="#crc1">CRC</a></b></td>
                </tr>

                <tr>
                    <td ><b>15:00</b></td>
                    <td colSpan={3}>Coffee break / <b><a style={{ textDecoration: 'none' }} href="#posters3">Terceira sessão de posters</a></b></td>
                
                </tr>

               

                <tr>
                    <td ><b>15:30</b></td>
                    <td ><b><a style={{ textDecoration: 'none' }} href="#cpdla4">CPDLA</a></b></td>
                    <td ><b>15:30</b></td>
                    <td ><b><a style={{ textDecoration: 'none' }} href="#taami1">TAAEMI</a></b></td>
                </tr>

                <tr>
                    <td ><b></b></td>
                    <td ></td>
                    <td ><b>15:40</b></td>
                    <td >Intervalo</td>
                </tr>

                <tr>
                    <td ><b></b></td>
                    <td ></td>
                    <td ><b>15:50</b></td>
                    <td ><b><a style={{ textDecoration: 'none' }} href="#crc2">CRC</a></b></td>
                </tr>

                <tr>
                    <td ><b>17:00</b></td>
                    <td colSpan={3}>Encerramento</td>
                  
                </tr>
                
            </table>


            <br/>

            <h3 id="CPDLA1">CPDLA sessão 1 - dia 7 de setembro 13:30</h3>
            
            <p><b>Localização:</b> Auditório</p>

            <ul>
                <li>Francisco Vale, João Leitão, Pedro Costa and Yiannis Psaras. Atribuição de Nomes Descentralizada: Estudo de Desempenho e Proposta de Otimização do IPNS
</li>
                <li>André Gonçalves, Ana Nunes Alonso, José Pereira and Rui Oliveira. Uma extensão de Raft com propagação epidémica
</li>
                <li>João Oliveira, Miguel Matos and João Gonçalves. Deteção de Erros de Concorrência em Programas de Memória Persistente Utilizando Análise de Locksets
</li>
                <li>André Martins and Ricardo Vilaça. PerfEnerPy - Uma ferramenta para a avaliação da performance e eficiência energética de ferramentas dataframes
</li>   
                <li>João Bonacho, Carlos Gonçalves and Luís Osório. Agnostic Cloud Services with Kubernetes</li>            

                <li>Juliane Marubayashi and Carlos Baquero. ROSES: Renaming Operations for Scalable Eventually-Consistent Sets
</li>
            
            </ul>

            <h3 id="CSAPPS1">CPS&Apps sessão 1 - dia 7 de setembro 13:30</h3>
            <p><b>Localização:</b> sala B033</p>

            <ul>
            <li>Ricardo Severino and João Alves. Towards Leveraging Timing Cover-Channels for IoT Authentication
</li>
            <li>Daniel Silva, Carmen Morgado and Fernanda Barbosa. Sistema para Monitorizar Exercícios de Fisioterapia
</li>

            <li>José Santos, André Lourenço and Tiago Dias. Reliability and Security in Wellbeing Monitoring Embedded Systems
</li>


            <li>João Ferreira, Zygimantas Jasiunas, José Cecílio and Pedro Ferreira. Real-life assessment of household appliances
</li>

            <li>Tomás Pedro, Alan Oliveira, João Cintra and Nuno Garcia. Aprendizagem Automática para Deteção de Embarcações
</li>
            
            <li>Luis Ferreira, Tiago Fonseca, Luis Miguel Pinho, Bernardo Cabral and Ricardo Severino. The Cluster-based Architecture of Ferrovia 4.0
</li>

            <li>Yimin Zhang, Barikisu Asulba, Nuno Schumacher, Mario Sousa, Pedro Souto, Luis Almeida, Pedro Santos, Joana Sousa, Nuno Martins and Luis Gomes. Demonstrating Edge-based IoT Intrusion Detection</li>

            <li>Diogo Almeida, Luís Pinto, Luís Oliveira, Pedro d'Orey and Luis Almeida. Demonstrating Pulse-Coupled Synchronization in Dynamic Meshes of Cooperating Agents</li>

            </ul>

            <h3 id="softpt1">SOFT-PT sessão 1 - dia 7 de setembro 16:30</h3>
            
            <p><b>Chair:</b> Jorge Sousa Pinto</p>
            <p><b>Localização:</b> Auditório</p>

            <ul>

                <li>Rodrigo Mesquita and Bernardo Toninho. Functional Program Synthesis from Linear Types
</li>

                <li>Gil Silva, Andreia Mordido and Vasco T. Vasconcelos. Subtyping Context-Free Session Types
</li>

                <li>Délcio Ferramenta, Paul Robert and Simão Melo de Sousa. Análise do Consumo de Energia de Aplicações Android
</li>

                <li>António Pedro Branco, Cátia Vaz and Alexandre P Francisco. Phylogenetic tree distance computation over succinct representations
</li>

                <li>João Afonso and António Ravara. Capturing the Behaviour of Smart Contracts
</li>

                <li>Pedro Cunha and Mário Florido. Homotopy Types and Formal Program Specification
</li>

                <li>Bruno Dias, Ana Matos and Miguel Souto. Algorithm to aid the definition of Portugal's continental shelf delineation
</li>

                <li>Rui Barata, Carlos Pinto and Simão Melo de Sousa. Programação com contractos no Learn-OCaml
</li>
            </ul>




            <h3 id="cd1">CD sessão 1  - dia 7 de setembro 16:30</h3>
            <p><b>Localização:</b> sala B033</p>


            <ul>
                <li>Vasco Cabral, Ana Matos, Paulo Borges, Luís Borda de Água and Eduardo Azevedo. Modeling the distribution of invasive species in small islands under future climates
</li>

                <li>Nyckollas Brandão, André Jesus, André Páscoa, Alexandre P Francisco, Mario Ramirez and Cátia Vaz. A modular and scalable web platform for computational phylogenetics
</li>

                <li>Catarina Palma and Artur Ferreira. On the use of machine learning techniques to detect malware in mobile applications
</li>


                <li>Vítor Fernandes, Jorge Bernardino, Vasco Pereira and Bruno Cabral. A Taxonomy for Data Reduction Techniques
</li>

                <li>Gonçalo Carvalho, Bruno Cabral, Jorge Bernardino and Vasco Pereira. Enhancing Conceptual Modeling for Distributed Data Management: Introducing ER+
</li>

                <li>Luis Miguel Barata, Sérgio Sequeira and Eurico Lopes. Predictive Maintenance based on Log Analysis: A Systematic Review
</li>

                <li>Tomás Marques, Miguel Gonçalves, Eurico Lopes, Arminda Lopes and Luis Miguel Barata. Análise de Big Data aplicada à indústria automóvel: melhoria do design e segurança dos veículos
</li>
            </ul>


            <h3 id="cpdla2">CPDLA sessão 2 - dia 8 de setembro 09:00</h3>
            <p><b>Localização:</b> Auditório</p>

            <ul>
                <li>André Costa, Nuno Preguiça and João Lourenço. FLeeC: a Fast Lock-Free Cache
</li>

                <li>Mónica Jin, Miguel Matos and João Barreto. Pudim de Pão e Chia
</li>

                <li>Francisco Mendes, Nuno Preguiça and João Leitão. Cache Aplicacional Consistente e Eficiente
</li>
            </ul>


            <h3 id="softpt2">SOFT-PT sessão 2 - dia 8 de setembro 09:00</h3>
            
            <p><b>Chair:</b> Simão Melo de Sousa</p>
            <p><b>Localização:</b> sala B033</p>

            <ul>

                <li>Valentim Romão, Rafael Soares, Vasco Manquinho and Luís Rodrigues. Deteção Automática de Anomalias em Arquiteturas de Microsserviços
</li>

                <li>David Miranda, Ana Matos and Jan Cederquist. Information Flow Security For a Concurrent Language With Lock-based Synchronization
</li>

                <li>João Reis, Mário Pereira and António Ravara. Towards a Solider Solidity
</li>
            </ul>


            <h3 id="cpdla3">CPDLA sessão 3 - dia 8 de setembro 13:40</h3>
            <p><b>Localização:</b> Auditório</p>

            <ul>
                <li>Rui Ribeiro, José Pereira and Nuno Faria. An Experimental Evaluation of Value Splitting in Transactional Memory Systems
</li>

                <li>Henrique Fernandes, João Gonçalves and Miguel Matos. Kaiyo: Testagem Automática de Aplicações de Memória Persistente
</li>
                
                <li>João Rafael Henriques and José D'Abruzzo Pereira. On the Automation of Software Vulnerability Collection of a Database with Static Information
</li>

                <li>Paulo Sousa, José Pereira and Ricardo Vilaça. SAGeo: Simulador para Sistemas de Bases de Dados Geo-Replicadas
</li>
            </ul>



            <h3 id="crc1">CRC sessão 1 - dia 8 de setembro 13:40</h3>
            
            <p><b>Chair:</b> João Vilela</p>
            <p><b>Localização:</b> sala B033</p>

            <ul>
                <li>Luís Guerra and Luís Gonçalves. Proactive Cybersecurity tailoring through deception techniques
</li>

                <li>Helena Teixeira, Luís Rodrigues and Miguel Matos. Árvores de Disseminação e Agregação Cientes da Topologia para Suportar Consenso Bizantino em Larga Escala
</li>

                <li>Francisco Chimuco, João Sequeiros, Tiago Simões, Mário Freire and Pedro Inácio. Secure Design and Development of Applications in the Cloud and Mobile Ecosystem
</li>

                <li>André Martins, Marina Albuquerque, Vinicius C. Ferreira, João Bastos, Nicolás Lori, António Costa, Helena Fernández López and José Carlos Bacelar. NETEDGE Proxy: A Multi-access Edge Computing System Level Proposal
</li>

                <li>Julio Corona, Mário Antunes, José Quevedo and Rui L. Aguiar. Towards cost estimation of DRL for task scheduling and placement
</li>

            </ul>

            <h3 id="cpdla4">CPDLA sesão 4  - dia 8 de setembro 15:30</h3>
            <p><b>Localização:</b> Auditório</p>

            <ul>
                <li>João Queirós, Rafael Soares and Luís Rodrigues. Suporte para Coerência Causal Transacional em Sistemas de Microsserviços
</li>

                <li>Renato Azevedo and Ricardo Vilaça. EASAHE, Um algoritmo para o agendamento de trabalhos em ferramentas de processamento de dados com preocupações de eficiência energética
</li>

                <li>Adriano Maior, Nuno Faria and José Pereira. MRV*: Uma biblioteca de tipos de dados para aplicações concorrentes
</li>

                <li>Diogo Jesus, Nuno Preguiça and João Leitão. The Case for Generic Edge Based Services
</li>

                
            </ul>


            <h3 id="taami1">TAAEMI sessão 1 - dia 8 de setembro 15:30</h3>
            <p><b>Localização:</b> sala B033</p>

            <ul>
                <li>Hermann Silva and Manuel Ricardo. ISPs’ discriminatory practices and their regulation in Andean America
</li>

                <li>Tiago Mamouros, Ana Matos, Silvia Salvatore and António Silva. Platform for Collaborative Waste Management in an Academic Campus
</li>
            </ul>

            <h3 id="crc2">CRC sessão 2 - dia 8 de setembro 15:50</h3>
            <p><b>Chair:</b> João Vilela</p>
            <p><b>Localização:</b> sala B033</p>

            <ul>
                <li>David Morais, André Zúquete and António Mendes. Multi-factor Authentication as a Service for Web Applications with User-based Risk Profiles
</li>

                <li>Adriano Oliveira, Filipe Meneses and Bruno Rebelo. Evolução de um sistema de gestão de alarmes
</li>
            </ul>

            <h3  id="posters1"> Posters sessão 1 - dia 7 de setembro 16:00 </h3>

            <ul>
                <li> Francisco Vale, João Leitão, Pedro Costa and Yiannis Psaras.Atribuição de Nomes Descentralizada: Estudo de Desempenho e Proposta de Otimização do IPNS</li>
                <li> André Martins and Ricardo Vilaça.PerfEnerPy - Uma ferramenta para a avaliação da performance e eficiência energética de ferramentas dataframes</li>
                <li> José Santos, André Lourenço and Tiago Dias.Reliability and Security in Wellbeing Monitoring Embedded Systems</li>
                <li> João Ferreira, Zygimantas Jasiunas, José Cecílio and Pedro Ferreira.Real-life assessment of household appliances</li>
                <li> Luis Ferreira, Tiago Fonseca, Luis Miguel Pinho, Bernardo Cabral and Ricardo Severino.The Cluster-based Architecture of Ferrovia 4.0</li>
                <li> João Bonacho, Carlos Gonçalves and Luís Osório.Agnostic Cloud Services with Kubernetes</li>
                <li> João Oliveira, Miguel Matos and João Gonçalves.Deteção de Erros de Concorrência em Programas de Memória Persistente Utilizando Análise de Locksets</li>
                <li> André Gonçalves, Ana Nunes Alonso, José Pereira and Rui Oliveira.Uma extensão de Raft com propagação epidémica</li>
                <li> Tomás Pedro, Alan Oliveira, João Cintra and Nuno Garcia.Aprendizagem Automática para Deteção de Embarcações</li>
            </ul>

            <h3 id="posters2"> Posters sessão 2 - dia 8 de setembro 11:00</h3>

            <ul>
                <li> Luis Miguel Barata, Sérgio Sequeira and Eurico Lopes.Predictive Maintenance based on Log Analysis: A Systematic Review</li>
                <li> Tomás Marques, Miguel Gonçalves, Eurico Lopes, Arminda Lopes and Luis Miguel Barata.Análise de Big Data aplicada à indústria automóvel: melhoria do design e segurança dos veículos</li>
                <li> Valentim Romão, Rafael Soares, Vasco Manquinho and Luís Rodrigues.Deteção Automática de Anomalias em Arquiteturas de Microsserviços</li>
                <li> Rodrigo Mesquita and Bernardo Toninho.Functional Program Synthesis from Linear Types</li>
                <li> Juliane Marubayashi and Carlos Baquero.ROSES: Renaming Operations for Scalable Eventually-Consistent Sets</li>
                <li> Vítor Fernandes, Jorge Bernardino, Vasco Pereira and Bruno Cabral.A Taxonomy for Data Reduction Techniques</li>
                <li> Gil Silva, Andreia Mordido and Vasco T. Vasconcelos.Subtyping Context-Free Session Types</li>
                <li> André Costa, Nuno Preguiça and João Lourenço.FLeeC: a Fast Lock-Free Cache</li>
                <li> Catarina Palma and Artur Ferreira.On the use of machine learning techniques to detect malware in mobile applications</li>
            </ul>

            <h3 id="posters3"> Posters sessão 3 - dia 8 de setembro 15:00</h3>

            <ul>
                <li> João Queirós, Rafael Soares and Luís Rodrigues.Suporte para Coerência Causal Transacional em Sistemas de Microsserviços</li>
                <li> Diogo Jesus, Nuno Preguiça and João Leitão.The Case for Generic Edge Based Services</li>
                <li> Luís Guerra and Luís Gonçalves.Proactive Cybersecurity tailoring through deception techniques</li>
                <li> Adriano Oliveira, Filipe Meneses and Bruno Rebelo.Evolução de um sistema de gestão de alarmes</li>
                <li> Henrique Fernandes, João Gonçalves and Miguel Matos.Kaiyo: Testagem Automática de Aplicações de Memória Persistente</li>
                <li> David Morais, André Zúquete and António Mendes.Multi-factor Authentication as a Service for Web Applications with User-based Risk Profiles</li>
                <li> Daniel Silva, Carmen Morgado and Fernanda Barbosa.Sistema para Monitorizar Exercícios de Fisioterapia</li>
                <li> Adriano Maior, Nuno Faria and José Pereira.MRV*: Uma biblioteca de tipos de dados para aplicações concorrentes</li>
                <li> Rui Ribeiro, José Pereira and Nuno Faria.An Experimental Evaluation of Value Splitting in Transactional Memory Systems</li>
            </ul>
     </div>
    </div >
        </div >
    </>

}

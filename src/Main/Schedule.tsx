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
            <p><b>Chair:</b> Carlos Baquero</p>

            <p><b>Localização:</b> Auditório</p>
            <ul>
                <li>Francisco Vale, João Leitão, Pedro Costa and Yiannis Psaras. Atribuição de Nomes Descentralizada: Estudo de Desempenho e Proposta de Otimização do IPNS <a href="/Atas/paper_431/431-CR.pdf" target="_blank">[Artigo]</a></li>
                <li>André Gonçalves, Ana Nunes Alonso, José Pereira and Rui Oliveira. Uma extensão de Raft com propagação epidémica <a href="/Atas/paper_553/553-CR.pdf" target="_blank">[Artigo]</a></li>
                <li>João Oliveira, Miguel Matos and João Gonçalves. Deteção de Erros de Concorrência em Programas de Memória Persistente Utilizando Análise de Locksets <a href="/Atas/paper_2658/2658-SA.pdf" target="_blank">[Sumário Alargado do Artigo]</a></li>
                <li>André Martins and Ricardo Vilaça. PerfEnerPy - Uma ferramenta para a avaliação da performance e eficiência energética de ferramentas dataframes <a href="/Atas/paper_205/205-CM.pdf" target="_blank">[Comunicação]</a></li>
                <li>João Bonacho, Carlos Gonçalves and Luís Osório. Agnostic Cloud Services with Kubernetes <a href="/Atas/paper_3559/3559-CM.pdf" target="_blank">[Comunicação]</a></li>
                <li>Juliane Marubayashi and Carlos Baquero. ROSES: Renaming Operations for Scalable Eventually-Consistent Sets <a href="/Atas/paper_366/366-CM.pdf" target="_blank">[Comunicação]</a></li>
            </ul>
            <h3 id="CSAPPS1">CPS&Apps sessão 1 - dia 7 de setembro 13:30
            </h3>

            <p><b>Localização:</b> sala B033</p>
            <ul>
                <li>Ricardo Severino and João Alves. Towards Leveraging Timing Cover-Channels for IoT Authentication <a href="/Atas/paper_2678/2678-CR.pdf" target="_blank">[Artigo]</a></li>
                <li>Daniel Silva, Carmen Morgado and Fernanda Barbosa. Sistema para Monitorizar Exercícios de Fisioterapia <a href="/Atas/paper_174/174-CR.pdf" target="_blank">[Artigo]</a></li>
                <li>José Santos, André Lourenço and Tiago Dias. Reliability and Security in Wellbeing Monitoring Embedded Systems <a href="/Atas/paper_4887/4887-CM.pdf" target="_blank">[Comunicação]</a></li>
                <li>João Ferreira, Zygimantas Jasiunas, José Cecílio and Pedro Ferreira. Real-life assessment of household appliances <a href="/Atas/paper_3669/3669-CM.pdf" target="_blank">[Comunicação]</a></li>
                <li>Tomás Pedro, Alan Oliveira, João Cintra and Nuno Garcia. Aprendizagem Automática para Deteção de Embarcações <a href="/Atas/paper_5661/5661-CM.pdf" target="_blank">[Comunicação]</a></li>
                <li>Luis Ferreira, Tiago Fonseca, Luis Miguel Pinho, Bernardo Cabral and Ricardo Severino. The Cluster-based Architecture of Ferrovia 4.0 <a href="/Atas/paper_4840/4840-CM.pdf" target="_blank">[Comunicação]</a></li>
                <li>Yimin Zhang, Barikisu Asulba, Nuno Schumacher, Mario Sousa, Pedro Souto, Luis Almeida, Pedro Santos, Joana Sousa, Nuno Martins and Luis Gomes. Demonstrating Edge-based IoT Intrusion Detection <a href="/Atas/paper_7644/7644-DM.pdf" target="_blank">[Demo]</a></li>
                <li>Diogo Almeida, Luís Pinto, Luís Oliveira, Pedro d'Orey and Luis Almeida. Demonstrating Pulse-Coupled Synchronization in Dynamic Meshes of Cooperating Agents <a href="/Atas/paper_4983/4983-DM.pdf" target="_blank">[Comunicação]</a></li>
            </ul>
            <h3 id="softpt1">SOFT-PT sessão 1 - dia 7 de setembro 16:30</h3>
            <p><b>Chair:</b> Jorge Sousa Pinto</p>
            <p><b>Localização:</b> Auditório</p>
            <ul>
                <li>Rodrigo Mesquita and Bernardo Toninho. Functional Program Synthesis from Linear Types <a href="/Atas/paper_3099/3099-CR.pdf" target="_blank">[Artigo]</a></li>
                <li>Gil Silva, Andreia Mordido and Vasco T. Vasconcelos. Subtyping Context-Free Session Types <a href="/Atas/paper_5080/5080-SA.pdf" target="_blank">[Sumário Alargado do Artigo]</a></li>
                <li>Délcio Ferramenta, Paul Robert and Simão Melo de Sousa. Análise do Consumo de Energia de Aplicações Android <a href="/Atas/paper_1169/1169-CR.pdf" target="_blank">[Artigo]</a></li>
                <li>António Pedro Branco, Cátia Vaz and Alexandre P Francisco. Phylogenetic tree distance computation over succinct representations <a href="/Atas/paper_4237/4237-CM.pdf" target="_blank">[Comunicação]</a></li>
                <li>João Afonso and António Ravara. Capturing the Behaviour of Smart Contracts <a href="/Atas/paper_4833/4833-CM.pdf" target="_blank">[Comunicação]</a></li>
                <li>Pedro Cunha and Mário Florido. Homotopy Types and Formal Program Specification <a href="/Atas/paper_8721/8721-CM.pdf" target="_blank">[Comunicação]</a></li>
                <li>Bruno Dias, Ana Matos and Miguel Souto. Algorithm to aid the definition of Portugal's continental shelf delineation <a href="/Atas/paper_5482/5482-CM.pdf" target="_blank">[Comunicação]</a></li>
                <li>Rui Barata, Carlos Pinto and Simão Melo de Sousa. Programação com contractos no Learn-OCaml <a href="/Atas/paper_3108/3108-CM.pdf" target="_blank">[Comunicação]</a></li>
            </ul>
            <h3 id="cd1">CD sessão 1 - dia 7 de setembro 16:30</h3>
            <p><b>Chair:</b>  João Paulo Cordeiro</p>
            <p><b>Localização:</b> sala B033</p>
            <ul>
                <li>Vasco Cabral, Ana Matos, Paulo Borges, Luís Borda de Água and Eduardo Azevedo. Modeling the distribution of invasive species in small islands under future climates <a href="/Atas/paper_4268/4268-SA.pdf" target="_blank">[Sumário Alargado do Artigo]</a></li>
                <li>Nyckollas Brandão, André Jesus, André Páscoa, Alexandre P Francisco, Mario Ramirez and Cátia Vaz. A modular and scalable web platform for computational phylogenetics <a href="/Atas/paper_6130/6130-CR.pdf" target="_blank">[Artigo]</a></li>
                <li>Catarina Palma and Artur Ferreira. On the use of machine learning techniques to detect malware in mobile applications <a href="/Atas/paper_6478/6478-CR.pdf" target="_blank">[Artigo]</a></li>
                <li>Vítor Fernandes, Jorge Bernardino, Vasco Pereira and Bruno Cabral. A Taxonomy for Data Reduction Techniques <a href="/Atas/paper_7965/7965-CM.pdf" target="_blank">[Comunicação]</a></li>
                <li>Gonçalo Carvalho, Bruno Cabral, Jorge Bernardino and Vasco Pereira. Enhancing Conceptual Modeling for Distributed Data Management: Introducing ER+ <a href="/Atas/paper_3174/3174-CM.pdf" target="_blank">[Comunicação]</a></li>
                <li>Luis Miguel Barata, Sérgio Sequeira and Eurico Lopes. Predictive Maintenance based on Log Analysis: A Systematic Review <a href="/Atas/paper_5665/5665-CM.pdf" target="_blank">[Comunicação]</a></li>
                <li>Tomás Marques, Miguel Gonçalves, Eurico Lopes, Arminda Lopes and Luis Miguel Barata. Análise de Big Data aplicada à indústria automóvel: melhoria do design e segurança dos veículos <a href="/Atas/paper_4597/4597-CM.pdf" target="_blank">[Comunicação]</a></li>
            </ul>
            <h3 id="cpdla2">CPDLA sessão 2 - dia 8 de setembro 09:00</h3>
            <p><b>Chair:</b> José D'Abruzzo Pereira</p>
            <p><b>Localização:</b> Auditório</p>
            <ul>
                <li>André Costa, Nuno Preguiça and João Lourenço. FLeeC: a Fast Lock-Free Cache <a href="/Atas/paper_5247/5247-SA.pdf" target="_blank">[Sumário Alargado do Artigo]</a><a href="/Atas/private/5247-EV.pdf" target="_blank">[Artigo (requer password)]</a></li>
                <li>Mónica Jin, Miguel Matos and João Barreto. Pudim de Pão e Chia <a href="/Atas/paper_5993/5993-CR.pdf" target="_blank">[Artigo]</a></li>
                <li>Francisco Mendes, Nuno Preguiça and João Leitão. Cache Aplicacional Consistente e Eficiente <a href="/Atas/paper_5746/5746-CM.pdf" target="_blank">[Comunicação]</a></li>
            </ul>
            <h3 id="softpt2">SOFT-PT sessão 2 - dia 8 de setembro 09:00</h3>
            <p><b>Chair:</b> Simão Melo de Sousa</p>
            <p><b>Localização:</b> sala B033</p>
            <ul>
                <li>Valentim Romão, Rafael Soares, Vasco Manquinho and Luís Rodrigues. Deteção Automática de Anomalias em Arquiteturas de Microsserviços <a href="/Atas/paper_7586/7586-CR.pdf" target="_blank">[Artigo]</a></li>
                <li>David Miranda, Ana Matos and Jan Cederquist. Information Flow Security For a Concurrent Language With Lock-based Synchronization <a href="/Atas/paper_1322/1322-SA.pdf" target="_blank">[Sumário Alargado do Artigo]</a></li>
                <li>João Reis, Mário Pereira and António Ravara. Towards a Solider Solidity <a href="/Atas/paper_1647/1647-CM.pdf" target="_blank">[Comunicação]</a></li>
            </ul>
            <h3 id="cpdla3">CPDLA sessão 3 - dia 8 de setembro 13:40</h3>
            <p><b>Chair:</b> João Leitão</p>
            <p><b>Localização:</b> Auditório</p>
            <ul>
                <li>Rui Ribeiro, José Pereira and Nuno Faria. An Experimental Evaluation of Value Splitting in Transactional Memory Systems <a href="/Atas/paper_3535/3535-CR.pdf" target="_blank">[Artigo]</a></li>
                <li>Henrique Fernandes, João Gonçalves and Miguel Matos. Kaiyo: Testagem Automática de Aplicações de Memória Persistente <a href="/Atas/paper_6373/6373-CR.pdf" target="_blank">[Artigo]</a></li>
                <li>João Rafael Henriques and José D'Abruzzo Pereira. On the Automation of Software Vulnerability Collection of a Database with Static Information <a href="/Atas/paper_9420/9420-CR.pdf" target="_blank">[Artigo]</a></li>
                <li>Paulo Sousa, José Pereira and Ricardo Vilaça. SAGeo: Simulador para Sistemas de Bases de Dados Geo-Replicadas <a href="/Atas/paper_2982/2982-CM.pdf" target="_blank">[Comunicação]</a></li>
            </ul>
            <h3 id="crc1">CRC sessão 1 - dia 8 de setembro 13:40</h3>
            <p><b>Chair:</b> João Vilela</p>
            <p><b>Localização:</b> sala B033</p>
            <ul>
                <li>Luís Guerra and Luís Gonçalves. Proactive Cybersecurity tailoring through deception techniques <a href="/Atas/paper_2650/2650-CR.pdf" target="_blank">[Artigo]</a></li>
                <li>Helena Teixeira, Luís Rodrigues and Miguel Matos. Árvores de Disseminação e Agregação Cientes da Topologia para Suportar Consenso Bizantino em Larga Escala <a href="/Atas/paper_178/178-CR.pdf" target="_blank">[Artigo]</a></li>
                <li>Francisco Chimuco, João Sequeiros, Tiago Simões, Mário Freire and Pedro Inácio. Secure Design and Development of Applications in the Cloud and Mobile Ecosystem <a href="/Atas/paper_3633/3633-CM.pdf" target="_blank">[Comunicação]</a></li>
                <li>André Martins, Marina Albuquerque, Vinicius C. Ferreira, João Bastos, Nicolás Lori, António Costa, Helena Fernández López and José Carlos Bacelar. NETEDGE Proxy: A Multi-access Edge Computing System Level Proposal <a href="/Atas/paper_9651/9651-CM.pdf" target="_blank">[Comunicação]</a></li>
                <li>Julio Corona, Mário Antunes, José Quevedo and Rui L. Aguiar. Towards cost estimation of DRL for task scheduling and placement <a href="/Atas/paper_5537/5537-CM.pdf" target="_blank">[Comunicação] </a><a href="/Atas/private/5537-EV.pdf" target="_blank">[Artigo (requer password)]</a></li>
            </ul>
            <h3 id="cpdla4">CPDLA sessão 4 - dia 8 de setembro 15:30 </h3>

            <p><b>Chair:</b> João Soares</p>
            <p><b>Localização:</b> Auditório</p>
            <ul>
                <li>João Queirós, Rafael Soares and Luís Rodrigues. Suporte para Coerência Causal Transacional em Sistemas de Microsserviços <a href="/Atas/paper_4770/4770-CR.pdf" target="_blank">[Artigo]</a></li>
                <li>Renato Azevedo and Ricardo Vilaça. EASAHE, Um algoritmo para o agendamento de trabalhos em ferramentas de processamento de dados com preocupações de eficiência energética <a href="/Atas/paper_4981/4981-CR.pdf" target="_blank">[Artigo]</a></li>
                <li>Adriano Maior, Nuno Faria and José Pereira. MRV*: Uma biblioteca de tipos de dados para aplicações concorrentes <a href="/Atas/paper_8055/8055-CR.pdf" target="_blank">[Artigp]</a></li>
                <li>Diogo Jesus, Nuno Preguiça and João Leitão. The Case for Generic Edge Based Services <a href="/Atas/paper_9068/9068-CM.pdf" target="_blank">[Comunicação]</a></li>
            </ul>
            <h3 id="taami1">TAAEMI sessão 1 - dia 8 de setembro 15:30</h3>
            <p><b>Localização:</b> sala B033</p>
            <ul>
                <li>Hermann Silva and Manuel Ricardo. ISPs’ discriminatory practices and their regulation in Andean America <a href="/Atas/paper_5428/5428-CM.pdf" target="_blank">[Comunicação]</a></li>
                <li>Tiago Mamouros, Ana Matos, Silvia Salvatore and António Silva. Platform for Collaborative Waste Management in an Academic Campus <a href="/Atas/paper_6781/6781-CM.pdf" target="_blank">[Comunicação]</a></li>
            </ul>
            <h3 id="crc2">CRC sessão 2 - dia 8 de setembro 15:50</h3>
            <p><b>Chair:</b> João Vilela</p>
            <p><b>Localização:</b> sala B033</p>
            <ul>
                <li>David Morais, André Zúquete and António Mendes. Exploring the Journey from Sequential Specifications to Pure Operation-based CRDTs (sessão CPDLA) <a href="/Atas/paper_563/563-SA.pdf" target="_blank">[Sumário Alargado do Poster]</a></li>
                <li>Adriano Oliveira, Filipe Meneses and Bruno Rebelo. Evolução de um sistema de gestão de alarmes <a href="/Atas/paper_2354/2354-CR.pdf" target="_blank">[Artigo]</a></li>
            </ul>
      
          
        








            

  
 


            <h3  id="posters1"> Posters sessão 1 - dia 7 de setembro 16:00 </h3>
            <ul>
                <li> Francisco Vale, João Leitão, Pedro Costa and Yiannis Psaras.Atribuição de Nomes Descentralizada: Estudo de Desempenho e Proposta de Otimização do IPNS</li>
                <li> André Martins and Ricardo Vilaça.PerfEnerPy - Uma ferramenta para a avaliação da performance e eficiência energética de ferramentas dataframes</li>
                <li> José Santos, André Lourenço and Tiago Dias.Reliability and Security in Wellbeing Monitoring Embedded Systems <a href="/Posters/Reliability and Security in Wellbeing Monitoring Embedded Systems.pdf" target="_blank">[Poster]</a></li>
                <li> João Ferreira, Zygimantas Jasiunas, José Cecílio and Pedro Ferreira.Real-life assessment of household appliances <a href="/Posters/Real-life assessment of household appliances.pdf" target="_blank">[Poster]</a></li>
                <li> Luis Ferreira, Tiago Fonseca, Luis Miguel Pinho, Bernardo Cabral and Ricardo Severino.The Cluster-based Architecture of Ferrovia 4.0</li>
                <li> João Bonacho, Carlos Gonçalves and Luís Osório.Agnostic Cloud Services with Kubernetes</li>
                <li> João Oliveira, Miguel Matos and João Gonçalves.Deteção de Erros de Concorrência em Programas de Memória Persistente Utilizando Análise de Locksets <a href="/Posters/Deteção de Erros de Concorrência em Programas de Memória Persistente Utilizando Análise de Locksets.pdf
" target="_blank">[Poster]</a></li>
                <li> André Gonçalves, Ana Nunes Alonso, José Pereira and Rui Oliveira.Uma extensão de Raft com propagação epidémica</li>
                <li> Tomás Pedro, Alan Oliveira, João Cintra and Nuno Garcia.Aprendizagem Automática para Deteção de Embarcações</li>
            </ul>

            <h3 id="posters2"> Posters sessão 2 - dia 8 de setembro 11:00</h3>
            <ul>
                <li> Luis Miguel Barata, Sérgio Sequeira and Eurico Lopes.Predictive Maintenance based on Log Analysis: A Systematic Review</li>
                <li> Tomás Marques, Miguel Gonçalves, Eurico Lopes, Arminda Lopes and Luis Miguel Barata.Análise de Big Data aplicada à indústria automóvel: melhoria do design e segurança dos veículos</li>
                <li> Valentim Romão, Rafael Soares, Vasco Manquinho and Luís Rodrigues.Deteção Automática de Anomalias em Arquiteturas de Microsserviços <a href="/Posters/Deteção Automática de Anomalias em Arquiteturas de Microsserviços.pdf
" target="_blank">[Poster]</a></li>
                <li> Rodrigo Mesquita and Bernardo Toninho.Functional Program Synthesis from Linear Types</li>
                <li> Juliane Marubayashi and Carlos Baquero.ROSES: Renaming Operations for Scalable Eventually-Consistent Sets</li>
                <li> Vítor Fernandes, Jorge Bernardino, Vasco Pereira and Bruno Cabral.A Taxonomy for Data Reduction Techniques</li>
                <li> Gil Silva, Andreia Mordido and Vasco T. Vasconcelos.Subtyping Context-Free Session Types <a href="/Posters/Subtyping Context-Free Session Types.pdf" target="_blank">[Poster]</a></li>
                <li> André Costa, Nuno Preguiça and João Lourenço.FLeeC: a Fast Lock-Free Cache</li>
                <li> Catarina Palma and Artur Ferreira.On the use of machine learning techniques to detect malware in mobile applications <a href="/Posters/On the use of machine learning techniques to detect malware in mobile applications.pdf" target="_blank">[Poster]</a></li>
            </ul>

            <h3 id="posters3"> Posters sessão 3 - dia 8 de setembro 15:00</h3>

            <ul>
                <li> João Queirós, Rafael Soares and Luís Rodrigues.Suporte para Coerência Causal Transacional em Sistemas de Microsserviços <a href="/Posters/Suporte para Coerência Causal Transacional em Sistemas de Microsserviços.pdf" target="_blank">[Poster]</a></li>
                <li> Diogo Jesus, Nuno Preguiça and João Leitão.The Case for Generic Edge Based Services</li>
                <li> Luís Guerra and Luís Gonçalves.Proactive Cybersecurity tailoring through deception techniques <a href="/Posters/Proactive Cybersecurity tailoring through deception techniques.pdf" target="_blank">[Poster]</a></li>
                <li> Adriano Oliveira, Filipe Meneses and Bruno Rebelo.Evolução de um sistema de gestão de alarmes <a href="/Posters/Evolução de um sistema de gestão de  alarmes.pdf" target="_blank">[Poster]</a></li>
                <li> Henrique Fernandes, João Gonçalves and Miguel Matos.Kaiyo: Testagem Automática de Aplicações de Memória Persistente</li>
                <li> David Morais, André Zúquete and António Mendes.Multi-factor Authentication as a Service for Web Applications with User-based Risk Profiles</li>
                <li> Daniel Silva, Carmen Morgado and Fernanda Barbosa.Sistema para Monitorizar Exercícios de Fisioterapia</li>
                <li> Adriano Maior, Nuno Faria and José Pereira.MRV*: Uma biblioteca de tipos de dados para aplicações concorrentes</li>
                <li> Rui Ribeiro, José Pereira and Nuno Faria.An Experimental Evaluation of Value Splitting in Transactional Memory Systems <a href="/Posters/An Experimental Evaluation of Value-Splitting in Transactional Memory.pdf" target="_blank">[Poster]</a>
</li>
            </ul>
     </div>
    </div >
        </div >
    </>

}

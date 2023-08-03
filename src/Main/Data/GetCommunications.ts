const articles = 
`PerfEnerPy - Uma ferramenta para a avaliação da performance e eficiência energética de ferramentas dataframes
ROSES: Renaming Operations for Scalable Eventually-Consistent Sets
SAGeo: Simulador para Sistemas de Bases de Dados Geo-Replicadas
Agnostic Cloud Services with Kubernetes
Secure Design and Development of Applications in the Cloud and Mobile Ecosystem
Phylogenetic tree distance computation over succinct representations
Reliability and Security in Wellbeing Monitoring Embedded Systems
ISPs’ discriminatory practices and their regulation in Andean America
Towards cost estimation of DRL for task scheduling and placement
Aprendizagem Automática para Deteção de Embarcações
Cache Aplicacional Consistente e Eficiente
Homotopy Types and Formal Program Specification
The Case for Generic Edge Based Services
NETEDGE Proxy: A Multi-access Edge Computing System Level Proposal
Towards a Solider Solidity
Programação com contractos no Learn-OCaml
Enhancing Conceptual Modeling for Distributed Data Management: Introducing ER+
Real-life assessment of household appliances
Análise de Big Data aplicada à indústria automóvel: melhoria do design e segurança dos veículos
Capturing the Behaviour of Smart Contracts
The Cluster-based Architecture of Ferrovia 4.0
Algorithm to aid the definition of Portugal's continental shelf delineation
Predictive Maintenance based on Log Analysis: A Systematic Review
Platform for Collaborative Waste Management in an Academic Campus
A Taxonomy for Data Reduction Techniques`.split("\n")


const authors = `André Martins and Ricardo Vilaça
Juliane Marubayashi and Carlos Baquero
Paulo Sousa, José Pereira and Ricardo Vilaça
João Bonacho, Carlos Gonçalves and Luís Osório
Francisco Chimuco, João Sequeiros, Tiago Simões, Mário Freire and Pedro Inácio
António Pedro Branco, Cátia Vaz and Alexandre P Francisco
José Santos, André Lourenço and Tiago Dias
Hermann Silva and Manuel Ricardo
Julio Corona, Mário Antunes, José Quevedo and Rui L. Aguiar
Tomás Pedro, Alan Oliveira, João Cintra and Nuno Garcia
Francisco Mendes, Nuno Preguiça and João Leitão
Pedro Cunha and Mário Florido
Diogo Jesus, Nuno Preguiça and João Leitão
André Martins, Marina Albuquerque, Vinicius C. Ferreira, João Bastos, Nicolás Lori, António Costa, Helena Fernández López and José Carlos Bacelar
João Reis, Mário Pereira and António Ravara
Rui Barata, Carlos Pinto and Simão Melo de Sousa
Gonçalo Carvalho, Bruno Cabral, Jorge Bernardino and Vasco Pereira
João Ferreira, Zygimantas Jasiunas, José Cecílio and Pedro Ferreira
Tomás Marques, Miguel Gonçalves, Eurico Lopes, Arminda Lopes and Luis Miguel Barata
João Afonso and António Ravara
Luis Ferreira, Tiago Fonseca, Luis Miguel Pinho, Bernardo Cabral and Ricardo Severino
Bruno Dias, Ana Matos and Miguel Souto
Luis Miguel Barata, Sérgio Sequeira and Eurico Lopes
Tiago Mamouros, Ana Matos, Silvia Salvatore and António Silva
Vítor Fernandes, Jorge Bernardino, Vasco Pereira and Bruno Cabral`.split("\n")

const tracks = `CPDLA 2023
CPDLA 2023
CPDLA 2023
CPDLA 2023
CRC 2023
SOFT-PT 2023
SCF-CA 2023
TAAEMI
CRC 2023
SCF-CA 2023
CPDLA 2023
SOFT-PT 2023
CPDLA 2023
CRC 2023
SOFT-PT 2023
SOFT-PT 2023
CD 2023
SCF-CA 2023
CD 2023
SOFT-PT 2023
SCF-CA 2023
SOFT-PT 2023
CD 2023
TAAEMI
CD 2023`.split("\n")

export function getCommunications() {
       
       let Communications: string[][] = []

       for(let i = 0; i < articles.length; i++){
              Communications.push([articles[i],authors[i],tracks[i]])
       } 

       return Communications

}

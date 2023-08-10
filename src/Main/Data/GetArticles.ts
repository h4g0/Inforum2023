const articles = 
`Sistema para Monitorizar Exercícios de Fisioterapia
Árvores de Disseminação e Agregação Cientes da Topologia para Suportar Consenso Bizantino em Larga Escala
Atribuição de Nomes Descentralizada: Estudo de Desempenho e Proposta de Otimização do IPNS
A data management system for the ROV Luso
Uma extensão de Raft com propagação epidémica
Multi-factor Authentication as a Service for Web Applications with User-based Risk Profiles
Análise do Consumo de Energia de Aplicações Android
Information Flow Security For a Concurrent Language With Lock-based Synchronization
Evolução de um sistema de gestão de alarmes
Proactive Cybersecurity tailoring through deception techniques
Deteção de Erros de Concorrência em Programas de Memória Persistente Utilizando Análise de Locksets
Towards Leveraging Timing Cover-Channels for IoT Authentication
Functional Program Synthesis from Linear Types
An Experimental Evaluation of Value Splitting in Transactional Memory Systems
Modeling the distribution of invasive species in small islands under future climates
Suporte para Coerência Causal Transacional em Sistemas de Microsserviços
EASAHE, Um algoritmo para o agendamento de trabalhos em ferramentas de processamento de dados com preocupações de eficiência energética
Subtyping Context-Free Session Types
FLeeC: a Fast Lock-Free Cache
Pudim de Pão e Chia
Kaiyo: Testagem Automática de Aplicações de Memória Persistente
On the use of machine learning techniques to detect malware in mobile applications
Deteção Automática de Anomalias em Arquiteturas de Microsserviços
MRV*: Uma biblioteca de tipos de dados para aplicações concorrentes
On the Automation of Software Vulnerability Collection of a Database with Static Information
A modular and scalable web platform for computational phylogenetics`.split("\n")


const authors = `Daniel Silva, Carmen Morgado and Fernanda Barbosa
Helena Teixeira, Luís Rodrigues and Miguel Matos
Francisco Vale, João Leitão, Pedro Costa and Yiannis Psaras
Luís Antunes, Ana Matos, Miguel Souto and André Neves
André Gonçalves, Ana Nunes Alonso, José Pereira and Rui Oliveira
David Morais, André Zúquete and António Mendes
Délcio Ferramenta, Paul Robert and Simão Melo de Sousa
David Miranda, Ana Matos and Jan Cederquist
Adriano Oliveira, Filipe Meneses and Bruno Rebelo
Luís Guerra and Luís Gonçalves
João Oliveira, Miguel Matos and João Gonçalves
Ricardo Severino and João Alves
Rodrigo Mesquita and Bernardo Toninho
Rui Ribeiro, José Pereira and Nuno Faria
Vasco Cabral, Ana Matos, Paulo Borges, Luís Borda de Água and Eduardo Azevedo
João Queirós, Rafael Soares and Luís Rodrigues
Renato Azevedo and Ricardo Vilaça
Gil Silva, Andreia Mordido and Vasco T. Vasconcelos
André Costa, Nuno Preguiça and João Lourenço
Mónica Jin, Miguel Matos and João Barreto
Henrique Fernandes, João Gonçalves and Miguel Matos
Catarina Palma and Artur Ferreira
Valentim Romão, Rafael Soares, Vasco Manquinho and Luís Rodrigues
Adriano Maior, Nuno Faria and José Pereira
João Rafael Henriques and José D'Abruzzo Pereira
Nyckollas Brandão, André Jesus, André Páscoa, Alexandre P Francisco, Mario Ramirez and Cátia Vaz`.split("\n")

const tracks = `SCF-CA 2023
CRC 2023
CPDLA 2023
TAAEMI
CPDLA 2023
CRC 2023
SOFT-PT 2023
SOFT-PT 2023
CRC 2023
CRC 2023
CPDLA 2023
SCF-CA 2023
SOFT-PT 2023
CPDLA 2023
CD 2023
CPDLA 2023
CPDLA 2023
SOFT-PT 2023
CPDLA 2023
CPDLA 2023
CPDLA 2023
CD 2023
SOFT-PT 2023
CPDLA 2023
CPDLA 2023
CD 2023`.split("\n")

export function getArticles() {
       
       let Articles: string[][] = []

       for(let i = 0; i < articles.length; i++){
              Articles.push([articles[i],authors[i],tracks[i]])
       } 

       return Articles

}

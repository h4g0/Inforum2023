const articles = 
`Demonstrating Pulse-Coupled Synchronization in Dynamic Meshes of Cooperating Agents
Demonstrating Edge-based IoT Intrusion Detection`.split("\n")


const authors = `Diogo Almeida, Luís Pinto, Luís Oliveira, Pedro d'Orey and Luis Almeida
Yimin Zhang, Barikisu Asulba, Nuno Schumacher, Mario Sousa, Pedro Souto, Luis Almeida, Pedro Santos, Joana Sousa, Nuno Martins and Luis Gomes`.split("\n")

const tracks = `CPDLA 2023
CPDLA 2023`.split("\n")

export function getDemos() {
       
       let Demos: string[][] = []

       for(let i = 0; i < articles.length; i++){
              Demos.push([articles[i],authors[i],tracks[i]])
       } 

       return Demos

}

const articles = 
`Demonstrating Pulse-Coupled Synchronization in Dynamic Meshes of Cooperating Agents
Demonstrating Edge-based IoT Intrusion Detection`.split("\n")


const authors = `João Rafael Henriques and José D'Abruzzo Pereira
Filipe Recharte, Hugo Pacheco and Carlos Baquero`.split("\n")

const tracks = `CPDLA 2023
CPDLA 2023`.split("\n")

export function getDemos() {
       
       let Demos: string[][] = []

       for(let i = 0; i < articles.length; i++){
              Demos.push([articles[i],authors[i],tracks[i]])
       } 

       return Demos

}

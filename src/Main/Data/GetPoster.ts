const authors = 
`João Rafael Henriques and José D'Abruzzo Pereira
Filipe Recharte, Hugo Pacheco and Carlos Baquero
Leonardo Almeida, Diogo Magalhães, Rafael Gonçalves, Emanuel Marques, Pedro Rodrigues and Mario Antunes`.split("\n")


const articles = `Automated Software Vulnerability Collection for a Database with Static Information
Exploring the Journey from Sequential Specifications to Pure Operation-based CRDTs
Model Evaluation Plataform ML/AI`.split("\n")

const tracks = `CPDLA 2023
CPDLA 2023
CD 2023`.split("\n")

export function getPoster() {
       
       let Poster: string[][] = []

       for(let i = 0; i < articles.length; i++){
              Poster.push([articles[i],authors[i],tracks[i]])
       } 

       return Poster

}

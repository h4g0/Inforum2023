import './Main.css'
import { Patreons } from './Patreons'
import hugo from "./../hugo.jpg"
import lazaro from "./../lazaro.jpg"
import jacome from "./../jacome.jpg"

function Person(props: any){
    
    return <>
        <div >
            <h4>{props.name}</h4>
            <div className="Person">
            <img width="150" height="100"src={props.picture}></img>
            <p>{props.description}</p>
            </div>
        </div>
    </>
}

export function People(props: any){
    return <><div className="Location">
        
        <div>
            <Patreons></Patreons>
        </div>

        <div>
        <h2>
        Program committee:
                </h2>

        <Person name="Jácome Cunha" picture={jacome} description="Currently, I'm an Associate Professor at the Faculty of Engineering at University of Porto and an integrated member of the research center HASLab/INESC TEC.

My research is mainly focused on aiding end users being more effective and efficient when developing their software systems. In particular, I've made several contributions to improve the effectiveness and efficiency of spreadsheet users/developers. More recently I've also worked on improving software energy consumption through the analysis and transformation of its source code. Currently I'm focused on making data science more accessible for (end) users. Moreover, I'm also studying how to improve the development of software applications based on the microservices architectural style.
I obtained my PhD degree in Computer Science from the University of Minho in 2011. Afterward, I was a postdoctoral fellow jointly at University of Minho and Oregon State University, and was also an Invited Professor at School of Management and Technology of Polytechnic Institute of Porto, Assistant Professor at NOVA University of Lisbon and Assistant Professor at University of Minho."></Person>
        <h2>Webshares:</h2>
        <Person name="Hugo da Gião" picture={hugo} description='Hi, my name is Hugo da Gião, I am currently doing research at the intersection of DevOps and Model-driven engineering, and i am a researcher at HASLab/INESC TEC. I am also a Ph.D. student in Informatics Engineering at FEUP working on a thesis titled "A Model-driven approach to DevOps" whose end goal is to research methodologies and tools that would allow developers to create different DevOps pipelines without resorting to the use of specific tools. I also did research in the field of visual languages where I worked on creating a visual language to allow non-technical users to solve optimization problems.'></Person>
        <Person name="Lazaro Costa" picture={lazaro} description='
I have completed my Master’s degree in Informatics Engineering in 2019 at Faculty of Engineering at University of Porto (FEUP). During my Masters degree, I developed a plugin for the Dendro Platform improving the data management, share and reuse of research data.

Since then I have conducted research related to storage, share, reproducibility, and data representation. During the following two years, I was part of the research team of the “EPISA - Entity and Property Inference for Semantic Archives” (DSAIPA/DS/0023/2018) project, where I was responsible for implementing the representations of the digital archives of the “Torre do Tombo”. Since 2019 I am also an Invited Assistant Professor at FEUP teaching courses on databases and compiler construction.

Currently, I am a PhD student at the Faculty of Engineering at University of Porto and a member of the research center HASLab/INESC TEC. The goal of my PhD is to improve reproducibility, reusability and collaboration in the research domain.'></Person>
        </div>

       
        </div>
        </>

}
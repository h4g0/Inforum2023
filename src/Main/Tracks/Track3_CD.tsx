import {InforumDates, InforumDatesTracks} from '../Dates';
import '../Main.css'
import {Patreons} from "../Patreons";
import { SortedCommission } from '../Tracks';

export function Track3_CD(props: any) {

    const cor_pro = [
        "Sebastião Pais, NOVA-LINCS and Universidade da Beira Interior (coord.)"
    ]

    const co_pro = [
        "Alberto Simões, 2Ai Lab and Instituto Politécnico do Cávado e do Ave",
        "Alexandre Rademaker, IBM Research and EMAp/FGV",
        "Andre de Carvalho, Universidade de São Paulo",
        "Armanda Rodrigues, Universidade NOVA de Lisboa",
        "Cátia Vaz, ISEL, Instituto Politécnico de Lisboa",
        "Claudia Soares, FCT UNL",
        "Diana Santos, University of Oslo",
        "Helena Galhardas, Universidade de Lisboa",
        "Helena Moniz, FLUL and CLUL/ INESC-ID",
        "Irene Rodrigues, Universidade de Evora",
        "João Cordeiro, Universidade da Beira Interior",
        "João Carlos Neves, NOVA-LINCS and Universidade da Beira Interior",
        "Luís A. Alexandre, Departamento de Informatica, Universidade da Beira Interior",
        "Natália Souza, INESCD-ID Lisboa",
        "Nuno Pombo, Universidade da Beira Interior",
        "Pedro G. Ferreira, Ipatimup - Institute of Molecular Pathology and Immunology of the University of Porto",
        "Rui Neves Madeira, ESTSetúbal/Instituto Politécnico de Setúbal",
        "Salvador Abreu, NOVA-LINCS and University of Evora",
        "Sara Madeira, Universidade de Lisboa",
        "Sergi Bermudez I Badia, Universidade da Madeira",
        "Teresa Gonçalves, Universidade de Evora"
    ]

    return <>
        <div className="Accommodation">
            
            <div className='Tracks'>

                <div className='TracksOne'>

                    <h1>Ciência de Dados</h1>
                    <p>A extraordinária disseminação de computadores e dados online está a mudar a forma como em muitas
                        áreas as decisões são tomadas. O crescimento dramático na escala e complexidade dos dados que
                        podem
                        ser recolhidos e analisados, está a afetar todos os aspetos do trabalho e da sociedade. Extrair
                        significado e valor de dados cada vez mais complexos e volumosos requer um conjunto distinto de
                        habilidades, métodos e ferramentas que foram combinados para formar uma área de conhecimento
                        emergente chamada Ciência de Dados (Data Science). Esta área de conhecimento integra elementos
                        fundamentais da ciência da computação, matemática e estatística, e os combina de forma
                        significativa
                        com um conhecimento profundo da área de domínio de cada um. Adicionalmente, compreender maneiras
                        eficazes e éticas de usar grandes quantidades de dados é um desafio significativo para a ciência
                        e
                        para a sociedade como um todo, e o desenvolvimento de técnicas escaláveis para processamento de
                        informação, análise de dados e tomada de decisão, requer pesquisa interdisciplinar em muitas
                        áreas,
                        incluindo aprendizagem automática, algoritmos, estatísticas, operações de pesquisa, base de
                        dados,
                        análise de complexidade, visualização, privacidade e segurança. Ciência de Dados é uma área
                        interdisciplinar voltada para o estudo e a análise de dados económicos, financeiros, sociais,
                        entre
                        outros, estruturados e não-estruturados, que visa a extração de conhecimento, deteção de padrões
                        e/ou obtenção de insights para possíveis tomadas de decisão. A ascensão da Ciência de Dados está
                        diretamente ligada à ascensão de grandes volumes de dados (Big Data) em quase todos os domínios,
                        o
                        big data está a gerar uma revolução na sociedade em muitas áreas. Devido ao grande volume de
                        dados,
                        torna-se impossível uma análise humana eficaz sem a automação de processos. Assim, a Ciência de
                        Dados é uma importante área científica que impulsiona a investigação e a inovação em disciplinas
                        como a estatística, a ciência da computação e a inteligência computacional.</p>


                    <h2>Lista de tópicos</h2>
                    <p>A sessão INForum CD procura submissões de artigos no contexto da ciência e análise de dados
                        (podendo estar ou não relacionado com grande volume de dados (big data)), no seu sentido
                        abrangente, descrita de forma não exaustiva, pela seguinte lista de tópicos:
                    </p>

                    <ul>
                        <li>Ciência de Dados</li>
                        <li>Big Data</li>
                        <li>Cloud Computing</li>
                        <li>Aprendizagem Automática</li>
                        <li>Aprendizagem Estatística</li>
                        <li>Aprendizagem Profunda</li>
                        <li>Extração da Informação</li>
                        <li>Fundamentos matemáticos e modelos estatísticos para descoberta do conhecimento</li>
                        <li>Mineração de dados</li>
                        <li>Mineração Web</li>
                        <li>Processamento estatístico da linguagem natural</li>
                        <li>Processos de otimização em grande volume de dados (procura, análise, indexação, mapeamento,
                            ...)
                        </li>
                        <li>Recuperação da Informação</li>
                        <li>Redes Sociais</li>
                        <li>Segurança da Informação</li>
                        <li>Visualização de grande volume de dados</li>
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
                       
                    </div>
                </div>
            </div>

        </div>
    </>

}

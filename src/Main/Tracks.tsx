import {Link} from 'react-router-dom'
import './Main.css'
import {Patreons} from './Patreons'
import {InforumDates, InforumDatesTracks} from './Dates';

export function Tracks(props: any) {
    return <>
        <div className="Accommodation">


            <div>
                <Patreons/>
            </div>
            <div className='Tracks'>
                <div className='TracksOne'>
                    <h2>Chamada a Submissões</h2>

                    <p>Nesta 14ª edição do INForum serão aceites quatro tipos de submissões para cada uma das sessões temáticas (incluindo a sessão multidisciplinar/interdisciplinar):
                        
                    <ul>
                        
                        <li>Artigos, apresentando resultados de trabalho de investigação científica realizado em contexto académico ou industrial, em língua portuguesa ou inglesa, os quais serão alvo de um processo de revisão seletivo por cada CPT
                        </li>

                        <li>
                        Comunicações, que têm como objetivo permitirem a divulgação de uma forma mais expedita e informal de trabalho de I&D desenvolvido na comunidade, e cuja aceitação será decidida por cada CPT com base na submissão de resumos estendidos
                        </li>

                        <li>
                        Pósteres, cujo objetivo é promover a apresentação de investigação em fase inicial ou embrionária no contexto de projetos, doutoramentos, ou outros, e também como forma adicional de difusão de trabalhos resultantes de dissertações de mestrado ou projetos finais (ou integrados) de licenciatura
                        </li>

                        <li>
                        Demonstrações, com o fim de possibilitar a apresentação mais alargada de software e sistemas desenvolvidos na comunidade.
                        </li>

                    </ul>

    Artigos e comunicações serão apresentados oralmente durante as sessões, tendo as comunicações um tempo de apresentação mais curto do que os artigos. Todos os artigos e comunicações aceites terão também direito a espaço de exposição para afixação de póster e/ou demonstração de ferramentas.
    Os artigos e as comunicações deverão ser submetidos no formato Springer LNCS, estando os artigos limitados a 12 páginas (excluindo referências), e as comunicações um tamanho recomendado de 4 páginas, podendo ir até um limite de 12 páginas. As propostas de pósteres e de demonstrações devem ser realizadas no mesmo formato com um máximo de 2 páginas.
    Nas atas para efeitos de arquivo constarão os artigos e as comunicações (sendo que os autores podem optar, após a submissão ser aceite, pela publicação integral com respetivamente 12 e 4 páginas, ou apenas sob a forma de sumário de 2 páginas). Também serão incluídos os sumários de pósteres e demonstrações. Assim, todas as submissões aceites no INForum 2023, independentemente da presença, formato e dimensão nas atas, serão listadas no programa final.
    </p>

    <h2>Sessões</h2>

    <ul>
                        
    <li>
    
    <Link to="/tracks/aspi">
    Aspetos Sócio-Profissionais da Informática (ASPI)
    </Link>
    
</li>

<li>

<Link to="/tracks/cd">
Ciência de Dados  (CD)
</Link>

</li>

<li>
                            
                            <Link to="/tracks/softcrc">
                            Ciência e Engenharia de Software (SOFT-PT)
                            </Link>

                        </li>

                        <li>

<Link to="/tracks/cpdla">
Computação Paralela, Distribuída e de Larga Escala (CPDLA)
</Link>

</li>
                       
                        
                        <li>
                        
                        <Link to="/tracks/crc">
                        Comunicações e Redes de Computadores (CRC)
                        </Link>

                        </li>

                        

                        

                        <li>

                            <Link to="/tracks/cpsapps">
                            Sistemas Ciber-Físicos Confiáveis e Aplicações (CPS&Apps)
                            </Link>

                        </li>
                        

                        <li>

                            <Link to="/tracks/sintel">
                            Sistemas Inteligentes (SIntel)
                            </Link>
                        </li>



                        

                    </ul>

    <h2>Tópico Aberto em Áreas Emergentes, Multidisciplinares e Interdisciplinares</h2> 

    <p>Nesta 14ª edição do INForum, além dos tópicos propostos e selecionados, será também aberto um tópico destinado a trabalhos em áreas emergentes, multidisciplinares e interdisciplinares que embora estando relacionados com a Informática, não se enquadrem integralmente em nenhum dos tópicos existentes.
    Desta forma, será possível acolher no INForum trabalhos que permitam alargar o conjunto de temas já abordados no INForum e promover o crescimento de mais comunidades no âmbito do INForum em edições seguintes.
    Este tópico deve ser selecionado apenas para submissões que não seja possível de todo enquadrar numa das sessões temáticas.
    Este tópico aberto terá um formato idêntico aos tópicos tradicionais (e.g., nos formatos de submissões pretendidos) e será gerido pela CP do INForum com a ajuda de revisores convidados, das Comissões de Programa de Tópicos e/ou externos.
    </p>

                
                
                
                
                
            

                </div>
                <div className='TracksTwo'>
                    <div className='InsideTracksTwo'>
                    
                    <h2>Submissões</h2>

                    <p>Todas as submissões devem ser efetuadas através do sistema Easychair, correspondente ao seu tópico, disponível no endereço:</p>
                    
                    <div className='Submission'>
                    

                    <a href="https://easychair.org/conferences/?conf=inforum2023">https://easychair.org/conferences/?conf=inforum2023</a>

                    

                    </div>
                   
                        <h2>Datas importantes</h2>

                        <InforumDatesTracks></InforumDatesTracks>
                        



                    </div>


                </div>
            </div>

        </div>
    </>

}

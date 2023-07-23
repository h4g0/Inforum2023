import './Main.css'
import { Patreons } from './Patreons'

export function Registration(props: any) {
    return <>
        <div className="Dates">


            <Patreons />

            <div className="InsideIntro">

                <div>

                    <p>
                        O registo no INForum 2023 inclui acesso à conferência e a todo o material publicado (em formato digital). Inclui ainda dois almoços, coffee breaks (exceto no dia 7 de manhã) e um banquete.
                    </p>




                    <p>
                        Embora seja normal neste tipo de conferência, a organização oferecer a cada participante um bloco e caneta e um saco ou mochila, este ano vamos fazê-lo de forma um pouco diferente. De forma a evitar o desperdício que alguns destes itens provocam, iremos apenas disponibilizar um bloco e caneta, pedindo aos participantes que os recolham apenas caso sintam que de facto lhes faz falta. Dado que os participantes tipicamente têm a sua própria mochila ou saco, este ano não disponibilizaremos itens desse tipo.
                    </p>


                    <p>
                        Cada artigo aceite terá de corresponder a pelo menos uma inscrição que não seja oferta dos patrocinadores.
                    </p>


                    <p>
                        Os alunos que tenham um artigo aceite na conferência podem candidatar-se a uma bolsa. Para tal, devem enviar um email para jacome@fe.up.pt, identificando o artigo aceite, e contendo um documento, com no máximo uma página, onde apresentam a motivação para o pedido da bolsa e participação no INForum, evidenciando de que forma esta participação poderá ser importante nas respectivas carreiras. Devem ainda enviar um comprovativo de como são estudantes. No caso de terem um orientador, quer de MSc, PhD ou outra situação, os orientadores devem também enviar um documento justificando e explicando o pedido de bolsa. Só serão aceites candidaturas completas até ao dia 25 de julho. Apenas após a notificação do resultado desta candidatura os candidatos se podem inscrever.
                    </p>




                    <p>
                        O banquete será realizado no dia 7 no <a href="https://www.torreao.pt">Restaurante Torreão</a>, um projeto de economia social. De forma agilizar o evento, agradecemos que no registo escolham as vossas preferências para cada momento da refeição entre as seguintes opções:
                <ul><li>Entrada</li>
                    <ul>
                        <li>Bacalhau lascado em crosta de broa</li>
                        <li>Rosbife c/ molho de mostarda e mel</li>
                        <li>Creme de Cenoura com Amêndoa Torrada</li>
                    </ul>
                    <li>Prato Principal</li>
                    <ul>
                        <li>Arroz de Marisco</li>
                        <li>Bife de Alcatra, Manteiga de Alho Negro e Milhos</li>
                        <li>Caril de Legumes Assados com Basmati</li>
                    </ul>
                    <li>Sobremesa</li>
                    <ul>
                        <li>Crocante de massa filo com ovos moles, amêndoa laminada e laranja caramelizada</li>
                        <li>Merengues floresta negra</li>
                        <li>Fruta laminada</li>
                    </ul>
                </ul>


            </p>






            <table className='RegistrationTable'>
                <tr>


                    <th />


                    <th>Datas</th>
                    <th>Não estudante</th>
                    <th>Estudante</th>
                    <th>1 dia (sem banquete)</th>
                    <th>Bilhete banquete extra</th>


                </tr>
                <tr>
                    <td width={120}><b>Inscrição atempada</b></td>
                    <td width={120}>10/07/2023 a 10/08/2023</td>
                    <td width={120}>200€</td>
                    <td width={120}>150€</td>
                    <td width={120}>80€</td>
                    <td width={120}>50€</td>


                </tr>
                <tr>
                    <td><b>Inscrição tardia</b></td>
                    <td>11/08/2023 a 31/08/2023</td>
                    <td>250€</td>
                    <td>200€</td>
                    <td>100€</td>
                    <td>70€</td>
                </tr>
                <tr>
                    <td><b>Inscrição durante a conferência</b></td>
                    <td>01/09/2023 a 08/09/2023</td>
                    <td>300€</td>
                    <td>250€</td>
                    <td>120€</td>
                    <td>80€</td>
                </tr>
            </table>

            <br/>
            <p>O registo deve ser realizado na seguinte página: <a href="https://www.last2ticket.com/en/embed/e/5052">https://www.last2ticket.com/en/embed/e/5052</a></p>

        </div>
    </div >
        </div >
    </>

}

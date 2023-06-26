import './Main.css'
import {Patreons} from './Patreons'

export function Registration(props: any) {
    return <>
        <div className="Dates">


                <Patreons/>

            <div className="InsideIntro">

            <div>
                <table className='RegistrationTable'>
                    <tr>

                        <th/>

                        <th>Datas</th>
                        <th>Standard*</th>
                        <th>Estudante*</th>
                        <th>1 dia (sem banquete)</th>
                        <th>Bilhete banquete extra</th>

                    </tr>
                    <tr>
                        <td><b>Early</b></td>
                        <td>01/07/2023 a 01/08/2023</td>
                        <td>200€</td>
                        <td>150€</td>
                        <td>80€</td>
                        <td>50€</td>

                    </tr>
                    <tr>
                        <td><b>Late</b></td>
                        <td>02/08/2023 a 31/08/2023</td>
                        <td>250€</td>
                        <td>200€</td>
                        <td>100.12€</td>
                        <td>70€</td>
                    </tr>
                    <tr>
                        <td><b>In place</b></td>
                        <td>01/09/2023 a 06/09/2023</td>
                        <td>300€</td>
                        <td>250€</td>
                        <td>120€</td>
                        <td>80€</td>
                    </tr>
                </table>
            </div>
        </div>
        </div>
    </>

}

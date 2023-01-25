import './Main.css'
import {Patreons} from './Patreons'

export function Registration(props: any) {
    return <>
        <div className="Dates">


            <div>
                <Patreons/>
            </div>
            <div>
                <table className='RegistrationTable'>
                    <tr>

                        <th/>

                        <th>Datas</th>
                        <th>Standard</th>
                        <th>Estudante</th>
                        <th>1 dia</th>
                    </tr>
                    <tr>
                        <td><b>Early</b></td>
                        <td>01/07/2022 a 01/08/2022</td>
                        <td>120€</td>
                        <td>80€</td>
                        <td>80€</td>
                    </tr>
                    <tr>
                        <td><b>Late</b></td>
                        <td/>
                        <td/>
                        <td/>
                        <td/>
                    </tr>
                    <tr>
                        <td><b>In place</b></td>
                        <td/>
                        <td/>
                        <td/>
                        <td/>
                    </tr>
                </table>
            </div>

        </div>
    </>

}

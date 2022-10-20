import './Main.css'
     
function Timer(props: any) {

                const inforumDate = Date.parse(props.time)
                const now = ( new Date() ).getTime()

                const oneDay = 1000*60*60*24
                const oneHour = 1000*60*60
                const oneMinute = 1000*60
                const oneSecond = 1000

                const days = Math.floor(( inforumDate - now ) / oneDay)
                const milDays =  days * oneDay
                const hours =  Math.floor( (inforumDate - now - milDays) / oneHour )
                const milHours = milDays + hours * oneHour
                const minutes = Math.floor(  (inforumDate - now - milHours) /oneMinute)
                const milMinutes = milHours + minutes * oneMinute
                const seconds = Math.floor(  (inforumDate - now - milMinutes) /oneSecond)

                return <>
                    <div className="Timer">
                
                            <p><a className='TimerClock'>{days} dias</a>: <a className='TimerClock'>{hours} horas</a>: <a className='TimerClock'>{minutes} minutos</a>: <a className='TimerClock'>{seconds} segundos</a></p>
                    </div>
                
                </>
}

export function Initial(props: any) {
    return <><div className="Intro">
                    
        <h2>Bem-vindo ao INForum 2023</h2>
        <p>Um local privilegiado para a divulgação, discussão e reconhecimento de trabalhos científicos e avanços tecnológicos em Informática</p>
        <h2>FEUP - Faculdade de Engenharia da Universidade do Porto</h2>
        <p>Consulte o programa do Inforum 2023</p>
        <p>O INForum começa em</p>
        <Timer time={props.time}></Timer>
        </div>
        </>
}
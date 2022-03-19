
import './styles.css'

export default function Footer(props){
    return (
        <div className='Footer'>
            <p>{props.concluidas}/{props.total} CONCLUÍDOS</p>
        </div>
    )
}
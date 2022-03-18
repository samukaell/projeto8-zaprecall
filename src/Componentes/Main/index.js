import dados from '../../dados'
import Flashcard from './Flashcard';
import './styles.css'

export default function Main(){

    return(
        <div className='Main'>
            {dados.map(obj=>{
                return(<Flashcard 
                            numeroPergunta = {obj.id}
                            pergunta = {obj.pergunta}
                            resposta = {obj.resposta}
                        />)
            })}
        </div>
    );
}
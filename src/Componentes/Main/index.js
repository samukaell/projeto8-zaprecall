import dados from '../../dados'
import Flashcard from './Flashcard';
import './styles.css'

export default function Main(props){

    const {valor, callback} = props;

    return(
        <div className='Main'>
            {dados.deckDriven.sort().map((obj,index)=>
                <Flashcard 
                    numeroPergunta = {index+1}
                    pergunta = {obj.pergunta}
                    resposta = {obj.resposta}
                    key={index+1}

                    respostasButtons = {valor}
                    callback = {callback}
                />)
            }
        </div>
    );
}
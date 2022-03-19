import {useState} from 'react';
import { IoPlayOutline } from "react-icons/io5";
import setinha from '../../../midia/setinha.png'

export default function Flashcard(props){

    const {respostasButtons, callback} = props;

    const [iniciado,setIniciado] = useState(false);
    const [virado,setVirado] = useState(false);
    const [solucao,setSolucao] = useState(null);

    function retornarResposta(resultado){
        setSolucao(resultado);
        setVirado(false);
        setIniciado(false);

        callback([...respostasButtons, resultado]);
    }
    let classe = 'Flashcard'
    if(solucao){
        classe = classe + ` ${solucao}` 
    }
    
    if(virado){
        return (
            <div className="Flashcard-virado">
                <p>{props.resposta}</p> 
                <div className='caixa-botoes'>
                    <button className='botao-nao-lembrei' onClick={()=>{retornarResposta('Nao')}}>Não Lembrei</button>
                    <button className='botao-quase-lembrei' onClick={()=>{retornarResposta('Quase')}}>Quase não lembrei</button>
                    <button className='botao-zap-lembrei' onClick={()=>{retornarResposta('Zap')}}>Zap!</button>
                </div>
            </div>
        )
    }
    if(!iniciado){
        return(
            <div className={classe}  onClick = {() => setIniciado(true)} >
                <p>Pergunta {props.numeroPergunta}</p>
                <IoPlayOutline className='icone-pergunta'/>
            </div>
        );
    }else{
        return(
            <div className="Flashcard-iniciado" >
                <p onClick={() => setIniciado(false)}>{props.pergunta}</p>
                <div className='caixa-setinha'>
                    <img src={setinha} alt='setinha' onClick={() => setVirado(true)}/>
                </div>
            </div>
        );
    }
}


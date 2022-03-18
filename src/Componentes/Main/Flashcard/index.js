import {useState} from 'react';
import setinha from '../../../midia/setinha.png'

export default function Flashcard(props){

    const [iniciado,setIniciado] = useState(false);
    const [virado,setVirado] = useState(false);

    function retornarLembrei(){
        console.log("Lembrei dessa!");
        setVirado(false)
    }
    
    if(virado){
        return (
            <div className="Flashcard-virado">
                <p>{props.resposta}</p> 
                <div className='caixa-botoes'>
                    <button className='botao-nao-lembrei' onClick={retornarLembrei}>Não Lembrei</button>
                    <button className='botao-quase-lembrei'>Quase não lembrei</button>
                    <button className='botao-zap-lembrei'>Zap!</button>
                </div>
            </div>
        )
    }
    if(!iniciado){
        return(
            <div className="Flashcard"  onClick = {() => setIniciado(true)} >
                <p>Pergunta {props.numeroPergunta}</p>
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

/*
    <div className="Flashcard-virado">
        <p>{props.resposta}</p> 
        <div className='caixa-botoes'>
            <button className='botao-nao-lembrei'>Não Lembrei</button>
            <button className='botao-quase-lembrei'>Quase não lembrei</button>
            <button className='botao-zap-lembrei'>Zap!</button>
        </div>
    </div>
*/
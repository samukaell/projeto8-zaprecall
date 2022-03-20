import {useState} from 'react';
import { IoPlayOutline,IoCloseCircle,IoHelpCircleSharp,IoCheckmarkCircleSharp } from "react-icons/io5";
import setinha from '../../../midia/setinha.png'

export default function Flashcard(props){

    const {respostasButtons, callback} = props;

    const [iniciado,setIniciado] = useState(false);
    const [virado,setVirado] = useState(false);
    const [solucao,setSolucao] = useState(null);

    const [segundoClick,setSegundoClick] = useState(false);

    function retornarResposta(resultado){
        setSolucao(resultado);
        setVirado(false);
        setIniciado(false);

        callback([...respostasButtons, resultado]);
    }

    function retornarSetinha(){
        if(solucao === 'Nao'){
            return <IoCloseCircle className='icone icone-Nao'alt='Nao acertei' onClick={() => setVirado(true)}/>
        }else if(solucao === 'Quase'){
            return <IoHelpCircleSharp className='icone icone-Quase' alt='Qause acertei' onClick={() => setVirado(true)}/>
        }else if(solucao === 'Zap'){
            return <IoCheckmarkCircleSharp className='icone icone-Zap' alt='Zap acertei' onClick={() => setVirado(true)}/>
        }else{
            return <IoPlayOutline className='icone icone-pergunta'/>
        }
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
                    <button className='botao-nao-lembrei' onClick={()=>{retornarResposta('Nao'); setSegundoClick(true)}}>Não Lembrei</button>
                    <button className='botao-quase-lembrei' onClick={()=>{retornarResposta('Quase'); setSegundoClick(true)}}>Quase não lembrei</button>
                    <button className='botao-zap-lembrei' onClick={()=>{retornarResposta('Zap'); setSegundoClick(true)}}>Zap!</button>
                </div>
            </div>
        )
    }
    if(!iniciado){
        return(
            <div className={classe}  onClick = {() => setIniciado(true)} >
                <p>Pergunta {props.numeroPergunta}</p>
                {retornarSetinha()}
            </div>
        );
    }else if(!segundoClick){
        return(
            <div className="Flashcard-iniciado" >
                <p onClick={() => setIniciado(false)}>{props.pergunta}</p>
                <div className='caixa-setinha'>
                <img src={setinha} alt='setinha' onClick={() => setVirado(true)}/>
                </div>
            </div>
        );
    }else{
        return(
            <div className={classe}  onClick = {() => setIniciado(true)} >
                <p>Pergunta {props.numeroPergunta}</p>
                {retornarSetinha()}
            </div>
        )
    }
}


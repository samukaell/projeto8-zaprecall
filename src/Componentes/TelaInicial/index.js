import {useState} from 'react';
import dados from '../../dados';
import './styles.css'
import logo from '../../midia/logo.png'

export default function TelaInicial(props){

    const [deck,setDeck] = useState([]);
    
    function selecionarDeck(string){
        console.log("Deck ->"+string);
        console.log("Objeto deck ->");
        setDeck({...dados[0]});
        console.log(deck);
    }

    return(

        <div className='TelaInicial'>
            <div className='caixa-logo'>
                <img className='logo-imagem' src={logo} alt='Logo do ZapRecall' />
                <p className='Logo-texto'>ZapRecall</p>
            </div>
            <div className='caixa-deck'>
                <select name="select" onChange={e => selecionarDeck(e.target.value)}>
                    {Object.keys(dados).map((deck,index)=>{
                        return(<option value={deck} key={index}>{deck}</option>)
                    })}

                </select>

                <button className='botao-selecionar-deck' onClick={props.funcaoIniciar}>Iniciar Recall!!</button>

            </div>
        </div>
    );
}
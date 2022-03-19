//import {useState} from 'react';
import dados from '../../dados';
import './styles.css'
import logo from '../../midia/logo.png'

export default function TelaInicial(props){

    //const [valido,setValido] = useState(false);

    return(

        <div className='TelaInicial'>
            <div className='caixa-logo'>
                <img className='logo-imagem' src={logo} alt='Logo do ZapRecall' />
                <p className='Logo-texto'>ZapRecall</p>
            </div>
            <div className='caixa-deck'>
                <select name="select">
                    {Object.keys(dados).map((deck,index)=>{
                        return(<option value={"valor"+index} key={index}>{deck}</option>)
                    })}

                </select>

                <button className='botao-selecionar-deck' onClick={props.funcaoIniciar}>Iniciar Recall!!</button>

            </div>
        </div>
    );
}
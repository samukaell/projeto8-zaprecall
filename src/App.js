import {useState} from 'react';

import TelaInicial from './Componentes/TelaInicial';
import Header from './Componentes/Header';
import Main from './Componentes/Main';
import Footer from './Componentes/Footer';
import dados from './dados';

import './styles.css'
import './reset.css'

export default function App() {

    const [iniciarApp,setIniciarApp] = useState(false);
    const [valorFooter,setValorFooter] = useState([]);
    

    function iniciar(){
        setIniciarApp(true);
    }

    console.log(valorFooter);

    if(!iniciarApp){
        return(
            <div className="App">
                <TelaInicial
                    funcaoIniciar = {iniciar}
                />
            </div>
        )
    }else{
        return (
            <div className="App">
                <Header/>
                <Main
                    valor = {valorFooter}
                    callback = {setValorFooter}
                />
                <Footer
                    concluidas = {valorFooter}
                    total = {dados.deckDriven}
                />
                <div className='espaco-final'></div>
            </div>
        );
    }
}

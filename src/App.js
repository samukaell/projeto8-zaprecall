import Header from './Componentes/Header';
import Main from './Componentes/Main';
import Footer from './Componentes/Footer';

import './styles.css'
import './reset.css'

export default function App() {
    return (
        <div className="App">
            <Header/>
            <Main/>
            <Footer/>
            <div className='espaco-final'></div>
        </div>
    );
}

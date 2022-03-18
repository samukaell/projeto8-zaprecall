import './styles.css'

import logo from '../../midia/logo.png'

export default function Header(){
    return(
        <div className='Header'>
            <div className='container-header'>
                <img src={logo} alt="logo raiozinho"/>
                <h1>ZapReacall</h1>
            </div>
        </div>
    );
}
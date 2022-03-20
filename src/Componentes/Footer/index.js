
import { IoCloseCircle,IoHelpCircleSharp,IoCheckmarkCircleSharp } from "react-icons/io5";

import './styles.css'
//Imagens
import ganhou from '../../midia/party.png'
import perdeu from '../../midia/sad.png'
import { useState } from "react";
import { useEffect } from "react";

export default function Footer(props){
    const {concluidas,total} = props;

    const [incorretas,setIncorretas] = useState(0);
    const [iconesLegais,setIconesLegais] = useState([]);
  
    function inserirIcones(){
        concluidas.forEach(obj=>{
            if(obj === 'Nao'){
                setIconesLegais([...iconesLegais,
                    <IoCloseCircle className='icones-p icone-Nao'alt='Nao acertei'/>    
                ])
                setIncorretas(incorretas+1)
            }else if(obj === 'Quase'){
                setIconesLegais([...iconesLegais,
                    <IoHelpCircleSharp className='icones-p icone-Quase' alt='Quase acertei'/>
                ])

            }else{
                setIconesLegais([...iconesLegais,
                    <IoCheckmarkCircleSharp className='icones-p icone-Zap' alt='Zap acertei'/>
                ])

            }
        });
    }

    useEffect(()=>{
        inserirIcones()
    },[concluidas]
    );

    if(concluidas.length === total.length){
        if(incorretas>0){
            return (
                <div className="Footer footer-fim">
                    <div className="resultado-final">
                        <img src={perdeu} alt='Imagem perdeu'/>
                        <p>PUTZ!</p>
                    </div>
                    <p>Ainda faltaram alguns...Mas não desanime!</p>
                    <div className='caixa-icones'>
                        {iconesLegais}
                    </div>
                </div>
            )
        }else{
            return (
                <div className="Footer footer-fim">
                    <div className="resultado-final">
                        <img src={ganhou} alt='Imagem ganhou'/>
                        <p>PARABÉNS!</p>
                    </div>   
                    <p>Você não esqueceu de nenhum flashcard!</p>
                    <div className='caixa-icones'>
                        {iconesLegais}
                    </div>
                </div>
            )
        }
        
    }else{
        return (
            <div className='Footer footer-normal'>
                <p>{concluidas.length}/{total.length} CONCLUÍDOS</p>
                <div className='caixa-icones'>
                    {iconesLegais}
                </div>
            </div>
        )
    }
}
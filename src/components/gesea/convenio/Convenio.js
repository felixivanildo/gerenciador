import React, {useEffect, useState} from "react";
import AsyncStorage from "@react-native-async-storage/async-storage";
import { Selector } from "../../commun/Formfilter";
import Divisionbar from "../../commun/Divisionbar";
import { useNavigate } from "react-router-dom";
import './Convenio.css'

function Convenio() {
   
    useEffect(()=>{
       const cleaner = async ()=> {
       await AsyncStorage.removeItem('@formulario')
       }
 
 
       cleaner()
    }, [])


    const [mobra, setMobra] = useState(false);

    const handleMouseEntermobra = (data) => {
        setMobra(true);
         
    };

    const handleMouseLeavemobra = () => {
        setMobra (false);
    };


    const [arcondicionado, setArcondicionado] = useState(false);

    const handleMouseEnterarcondicionado = (data) => {
        setArcondicionado(true);
         
    };

    const handleMouseLeavearcondicionado = () => {
        setArcondicionado (false);
    };

    const Navegacione = useNavigate ()

    const formselector = async (data) =>{
        let a = Selector(data.target.innerText)
       
        await AsyncStorage.setItem("@formulario", JSON.stringify(a)).then(()=>{
            Navegacione("/FORMS"); })
            .catch((err)=> console.log(err))
    }
 
   return (
  
      <div>
            <div className="main">
            <h1>GESEA - CONVÊNIO</h1>
            <Divisionbar/>
            <div className="buttons">
            <div className="menu" onMouseEnter={handleMouseEntermobra} onMouseLeave={handleMouseLeavemobra}>
                <button id="convenio" className={`sudeo-toggle ${mobra ? 'open' : ''}`} ></button>
                <label>Solicitação de Mão de Obra</label>
                <ul className={`main-menu ${mobra ? 'open' : ''}`}>
                    <li><button onClick={formselector}>Solicitação de mão de obra</button></li>
                    
                </ul>


            </div>

            <div className="menu" onMouseEnter={handleMouseEnterarcondicionado} onMouseLeave={handleMouseLeavearcondicionado}>
                <button id="arcondi" className={`sudeo-toggle ${arcondicionado ? 'open' : ''}`} ></button>
                <label>Ar-Condicionado da Companhia</label>
                <ul className={`main-menu ${arcondicionado ? 'open' : ''}`}>
                    <li><button onClick={formselector}>Aparelho da companhia</button></li>
                   
                </ul>


            </div>
            </div>
         </div>     
      </div>
   
   );
 }
 
 export default Convenio;
 
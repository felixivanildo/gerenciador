import React, {useEffect, useState} from "react";
import AsyncStorage from "@react-native-async-storage/async-storage";
import { Selector } from "../../commun/Formfilter";
import Divisionbar from "../../commun/Divisionbar";
import { useNavigate } from "react-router-dom";
import "./Supserv.css"

function Supserv() {
   
    useEffect(()=>{
       const cleaner = async ()=> {
       await AsyncStorage.removeItem('@formulario')
       }
 
 
       cleaner()
    }, [])


    const [tel, setTel] = useState(false);

    const handleMouseEntertel = (data) => {
        setTel(true);
         
    };

    const handleMouseLeavetel = () => {
        setTel (false);
    };


    const [vigilancia, setVigilancia] = useState(false);

    const handleMouseEntervigilancia = (data) => {
        setVigilancia(true);
         
    };

    const handleMouseLeavevigilancia = () => {
        setVigilancia (false);
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
            <h1>SUPSERV</h1>
            <Divisionbar/>
            <div className="buttons">
            <div className="menu" onMouseEnter={handleMouseEntertel} onMouseLeave={handleMouseLeavetel}>
                <button id="tel" className={`sudeo-toggle ${tel ? 'open' : ''}`} ></button>
                <label>Telefonia</label>
                <ul className={`main-menu ${tel ? 'open' : ''}`}>
                    <li><button onClick={formselector}>Telefone fixo</button></li>
                    <li><button onClick={formselector}>Telefone móvel</button></li>
           
                </ul>


            </div>

            <div className="menu" onMouseEnter={handleMouseEntervigilancia} onMouseLeave={handleMouseLeavevigilancia}>
                <button id="vigilancia" className={`sudeo-toggle ${vigilancia ? 'open' : ''}`} ></button>
                <label>Vigilância</label>
                <ul className={`main-menu ${vigilancia ? 'open' : ''}`}>
                    <li><button onClick={formselector}>Inteligente</button></li>
                    <li><button onClick={formselector}>Patrimônial</button></li>
                    <li><button onClick={formselector}>Monitoramento</button></li>
                 
                </ul>

            </div>
            <div className="menu" onMouseEnter={handleMouseEnterarcondicionado} onMouseLeave={handleMouseLeavearcondicionado}>
                <button id="arcondi" className={`sudeo-toggle ${arcondicionado ? 'open' : ''}`} ></button>
                <label>Ar-Condicionado ACR</label>
                <ul className={`main-menu ${arcondicionado ? 'open' : ''}`}>
                    <li><button onClick={formselector}>Aparelho da ACR</button></li>                  
                </ul>


            </div>
            </div>
         </div>     
      </div>
   
   );
 }
 
 export default Supserv;
 
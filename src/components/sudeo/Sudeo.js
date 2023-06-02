import React, {useEffect, useState} from "react";
import MainLayout from "../commun/Layout";
import AsyncStorage from "@react-native-async-storage/async-storage";
import Rodape from "../commun/Rodape";
import { Selector } from "../commun/Formfilter";
import Divisionbar from "../commun/Divisionbar";
import { useNavigate } from "react-router-dom";
import './Sudeo.css'

function Sudeo() {
   
    useEffect(()=>{
       const cleaner = async ()=> {
       await AsyncStorage.removeItem('@formulario')
       }
 
 
       cleaner()
    }, [])


    const [sei, setSei] = useState(false);

    const handleMouseEntersei = (data) => {
        setSei(true);
         
    };

    const handleMouseLeavesei = () => {
        setSei(false);
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
         <MainLayout></MainLayout>
         <div className="main">
            <h1>SUDEO</h1>
            <Divisionbar/>
            <div className="buttons">
            <div className="menu" onMouseEnter={handleMouseEntersei} onMouseLeave={handleMouseLeavesei}>
                <button className={`sudeo-toggle ${sei ? 'open' : ''}`} ></button>
                <label>Sei</label>
                <ul className={`main-menu ${sei ? 'open' : ''}`}>
                    <li><button onClick={formselector}>Troca de responsavel</button></li>
                    <li><button onClick={formselector}>Instalação de software</button></li>
                    <li><button onClick={formselector}>Erro de software</button></li>
                    <li><button onClick={formselector}>Problema com mouse/teclado</button></li>
                </ul>


            </div>
            </div>
         </div>
         <Divisionbar/>
         <Rodape></Rodape>
         
      </div>
   
   );
 }
 
 export default Sudeo;
 
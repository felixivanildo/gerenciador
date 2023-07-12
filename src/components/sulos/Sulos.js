import React, {useEffect, useState} from "react";
import MainLayout from "../commun/Layout";
import AsyncStorage from "@react-native-async-storage/async-storage";
import Rodape from "../commun/Rodape";
import { Selector } from "../commun/Formfilter";
import Divisionbar from "../commun/Divisionbar";
import { useNavigate } from "react-router-dom";
import './Sulos.css'

function Sulos() {
   
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
            <h1>SULOS</h1>
            <Divisionbar/>
            <div className="buttons">
            <div className="menu" onMouseEnter={handleMouseEntersei} onMouseLeave={handleMouseLeavesei}>
                <button className={`sulos-toggle ${sei ? 'open' : ''}`} ></button>
                <label>Troca de Responsavel</label>
                <ul className={`main-menu ${sei ? 'open' : ''}`}>
                    <li><button onClick={formselector}>Troca de responsavel</button></li>
                    
                </ul>


            </div>
            </div>
      
         <Divisionbar/>
         <Rodape></Rodape>
         </div>
         
      </div>
   
   );
 }
 
 export default Sulos;
 
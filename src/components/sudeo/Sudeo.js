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
                    <li><button onClick={formselector}>Manter usuário</button></li>
                    <li><button onClick={formselector}>Treinamento</button></li>
                    <li><button onClick={formselector}>Suporte</button></li>
                    <li><button onClick={() => { window.location.href = "https://mudarsenha.sei.al.gov.br/login/?next=/" }}>Alterar senha</button></li>
                </ul>


            </div>
            </div>
     
         <Divisionbar/>
         <Rodape></Rodape>
         </div>
         
      </div>
   
   );
 }
 
 export default Sudeo;
 
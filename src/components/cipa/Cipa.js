import Divisionbar from "../commun/Divisionbar";
import MainLayout from "../commun/Layout";
import Rodape from "../commun/Rodape";
import React, { useState } from "react";
import { Selector } from "../commun/Formfilter";
import AsyncStorage from "@react-native-async-storage/async-storage";
import { useNavigate } from "react-router-dom";
import "./Cipa.css"

function Cipa ()
{
    const [cipa, setCipa] = useState(false);

    const handleMouseEntercipa = (data) => {
        setCipa(true);
         
    };

    const handleMouseLeavecipa = () => {
        setCipa(false);
    };

    const formselector = async (data) =>{
        let a = Selector(data.target.innerText)
       
        await AsyncStorage.setItem("@formulario", JSON.stringify(a)).then(()=>{
            Navegacione("/FORMS"); })
            .catch((err)=> console.log(err))
        

    }

    const Navegacione = useNavigate ()

    return(
        <div>
            <MainLayout></MainLayout>    
            <div className="main">
            <h1 style={{marginLeft: "10%"}}>CIPA</h1>      
            <Divisionbar/>
            <div>            
            <div className="buttons">
                <div className="menu" onMouseEnter={handleMouseEntercipa} onMouseLeave={handleMouseLeavecipa}>
                    <button className={`cipa-toggle ${cipa ? 'open' : ''}`} ></button>
                    <label>CIPA</label>
                    <ul className={`main-menu ${cipa ? 'open' : ''}`}>
                        <li><button onClick={formselector}>Cipa</button></li>
                 
                    </ul>


                </div>

            </div>
        </div>
        <Divisionbar></Divisionbar>
            <Rodape/>
            </div>
        </div>
    )
}

export default Cipa;
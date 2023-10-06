import React, { useState } from "react";
import Divisionbar from "../../commun/Divisionbar";
import { Selector } from "../../commun/Formfilter";
import AsyncStorage from "@react-native-async-storage/async-storage";
import { useNavigate } from "react-router-dom";
import "./Gepatm.css"

function Gpatm() {
    const [ger, setGer] = useState(false);

    const handleMouseEnterger = (data) => {
        setGer(true);
         
    };

    const handleMouseLeaveger = () => {
        setGer(false);
    };

    const formselector = async (data) =>{
        let a = Selector(data.target.innerText)
       
        await AsyncStorage.setItem("@formulario", JSON.stringify(a)).then(()=>{
            Navegacione("/FORMS"); })
            .catch((err)=> console.log(err))
        

    }

    const Navegacione = useNavigate ()


    return (
        <div>
            <h1 style={{marginLeft: "10%"}}>GEPAT</h1>
            <Divisionbar />
            <div className="buttons">
                <div className="menu" onMouseEnter={handleMouseEnterger} onMouseLeave={handleMouseLeaveger}>
                    <button className={`ger-toggle ${ger ? 'open' : ''}`} ></button>
                    <label>Gerência de Bens</label>
                    <ul className={`main-menu ${ger ? 'open' : ''}`}>
                        <li><button onClick={formselector}>Devolução de Bens</button></li>
                        <li><button onClick={formselector}>Solicitação de Reparo de Bens Móveis</button></li>
                        <li><button onClick={formselector}>Solicitar Bens Móveis</button></li>
                        <li><button onClick={formselector}>Transferência de Bens</button></li>
                    </ul>


                </div>

            </div>
        </div>
    )
}

export default Gpatm
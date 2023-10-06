import React, { useState } from "react";
import Divisionbar from "../../commun/Divisionbar";
import { Selector } from "../../commun/Formfilter";
import AsyncStorage from "@react-native-async-storage/async-storage";
import { useNavigate } from "react-router-dom";
import "./Suparque.css"

function Suparq() {
    const [doc, setDoc] = useState(false);

    const handleMouseEnterdoc = (data) => {
        setDoc(true);
         
    };

    const handleMouseLeavedoc = () => {
        setDoc(false);
    };

    const [arq, setArq] = useState(false);

    const handleMouseEnterarq = (data) => {
        setArq(true);
         
    };

    const handleMouseLeavearq = () => {
        setArq(false);
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
            <h1 style={{marginLeft: "10%"}}> SUPARQ</h1>
            <Divisionbar />
            <div className="buttons">
                <div className="menu" onMouseEnter={handleMouseEnterdoc} onMouseLeave={handleMouseLeavedoc}>
                    <button className={`doc-toggle ${doc ? 'open' : ''}`} ></button>
                    <label>Solicitação de documentos</label>
                    <ul className={`main-menu ${doc ? 'open' : ''}`}>
                        <li><button onClick={formselector}>Solicitar documento físico</button></li>
                        <li><button onClick={formselector}>Solicitar documento digitalizado</button></li>                        
                    </ul>


                </div>

                <div className="menu" onMouseEnter={handleMouseEnterarq} onMouseLeave={handleMouseLeavearq}>
                    <button className={`arq-toggle ${arq ? 'open' : ''}`} ></button>
                    <label>Solicitação de arquivamento</label>
                    <ul className={`main-menu ${arq ? 'open' : ''}`}>
                        <li><button onClick={formselector}>Solicitação de arquivamento</button></li>
                        
                    </ul>


                </div>

            </div>
        </div>
    )
}

export default Suparq
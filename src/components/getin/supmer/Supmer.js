import React, { useState } from "react";
import './Supmer.css'
import Divisionbar from "../../commun/Divisionbar";
import { Selector } from "../../commun/Formfilter";
import AsyncStorage from "@react-native-async-storage/async-storage";
import { useNavigate } from "react-router-dom";



function Supmer() {

    const [cpu, setCpu] = useState(false);

    const handleMouseEntercpu = (data) => {
        setCpu(true);
         
    };

    const handleMouseLeavecpu = () => {
        setCpu(false);
    };
    

    const [ctq, setCtq] = useState(false);

    const handleMouseEnterctq = (data) => {
        setCtq(true);
         
    };

    const handleMouseLeavectq = () => {
        setCtq(false);
    };


    
    const [email, setEmail] = useState(false);

    const handleMouseEnteremail = (data) => {
        setEmail(true);
         
    };

    const handleMouseLeaveemail = () => {
        setEmail(false);
    };
    
    const [imp, setImp] = useState(false);

    const handleMouseEnterimp = (data) => {
        setImp(true);
         
    };

    const handleMouseLeaveimp = () => {
        setImp(false);
    };

    const [inte, setInte] = useState(false);

    const handleMouseEnterinte = (data) => {
        setInte(true);
         
    };

    const handleMouseLeaveinte = () => {
        setInte(false);
    };

    const Navegacione = useNavigate ()

    const formselector = async (data) =>{
        let a = Selector(data.target.innerText)
       
        await AsyncStorage.setItem("@formulario", JSON.stringify(a)).then(()=>{
            Navegacione("/FORMS"); })
            .catch((err)=> console.log(err))
        

    }

    return (
        <div className="main">
          <h1>SUPMER</h1>
          <Divisionbar></Divisionbar>
          <div className="buttons">
            <div className="menu" onMouseEnter={handleMouseEntercpu} onMouseLeave={handleMouseLeavecpu}>
                <button className={`computador-toggle ${cpu ? 'open' : ''}`} ></button>
                <ul className={`main-menu ${cpu ? 'open' : ''}`}>
                    <li><button onClick={formselector}>Computador não funciona</button></li>
                    <li><button onClick={formselector}>Instalação de software</button></li>
                    <li><button onClick={formselector}>Erro de software</button></li>
                    <li><button onClick={formselector}>Problema com mouse/teclado</button></li>
                </ul>


            </div>


            <div className="menu" onMouseEnter={handleMouseEnterctq} onMouseLeave={handleMouseLeavectq}>
                <button className={`contracheque-toggle ${ctq ? 'open' : ''}`} ></button>
                <ul className={`main-menu ${ctq ? 'open' : ''}`}>
                    <li><button onClick={()=>{window.location.href = 'https://contracheque.casal.al.gov.br/login/'}}>Criar senha</button></li>
                    <li><button onClick={formselector}>Resetar senha</button></li>
                    
                </ul>


            </div>



            <div className="menu" onMouseEnter={handleMouseEnterinte} onMouseLeave={handleMouseLeaveinte}>
                <button className={`internet-toggle ${inte ? 'open' : ''}`} ></button>
                <ul className={`main-menu ${inte ? 'open' : ''}`}>
                    <li><button onClick={formselector}>Abrir chamado</button></li>
                   
                </ul>
                
            </div>


            
            </div>

          <div className="buttons">
          <div className="menu" onMouseEnter={handleMouseEnteremail} onMouseLeave={handleMouseLeaveemail}>
                <button className={`email-toggle ${email ? 'open' : ''}`} ></button>
                <ul className={`main-menu ${email ? 'open' : ''}`}>
                    <li><button onClick={formselector}>Solicitar e-mail funcional</button></li>
                    <li><button onClick={formselector}>Solicitar e-mail setorial</button></li>
                    <li><button onClick={formselector}>Recuperar senha</button></li>
                    
                </ul>
                
            </div>



            <div className="menu" onMouseEnter={handleMouseEnterimp} onMouseLeave={handleMouseLeaveimp}>
                <button className={`imp-toggle ${imp ? 'open' : ''}`} ></button>
                <ul className={`main-menu ${imp ? 'open' : ''}`}>
                    <li><button onClick={formselector}>Impressora/Scanner não imprime</button></li>
                    <li><button onClick={formselector}>Instalar em outro computador</button></li>
                    <li><button onClick={()=>{window.location.href = 'https://api.whatsapp.com/send?phone=558221239500&text=Ol%C3%A1%2C+gostaria+de+mais+informa%C3%A7%C3%B5es.'}}>Impressora Kyocera (Meyer - Whatsapp)</button></li>
                
                </ul>
                
            </div>
            
          </div>
          
        </div>
        

    );
}

export default Supmer;

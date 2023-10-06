import React, {useEffect, useState} from "react";
import AsyncStorage from "@react-native-async-storage/async-storage";
import { Selector } from "../../commun/Formfilter";
import Divisionbar from "../../commun/Divisionbar";
import { useNavigate } from "react-router-dom";
import "./Suptran.css"

function Suptran() {
   
    useEffect(()=>{
       const cleaner = async ()=> {
       await AsyncStorage.removeItem('@formulario')
       }
 
 
       cleaner()
    }, [])


    const [gas, setGas] = useState(false);

    const handleMouseEntergas = (data) => {
        setGas(true);
         
    };

    const handleMouseLeavegas = () => {
        setGas (false);
    };


    const [car, setCar] = useState(false);

    const handleMouseEntercar = (data) => {
        setCar(true);
         
    };

    const handleMouseLeavecar = () => {
        setCar (false);
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
            <h1>SUPTRAN</h1>
            <Divisionbar/>
            <div className="buttons">
            <div className="menu" onMouseEnter={handleMouseEntergas} onMouseLeave={handleMouseLeavegas}>
                <button id="gas" className={`sudeo-toggle ${gas ? 'open' : ''}`} ></button>
                <label>Combustíveis</label>
                <ul className={`main-menu ${gas ? 'open' : ''}`}>
                    <li><button onClick={formselector}>Transferência de cotas</button></li>
                    <li><button onClick={formselector}>Dificuldade de abastecimento</button></li>
                    <li><button onClick={formselector}>Solicitação de relatório</button></li>
                    <li><button onClick={formselector}>outros</button></li>
                </ul>


            </div>

            <div className="menu" onMouseEnter={handleMouseEntercar} onMouseLeave={handleMouseLeavecar}>
                <button id="car" className={`sudeo-toggle ${car ? 'open' : ''}`} ></button>
                <label>Veículos</label>
                <ul className={`main-menu ${car ? 'open' : ''}`}>
                    <li><button onClick={formselector}>Pedido de manutenção</button></li>
                    <li><button onClick={formselector}>Informação de sinistro</button></li>
                    <li><button onClick={formselector}>Pedido de veículos para saída a serviço</button></li>
                    <li><button onClick={formselector}>Outros</button></li>

                </ul>


            </div>
            </div>
         </div>     
      </div>
   
   );
 }
 
 export default Suptran;
 
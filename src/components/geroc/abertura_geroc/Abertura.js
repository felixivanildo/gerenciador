import Divisionbar from "../../commun/Divisionbar";
import React, { useState } from "react";
import { Selector } from "../../commun/Formfilter";
import AsyncStorage from "@react-native-async-storage/async-storage";
import { useNavigate } from "react-router-dom";
import "./Abertura.css"

function Abertura() {
    const [geroc, setGeroc] = useState(false);

    const handleMouseEntergeroc = (data) => {
        setGeroc(true);

    };

    const handleMouseLeavegeroc = () => {
        setGeroc(false);
    };


    const [scad, setScad] = useState(false);

    const handleMouseEnterscad = (data) => {
        setScad(true);

    };

    const handleMouseLeavescad = () => {
        setScad(false);
    };

    const [sfat, setSfat] = useState(false);

    const handleMouseEntersfat = (data) => {
        setSfat(true);

    };

    const handleMouseLeavesfat = () => {
        setSfat(false);
    };

    const [slic, setSlic] = useState(false);

    const handleMouseEnterslic = (data) => {
        setSlic(true);

    };

    const handleMouseLeaveslic = () => {
        setSlic(false);
    };

    const [smic, setSmic] = useState(false);

    const handleMouseEntersmic = (data) => {
        setSmic(true);

    };

    const handleMouseLeavesmic = () => {
        setSmic(false);
    };

    const [cdo, setCdo] = useState(false);

    const handleMouseEntercdo = (data) => {
        setCdo(true);

    };

    const handleMouseLeavecdo = () => {
        setCdo(false);
    };

    const formselector = async (data) => {
        let a = Selector(data.target.innerText)

        await AsyncStorage.setItem("@formulario", JSON.stringify(a)).then(() => {
            Navegacione("/FORMS");
        })
            .catch((err) => console.log(err))


    }

    const Navegacione = useNavigate()

    return (
        <div>
            <h1 style={{ marginLeft: "10%" }}>CHAMADOS GEROC</h1>
            <Divisionbar />
            <div>
                <div className="buttons">
                    <div className="menu" onMouseEnter={handleMouseEntergeroc} onMouseLeave={handleMouseLeavegeroc}>
                        <button className={`sdoc-toggle ${geroc ? 'open' : ''}`} ></button>
                        <label>SUPDOC</label>
                        <ul className={`main-menu ${geroc ? 'open' : ''}`}>
                            <li><button onClick={formselector}>Solicitações</button></li>
                            <li><button onClick={formselector}>Funcionalidades GSAN</button></li>
                            <li><button onClick={formselector}>Regras de negócio</button></li>
                            <li><button onClick={formselector}>Regulamento de Serviços</button></li>
                            <li><button onClick={formselector}>Duvidas</button></li>


                        </ul>


                    </div>

                    <div className="menu" onMouseEnter={handleMouseEnterscad} onMouseLeave={handleMouseLeavescad}>
                        <button className={`scad-toggle ${scad ? 'open' : ''}`} ></button>
                        <label>SUPCAD</label>
                        <ul className={`main-menu ${scad ? 'open' : ''}`}>
                            <li><button onClick={formselector}>Cadastro</button></li>
                            <li><button onClick={formselector}>Mapas</button></li>
                            <li><button onClick={formselector}>Relatório de Ligações e Economias</button></li>
                            <li><button onClick={formselector}>Solicitação de Correção de Endereço</button></li>


                        </ul>


                    </div>

                    <div className="menu" onMouseEnter={handleMouseEntersfat} onMouseLeave={handleMouseLeavesfat}>
                        <button className={`sfat-toggle ${sfat ? 'open' : ''}`} ></button>
                        <label>SUPFAT</label>
                        <ul className={`main-menu ${sfat ? 'open' : ''}`}>
                            <li><button onClick={formselector}>Cronograma de Faturamento</button></li>
                            <li><button onClick={formselector}>Relatório de Volumes e Valores Faturados</button></li>

                        </ul>


                    </div>

                    <div className="menu" onMouseEnter={handleMouseEnterslic} onMouseLeave={handleMouseLeaveslic}>
                        <button className={`slic-toggle ${slic ? 'open' : ''}`} ></button>
                        <label>SUPALIC</label>
                        <ul className={`main-menu ${slic ? 'open' : ''}`}>
                            <li><button onClick={formselector}>Liquidação</button></li>
                            <li><button onClick={formselector}>Pagamento em Duplicidade</button></li>
                            <li><button onClick={formselector}>Negativação</button></li>


                        </ul>


                    </div>

                </div>

                <div className="buttons">
                    <div className="menu" onMouseEnter={handleMouseEntersmic} onMouseLeave={handleMouseLeavesmic}>
                        <button className={`smic-toggle ${smic ? 'open' : ''}`} ></button>
                        <label>SUPMIC</label>
                        <ul className={`main-menu ${smic ? 'open' : ''}`}>
                            <li><button onClick={formselector}>Micromedição e Oficina de Hidrômetros</button></li>



                        </ul>


                    </div>

                    <div className="menu" onMouseEnter={handleMouseEntercdo} onMouseLeave={handleMouseLeavecdo}>
                        <button className={`cdo-toggle ${cdo ? 'open' : ''}`} ></button>
                        <label>CDO</label>
                        <ul className={`main-menu ${cdo ? 'open' : ''}`}>
                            <li><button onClick={formselector}>Solicitações</button></li>
                            <li><button onClick={formselector}>Funcionalidades GSAN</button></li>
                            <li><button onClick={formselector}>Regras de negócio</button></li>
                            <li><button onClick={formselector}>Duvidas</button></li>


                        </ul>


                    </div>

                </div>
            </div>

        </div>
    )
}

export default Abertura;
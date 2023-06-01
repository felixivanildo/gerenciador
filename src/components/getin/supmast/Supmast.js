import React, { useState } from "react"
import Divisionbar from "../../commun/Divisionbar"
import "./Supmast.css"
import AsyncStorage from "@react-native-async-storage/async-storage";
import { useNavigate } from "react-router-dom";
import { Selector } from "../../commun/Formfilter";

function Supmast() {
    const [gsan, setGsan] = useState(false);

    const handleMouseEntergsan = (data) => {
        setGsan(true);
    };

    const handleMouseLeavegsan = () => {
        setGsan(false);
    };


    const [pth, setPth] = useState(false);

    const handleMouseEnterpth = (data) => {
        setPth(true);
    };

    const handleMouseLeavepth = () => {
        setPth(false);
    };


    const [red, setRed] = useState(false);

    const handleMouseEnterred = (data) => {
        setRed(true);
    };

    const handleMouseLeavered = () => {
        setRed(false);
    };

    const [pir, setPir] = useState(false);

    const handleMouseEnterpir = (data) => {
        setPir(true);
    };

    const handleMouseLeavepir = () => {
        setPir(false);
    };

    const [sst, setSst] = useState(false);

    const handleMouseEntersst = (data) => {
        setSst(true);
    };

    const handleMouseLeavesst = () => {
        setSst(false);
    };


    const [intra, setIntra] = useState(false);

    const handleMouseEnterintra = (data) => {
        setIntra(true);
    };

    const handleMouseLeaveintra = () => {
        setIntra(false);
    };

    const [sc, setSc] = useState(false);

    const handleMouseEntersc = (data) => {
        setSc(true);
    };

    const handleMouseLeavesc = () => {
        setSc(false);
    };

    const [outro, setOutro] = useState(false);

    const handleMouseEnteroutro = (data) => {
        setOutro(true);
    };

    const handleMouseLeaveoutro = () => {
        setOutro(false);
    };

    const Navegacione = useNavigate()

    const formselector = async (data) => {
        let a = Selector(data.target.innerText)

        await AsyncStorage.setItem("@formulario", JSON.stringify(a)).then(() => {
            Navegacione("/FORMS");
        })
            .catch((err) => console.log(err))


    }

    return (
        <div className="main">
            <h1>SUPMAST</h1>
            <Divisionbar></Divisionbar>
            <div className="buttons">
                <div className="menu" onMouseEnter={handleMouseEntergsan} onMouseLeave={handleMouseLeavegsan}>
                    <button className={`gsan-toggle ${gsan ? 'open' : ''}`} ></button>
                    <ul className={`main-menu ${gsan ? 'open' : ''}`}>
                        <li><button onClick={formselector} >Erros</button></li>
                        <li><button onClick={formselector} >Solicitação de dados/relatórios</button></li>

                    </ul>


                </div>


                <div className="menu" onMouseEnter={handleMouseEnterpth} onMouseLeave={handleMouseLeavepth}>
                    <button className={`pth-toggle ${pth ? 'open' : ''}`} ></button>
                    <ul className={`main-menu ${pth ? 'open' : ''}`}>
                        <li><button onClick={formselector} >Solicitação de suporte</button></li>
                        <li><button onClick={formselector} >Solicitação de acesso</button></li>

                    </ul>


                </div>



                <div className="menu" onMouseEnter={handleMouseEnterred} onMouseLeave={handleMouseLeavered}>
                    <button className={`redmine-toggle ${red ? 'open' : ''}`} ></button>
                    <ul className={`main-menu ${red ? 'open' : ''}`}>
                        <li><button onClick={formselector} >{`Ativação/desativação de usuário(s)`}</button></li>
                        <li><button onClick={formselector} >Implantação do Redmine</button></li>
                        <li><button onClick={formselector} >Informar erro/modificação</button></li>
                        <li><button onClick={() => { window.location.href = "https://redmine.casal.al.gov.br/account/register" }} >Criar novo usuário</button></li>
                        <li><button onClick={formselector} >Treinamento</button></li>
                    </ul>


                </div>



            </div>
            <div className="buttons">

                <div className="menu" onMouseEnter={handleMouseEnterpir} onMouseLeave={handleMouseLeavepir}>
                    <button className={`piramide-toggle ${pir ? 'open' : ''}`} ></button>
                    <ul className={`main-menu ${pir ? 'open' : ''}`}>
                        <li><button onClick={formselector} >Suporte Pirâmide</button></li>
                        <li><button onClick={formselector} >Criar/Alterar Perfil</button></li>
                        <li><button onClick={formselector} >Treinamento</button></li>

                    </ul>


                </div>

                <div className="menu" onMouseEnter={handleMouseEntersst} onMouseLeave={handleMouseLeavesst}>
                    <button className={`salasituacao-toggle ${sst ? 'open' : ''}`} ></button>
                    <ul className={`main-menu ${sst ? 'open' : ''}`}>
                        <li><button onClick={formselector} >Chamados Sala Situação</button></li>
                    
                    </ul>


                </div>


                <div className="menu" onMouseEnter={handleMouseEnterintra} onMouseLeave={handleMouseLeaveintra}>
                    <button className={`intranet-toggle ${intra ? 'open' : ''}`} ></button>
                    <ul className={`main-menu ${intra ? 'open' : ''}`}>
                        <li><button onClick={formselector} >Reportar falha/erro</button></li>
                     

                    </ul>


                </div>

            </div>

            
            <div className="buttons">

                <div className="menu" onMouseEnter={handleMouseEntersc} onMouseLeave={handleMouseLeavesc}>
                    <button className={`sc-toggle ${sc ? 'open' : ''}`} ></button>
                    <ul className={`main-menu ${sc ? 'open' : ''}`}>
                        <li><button onClick={formselector} >Reportar falha/erro no site</button></li>
                       

                    </ul>


                </div>

                <div className="menu" onMouseEnter={handleMouseEnteroutro} onMouseLeave={handleMouseLeaveoutro}>
                    <button className={`outro-toggle ${outro ? 'open' : ''}`} ></button>
                    <ul className={`main-menu ${outro ? 'open' : ''}`}>
                        <li><button onClick={formselector} >Abir outro tipo</button></li>
                       

                    </ul>


                </div>



            </div>
            <Divisionbar></Divisionbar>


        </div>
    )
}


export default Supmast
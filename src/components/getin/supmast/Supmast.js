import React, { useState } from "react"
import Divisionbar from "../../commun/Divisionbar"
import "./Supmast.css"

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

    return (
        <div className="main">
            <h1>SUPMAST</h1>
            <Divisionbar></Divisionbar>
            <div className="buttons">
                <div className="gsan" onMouseEnter={handleMouseEntergsan} onMouseLeave={handleMouseLeavegsan}>
                    <button className={`gsan-toggle ${gsan ? 'open' : ''}`} ></button>
                    <ul className={`gsan-menu ${gsan ? 'open' : ''}`}>
                        <li>Computador não funciona</li>
                        <li>Instalação de software</li>
                        <li>Erro de programa</li>
                        <li>Problema com mouse/teclado</li>
                    </ul>


                </div>


                <div className="pth" onMouseEnter={handleMouseEnterpth} onMouseLeave={handleMouseLeavepth}>
                    <button className={`pth-toggle ${pth ? 'open' : ''}`} ></button>
                    <ul className={`pth-menu ${pth ? 'open' : ''}`}>
                        <li>Criar senha</li>
                        <li>Resetar senha</li>

                    </ul>


                </div>



                <div className="redmine" onMouseEnter={handleMouseEnterred} onMouseLeave={handleMouseLeavered}>
                    <button className={`redmine-toggle ${red ? 'open' : ''}`} ></button>
                    <ul className={`redmine-menu ${red ? 'open' : ''}`}>
                        <li>{`Ativação/desativação de usuário(s)`}</li>
                        <li>Implantação do Redmine</li>
                        <li>Informar erro/midificação</li>
                        <li>Criar novo usuário</li>
                        <li>Treinamento</li>
                    </ul>


                </div>


                
            </div>
            <div className="buttons">

                <div className="piramide" onMouseEnter={handleMouseEnterpir} onMouseLeave={handleMouseLeavepir}>
                    <button className={`piramide-toggle ${pir ? 'open' : ''}`} ></button>
                    <ul className={`piramide-menu ${pir ? 'open' : ''}`}>
                        <li>Suporte Pirâmide</li>
                        <li>Criar/Alterar Perfil</li>
                        <li>Treinamento</li>
                        
                    </ul>


                </div>
                
                </div>
        </div>
    )
}


export default Supmast
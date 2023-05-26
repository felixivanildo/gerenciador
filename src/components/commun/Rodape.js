import React from "react";
import "./Rodape.css"

function Rodape() {
    return (
        <div style={{display: "flex", flexDirection: "row", justifyContent: "center", height: "auto", margin: "0px", flexWrap: "wrap"}}>
            <ul>
                <li className="child">Código de Conduta e Integridade</li>
                <li className="child">Estatuto Social</li>
                <li className="child">Estrutura Organizacional</li>
                <li className="child">Manual de Organização</li>
                <li className="child">Mapa estratégico</li>
                <li className="child">Regimento Interno</li>
                <li className="child">Regulamento de Serviço</li>
                <li className="child">Regulamento Interno de Licitações, Contratos e Convênios</li>
            </ul>
        </div>
    )


}

export default Rodape;
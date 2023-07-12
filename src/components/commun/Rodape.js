import React from "react";
import "./Rodape.css"

function Rodape() {
    return (
        <div style={{display: "flex", flexDirection: "row", justifyContent: "center", height: "auto", margin: "0px", flexWrap: "wrap"}}>
            <ul style={{marginLeft: "5%", marginRight: "5%"}}>
                <button>
                <li className="child">Código de Conduta e Integridade</li>
                </button>
                <button> <li className="child">Estatuto Social</li> </button>
                <button> <li className="child">Estrutura Organizacional</li> </button>
                <button> <li className="child">Manual de Organização</li></button>
            </ul>
            <ul>
            <button><li className="child">Mapa estratégico</li></button>
            <button><li className="child">Regimento Interno</li></button>
            <button><li className="child">Regulamento de Serviço</li></button>
            <button> <li className="child">Regulamento Interno de Licitações, Contratos e Convênios</li></button>
             </ul>
           
        </div>
    )


}

export default Rodape;

import React from "react";
import Divisionbar from "../commun/Divisionbar";
import MainLayout from "../commun/Layout";
import Rodape from "../commun/Rodape";
import Abertura from "./abertura_geroc/Abertura";


function Geroc ()
{
    return(
        <div>
            <MainLayout></MainLayout>
            <div className="main">
            <Abertura/>
           
            <Divisionbar/>
            </div>
            <Rodape/>
        </div>
    )
}

export default Geroc;
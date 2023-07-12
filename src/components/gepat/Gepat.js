import React from "react";
import Divisionbar from "../commun/Divisionbar";
import MainLayout from "../commun/Layout";
import Rodape from "../commun/Rodape";
import Gpatm from "./gepat/Gepatm";
import Suparq from "./suparq/Suparque";

function Gepat ()
{
    return(
        <div>
            <MainLayout></MainLayout>
            <div className="main">
            <Gpatm></Gpatm>
            <Suparq/>
            <Divisionbar/>
            
            <Rodape/>
            </div>
        </div>
    )
}

export default Gepat;
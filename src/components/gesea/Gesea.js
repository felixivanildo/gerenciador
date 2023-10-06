import React from "react";
import Divisionbar from "../commun/Divisionbar";
import MainLayout from "../commun/Layout";
import Rodape from "../commun/Rodape";
import Convenio from "./convenio/Convenio";
import Supserv from "./supserv/Supserv";
import Suptran from "./suptran/Suptran";


function Gesea ()
{
    return(
        <div>
            <MainLayout></MainLayout>
            <Convenio/>
            <Supserv/>
            <Suptran/>
            <Divisionbar/>
            <Rodape/>
        </div>
    )
}

export default Gesea;
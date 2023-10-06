import React from "react";
import Divisionbar from "../commun/Divisionbar";
import MainLayout from "../commun/Layout";
import Rodape from "../commun/Rodape";
import Gedep from "./gedep/Gedep";


function Rh ()
{
    return(
        <div>
            <MainLayout></MainLayout>  
            <div className="main">
            <Gedep/>
            <Divisionbar/>
            <Rodape/>
            </div>       
        </div>
    )
}

export default Rh;
import React, { useEffect } from "react";
import Supmer from "./supmer/Supmer";
import Supmast from "./supmast/Supmast";
import MainLayout from "../commun/Layout";
import Rodape from "../commun/Rodape";


function Getin() {

  

   return (

      <div>
         <MainLayout></MainLayout>
         <Supmer></Supmer>
         <Supmast></Supmast>
         <Rodape></Rodape>

      </div>

   );
}

export default Getin;

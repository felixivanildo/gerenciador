import React, {useEffect} from "react";
import Supmer from "./supmer/Supmer";
import Supmast from "./supmast/Supmast";
import MainLayout from "../commun/Layout";
import AsyncStorage from "@react-native-async-storage/async-storage";
import Rodape from "../commun/Rodape";

function Getin() {
   
   useEffect(()=>{
      const cleaner = async ()=> {
      await AsyncStorage.removeItem('@formulario')
      }


      cleaner()
   }, [])

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

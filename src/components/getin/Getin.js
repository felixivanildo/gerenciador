import React, {useEffect} from "react";
import Supmer from "./supmer/Supmer";
import Supmast from "./supmast/Supmast";
import MainLayout from "../commun/Layout";
import AsyncStorage from "@react-native-async-storage/async-storage";

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
     </div>
  
  );
}

export default Getin;

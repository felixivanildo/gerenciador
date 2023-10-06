import React from "react";
import MainLayout from "../commun/Layout";
import MainTheme from "../commun/Maintheme";
import Divisionbar from "../commun/Divisionbar";
import "./meusChamados.css"
import axios from "axios";
import AsyncStorage from "@react-native-async-storage/async-storage";
import { useState, useEffect } from "react";

function Meuschamados() {

    const [arrayteste, setArrayteste] = useState ([{}])

    useEffect(()=>{
        const getdata = async ()=> {
            const value = await AsyncStorage.getItem('@User') ?? false;

            var retrieved = await axios.put('http://10.254.4.132:3333/api/v1/getable', JSON.parse(value))
            
             setArrayteste(retrieved.data)
   
       }
        

       getdata()
    }, [])
  
    console.log(arrayteste, "1")


    const circunstance = () => {
        console.log("worked well")
    }

    const elements = [
        <div onClick={circunstance} style={{ marginLeft: "10%", marginRight: "10%", }}>
            <h1 style={{ display: "flex", justifyContent: "center" }}>MEUS CHAMADOS</h1>
            <Divisionbar></Divisionbar>
            <div style={{display: "flex", justifyContent: "center"}}>
            <table className="styled-table" >
                <thead>
                    <tr>
                    <th>Chamado</th>
                    <th>Projeto</th>
                    <th>Tipo</th>
                    <th>Status</th>
                    <th>Atualizado em</th>
                    </tr>
                </thead>
                <tbody >
                {arrayteste.map((row, index) => {
                    return(
                    <tr   className="active-row" key={index}>
                        <td >{row.Chamado}</td>
                        <td>{row.Projeto}</td>
                        <td>{row.Tipo}</td>
                        <td>{row.Status}</td>
                        <td>{row.Atualizado}</td>

                    </tr>

                )})}
                </tbody>
            </table>
            </div>
        </div>
    ]
    return (
        <div>
            <MainLayout></MainLayout>
            <MainTheme elements={elements}></MainTheme>

        </div>
    )
}

export default Meuschamados
import React, { useState, useEffect } from "react";
import { useForm } from "react-hook-form";
import AsyncStorage from "@react-native-async-storage/async-storage";
import MainLayout from "./Layout";
import './Form.css'
import { Throw } from "./Rdminethrow";

function Forms() {


    const [formtype, setFormtype] = useState([{}]);

    useEffect(() => {
        const getType = async () => {
            const asfa = await AsyncStorage.getItem('@formulario')
            setFormtype(JSON.parse(asfa))

        }


        getType()
    }, [])

    const { register, handleSubmit } = useForm();

    const onSubmit = async (data) => {
        Throw(data, formtype[0])
    };

    return (
        <div>
            <MainLayout></MainLayout>
            <div className="tela">
                <div className="bgfitter">
                    <div className="mainform">

                        <form style={{ display: "flex", flexDirection: 'column', marginLeft: '10%' }} onSubmit={handleSubmit(onSubmit)}>
                            {formtype.map((row, index) => (
                                <div key={index}>
                                    <label style={{ display: "block" }}>{formtype[index].nome}</label>
                                    {formtype[index].tipo === "input" && (
                                        <input className="inserir" {...register(`formtype[${index}].tipo`, { required: false })} />
                                    )}
                                    {formtype[index].tipo === "textarea" && (
                                        <textarea className="inserir" {...register(`formtype[${index}].tipo`, { required: false })} />
                                    )}
                                    {formtype[index].tipo === "select" && (
                                        <select className="inserir" {...register(`formtype[${index}].tipo`, { required: false })} >
                                            <option value="CALLCENTER">CALLCENTER</option>
                                            <option value="SEDE">SEDE</option>                                     
                                            <option value="Complexo Benedito Bentes">Complexo Benedito Bentes</option>
                                            <option value="Complexo Farol">Complexo Farol</option>
                                            <option value="UN AGRESTE">UN AGRESTE</option>
                                            <option value="UN LESTE">UN LESTE</option>
                                            <option value="UN SERRANA">UN SERRANA</option>
                                            <option value="UN SERTÃO">UN SERTÃO</option>
                                            <option value="UN B LEITEIRA">UN B LEITEIRA</option>
                                            
                                            
                                            </select>

                                    )}



                                </div>
                            ))}
                            <button className="btsmt" type="submit">Submit</button>
                        </form>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Forms;
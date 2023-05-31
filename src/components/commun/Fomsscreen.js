import React, { useState, useEffect } from "react";
import { useForm } from "react-hook-form";
import AsyncStorage from "@react-native-async-storage/async-storage";
import MainLayout from "./Layout";
import './Form.css'
import { Throw } from "./Rdminethrow";
import Divisionbar from "./Divisionbar";

function Forms() {

    const [selectedImage, setSelectedImage] = useState(null);
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
        // const formData = new FormData();
        // formData.append('image', selectedImage);

        console.log(data)
        Throw(data, formtype[0], selectedImage)
    };

    const handleImageChange = (event) => {
        const file = event.target.files[0];
        console.log(event.target.files, "este")
        setSelectedImage(URL.createObjectURL(file));
    };

    return (
        <div>
            <MainLayout></MainLayout>
            <div className="tela">
                <div className="bgfitter">
                    <div className="mainform">


                        <form style={{ display: "flex", flexDirection: 'column', marginLeft: '10%', marginRight: "10%" }} onSubmit={handleSubmit(onSubmit)}>
                            <h1 style={{ display: "flex", justifyContent: "center" }}>{formtype[0].project_name}</h1>
                            <Divisionbar></Divisionbar>
                            {formtype.map((row, index) => (
                                <div key={index}>
                                    <label style={{ display: "block" }}>{formtype[index].nome}</label>
                                    <input className="inserir" style={{ display: "none" }} {...register(`formtype[${index}].nome`, { required: false })} value={formtype[index].nome} />
                                    {formtype[index].tipo === "input" && (
                                        <input className="inserir" {...register(`formtype[${index}].tipo`, { required: false })} />
                                    )}
                                    {formtype[index].tipo === "file" && (
                                        <input onChange={handleImageChange} className="inserir" type="file" multiple />

                                    )}

                                    {formtype[index].tipo === "textarea" && (
                                        <textarea className="inserir" {...register(`formtype[${index}].tipo`, { required: false })} />
                                    )}
                                    {formtype[index].tipo === "select" && (
                                        <select className="inserir" {...register(`formtype[${index}].tipo`, { required: false })} >
                                            <option> ------- </option>
                                            <option value="GETIN/GEROC">GETIN/GEROC</option>
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
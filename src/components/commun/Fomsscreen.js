import React, { useState, useEffect } from "react";
import { useForm } from "react-hook-form";
import AsyncStorage from "@react-native-async-storage/async-storage";
import MainLayout from "./Layout";
import './Form.css'
import { Throw } from "./Rdminethrow";
import Divisionbar from "./Divisionbar";


function Forms() {

    const [selectedImage, setSelectedImage] = useState([]);
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



        Throw(data, formtype[0], selectedImage)
    };

    const handleImageChange = (event) => {
        // const file = event.target.files[0];
        // setSelectedImage(URL.createObjectURL(file));
        const files = event.target.files
        const imagesarray = [];

        for (var i = 0; i < files.length; i++) {
            const reader = new FileReader()
            console.log(files[0].name.substring(files[0].name.length - 3))
            reader.onload = (e) => {
                imagesarray.push({ "imagecode": e.target.result, "extension": files[0].name.substring(files[0].name.length - 3), "name": files[0].name.substring(0, files[0].name.length - 3) })
                if (imagesarray.length === files.length) {
                    setSelectedImage(imagesarray)
                }
            }

            reader.readAsDataURL(files[i])
        }
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
                                <div key={index} style={{ marginLeft: "10%" }}>
                                    <label style={{ display: "block" }}>{formtype[index].nome}</label>
                                    <input className="inserir" style={{ display: "none" }} {...register(`formtype[${index}].nome`)} value={formtype[index].nome} />
                                    {formtype[index].tipo === "input" && (
                                        <div>
                                            <input placeholder={formtype[index].required ? "Campo obrigatório" : ""} className="inserir" {...register(`formtype[${index}].tipo`, { required: formtype[index].required })} />

                                        </div>


                                    )}

                                    {formtype[index].tipo === "file" && (
                                        <input onChange={handleImageChange} className="inserir" type="file" multiple />

                                    )}

                                    {formtype[index].tipo === "textarea" && (
                                        <textarea className="inserir" {...register(`formtype[${index}].tipo`, { required: formtype[index].required })} />
                                    )}
                                    {formtype[index].tipo === "select" && formtype[index].drop === "predio" && (
                                        <select className="inserir" {...register(`formtype[${index}].tipo`, { required: formtype[index].required })} >
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

                                    {formtype[index].tipo === "select" && formtype[index].drop === "Servico" && (
                                        <select className="inserir" {...register(`formtype[${index}].tipo`, { required: formtype[index].required })} >
                                            <option> Selecionar Serviço </option>
                                            <option value="NOVO PERFIl">NOVO PERFIl</option>
                                            <option value="ALTERAÇÃO DE PERFIL">ALTERAÇÃO DE PERFIL</option>
                                            <option value="INATIVAR PERFIL">INATIVAR PERFIL</option>
                                            <option value="OUTROS">OUTROS</option>



                                        </select>

                                    )}

                                    {formtype[index].tipo === "documento" && (
                                        <div></div>
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
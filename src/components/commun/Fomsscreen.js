import React, { useState, useEffect } from "react";
import { set, useForm } from "react-hook-form";
import AsyncStorage from "@react-native-async-storage/async-storage";
import MainLayout from "./Layout";
import './Form.css'
import { Throw } from "./Rdminethrow";
import Divisionbar from "./Divisionbar";


function Forms() {

    const [selectedImage, setSelectedImage] = useState([]);
    const [formtype, setFormtype] = useState([{}]);
    const [user, setUser] = useState()
    const [showAlert, setShowAlert] = useState(false);

    useEffect(() => {
        const getType = async () => {
            const asfa = await AsyncStorage.getItem('@formulario')
            const usuariosalvo = await AsyncStorage.getItem('@User') ?? false
            setUser(JSON.parse(usuariosalvo))
            console.log(user)
            setFormtype(JSON.parse(asfa))

            // try{

            // }
            // catch (e){
            //     console.log(e)
            // }

        }


        getType()
    }, [])

    const { register, handleSubmit } = useForm();

    const onSubmit = async (data) => {
        // var domain = data.
        console.log(typeof (data.formtype))
        for (var i in data.formtype) {
            if (data.formtype[i].nome === "Email coorporativo") {
                var domain = "casal.al.gov.br";
                var pattern = new RegExp("^[\\w.]+@" + domain.replace(/[-\/\\^$*+?.()|[\]{}]/g, '\\$&') + "$")
                console.log(data.formtype[i].tipo)
                if (pattern.test(data.formtype[i].tipo)) {

                    setShowAlert(true);


                    Throw(data, formtype[0], selectedImage).then((e => {

                        setShowAlert(false)


                        if (e === "Sucesso") {
                            alert("Chamado criado")
                        }
                        else {
                            alert("Algo deu errado")
                        }

                    }))
                    // alert("Email inserido é da Casal")

                }
                else {
                    alert("Email inserido não é da Casal")
                }
            }


        }




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
                                    {formtype[index].tipo === "input" && formtype[index].nome !== "Nome completo" && formtype[index].nome !== "Número da matricula" &&
                                        formtype[index].nome !== "Cpf" && formtype[index].nome !== "Email coorporativo" &&
                                        (
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


                                    {formtype[index].tipo === "input" && formtype[index].nome === "Nome completo" && (
                                        <div>
                                            <input value={user.name} placeholder={formtype[index].required ? "Campo obrigatório" : ""} className="inserir" {...register(`formtype[${index}].tipo`, { required: formtype[index].required })} />

                                        </div>
                                    )}

                                    {formtype[index].tipo === "input" && formtype[index].nome === "Número da matricula" && (
                                        <div>
                                            <input value={user.matricula} placeholder={formtype[index].required ? "Campo obrigatório" : ""} className="inserir" {...register(`formtype[${index}].tipo`, { required: formtype[index].required })} />

                                        </div>
                                    )}

                                    {formtype[index].tipo === "input" && formtype[index].nome === "Cpf" && (
                                        <div>
                                            <input value={user.cpf} placeholder={formtype[index].required ? "Campo obrigatório" : ""} className="inserir" {...register(`formtype[${index}].tipo`, { required: formtype[index].required })} />

                                        </div>
                                    )}


                                    {formtype[index].tipo === "input" && formtype[index].nome === "Email coorporativo" && (
                                        <div>
                                            <input value={user.email} placeholder={formtype[index].required ? "Campo obrigatório" : ""} className="inserir" {...register(`formtype[${index}].tipo`, { required: formtype[index].required })} />

                                        </div>
                                    )}


                                </div>
                            ))}

                            {showAlert && <div className="alert">Chamado sendo criado, aguarde</div>}
                            <button className="btsmt" type="submit">Submit</button>
                        </form>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Forms;
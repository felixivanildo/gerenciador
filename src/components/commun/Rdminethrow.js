import axios from "axios"

export async function Throw (data, project, image){


  console.log(image)

    var imgarray = []
    var custumfields = { dados :{}}
    var nome = false
    var matricula = false
    var setor = false
    var email = false
    var predio = false
    var telefone = false
    var cpf = false
    var descrição = false
    var patrimonio = false
    var demaisCampos = ""


    if(image.length > 0){
  
      for(var a = 0; a<image.length; a++){
        console.log(image.length)
       await axios.post('http://10.254.4.132:3333/api/v1/imgrecieve', {"image" :image[a].imagecode, "name": image[a].name, "extension": image[a].extension}, 
                
        ).then((e)=>{console.log(e.data); imgarray.push({"content_type" : "image/png","token" :e.data.token, "filename" : `${image[0].name}` + `${image[0].extension}`})})

      }


      console.log(imgarray)
    }


    for(var i=0; i< data.formtype.length; i++ ){
      var tipo = data.formtype[i].tipo 

      if(data.formtype[i].nome === "Tombamento do equipamento"){
         custumfields['dados'] =  { "id" :  "37", "value": tipo }
      }else if(data.formtype[i].nome === "Número da matricula"){
        custumfields['dados'] =  { "id" :  "116", "value": tipo}
        matricula = tipo
      }else if(data.formtype[i].nome === "Nome completo"){
        nome = tipo
     }else if(data.formtype[i].nome === "Telefone"){
       telefone = tipo
     }else if(data.formtype[i].nome === "Setor"){
        setor = tipo
     }else if(data.formtype[i].nome === "Email coorpotativo"){
        email = tipo
     }else if(data.formtype[i].nome === "Descrição" || data.formtype[i].nome === "Observação" || data.formtype[i].nome === "Descrição do ocorrido" || data.formtype[i].nome === "Informações adicionais" 
        ){
        descrição = tipo
     }else if(data.formtype[i].nome === "Cpf"){
      cpf = tipo
   }else if(data.formtype[i].nome === "Tombamento do equipamento"){
        patrimonio = tipo
      }else if(data.formtype[i].nome === "Predio"){
        predio = tipo
      }else if(data.formtype[i].nome === "Anexar imagens"){
        demaisCampos += ""

      } else{
        if(data.formtype[i].nome !== undefined && data.formtype[i].nome !== ""){
          demaisCampos += `*${data.formtype[i].nome}:* `  + data.formtype[i].tipo + '\r\n'
        }
         
      }

    }


   try {

   

    
    axios.post("http://10.254.4.132:3333/api/v1/cabeleira",     
              { "issue": {
                "subject": `${predio !== false ? predio : ""} ${setor !== false? setor : " "} ${project.project_name}- ${nome !== false? nome : ""} - ${matricula !== false? matricula : ""}`,
                "project_id": `${project.project}`,
                "tracker_id": `${project.tracker}`,
                "status_id": "1",
                "priority_id": "1",
                "recipient_email": `${email?? ""}`,
                "uploads": imgarray,
                // "description": `*Empregado(a):*  ${data.formtype[1].tipo}\r\n*Matrícula:* ${data.formtype[3].tipo}\r\n*E-mail:* ${data.formtype[2].tipo}\r\n*Telefone:* ${data.formtype[4].tipo}\r\n*Setor:* ${data.formtype[5].tipo}\r\n*Prédio:* ${data.formtype[6].tipo}\r\n*Tombamento:* ${data.formtype[7].tipo}\r\n*Descrição:* ${data.formtype[8].tipo}\r\n\r\nEste e-mail foi enviado de um formulário de contato em Intranet.`
                "description": `${nome  !== false? "*Empregado(a):* " + nome + "\r\n" : ""} ${cpf !==false ? "*CPF:* " + cpf : ""} ${matricula !== false? "*Matricula:* " + matricula : ""}\r\n${email !== false? "*E-mail:* " + email : ""}\r\n${telefone !== false? '*Telefone:* ' + telefone : ""}\r\n${setor !== false? '*Setor:* ' + setor : ""}\r\n${predio !== false? '*Predio:* ' + predio : ""}\r\n${patrimonio !== false? '*Tombamento:* ' + patrimonio : ""}\r\n${demaisCampos !== false? demaisCampos : ""}\r\n${descrição !== false? '*Descrição:* ' + descrição : ""} `
                ,
              "custom_fields": [ custumfields.dados ] }},{ headers: {'content-type': 'application/json'}} 
              
              ).then((e)=>{console.log(e)})


            return ('Sucesso')
   } catch (error) {
     return error
   }
   
    

//    axios.post('https://redmine.casal.al.gov.br/issues.json?key=ca239e06a3f10435c63c610ebd1809737ef72dd8', {
//         "issue": {
//           "subject": `Gesup Cadastro de Serviço - ${data.formtype[1].tipo} - ${data.formtype[3].tipo}`,
//           "project_id": `${project.project}`,
//           "tracker_id": `${project.tracker}`,
//           "status_id": "1",
//           "priority_id": "1",
//           "recipient_email": `${data.formtype[2].tipo}`,
//           "uploads": "",
//           "description": `*Empregado(a):*  ${data.formtype[1].tipo}\r\n*Matrícula:* ${data.formtype[3].tipo}\r\n*E-mail:* ${data.formtype[2].tipo}\r\n*Telefone:* ${data.formtype[4].tipo}\r\n*Setor:* ${data.formtype[5].tipo}\r\n*Prédio:* ${data.formtype[6].tipo}\r\n*Tombamento:* ${data.formtype[7].tipo}\r\n*Descrição:* ${data.formtype[8].tipo}\r\n\r\nEste e-mail foi enviado de um formulário de contato em Intranet.`
//         },
//         "custom_fields": [{
//           "value": `${data.formtype[7].tipo}`,
//           "id": "37"
//         },
//         {
//             "value": `${data.formtype[4].tipo}`,
//             "id": "116"
//         }]
//       }).then(()=>{console.log('sucess')})
}
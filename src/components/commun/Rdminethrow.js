import axios from "axios"

export function Throw (data, project){

    
   try {

    
    axios.post("http://localhost:3333/api/v1/cabeleira", { "issue": {
                "subject": `${data.formtype[6].tipo} ${project.project_name}- ${data.formtype[1].tipo} - ${data.formtype[3].tipo}`,
                "project_id": `${project.project}`,
                "tracker_id": `${project.tracker}`,
                "status_id": "1",
                "priority_id": "1",
                "recipient_email": `${data.formtype[2].tipo}`,
                "description": `*Empregado(a):*  ${data.formtype[1].tipo}\r\n*Matrícula:* ${data.formtype[3].tipo}\r\n*E-mail:* ${data.formtype[2].tipo}\r\n*Telefone:* ${data.formtype[4].tipo}\r\n*Setor:* ${data.formtype[5].tipo}\r\n*Prédio:* ${data.formtype[6].tipo}\r\n*Tombamento:* ${data.formtype[7].tipo}\r\n*Descrição:* ${data.formtype[8].tipo}\r\n\r\nEste e-mail foi enviado de um formulário de contato em Intranet.`
              ,
              "custom_fields": [{
                "value": `${data.formtype[7].tipo}`,
                "id": "116"
              },
              {
                  "value": `${data.formtype[4].tipo}`,
                  "id": "116"
              }]}},{ headers: {'content-type': 'application/json'}} ).then((e)=>{console.log(e)})


            console.log('feito')
   } catch (error) {
     console.log(error)
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
export function Selector (data){

    if(data === "Computador não funciona"){
        return [ {project: 12, tracker: 3, custum_id: 116},{ nome: "Nome completo", tipo: "input" },
        { nome: "Email coorporativo", tipo: "input" },
        { nome: "Número da matricula", tipo: "input" },
        { nome: "Telefone", tipo: "input" },
        { nome: "Setor", tipo: "input" },
        { nome: "Predio", tipo: "select" },
        { nome: "Tombamento do equipamento", tipo: "input" },
        { nome: "Descrição", tipo: "textarea" },
       ]
    }


    if(data === "Instalação de software"){
        return [{ nome: "Nome completo", tipo: "input" },
        { nome: "Email coorporativo", tipo: "input" },
        { nome: "Número da matricula", tipo: "input" },
        { nome: "Telefone", tipo: "input" },
        { nome: "Setor", tipo: "input" },
        { nome: "Predio", tipo: "select" },
        { nome: "Tombamento do equipamento", tipo: "input" },
        { nome: "Software requisitado", tipo: "input"},
        { nome: "Descrição", tipo: "textarea" },
       ]
    }
    
}
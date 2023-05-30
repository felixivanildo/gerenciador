export function Selector(data) {

    // Computador 
    if (data === "Computador não funciona") {
        return [{ project: 12, tracker: 3, project_name: "Computador não funciona" }, { nome: "Nome completo", tipo: "input" },
        { nome: "Email coorporativo", tipo: "input" },
        { nome: "Número da matricula", tipo: "input" },
        { nome: "Telefone", tipo: "input" },
        { nome: "Setor", tipo: "input" },
        { nome: "Predio", tipo: "select" },
        { nome: "Tombamento do equipamento", tipo: "input" },
        { nome: "Descrição", tipo: "textarea" },
        ]
    }


    if (data === "Instalação de software") {
        return [{ project: 12, tracker: 3, custum_id2: 37, project_name: "Instalação de software" },{ nome: "Nome completo", tipo: "input" },
        { nome: "Email coorporativo", tipo: "input" },
        { nome: "Número da matricula", tipo: "input" },
        { nome: "Telefone", tipo: "input" },
        { nome: "Setor", tipo: "input" },
        { nome: "Predio", tipo: "select" },
        { nome: "Tombamento do equipamento", tipo: "input" },
        { nome: "Software requisitado", tipo: "input" },
        { nome: "Descrição", tipo: "textarea" },
        ]
    }


    if (data === "Erro de software") {
        return [{ project: 12, tracker: 3,  project_name: "Erro de software" }, { nome: "Nome completo", tipo: "input" },
        { nome: "Email coorporativo", tipo: "input" },
        { nome: "Número da matricula", tipo: "input" },
        { nome: "Telefone", tipo: "input" },
        { nome: "Setor", tipo: "input" },
        { nome: "Predio", tipo: "select" },
        { nome: "Tombamento do equipamento", tipo: "input" },
        { nome: "Software requisitado", tipo: "input" },
        { nome: "Descrição", tipo: "textarea" },
        ]
    }



    if (data === "Problema com mouse/teclado") {
        return [{ project: 12, tracker: 3,  project_name: "Problema com teclado/mouse" }, { nome: "Nome completo", tipo: "input" },
        { nome: "Email coorporativo", tipo: "input" },
        { nome: "Número da matricula", tipo: "input" },
        { nome: "Telefone", tipo: "input" },
        { nome: "Setor", tipo: "input" },
        { nome: "Predio", tipo: "select" },
        { nome: "Tombamento do equipamento", tipo: "input" },
        { nome: "Descrição", tipo: "textarea" },
        ]
    }

    // Contracheque 
    if (data === "Resetar senha") {
        return [{ project: 12, tracker: 42, project_name: "Resetar senha" }, { nome: "Nome completo", tipo: "input" },
        { nome: "Cpf", tipo: "input" },
        { nome: "Email coorporativo", tipo: "input" },
        { nome: "Número da matricula", tipo: "input" },
        { nome: "Telefone", tipo: "input" },
        ]
    }

    //  Internet
    if (data === "Abrir chamado") {
        return [{ project: 12, tracker: 12,  project_name: "Internet" }, { nome: "Nome completo", tipo: "input" },
        { nome: "Email coorporativo", tipo: "input" },
        { nome: "Número da matricula", tipo: "input" },
        { nome: "Telefone", tipo: "input" },
        { nome: "Setor", tipo: "input" },
        { nome: "Predio", tipo: "select" },
        { nome: "Descrição", tipo: "textarea" },
        ]
    }

    // Email 
    if (data === "Solicitar e-mail funcional") {
        return [{ project: 12, tracker: 43,  project_name: "Solicitar e-mail funcional" }, { nome: "Nome completo", tipo: "input" },
        { nome: "Email coorporativo", tipo: "input" },
        { nome: "Número da matricula", tipo: "input" },
        { nome: "Cpf", tipo: "input" },
        { nome: "Telefone", tipo: "input" },
        { nome: "Função", tipo: "input" },
        { nome: "Setor", tipo: "input" },
        { nome: "Predio", tipo: "select" },
        { nome: "Email particular", tipo: "input" },

        ]
    }

    if (data === "Solicitar e-mail setorial") {
        return [{ project: 12, tracker: 43,  project_name: "Solicitar e-mail setorial" }, { nome: "Nome do responsavel", tipo: "input" },
        { nome: "Email coorporativo", tipo: "input" },
        { nome: "Número da matricula", tipo: "input" },
        { nome: "Sigla", tipo: "input" },
        { nome: "Significado da sigla", tipo: "input" },
        { nome: "Telefone", tipo: "input" },
        { nome: "E-mail desejado", tipo: "input" },
        { nome: "Observação", tipo: "textarea" },

        ]
    }

    if (data === "Recuperar senha") {
        return [{ project: 12, tracker: 43,  project_name: "Recuperar senha" }, { nome: "Nome completo", tipo: "input" },
        { nome: "Email coorporativo", tipo: "input" },
        { nome: "Número da matricula", tipo: "input" },
        { nome: "Cpf", tipo: "input" },
        { nome: "Telefone", tipo: "input" },
        { nome: "E-mail particular", tipo: "input" },
        { nome: "Observação", tipo: "textarea" },

        ]
    }

    // Impressora 
    if (data === "Impressora/Scanner não imprime") {
        return [{ project: 12, tracker: 30,  project_name: "Impressora/Scanner não imprime" }, { nome: "Nome completo", tipo: "input" },
        { nome: "Email coorporativo", tipo: "input" },
        { nome: "Número da matricula", tipo: "input" },
        { nome: "Telefone", tipo: "input" },
        { nome: "Setor", tipo: "input" },
        { nome: "Predio", tipo: "select" },
        { nome: "Modelo da impressora", tipo: "input" },
        { nome: "Tombamento do equipamento", tipo: "input" },
        { nome: "Descrição", tipo: "textarea" },
        ]
    }

    if (data === "Instalar em outro computador") {
        return [{ project: 12, tracker: 30,  project_name: "Instalar em outro computador" }, { nome: "Nome completo", tipo: "input" },
        { nome: "Email coorporativo", tipo: "input" },
        { nome: "Número da matricula", tipo: "input" },
        { nome: "Telefone", tipo: "input" },
        { nome: "Setor", tipo: "input" },
        { nome: "Predio", tipo: "select" },
        { nome: "Modelo da impressora", tipo: "input" },
        { nome: "Tombamento do equipamento", tipo: "input" },
        { nome: "Descrição", tipo: "textarea" },
        ]
    }

    // Gsan 
    if (data === "Erros") {
        return [{ project: 10, tracker: 43,  project_name: "Erros Gsan" }, { nome: "Nome completo", tipo: "input" },
        { nome: "Email coorporativo", tipo: "input" },
        { nome: "Número da matricula", tipo: "input" },
        { nome: "Telefone", tipo: "input" },
        { nome: "Setor", tipo: "input" },
        { nome: "Predio", tipo: "select" },
        { nome: "Qual funcionalidade", tipo: "input" },
        { nome: "Descrição do ocorrido", tipo: "textarea" },
        ]
    }

    if (data === "Solicitação de dados/relatórios") {
        return [{ project: 10, tracker: 35,  project_name: "Solicitação de dados/relatórios" }, { nome: "Nome completo", tipo: "input" },
        { nome: "Email coorporativo", tipo: "input" },
        { nome: "Número da matricula", tipo: "input" },
        { nome: "Telefone", tipo: "input" },
        { nome: "Setor", tipo: "input" },
        { nome: "Predio", tipo: "select" },
        { nome: "Descrição", tipo: "textarea" },
        ]
    }

    // pentaho 
    if (data === "Solicitação de suporte") {
        return [{ project: 17, tracker: 7,  project_name: "Solicitação de suporte" }, { nome: "Nome completo", tipo: "input" },
        { nome: "Email coorporativo", tipo: "input" },
        { nome: "Número da matricula", tipo: "input" },
        { nome: "Telefone", tipo: "input" },
        { nome: "Setor", tipo: "input" },
        { nome: "Predio", tipo: "select" },
        { nome: "Tipo de suporte", tipo: "input" },
        { nome: "Onde", tipo: "input" },
        { nome: "Informações adicionais", tipo: "textarea" },
        ]
    }


    if (data === "Solicitação de acesso") {
        return [{ project: 17, tracker: 7,  project_name: "Solicitação de acesso" }, { nome: "Nome completo", tipo: "input" },
        { nome: "Email coorporativo", tipo: "input" },
        { nome: "Número da matricula", tipo: "input" },
        { nome: "Telefone", tipo: "input" },
        { nome: "Setor", tipo: "input" },
        { nome: "Predio", tipo: "select" },
        { nome: "Qual funcionalidade", tipo: "input" },
        { nome: "Descrição do ocorrido", tipo: "textarea" },
        ]
    }


    // Redmnine 

    if (data === "Ativação/desativação de usuário(s)") {
        return [{ project: 161, tracker: 85,  project_name: "Ativação/desativação de usuário(s)" }, { nome: "Nome completo", tipo: "input" },
        { nome: "Email coorporativo", tipo: "input" },
        { nome: "Número da matricula", tipo: "input" },
        { nome: "Telefone", tipo: "input" },
        { nome: "Setor", tipo: "input" },
        { nome: "Predio", tipo: "select" },
        { nome: "Ativar ou Desativar?", tipo: "input" },
        { nome: "Qual o projeto?", tipo: "input" },
        { nome: "Lista de usuários", tipo: "textarea" },
        ]
    }

    if (data === "Implantação do Redmine") {
        return [{ project: 161, tracker: 85,  project_name: "Implantação do Redmine" }, { nome: "Nome completo", tipo: "input" },
        { nome: "Email coorporativo", tipo: "input" },
        { nome: "Número da matricula", tipo: "input" },
        { nome: "Telefone", tipo: "input" },
        { nome: "Setor", tipo: "input" },
        { nome: "Predio", tipo: "select" },
        { nome: "Setor a ser implantado", tipo: "input" },
        { nome: "Descrição breve do motivo da necessidade da implantação do Redmine", tipo: "textarea" },
        ]
    }


    if (data === "Informar erro/modificação") {
        return [{ project: 161, tracker: 85,  project_name: "Informar erro/modificação" }, { nome: "Nome completo", tipo: "input" },
        { nome: "Email coorporativo", tipo: "input" },
        { nome: "Número da matricula", tipo: "input" },
        { nome: "Telefone", tipo: "input" },
        { nome: "Setor", tipo: "input" },
        { nome: "Predio", tipo: "select" },
        { nome: "Qual projeto?", tipo: "input" },
        { nome: "Descrição breve do erro ou da modificação solicitada", tipo: "textarea" },
        ]
    }


    if (data === "Treinamento") {
        return [{ project: 161, tracker: 85,  project_name: "Treinamento" }, { nome: "Nome completo", tipo: "input" },
        { nome: "Email coorporativo", tipo: "input" },
        { nome: "Número da matricula", tipo: "input" },
        { nome: "Telefone", tipo: "input" },
        { nome: "Setor", tipo: "input" },
        { nome: "Predio", tipo: "select" },
        { nome: "Local", tipo: "input" },
        { nome: "Data de previsão para o treinamento", tipo: "input" },
        { nome: "Horário previsto", tipo: "input" },
        { nome: "Descrição das necessidades", tipo: "textarea" },
        ]
    }


    // Piramide 

    if (data === "Suporte Pirâmide") {
        return [{ project: 14, tracker: 85,  project_name: "Suporte Pirâmide", images: true }, { nome: "Nome completo", tipo: "input" },
        { nome: "Email coorporativo", tipo: "input" },
        { nome: "Número da matricula", tipo: "input" },
        { nome: "Telefone", tipo: "input" },
        { nome: "Setor", tipo: "input" },
        { nome: "Predio", tipo: "select" },
        { nome: "Local", tipo: "input" },
        { nome: "Data de previsão para o treinamento", tipo: "input" },
        { nome: "Horário previsto", tipo: "input" },
        { nome: "Anexar imagens", tipo: "file"},
        { nome: "Descrição das necessidades", tipo: "textarea" },
        ]
    }
    
}
export function Selector(data) {

    // Computador 
    if (data === "Computador não funciona") {
        return [{ project: 12, tracker: 3, project_name: "Computador não funciona" }, { nome: "Nome completo", tipo: "input", required: true},
        { nome: "Email coorporativo", tipo: "input", required: true},
        { nome: "Número da matricula", tipo: "input", required: true},
        { nome: "Telefone", tipo: "input", required: true},
        { nome: "Setor", tipo: "input", required: true},
        { nome: "Predio", tipo: "select", drop: "predio" },
        { nome: "Tombamento do equipamento", tipo: "input", required: true},
        { nome: "Descrição", tipo: "textarea" },
        ]
    }


    if (data === "Instalação de software") {
        return [{ project: 12, tracker: 3, custum_id2: 37, project_name: "Instalação de software" },{ nome: "Nome completo", tipo: "input", required: true},
        { nome: "Email coorporativo", tipo: "input", required: true},
        { nome: "Número da matricula", tipo: "input", required: true},
        { nome: "Telefone", tipo: "input", required: true},
        { nome: "Setor", tipo: "input", required: true},
        { nome: "Predio", tipo: "select", drop: "predio" },
        { nome: "Tombamento do equipamento", tipo: "input", required: true},
        { nome: "Software requisitado", tipo: "input", required: false },
        { nome: "Descrição", tipo: "textarea" },
        ]
    }


    if (data === "Erro de software") {
        return [{ project: 12, tracker: 3,  project_name: "Erro de software" }, { nome: "Nome completo", tipo: "input", required: true},
        { nome: "Email coorporativo", tipo: "input", required: true},
        { nome: "Número da matricula", tipo: "input", required: true},
        { nome: "Telefone", tipo: "input", required: true},
        { nome: "Setor", tipo: "input", required: true},
        { nome: "Predio", tipo: "select", drop: "predio" },
        { nome: "Tombamento do equipamento", tipo: "input", required: true},
        { nome: "Software requisitado", tipo: "input", required: false },
        { nome: "Descrição", tipo: "textarea" },
        ]
    }



    if (data === "Problema com mouse/teclado") {
        return [{ project: 12, tracker: 3,  project_name: "Problema com teclado/mouse" }, { nome: "Nome completo", tipo: "input", required: true},
        { nome: "Email coorporativo", tipo: "input", required: true},
        { nome: "Número da matricula", tipo: "input", required: true},
        { nome: "Telefone", tipo: "input", required: true},
        { nome: "Setor", tipo: "input", required: true},
        { nome: "Predio", tipo: "select", drop: "predio" },
        { nome: "Tombamento do equipamento", tipo: "input", required: true},
        { nome: "Descrição", tipo: "textarea" },
        ]
    }

    // Contracheque 
    if (data === "Resetar senha") {
        return [{ project: 12, tracker: 42, project_name: "Resetar senha" }, { nome: "Nome completo", tipo: "input", required: true},
        { nome: "Cpf", tipo: "input", required: false },
        { nome: "Email coorporativo", tipo: "input", required: true},
        { nome: "Número da matricula", tipo: "input", required: true},
        { nome: "Telefone", tipo: "input", required: true},
        ]
    }

    //  Internet
    if (data === "Abrir chamado") {
        return [{ project: 12, tracker: 12,  project_name: "Internet" }, { nome: "Nome completo", tipo: "input", required: true},
        { nome: "Email coorporativo", tipo: "input", required: true},
        { nome: "Número da matricula", tipo: "input", required: true},
        { nome: "Telefone", tipo: "input", required: true},
        { nome: "Setor", tipo: "input", required: true},
        { nome: "Predio", tipo: "select", drop: "predio" },
        { nome: "Descrição", tipo: "textarea" },
        ]
    }

    // Email 
    if (data === "Solicitar e-mail funcional") {
        return [{ project: 12, tracker: 43,  project_name: "Solicitar e-mail funcional" }, { nome: "Nome completo", tipo: "input", required: true},
        { nome: "Email coorporativo", tipo: "input", required: true},
        { nome: "Número da matricula", tipo: "input", required: true},
        { nome: "Cpf", tipo: "input", required: false },
        { nome: "Telefone", tipo: "input", required: true},
        { nome: "Função", tipo: "input", required: false },
        { nome: "Setor", tipo: "input", required: true},
        { nome: "Predio", tipo: "select", drop: "predio" },
        { nome: "Email particular", tipo: "input", required: false },

        ]
    }

    if (data === "Solicitar e-mail setorial") {
        return [{ project: 12, tracker: 43,  project_name: "Solicitar e-mail setorial" }, { nome: "Nome do responsavel", tipo: "input", required: false },
        { nome: "Email coorporativo", tipo: "input", required: true},
        { nome: "Número da matricula", tipo: "input", required: true},
        { nome: "Sigla", tipo: "input", required: false },
        { nome: "Significado da sigla", tipo: "input", required: false },
        { nome: "Telefone", tipo: "input", required: true},
        { nome: "E-mail desejado", tipo: "input", required: false },
        { nome: "Observação", tipo: "textarea" },

        ]
    }

    if (data === "Recuperar senha") {
        return [{ project: 12, tracker: 43,  project_name: "Recuperar senha" }, { nome: "Nome completo", tipo: "input", required: true},
        { nome: "Email coorporativo", tipo: "input", required: true},
        { nome: "Número da matricula", tipo: "input", required: true},
        { nome: "Cpf", tipo: "input", required: false },
        { nome: "Telefone", tipo: "input", required: true},
        { nome: "E-mail particular", tipo: "input", required: false },
        { nome: "Observação", tipo: "textarea" },

        ]
    }

    // Impressora 
    if (data === "Impressora/Scanner não imprime") {
        return [{ project: 12, tracker: 30,  project_name: "Impressora/Scanner não imprime" }, { nome: "Nome completo", tipo: "input", required: true},
        { nome: "Email coorporativo", tipo: "input", required: true},
        { nome: "Número da matricula", tipo: "input", required: true},
        { nome: "Telefone", tipo: "input", required: true},
        { nome: "Setor", tipo: "input", required: true},
        { nome: "Predio", tipo: "select", drop: "predio" },
        { nome: "Modelo da impressora", tipo: "input", required: false },
        { nome: "Tombamento do equipamento", tipo: "input", required: true},
        { nome: "Descrição", tipo: "textarea" },
        ]
    }

    if (data === "Instalar em outro computador") {
        return [{ project: 12, tracker: 30,  project_name: "Instalar em outro computador" }, { nome: "Nome completo", tipo: "input", required: true},
        { nome: "Email coorporativo", tipo: "input", required: true},
        { nome: "Número da matricula", tipo: "input", required: true},
        { nome: "Telefone", tipo: "input", required: true},
        { nome: "Setor", tipo: "input", required: true},
        { nome: "Predio", tipo: "select", drop: "predio" },
        { nome: "Modelo da impressora", tipo: "input", required: false },
        { nome: "Tombamento do equipamento", tipo: "input", required: true},
        { nome: "Descrição", tipo: "textarea" },
        ]
    }

    // Gsan 
    if (data === "Erros") {
        return [{ project: 10, tracker: 43,  project_name: "Erros Gsan" }, { nome: "Nome completo", tipo: "input", required: true},
        { nome: "Email coorporativo", tipo: "input", required: true},
        { nome: "Número da matricula", tipo: "input", required: true},
        { nome: "Telefone", tipo: "input", required: true},
        { nome: "Setor", tipo: "input", required: true},
        { nome: "Predio", tipo: "select", drop: "predio" },
        { nome: "Qual funcionalidade", tipo: "input", required: false },
        { nome: "Descrição do ocorrido", tipo: "textarea" },
        ]
    }

    if (data === "Solicitação de dados/relatórios") {
        return [{ project: 10, tracker: 35,  project_name: "Solicitação de dados/relatórios" }, { nome: "Nome completo", tipo: "input", required: true},
        { nome: "Email coorporativo", tipo: "input", required: true},
        { nome: "Número da matricula", tipo: "input", required: true},
        { nome: "Telefone", tipo: "input", required: true},
        { nome: "Setor", tipo: "input", required: true},
        { nome: "Predio", tipo: "select", drop: "predio" },
        { nome: "Descrição", tipo: "textarea" },
        ]
    }

    // pentaho 
    if (data === "Solicitação de suporte") {
        return [{ project: 17, tracker: 7,  project_name: "Solicitação de suporte" }, { nome: "Nome completo", tipo: "input", required: true},
        { nome: "Email coorporativo", tipo: "input", required: true},
        { nome: "Número da matricula", tipo: "input", required: true},
        { nome: "Telefone", tipo: "input", required: true},
        { nome: "Setor", tipo: "input", required: true},
        { nome: "Predio", tipo: "select", drop: "predio" },
        { nome: "Tipo de suporte", tipo: "input", required: false },
        { nome: "Onde", tipo: "input", required: false },
        { nome: "Informações adicionais", tipo: "textarea" },
        ]
    }


    if (data === "Solicitação de acesso") {
        return [{ project: 17, tracker: 7,  project_name: "Solicitação de acesso" }, { nome: "Nome completo", tipo: "input", required: true},
        { nome: "Email coorporativo", tipo: "input", required: true},
        { nome: "Número da matricula", tipo: "input", required: true},
        { nome: "Telefone", tipo: "input", required: true},
        { nome: "Setor", tipo: "input", required: true},
        { nome: "Predio", tipo: "select", drop: "predio" },
        { nome: "Qual funcionalidade", tipo: "input", required: false },
        { nome: "Descrição do ocorrido", tipo: "textarea" },
        ]
    }


    // Redmnine 

    if (data === "Ativação/desativação de usuário(s)") {
        return [{ project: 161, tracker: 85,  project_name: "Ativação/desativação de usuário(s)" }, { nome: "Nome completo", tipo: "input", required: true},
        { nome: "Email coorporativo", tipo: "input", required: true},
        { nome: "Número da matricula", tipo: "input", required: true},
        { nome: "Telefone", tipo: "input", required: true},
        { nome: "Setor", tipo: "input", required: true},
        { nome: "Predio", tipo: "select", drop: "predio" },
        { nome: "Ativar ou Desativar?", tipo: "input", required: false },
        { nome: "Qual o projeto?", tipo: "input", required: false },
        { nome: "Lista de usuários", tipo: "textarea" },
        ]
    }

    if (data === "Implantação do Redmine") {
        return [{ project: 161, tracker: 85,  project_name: "Implantação do Redmine" }, { nome: "Nome completo", tipo: "input", required: true},
        { nome: "Email coorporativo", tipo: "input", required: true},
        { nome: "Número da matricula", tipo: "input", required: true},
        { nome: "Telefone", tipo: "input", required: true},
        { nome: "Setor", tipo: "input", required: true},
        { nome: "Predio", tipo: "select", drop: "predio" },
        { nome: "Setor a ser implantado", tipo: "input", required: false },
        { nome: "Descrição breve do motivo da necessidade da implantação do Redmine", tipo: "textarea" },
        ]
    }


    if (data === "Informar erro/modificação") {
        return [{ project: 161, tracker: 85,  project_name: "Informar erro/modificação" }, { nome: "Nome completo", tipo: "input", required: true},
        { nome: "Email coorporativo", tipo: "input", required: true},
        { nome: "Número da matricula", tipo: "input", required: true},
        { nome: "Telefone", tipo: "input", required: true},
        { nome: "Setor", tipo: "input", required: true},
        { nome: "Predio", tipo: "select", drop: "predio" },
        { nome: "Qual projeto?", tipo: "input", required: false },
        { nome: "Descrição breve do erro ou da modificação solicitada", tipo: "textarea" },
        ]
    }


    if (data === "Treinamento") {
        return [{ project: 161, tracker: 85,  project_name: "Treinamento" }, { nome: "Nome completo", tipo: "input", required: true},
        { nome: "Email coorporativo", tipo: "input", required: true},
        { nome: "Número da matricula", tipo: "input", required: true},
        { nome: "Telefone", tipo: "input", required: true},
        { nome: "Setor", tipo: "input", required: true},
        { nome: "Predio", tipo: "select", drop: "predio" },
        { nome: "Local", tipo: "input", required: false },
        { nome: "Data de previsão para o treinamento", tipo: "input", required: false },
        { nome: "Horário previsto", tipo: "input", required: false },
        { nome: "Descrição das necessidades", tipo: "textarea" },
        ]
    }


    // Piramide 

    if (data === "Suporte Pirâmide") {
        return [{ project: 14, tracker: 85,  project_name: "Suporte Pirâmide", images: true }, { nome: "Nome completo", tipo: "input", required: true},
        { nome: "Email coorporativo", tipo: "input", required: true},
        { nome: "Número da matricula", tipo: "input", required: true},
        { nome: "Telefone", tipo: "input", required: true},
        { nome: "Setor", tipo: "input", required: true},
        { nome: "Predio", tipo: "select", drop: "predio" },
        { nome: "Local", tipo: "input", required: false },
        { nome: "Data de previsão para o treinamento", tipo: "input", required: false },
        { nome: "Horário previsto", tipo: "input", required: false },
        { nome: "Anexar imagens", tipo: "file"},
        { nome: "Descrição das necessidades", tipo: "textarea" },
        ]
    }


    if (data === "Criar/Alterar Perfil"){
        return [{ project: 14, tracker: 85,  project_name: "Criar/Alterar Perfil"}, { nome: "Nome completo", tipo: "input", required: true},
        { nome: "Email coorporativo", tipo: "input", required: true},
        { nome: "Número da matricula", tipo: "input", required: true},
        { nome: "Telefone", tipo: "input", required: true},
        { nome: "Setor", tipo: "input", required: true},
        { nome: "Predio", tipo: "select", drop: "predio" },
        { nome: "Serviço", tipo: "select", drop: 'Servico' },
        
        ]
    }

    if (data === "Treinamento"){
        return [{ project: 14, tracker: 85,  project_name: "Treinamento"}, { nome: "Nome completo", tipo: "input", required: true},
        { nome: "Email coorporativo", tipo: "input", required: true},
        { nome: "Número da matricula", tipo: "input", required: true},
        { nome: "Telefone", tipo: "input", required: true},
        { nome: "Setor", tipo: "input", required: true},
        { nome: "Predio", tipo: "select", drop: "predio" },
        { nome: "Local", tipo: "input"},
        { nome: "Data de previsão para o treinamento", tipo: "input", required: false },
        { nome: "Horário previsto", tipo: "input", required: false },
        { nome: "Descrição das necessidades", tipo: "textarea" },
        ]
    }
    

    // Sala Situação 


    if (data === "Chamados Sala Situação"){
        return [{ project: 139, tracker: 85,  project_name: "Chamados Sala Situação"}, { nome: "Nome completo", tipo: "input", required: true},
        { nome: "Email coorporativo", tipo: "input", required: true},
        { nome: "Número da matricula", tipo: "input", required: true},
        { nome: "Telefone", tipo: "input", required: true},
        { nome: "Setor", tipo: "input", required: true},
        { nome: "Predio", tipo: "select", drop: "predio" },
        { nome: "Local", tipo: "input"},
        { nome: "Serviço", tipo: "select", drop: "Servico" },
        { nome: "Horário previsto", tipo: "input", required: false },
        { nome: "Descrição das necessidades", tipo: "textarea" },
        ]
    }

    // Intranet 

    if (data === "Reportar falha/erro"){
        return [{ project: 311, tracker: 85,  project_name: "Reportar Problema Intranet"}, { nome: "Nome completo", tipo: "input", required: true},
        { nome: "Email coorporativo", tipo: "input", required: true},
        { nome: "Número da matricula", tipo: "input", required: true},
        { nome: "Telefone", tipo: "input", required: true},
        { nome: "Setor", tipo: "input", required: true},
        { nome: "Cpf", tipo: "input" },
        { nome: "Anexar imagens", tipo: "file"},       
        { nome: "Descrição", tipo: "textarea" },
        ]
    }

    // Site 

    

    if (data === "Reportar falha/erro no site"){
        return [{ project: 311, tracker: 85,  project_name: "Reportar Problema Site Casal"}, { nome: "Nome completo", tipo: "input", required: true},
        { nome: "Email coorporativo", tipo: "input", required: true},
        { nome: "Número da matricula", tipo: "input", required: true},
        { nome: "Telefone", tipo: "input", required: true},
        { nome: "Setor", tipo: "input", required: true},
        { nome: "Cpf", tipo: "input" },
        { nome: "Anexar imagens", tipo: "file"},       
        { nome: "Descrição", tipo: "textarea" },
        ]
    }

    // Outros 
    if (data === "Abir outro tipo"){
        return [{ project: 12, tracker: 3, project_name: "Outro tipo de chamado" }, { nome: "Nome completo", tipo: "input", required: true},
            { nome: "Email coorporativo", tipo: "input", required: true},
            { nome: "Número da matricula", tipo: "input", required: true},
            { nome: "Telefone", tipo: "input", required: true},
            { nome: "Setor", tipo: "input", required: true},
            { nome: "Predio", tipo: "select", drop: "predio" },
            { nome: "Tombamento do equipamento", tipo: "input", required: true},
            { nome: "Descrição", tipo: "textarea" },
            ]
        }


}
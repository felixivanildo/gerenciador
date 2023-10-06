import React from "react";
import MainLayout from "../commun/Layout";
import MainTheme from "../commun/Maintheme";
import Divisionbar from "../commun/Divisionbar";

function Denuncia() {

    const elements = [
        <h2 style={{ marginLeft: "10%" }}>Denúncia</h2>,
        <Divisionbar></Divisionbar>,
        <div className="div" style={{ marginLeft: "10%", marginRight: "10%" }}><p className="teste">O comitê de ética é responsável pelo processamento de denúncias, devendo zelar pelo anonimato do denunciante e proteger a confidencialidade das informações e dos envolvidos, visando preservar direitos e neutralidade das decisões.
            <br></br>
            <br></br>
            Os canais que possibilitam o recebimento de denúncias internas e externas relativas ao descumprimento desse Código de Conduta e Integridade e das demais normas internas de ética e obrigacionais da CASAL são:
            <br></br>
            <br></br>
            <a href="comissaodeetica@casal.al.gov.br">a) E-mail: comissaodeetica@casal.al.gov.br</a>
            <br></br>
            <a href="https://e-ouv.al.gov.br/">b) Site: https://e-ouv.al.gov.br/</a>
            <br></br>
            <br></br>


            Em consonância com o nosso papel visando a melhoria da qualidade dos serviços prestados bem como a conduto dos nossos funcionários/prestadores de serviço,
            esses canais de comunicação estão disponíveis para registro da sua reclamação por conduta inapropriada de nosso colaborador ou registro de um elogio.

            <br></br>
            <br></br>
            Conheça nosso Código de Conduta e Integridade e verifique se nosso colaborador e terceirizados a desobedeceu.</p></div>
    ]
    return (
        <div>
            <MainLayout></MainLayout>
            <MainTheme elements={elements}></MainTheme>

        </div>
    )
}

export default Denuncia
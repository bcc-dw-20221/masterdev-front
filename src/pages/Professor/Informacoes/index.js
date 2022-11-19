import MenuProfessor from "../../../components/MenuProfesor/index"
import { useState, useEffect } from "react";
import api from "../../../api/api"

function InformacoesProfessor(){

    const [professor, setProfessor] = useState()

    useEffect( () => {
        api.get('/Professor/').then(response => {
        setProfessor(response.data); 
    })
    }, [])


    console.log(professor)
    return(<div className="Informacoes">
    <MenuProfessor/>

    <div className="Informacoes-Main">
        <div className="IMG-Informacoes"/>
        <h1>Informações Pessoais</h1>
        <h2>Professsor Fulano de Tal<br/>Fulano_de_tal@ifce.edu.cr</h2>
    </div>

    <div className="Box">

        <ul className="Dados-Aluno">
            <li><h3>Professor: {professor?.Nome}</h3> </li>
            <li><h3>E-mail: {professor?.Email}</h3> </li>
            <li><h3>Data de admissão: {professor?.DataAdmissao}</h3></li>
        </ul>

    </div>

    </div>)
}

export default InformacoesProfessor;
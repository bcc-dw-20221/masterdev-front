import Menu from "../../../components/Menu";
import api from "../../../api/api"
import '../../../style/global.scss'
import { useEffect, useState } from "react";

function Informacoes(){ 

    const [aluno, setAluno] = useState({})
        
    useEffect( () => {
        api.get('/Aluno/').then(response => {
        setAluno(response.data); 
    })
    }, [])

    console.log(aluno.id)
    
    return(<div className="Informacoes">
    <Menu/>

    <div className="Informacoes-Main">
        <div className="IMG-Informacoes"/>
        <h1>Informações Pessoais</h1>
        <h2>{aluno.Nome}<br/>Matricula: {aluno.Matricula}</h2>
    </div>

    <div className="Box">

        <ul className="Dados-Aluno">
            <li><h3>Aluno:</h3> {aluno.Nome}</li>
            <li><h3>Matricula:</h3> {aluno.Matricula}</li>
            <li><h3>Curso:</h3> {aluno.Sigla} - {aluno.Curso}</li>

        </ul>

    </div>

    </div>)
}

export default Informacoes;
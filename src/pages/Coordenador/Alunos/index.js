import MenuCoordenador from "../../../components/MenuCoordenador/index"
import { useState, useEffect } from "react";
import api from "../../../api/api"

function CoordenadorAluno(){

    const [alunos, setAlunos] = useState()
    const [Coordenador, setCoordenador] = useState()

    useEffect( () => {
        api.get('/Aluno/').then(response => {
        setAlunos(response.data)})

        api.get('/Coordenador/').then(response => {
            setCoordenador(response.data)})
    }, [])


    console.log(alunos)
    return(<div className="Informacoes">
    <MenuCoordenador/>

    <div className="Informacoes-Main">
        <div className="IMG-Informacoes"/>
        <h1>Informações Pessoais</h1>
        <h2>{Coordenador?.Nome}<br/>{Coordenador?.Email}</h2>
    </div>

    <div className="Box">

        <table className="Tabela-Horario">
            <tr>
                <th>Nome</th>
                <th>Matricula</th>
                <th>Curso</th>
            </tr>
            <tr>
                <td>{alunos?.Nome}</td>
                <td>{alunos?.Matricula}</td>
                <td>{alunos?.Sigla} - {alunos?.Curso}</td>
            </tr>
            
        </table>
    </div>

    </div>)
}

export default CoordenadorAluno;
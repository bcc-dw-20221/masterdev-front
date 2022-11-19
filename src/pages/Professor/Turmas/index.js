import MenuProfessor from "../../../components/MenuProfesor/index"
import { useState, useEffect } from "react";
import api from "../../../api/api"

function Turmas(){

    const [turma, setTurma] = useState("");
    const [professor, setProfessor] = useState("");
    const [turmaAlunos, setTurmaAlunos] = useState("");
    const [aluno1, setaluno1] = useState("");
    const [aluno2, setaluno2] = useState("");
    const [aluno3, setaluno3] = useState("");



    useEffect( () => {
        api.get('/Professor/').then(response => {
        setProfessor(response.data); 
        setTurmaAlunos(response.data?.Turmas)
    })
    }, [])


console.log(aluno1,aluno2,aluno3);

    function SelecionarTurma(Tur){
        if(Tur == "IP_BCC_S1")  {setaluno1(turmaAlunos.IP_BCC_S1[0]); setaluno2(turmaAlunos.IP_BCC_S1[1]);setaluno3(turmaAlunos.IP_BCC_S1[2])}
        if(Tur == "MTC_BCC_S3") {setaluno1(turmaAlunos.MTC_BCC_S3[0]); setaluno2(turmaAlunos.MTC_BCC_S3[1]);setaluno3(turmaAlunos.MTC_BCC_S3[2])}
        if(Tur == "CG_BCC_S7")  {setaluno1(turmaAlunos.CG_BCC_S7[0]); setaluno2(turmaAlunos.CG_BCC_S7[1]);setaluno3(turmaAlunos.CG_BCC_S7[2])}
        if(Tur == "DW_BCC_S7")  {setaluno1(turmaAlunos.DW_BCC_S7[0]); setaluno2(turmaAlunos.DW_BCC_S7[1]);setaluno3(turmaAlunos.DW_BCC_S7[2])}
    }

    return(<div className="Informacoes">
    <MenuProfessor/>

    <div className="Diario-Main">
        <div className="IMG-Diario"/>
        <h1>Informações Pessoais</h1>
        <h2>Professsor Fulano de Tal<br/>Fulano_de_tal@ifce.edu.cr</h2>
    </div>

    <div className="Box">


        <label className="Disciplina">Turma: </label>
        <select defaultValue="DEFAULT" onChange={(e) => SelecionarTurma(e.target.value)}>
            <option value="DEFAULT" disabled >Selecione</option>
            <option value="IP_BCC_S1">BCC_S1 - Introdução à Programção I</option>
            <option value="CG_BCC_S7" >BCC_S7 - Computação Gráfica</option>
            <option value="MTC_BCC_S3">BCC_S3 - Metodologia de Trabalho Científico</option>
            <option value="DW_BCC_S7">BCC_S7 - Desenvolvimento Web</option>
        </select>

            <table className="Tabela-Horario">
                <tr>
                    <th>ALUNO</th>
                    <th>MATRICULA</th>
                    <th>N1</th>
                    <th>N2</th>
                    <th>FALTAS</th>
                </tr>

                <tr>    
                </tr>

                <tr>
                <td>{aluno1.Nome}</td>
                <td>{aluno1.Matricula}</td>
                <td>{aluno1.N1}</td>
                <td>{aluno1.N2}</td>
                <td>{aluno1.Faltas}</td>
                </tr>
                <tr>
                <td>{aluno2.Nome}</td>
                <td>{aluno2.Matricula}</td>
                <td>{aluno2.N1}</td>
                <td>{aluno2.N2}</td>
                <td>{aluno2.Faltas}</td>
                </tr><tr>
                <td>{aluno3.Nome}</td>
                <td>{aluno3.Matricula}</td>
                <td>{aluno3.N1}</td>
                <td>{aluno3.N2}</td>
                <td>{aluno3.Faltas}</td>
                </tr>

            </table>


    </div>

    

    </div>)
}

export default Turmas;
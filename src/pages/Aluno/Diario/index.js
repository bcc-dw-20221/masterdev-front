import { useState, useEffect } from "react"
import Menu from "../../../components/Menu"
import '../../../style/global.scss'
import api from "../../../api/api"

function Diario(){

    const [diario, setDiario] = useState()
    const [Disciplina, setDisciplina] = useState("")

    useEffect( () => {
        api.get('/Aluno/').then(response => {
        setDiario(response.data?.Diario)
    })
    }, [])

    function SelecionaDisciplina(Disc){
        if(Disc == "TCC" ) setDisciplina(diario?.TCC)
        if(Disc == "CG" ) setDisciplina(diario?.CG)
        if(Disc == "GP" ) setDisciplina(diario?.GP)
        if(Disc == "DW" ) setDisciplina(diario?.DW)

    }

    console.log(Disciplina)

    return(<div className="Diario">
    <Menu/>

    <div className="Diario-Main">
        <div className="IMG-Diario"/>
        <h1>Diário</h1>
        <h2>Renan dos Santos Bezerra<br/>Matricula: 20192135000030</h2>
    </div>

    <div className="Box">


        <label className="Disciplina">Disciplina: </label>
        <select defaultValue="DEFAULT" onChange={(e) => SelecionaDisciplina(e.target.value)}>
            <option value="DEFAULT" disabled >Selecione</option>
            <option value="TCC">Trabalho de Conclusão deCurso I</option>
            <option value="CG">Computação Gráfica</option>
            <option value="GP">Gerência de Projetos</option>
            <option value="DW">Desenvolvimento Web</option>
        </select>

        <ul className="Notas">
            <li id="notas">Média N1<br/>{Disciplina.N1}</li>
            <li id="notas">Média N2<br/>{Disciplina.N2}</li>
            <li id="notas">Média Parcial<br/>{Disciplina.MP}</li>
            <li id="notas">Média da Prova final<br/>{Disciplina.PF}</li>
            <li id="notas">Situação<br/>{Disciplina.Situacao}</li>

        </ul>

        <ul className="Avaliacoes">
            <label id="avaliacoes">Avaliações</label>
        </ul>

    </div>

    

    </div>)
}

export default Diario;
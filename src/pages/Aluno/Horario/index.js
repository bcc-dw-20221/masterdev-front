import Menu from "../../../components/Menu";
import api from "../../../api/api"
import '../../../style/global.scss'
import { useEffect, useState } from "react";

function Boletim(){

    const [aluno, setAluno] = useState({})
    const [segunda, setSegunda] = useState({})
    const [terca, setTerca] = useState({})
    const [quarta, setQuarta] = useState({})
    const [quinta, setQuinta] = useState({})
    const [sexta, setSexta] = useState({})

        
    useEffect( () => {
        api.get('/Aluno/').then(response => {
        setAluno(response.data)
        setSegunda(response.data.Horario[0].Segunda)
        setTerca(response.data.Horario[0].Terca)
        setQuarta(response.data.Horario[0].Quarta)
        setQuinta(response.data.Horario[0].Quinta)
        setSexta(response.data.Horario[0].Sexta)

    })
    }, [])

  

    return(
    <div className="Horario">
    <Menu/>

    <div className="Horario-Main">
        <div className="IMG-Horario"/>
        <h1>Horário</h1>
        <h2>{aluno.Nome}<br/>Matricula: {aluno.Matricula}</h2>
    </div>

    <div className="Box">
        <table className="Tabela-Horario">
            <tr>
                <th>HORÀRIO</th>
                <th>SEGUNDA-FEIRA</th>
                <th>TERÇA-FEIRA</th>
                <th>QUARTA-FEIRA</th>
                <th>QUINTA-FEIRA</th>
                <th>SEXTA-FEIRA</th>
            </tr>

            <tr>
                <td>18:30 ~ 19:19</td>
                <td>{segunda.A_Sigla}<br/>{segunda.Sala_A}</td>
                <td>{terca.A_Sigla}<br/>{terca.Sala_A}</td>
                <td>{quarta.A_Sigla}<br/>{quarta.Sala_A}</td>
                <td>{quinta.A_Sigla}<br/>{quinta.Sala_A}</td>
                <td>{sexta.A_Sigla}<br/>{sexta.Sala_A}</td>
            </tr>

            <tr>
                <td>19:20 ~ 20:10</td>
                <td>{segunda.B_Sigla}<br/>{segunda.Sala_B}</td>
                <td>{terca.B_Sigla}<br/>{terca.Sala_B}</td>
                <td>{quarta.B_Sigla}<br/>{quarta.Sala_B}</td>
                <td>{quinta.B_Sigla}<br/>{quinta.Sala_B}</td>
                <td>{sexta.B_Sigla}<br/>{sexta.Sala_B}</td>
            </tr>

            <tr>
                <td>20:20 ~ 21:09</td>
                <td>{segunda.C_Sigla}<br/>{segunda.Sala_C}</td>
                <td>{terca.C_Sigla}<br/>{terca.Sala_C}</td>
                <td>{quarta.C_Sigla}<br/>{quarta.Sala_C}</td>
                <td>{quinta.C_Sigla}<br/>{quinta.Sala_C}</td>
                <td>{sexta.C_Sigla}<br/>{sexta.Sala_C}</td>
            </tr>

            <tr>
                <td>21:10 ~ 22:00</td>
                <td>{segunda.D_Sigla}<br/>{segunda.Sala_D}</td>
                <td>{terca.D_Sigla}<br/>{terca.Sala_D}</td>
                <td>{quarta.D_Sigla}<br/>{quarta.Sala_D}</td>
                <td>{quinta.D_Sigla}<br/>{quinta.Sala_D}</td>
                <td>{sexta.D_Sigla}<br/>{sexta.Sala_D}</td>
            </tr>
        </table>

        <div className="Detalhes-Horario">
        <ul className="Disciplinas">
            <li>TCC</li>
            <li>TCC</li>
            <li>TCC</li>
            <li>TCC</li>
            <li>TCC</li>
        </ul>

        <ul className="Salas">
            <li>sa1: sala 01</li>
            <li>sa1: sala 01</li>
            <li>sa1: sala 01</li>
            <li>sa1: sala 01</li>
            <li>sa1: sala 01</li>
        </ul>
        </div>
    </div>

    </div>
    )
}

export default Boletim;
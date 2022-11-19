import MenuCoordenador from "../../../components/MenuCoordenador/index"
import { useState, useEffect } from "react";
import api from "../../../api/api"

function InformacoesProfessor(){

    const [Coordenador, setCoordenador] = useState()

    useEffect( () => {
        api.get('/Coordenador/').then(response => {
        setCoordenador(response.data); 
    })
    }, [])


    console.log(Coordenador)

    return(<div className="Informacoes">
    <MenuCoordenador/>

    <div className="Informacoes-Main">
        <div className="IMG-Informacoes"/>
        <h1>Informações Pessoais</h1>
        <h2>{Coordenador?.Nome}<br/>{Coordenador?.Email}</h2>
    </div>

    <div className="Box">

        <ul className="Dados-Aluno">
        </ul>

    </div>

    </div>)
}

export default InformacoesProfessor;
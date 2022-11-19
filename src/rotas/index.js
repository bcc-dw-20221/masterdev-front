import {BrowserRouter as Router, Route, Routes, Navigate, Link}  from 'react-router-dom'

import Inicio from "../App"

import LoginAluno from '../pages/Aluno/Login'
import Boletim from '../pages/Aluno/Boletim'
import Diario from '../pages/Aluno/Diario'
import Horario from '../pages/Aluno/Horario'
import Informacoes from '../pages/Aluno/Informacoes'

import LoginProfessor from '../pages/Professor/Login'
import InformacoesProfessor from '../pages/Professor/Informacoes'
import Turmas from '../pages/Professor/Turmas'

import InformacoesCoordenador from "../pages/Coordenador/Informacoes"
import CoordenadorAluno from "../pages/Coordenador/Alunos"
import CoordenadorProfessor from "../pages/Coordenador/Professores"


function Rotas (){
    return(  
        <Router>
          <Routes>
          <Route path="/" element={<Inicio/>}/>
          <Route path="/home" element={<Inicio/>}/>
          <Route path="/Login/Aluno" element ={<LoginAluno/>}/>
          <Route path="/Login/Professor" element ={<LoginProfessor/>}/>
          <Route path="/home/Aluno/Informacoes" element ={<Informacoes/>}/>
          <Route path="/home/Aluno/Diario" element ={<Diario/>}/>
          <Route path="/home/Aluno/Boletim" element ={<Boletim/>}/>
          <Route path="/home/Aluno/Horario" element ={<Horario/>}/>


          <Route path="/home/Professor/Informacoes" element ={<InformacoesProfessor/>}/>
          <Route path="/home/Professor/Turmas" element ={<Turmas/>}/>

          <Route path="/home/Coordenador/Informacoes" element ={<InformacoesCoordenador/>}/>
          <Route path="/home/Coordenador/Alunos" element ={<CoordenadorAluno/>}/>
          <Route path="/home/Coordenador/Professores" element ={<CoordenadorProfessor/>}/>

          </Routes>
      </Router>
    )
  }
 
  export default Rotas;
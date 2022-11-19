import './style/global.scss'
import {React, useState} from 'react';
import { Navigate, useNavigate } from 'react-router-dom';


function App() {

  const navigate = useNavigate()

return(
  <div>
    <h1>Ola mundo</h1>

    <div className='Perfil_Aluno'><input value="Aluno" type="button" onClick={navigate("/Login/Aluno")}/></div>
    <div className='Perfil_Aluno'><input value="Professor" type="button" onClick={navigate("/Login/Professor")}/></div>
    <div className='Perfil_Aluno'><input value="Aluno" type="button" onClick={navigate("/Login/Aluno")}/></div>

  </div>
)
}

export default App;

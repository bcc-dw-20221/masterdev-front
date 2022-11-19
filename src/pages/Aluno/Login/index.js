import '../../../style/global.scss'
import {React, useState} from 'react';
import { Navigate, useNavigate } from 'react-router-dom';


function Aluno() {

  const navidate = useNavigate();

  function Entrar(){
    navidate("/home/Aluno/Informacoes")
  }

  return (
    <div className="Login">
      <div className="Formulario">
        <form>
          <h6>Bem vindo</h6>
          <input type="text" placeholder="Login"/>
          <input type="password" placeholder="Senha"/>
          <input type="button" id="Entrar" value="Entrar" onClick={Entrar} />
        </form>
      </div>

      <div className="MasterDev">
        <label id="Master">Master</label>
        <label id="DEV">DEV</label>
      </div>

    </div>
  );
}

export default Aluno;

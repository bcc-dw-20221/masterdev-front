import { Navigate, useNavigate } from "react-router-dom";
import "../../style/global.scss";
function Menu(){

    const navigate = useNavigate();

    function NavAlunos(){
        navigate("/home/Coordenador/Alunos");
    }

    function NavProfessores(){
        navigate("/home/Coordenador/Professores");
    }



return(
    <div className="Menu">
            <div className="M-D"/> 

        <ul>
            <div className="Aluno">
            <li><label>Cooº Beltrano de Villa Bello</label></li>
            <li><label>Beltrano_Villa_Bello@ifce.edu.cr</label></li>
            </div>

            <div className="Itens">
            <li><input type="button" value="Informações pessoais" /></li>
            <li><input type="button" value="Alunos" onClick={NavAlunos}/></li>
            <li><input type="button" value="Professores" onClick={NavProfessores}/></li>

            </div>
        </ul>
    </div>
) 
}

export default Menu;
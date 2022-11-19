import { Navigate, useNavigate } from "react-router-dom";
import "../../style/global.scss";
function Menu(){

    const navigate = useNavigate();

    function NavTurmas(){
        navigate("/home/Professor/Turmas");
    }

    function NavInformacoes(){
        navigate("/home/Professor/Informacoes");
    }



return(
    <div className="Menu">
            <div className="M-D"/> 

        <ul>
            <div className="Aluno">
            <li><label>PROF Fulano de Tal</label></li>
            <li><label>Fulano_de_tal@ifce.edu.cr</label></li>
            </div>

            <div className="Itens">
            <li><input type="button" value="Informações pessoais" onClick={NavInformacoes}/></li>
            <li><input type="button" value="Turmas" onClick={NavTurmas}/></li>

            </div>
        </ul>
    </div>
) 
}

export default Menu;
import { Navigate, useNavigate } from "react-router-dom";
import "../../style/global.scss";
function Menu(){

    const navigate = useNavigate();

    function NavBoletim(){
        navigate("/home/Aluno/Boletim");
    }

    function NavDiario(){
        navigate("/home/Aluno/Diario");
    }

    function NavHorario(){
        navigate("/home/Aluno/Horario");
    }

    function NavHome(){
        navigate("/home/Aluno/Informacoes");
    }

return(
    <div className="Menu">
            <div className="M-D"/> 

        <ul>
            <div className="Aluno">
            <li><label>Renan dos Santos Bezerra</label></li>
            <li><label>20192135000030</label></li>
            </div>

            <div className="Itens">
            <li><input type="button" value="Informações pessoais" onClick={NavHome}/></li>
            <li><input type="button" value="Horário" onClick={NavHorario}/></li>
            <li><input type="button" value="Boletim" onClick={NavBoletim}/></li>
            <li><input type="button" value="Diário" onClick={NavDiario}/></li>

            </div>
        </ul>
    </div>
) 
}

export default Menu;
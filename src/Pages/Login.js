import { Link } from "react-router-dom";
import trackitLogo from "../Resources/trackitLogo.png";
import {InputsContainer} from "../Resources/StyledComponents";

export default function Login() {
  return (
    <InputsContainer>
      <img src={trackitLogo} alt="logo" />
      <form>
        <input type="email" placeholder="email" required></input>
        <input type="password" placeholder="senha" required></input>
        <button type="submit">Entrar</button>
      </form>
      <Link to={"/cadastro"}><p>Não tem uma conta? Cadastre-se!</p></Link>
    </InputsContainer>
  );
}
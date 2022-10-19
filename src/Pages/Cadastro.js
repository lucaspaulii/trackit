import { Link } from "react-router-dom";
import trackitLogo from "../Resources/trackitLogo.png";
import {InputsContainer} from "../Resources/StyledComponents"

export default function Cadastro() {
  return (
    <InputsContainer>
      <img src={trackitLogo} alt="logo" />
      <form>
        <input type="email" placeholder="email" required></input>
        <input type="password" placeholder="senha" required></input>
        <input type="text" placeholder="nome" required></input>
        <input type="url" placeholder="foto" required></input>
        <button type="submit">Cadastrar</button>
      </form>
      <Link to={"/login"}><p>Já tem uma conta? Faça login!</p></Link>
    </InputsContainer>
  );
}
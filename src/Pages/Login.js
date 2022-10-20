import { Link, useNavigate } from "react-router-dom";
import trackitLogo from "../Resources/trackitLogo.png";
import { InputsContainer } from "../Resources/StyledComponents";
import { useContext, useState } from "react";
import axios from "axios";
import { CircularProgress, Alert } from "@mui/material";
import { AuthContext } from "../Providers/auth";

export default function Login() {
  const [email, setEmail] = useState(undefined);
  const [password, setPassword] = useState(undefined);
  const [isLoading, setIsLoading] = useState(false);
  const [errorMessage, setErrorMessage] = useState('');
  const [isError, setIsError] = useState(false);
  const navigate = useNavigate();
  const { setUserInfo } = useContext(AuthContext);

  function handleSubmit(e) {
    e.preventDefault();
    if (email && password) {
        const newObj = { email, password };
        setIsError(false);
        setIsLoading(true);
        postForm(newObj);
    }
  }

  function postForm(form) {
    const URL = "https://mock-api.bootcamp.respondeai.com.br/api/v2/trackit/auth/login";
    const promise = axios.post(URL, form);
    promise.then((response) => {
        setIsLoading(false);
        setEmail(undefined);
        setPassword(undefined);
        setUserInfo(response.data);
        navigate("/hoje");
    })
    promise.catch((e) => {
        setIsLoading(false);
        setIsError(true);
        setErrorMessage(e.response.data.message);
        console.log(e)
    })
  }

  return (
    <InputsContainer>
      <img src={trackitLogo} alt="logo" />
      <form onSubmit={handleSubmit}>
        <input
          type="email"
          placeholder="email"
          value={email}
          required
          onChange={(e) => {
            setEmail(e.target.value);
            setIsError(false);
          }}
          disabled={isLoading ? true : false}
        ></input>
        <input
          type="password"
          placeholder="senha"
          value={password}
          required
          onChange={(e) => {
            setPassword(e.target.value);
            setIsError(false);
          }}
          disabled={isLoading ? true : false}
        ></input>
        <button type="submit" disabled={isLoading ? true : false}>{isLoading ? (<CircularProgress color="inherit"/>) : 'Entrar'}</button>
      </form>
      {(isError )&& (<Alert severity="error">{errorMessage}</Alert>)}
      <Link to={"/cadastro"}>
        <p>Não tem uma conta? Cadastre-se!</p>
      </Link>
    </InputsContainer>
  );
}

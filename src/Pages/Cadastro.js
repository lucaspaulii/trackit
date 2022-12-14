import { Link, useNavigate } from "react-router-dom";
import trackitLogo from "../Resources/trackitLogo.png";
import { InputsContainer } from "../Resources/StyledComponents";
import { useState } from "react";
import axios from "axios";
import { Alert, CircularProgress } from "@mui/material";

export default function Cadastro() {
  const [email, setEmail] = useState(undefined);
  const [password, setPassword] = useState(undefined);
  const [name, setName] = useState(undefined);
  const [image, setImage] = useState(undefined);
  const [isRegistered, setIsRegistered] = useState(false);
  const [alertSeverity, setAlertSeverity] = useState(undefined);
  const [isLoading, setIsLoading] = useState(false);
  const [errorMessage, setErrorMessage] = useState("");
  const navigate = useNavigate();

  function handleSubmit(e) {
    e.preventDefault();
    if (email && password && name && image) {
      const newObj = { email, name, image, password };
      postForm(newObj);
      setIsLoading(true);
    } else {
      setAlertSeverity("error");
    }
  }

  function postForm(form) {
    const URL =
      "https://mock-api.bootcamp.respondeai.com.br/api/v2/trackit/auth/sign-up";
    const promise = axios.post(URL, form);
    promise.then(() => {
      setEmail(undefined);
      setPassword(undefined);
      setName(undefined);
      setImage(undefined);
      setIsRegistered(true);
      setAlertSeverity("success");
      setIsLoading(false);
    });
    promise.catch((e) => {
      setEmail(undefined);
      setPassword(undefined);
      setName(undefined);
      setImage(undefined);
      setIsRegistered(true);
      setAlertSeverity("error");
      setIsLoading(false);
      setErrorMessage(e.response.data.message);
    });
  }

  return (
    <InputsContainer>
      <img src={trackitLogo} alt="logo" />
      <form onSubmit={handleSubmit}>
        <input
          type="email"
          value={email}
          placeholder="email"
          required
          onChange={(e) => setEmail(e.target.value)}
          disabled={isRegistered || isLoading ? true : false}
        ></input>
        <input
          type="password"
          value={password}
          placeholder="senha"
          required
          onChange={(e) => setPassword(e.target.value)}
          disabled={isRegistered || isLoading ? true : false}
        ></input>
        <input
          type="text"
          value={name}
          placeholder="nome"
          required
          onChange={(e) => setName(e.target.value)}
          disabled={isRegistered || isLoading ? true : false}
        ></input>
        <input
          type="url"
          value={image}
          placeholder="foto"
          required
          onChange={(e) => setImage(e.target.value)}
          disabled={isRegistered || isLoading ? true : false}
        ></input>
        <button
          type="submit"
          disabled={isLoading ? true : false}
          style={{ display: isRegistered ? "none" : "block" }}
        >
          {isLoading ? <CircularProgress color="inherit" /> : "Cadastrar"}
        </button>
        {isRegistered ? (
          <Alert severity={alertSeverity}>
            {alertSeverity === "error"
              ? errorMessage
              : "Cadastro feito com sucesso!"}
          </Alert>
        ) : (
          ""
        )}
        {alertSeverity === "success" && (
          <button
            onClick={() => {
              navigate("/login");
            }}
          >
            Prosseguir para Login!
          </button>
        )}
        {alertSeverity === "error" && (
          <button
            onClick={() => {
              window.location.reload(false);
            }}
          >
            Tente novamente!
          </button>
        )}
      </form>
      {alertSeverity ? (
        ""
      ) : (
        <Link to={"/login"}>
          <p>J?? tem uma conta? Fa??a login!</p>
        </Link>
      )}
    </InputsContainer>
  );
}

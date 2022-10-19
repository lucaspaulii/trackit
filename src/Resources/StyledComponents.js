import styled from "styled-components";
import {
  defaultThemeColor,
  defaultBackground,
  defaultDetails,
  defaultHeaderColor,
  defaultTextColor,
} from "../Resources/DefaultColors";

export const InputsContainer = styled.div`
  position: fixed;
  z-index: 300;
  height: 100vh;
  width: 100vw;
  top: 0;
  left: 0;
  font-family: "Lexend Deca", sans-serif;
  display: flex;
  flex-direction: column;
  align-items: center;
  margin-top: 80px;
  form {
    display: flex;
    flex-direction: column;
  }
  img {
    width: 180px;
    height: auto;
    margin-bottom: 20px;
  }
  input {
    width: 300px;
    height: 45px;
    margin-bottom: 5px;
    border: 1px solid ${defaultDetails};
    color: ${defaultTextColor};
    border-radius: 5px;
    padding-left: 10px;
    font-family: "Lexend Deca", sans-serif;
    font-size: 18px;
  }
  input::placeholder {
    color: ${defaultDetails};
  }
  button {
    margin-top: 10px;
    margin-bottom: 20px;
    width: 300px;
    height: 45px;
    border: none;
    border-radius: 5px;
    color: ${defaultBackground};
    background-color: ${defaultThemeColor};
    font-family: "Lexend Deca", sans-serif;
    font-size: 18px;
  }
  p {
    color: ${defaultThemeColor};
    text-decoration: underline;
    text-decoration-color: ${defaultThemeColor};
  }
`;

export const WelcomeScreenContainer = styled.div`
  background-color: ${defaultHeaderColor};
  color: ${defaultBackground};
  height: 100vh;
  width: 100vw;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  img {
    width: 180px;
    height: auto;
    margin-bottom: 40px;
  }
  div {
    display: flex;
    width: 250px;
    justify-content: space-around;
    align-items: center;
    height: 55px;
    border-radius: 9px;
    background-color: ${defaultThemeColor};
  }
  p {
    font-family: "Lexend Deca", sans-serif;
    font-size: 20px;
    font-weight: 300;
    margin-bottom: 7px;
    text-decoration: none;
    color: ${defaultBackground};
    border-left: solid 8px #8FC549;
    padding-left: 7px;
  }
`;

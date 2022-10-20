import styled from "styled-components";
import {
  defaultThemeColor,
  defaultBackground,
  defaultDetails,
  defaultHeaderColor,
  defaultTextColor,
  secondaryBackground,
} from "../Resources/DefaultColors";

export const InputsContainer = styled.div`
  position: fixed;
  z-index: 300;
  height: 100vh;
  width: 100vw;
  background-color: ${defaultBackground};
  top: 0;
  left: 0;
  font-family: "Lexend Deca", sans-serif;
  display: flex;
  flex-direction: column;
  align-items: center;
  padding-top: 80px;
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
  input:disabled {
    background-color: ${defaultDetails};
    color: ${defaultBackground};
  }
  button {
    margin-top: 10px;
    margin-bottom: 10px;
    width: 300px;
    height: 45px;
    border: none;
    border-radius: 5px;
    color: ${defaultBackground};
    background-color: ${defaultThemeColor};
    font-family: "Lexend Deca", sans-serif;
    font-size: 18px;
  }
  button:disabled {
    background-color: ${defaultHeaderColor};
  }
  p {
    color: ${defaultThemeColor};
    text-decoration: underline;
    text-decoration-color: ${defaultThemeColor};
    margin-top: 10px;
  }
`;

export const WelcomeScreenContainer = styled.div`
  position: fixed;
  z-index: 300;
  height: 100vh;
  width: 100vw;
  top: 0;
  left: 0;
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
    border-left: solid 8px ${defaultBackground};
    padding-left: 7px;
  }
`;

export const HeaderContainer = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  background-color: ${defaultHeaderColor};
  z-index: 50;
  height: 70px;
  width: 100vw;
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 0 20px;
  img {
    height: 38px;
    width: auto;
  }
  div {
    width: 55px;
    height: 55px;
    img {
      width: 100%;
      height: 100%;
      border-radius: 50%;
    }
  }
`;

export const FooterContainer = styled.div`
  position: fixed;
  bottom: 0;
  left: 0;
  background-color: ${defaultBackground};
  z-index: 50;
  height: 70px;
  width: 100vw;
  display: flex;
  align-items: center;
  justify-content: space-around;

  p {
    font-family: "Lexend Deca", sans-serif;
    color: ${defaultThemeColor};
    font-size: 18px;
  }
  button {
    font-family: "Lexend Deca", sans-serif;
    color: ${defaultBackground};
    background-color: ${defaultThemeColor};
    border: none;
    border-radius: 50%;
    width: 91px;
    height: 91px;
    margin-bottom: 40px;
    font-size: 18px;
  }
`;

export const HabitsContainer = styled.div`
  font-family: "Lexend Deca", sans-serif;
  padding-top: 50px;
  background-color: ${secondaryBackground};
  color: ${defaultTextColor};
  height: 85vh;
  width: 100vw;
  overflow-y: scroll;
  margin-top: 50px;
  margin-bottom: 50px;
  padding-bottom: 50px;
  ::-webkit-scrollbar {
  display: none;
  }
  p {
    padding: 0 20px;
    font-size: 16px;
  }
`;
export const CreateButton = styled.button`
  font-family: "Lexend Deca", sans-serif;
  font-size: 27px;
  display: flex;
  align-items: center;
  justify-content: center;
  width: 40px;
  height: 35px;
  background-color: ${defaultThemeColor};
  color: ${defaultBackground};
  border: none;
  border-radius: 5px;
`;

export const MyHabitsHeader = styled.div`
  display: flex;
  width: 100%;
  justify-content: space-between;
  align-items: center;
  padding: 0 20px;
  color: ${defaultHeaderColor};
  font-size: 23px;
  margin-bottom: 20px;
`;

export const CreatingHabitContainer = styled.div`
  width: 90%;
  margin: 0 auto;
  background-color: ${defaultBackground};
  display: flex;
  flex-direction: column;
  align-items: center;
  margin-bottom: 30px;
  form {
    width: 100%;
    display: flex;
    flex-direction: column;
    align-items: center;
  }
  input {
    width: 95%;
    margin: 10px auto;
    height: 45px;
    border: 1px solid ${defaultDetails};
    border-radius: 5px;
    padding-left: 10px;
    font-size: 20px;
  }
  input::placeholder {
    color: ${defaultDetails};
  }
  input:disabled {
    background-color: ${secondaryBackground};
  }
`;

export const Day = styled.button`
  width: 30px;
  height: 30px;
  font-size: 20px;
  border: 1px solid ${defaultDetails};
  border-radius: 5px;
  background-color: ${(props) => props.backgroundColor};
  color: ${(props) => props.color};
  margin-left: 5px;
`;

export const Days = styled.div`
  display: flex;
  margin: 0 auto 10px;
`;

export const CreatingHabitFooter = styled.div`
  font-family: "Lexend Deca", sans-serif;
  display: flex;
  align-items: center;
  width: 100%;
  margin: 10px auto;
  justify-content: flex-end;
  padding-right: 20px;
  button {
    font-family: "Lexend Deca", sans-serif;
    font-size: 16px;
    width: 85px;
    height: 35px;
    margin-left: 10px;
    background-color: ${defaultThemeColor};
    color: ${defaultBackground};
    border: none;
    border-radius: 5px;
  }
  p {
    font-family: "Lexend Deca", sans-serif;
    font-size: 16px;
    color: ${defaultThemeColor};
  }
  p:disabled {
    color: ${defaultDetails};
  }
  button:disabled {
    background-color: ${defaultDetails};
  }
`;

export const HabitContainer = styled.div`
  position: relative;
  width: 90%;
  margin: 0 auto;
  background-color: ${defaultBackground};
  display: flex;
  flex-direction: column;
  margin-bottom: 10px;
  border-radius: 5px;
  padding: 5px 10px;
  h3 {
    font-family: "Lexend Deca", sans-serif;
    margin-bottom: 10px;
    text-align: center;
  }
  img {
    width: 20px;
    height: auto;
    position: absolute;
    top: 10px;
    right: 10px;
  }
`;

export const TodayHeader = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
  justify-content: space-between;
  align-items: flex-start;
  padding: 0 20px;
  margin-bottom: 25px;
  h2 {
    color: ${defaultHeaderColor};
    font-size: 23px;
    margin-bottom: 5px;
  }
  h3 {
    color: ${(props) => props.color};
  }
`;

export const TodayHabits = styled.div`
  display: flex;
  flex-direction: column;
  width: 90%;
  margin: 0 auto;
`;

export const TodayHabit = styled.div`
  width: 100%;
  height: 94px;
  flex-shrink: 0;
  border-radius: 5px;
  margin-bottom: 15px;
  background-color: ${defaultBackground};
  position: relative;
  padding-left: 13px;
  padding-top: 13px;
  h3 {
    font-size: 20px;
    color: ${defaultTextColor};
    margin-bottom: 7px;
  }
  h4 {
    font-size: 13px;
  }
  span {
    color: ${(props) => props.color}
  }
`;
export const CheckButton = styled.button`
  width: 69px;
  height: 69px;
  background-color: ${(props) => props.backgroundColor};
  display: flex;
  justify-content: center;
  align-items: center;
  border: none;
  border-radius: 5px;
  position: absolute;
  top: 13px;
  right: 13px;
  img {
    width: 35px;
    height: auto;
  }
`;

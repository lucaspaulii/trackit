import { useContext, useEffect, useState } from "react";
import { AuthContext } from "../Providers/auth";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import {
  HabitsContainer,
  TodayHeader,
  TodayHabits,
  TodayHabit,
  CheckButton,
} from "../Resources/StyledComponents";
import {
  defaultDetails,
  defaultSuccess,
  defaultTextColor,
} from "../Resources/DefaultColors";
import checkmark from "../Resources/checkmark.png";
import dayjs from "dayjs";

export default function Hoje() {
  const [isLoading, setIsLoading] = useState(true);
  const { userInfo } = useContext(AuthContext);
  const [todaysHabits, setTodaysHabits] = useState([]);
  const [isAnyCompleted, setIsAnyCompleted] = useState(false);
  const navigate = useNavigate();
  const weekdays = ['Domingo', 'Segunda', 'Terça', 'Quarta', 'Quinta', 'Sexta', 'Sábado']

  useEffect(() => {
    setIsLoading(true);
    if (userInfo) {
      const config = {
        headers: { Authorization: `Bearer ${userInfo.token}` },
      };
      const URL =
        "https://mock-api.bootcamp.respondeai.com.br/api/v2/trackit/habits/today";
      const promise = axios.get(URL, config);
      promise.then((response) => {
        setTodaysHabits(response.data);
        setIsLoading(false);
      });
      promise.catch((error) => {
        setIsLoading(false);
      });
    }
  }, []);

  useEffect(() => {
    if (userInfo === undefined) {
      setTimeout(() => {
        alert("você foi deslogado e retornará para a pagina inicial");
        navigate("/");
      }, 1500);
    }
  }, [userInfo]);

  return (
    <HabitsContainer>
      <TodayHeader color={isAnyCompleted ? defaultSuccess : defaultTextColor}>
        <h2>{weekdays[dayjs().day()]}, {dayjs().date()}/{dayjs().month()}</h2>
        <h3>
          {isAnyCompleted
            ? "50% dos hábitos concluídos"
            : "Nenhum hábito concluído ainda"}
        </h3>
      </TodayHeader>
      <TodayHabits>
        <TodayHabit>
          <h3>Hábito</h3>
          <h4>Sequencia atual</h4>
          <h4>Seu recorde</h4>
          <CheckButton backgroundColor={defaultDetails}>
            <img src={checkmark} alt="checkmark" />
          </CheckButton>
        </TodayHabit>
        <TodayHabit>
          <h3>Hábito</h3>
          <h4>Sequencia atual</h4>
          <h4>Seu recorde</h4>
          <CheckButton backgroundColor={defaultSuccess}>
            <img src={checkmark} alt="checkmark" />
          </CheckButton>
        </TodayHabit>
        <TodayHabit>
          <h3>Hábito</h3>
          <h4>Sequencia atual</h4>
          <h4>Seu recorde</h4>
          <CheckButton backgroundColor={defaultSuccess}>
            <img src={checkmark} alt="checkmark" />
          </CheckButton>
        </TodayHabit>
      </TodayHabits>
    </HabitsContainer>
  );
}

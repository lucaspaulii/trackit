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
import loading from "../Resources/cupertino_activity_indicator_selective.gif";
import dayjs from "dayjs";
import { TodayContext } from "../Providers/todaysprogress";
import { LinearProgress } from "@mui/material";

export default function Hoje() {
  const [isLoading, setIsLoading] = useState(true);
  const [isButtonLoading, setIsButtonLoading] = useState([]);
  const { userInfo } = useContext(AuthContext);
  const [todaysHabits, setTodaysHabits] = useState([]);
  const { todaysProgress, setTodaysProgress } = useContext(TodayContext);
  const [update, setUpdate] = useState(false);
  const navigate = useNavigate();
  const weekdays = [
    "Domingo",
    "Segunda",
    "Terça",
    "Quarta",
    "Quinta",
    "Sexta",
    "Sábado",
  ];

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
        setIsButtonLoading([]);
      });
      promise.catch((error) => {
        setIsLoading(false);
      });
    }
  }, [update]);

  useEffect(() => {
    if (userInfo === undefined) {
      setTimeout(() => {
        alert("você foi deslogado e retornará para a pagina inicial");
        navigate("/");
      }, 1500);
    }
  }, [userInfo]);

  useEffect(() => {
    handleCompletedPercentage();
  }, [todaysHabits]);
  function handleCompletedPercentage() {
    const completedHabits = todaysHabits.filter((habit) => habit.done);
    const percentage = (
      (completedHabits.length / todaysHabits.length) *
      100
    ).toFixed(2);
    setTodaysProgress(percentage);
  }

  function handleCompleting(habitID, isCompleted) {
    setIsButtonLoading([...isButtonLoading, habitID]);
    const config = {
      headers: { Authorization: `Bearer ${userInfo.token}` },
    };
    let action;
    if (isCompleted) {
      action = "uncheck";
    }
    if (!isCompleted) {
      action = "check";
    }
    const URL = `https://mock-api.bootcamp.respondeai.com.br/api/v2/trackit/habits/${habitID}/${action}`;
    const promise = axios.post(URL, habitID, config);
    promise.then((response) => {
      console.log(response.data);
      setUpdate(!update);
    });
    promise.catch((e) => {
      console.log(e.response.data);
    });
  }

  return (
    <HabitsContainer>
      <TodayHeader
        color={todaysProgress > 0 ? defaultSuccess : defaultTextColor}
      >
        <h2>
          {weekdays[dayjs().day()]}, {dayjs().date()}/{dayjs().month()}
        </h2>
        <h3>
          {todaysProgress > 0
            ? `${todaysProgress}% dos hábitos concluídos`
            : "Nenhum hábito concluído ainda"}
        </h3>
      </TodayHeader>
      {isLoading ? <LinearProgress /> : ""}
      <TodayHabits>
        {todaysHabits.map((habit) => {
          return (
            <TodayHabit
              key={habit.id}
              color={habit.done ? defaultSuccess : defaultTextColor}
            >
              <h3>{habit.name}</h3>
              <h4>
                Sequencia atual: <span>{habit.currentSequence} {(habit.currentSequence == 1) ? "dia" : "dias"}</span>
              </h4>
              <h4>
                Seu recorde: <span>{habit.highestSequence} {(habit.highestSequence == 1) ? "dia" : "dias"}</span>
              </h4>
              <CheckButton
                onClick={() => handleCompleting(habit.id, habit.done)}
                backgroundColor={habit.done ? defaultSuccess : defaultDetails}
              >
                <img
                  src={isButtonLoading.includes(habit.id) ? loading : checkmark}
                  alt="checkmark"
                />
              </CheckButton>
            </TodayHabit>
          );
        })}
      </TodayHabits>
    </HabitsContainer>
  );
}

import { Alert, CircularProgress } from "@mui/material";
import axios from "axios";
import { useContext, useState } from "react";
import { AuthContext } from "../Providers/auth";
import { defaultBackground, defaultDetails } from "../Resources/DefaultColors";
import {
  CreatingHabitContainer,
  Day,
  Days,
  CreatingHabitFooter,
} from "../Resources/StyledComponents";

export default function CreatingHabit({ setIsCreating, setUpdate, update }) {
  const [selectedDays, setSelectedDays] = useState([]);
  const [habitName, setHabitName] = useState("");
  const [isLoading, setIsLoading] = useState(false);
  const [isCreated, setIsCreated] = useState(false);
  const [isError, setIsError] = useState(false);
  const { userInfo } = useContext(AuthContext);
  const daysArr = [1, 2, 3, 4, 5, 6, 7];
  const daysLetterArr = ["D", "S", "T", "Q", "Q", "S", "S"];

  function handleDayClick(day) {
    let newSelectedDays;
    if (selectedDays.includes(day)) {
      newSelectedDays = selectedDays.filter((a) => a !== day);
    } else {
      newSelectedDays = [...selectedDays, day];
    }
    setSelectedDays(newSelectedDays);
  }

  function handleSubmit(e) {
    e.preventDefault();
    const submitHabitObj = { name: habitName, days: selectedDays };
    setIsLoading(true);
    createHabit(submitHabitObj);
  }

  function createHabit(habitObj) {
    const URL =
      "https://mock-api.bootcamp.respondeai.com.br/api/v2/trackit/habits";
    const config = {
      headers: { Authorization: `Bearer ${userInfo.token}` },
    };
    const promise = axios.post(URL, habitObj, config);
    promise.then(() => {
      setIsLoading(false);
      setIsCreated(true);
      setHabitName("");
      setSelectedDays([]);
      setTimeout(() => {
        setIsCreated(false);
        setIsCreating(false);
        setUpdate(!update);
      }, 1000);
    });
    promise.catch(() => {
      setIsLoading(false);
      setIsError(true);
      setHabitName("");
      setSelectedDays([]);
      setTimeout(() => {
        setIsError(false);
        setIsCreating(false);
      }, 1000);
    });
  }

  return (
    <CreatingHabitContainer>
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          placeholder="nome do hábito"
          onChange={(e) => setHabitName(e.target.value)}
          disabled={isLoading || isCreated || isError ? true : false}
        ></input>
        <Days>
          {daysArr.map((d) => {
            return (
              <Day
                key={d}
                type="button"
                backgroundColor={
                  selectedDays.includes(d) ? defaultDetails : "transparent"
                }
                color={
                  selectedDays.includes(d) ? defaultBackground : defaultDetails
                }
                onClick={() => handleDayClick(d)}
                disabled={isLoading || isCreated || isError ? true : false}
              >
                {daysLetterArr[d - 1]}
              </Day>
            );
          })}
        </Days>
        <CreatingHabitFooter>
          {isCreated && <Alert severity="success">Hábito criado!</Alert>}
          {isError && <Alert severity="error">Algo deu errado</Alert>}
          <p
            onClick={() => setIsCreating(false)}
            disabled={isLoading || isCreated || isError ? true : false}
          >
            Cancelar
          </p>
          <button
            type="submit"
            disabled={isLoading || isCreated || isError ? true : false}
          >
            {isLoading ? <CircularProgress size={20} /> : "Salvar"}
          </button>
        </CreatingHabitFooter>
      </form>

      {<Alert severity="error">Ops, algo de errado aconteceu!</Alert> &&
        isError}
    </CreatingHabitContainer>
  );
}

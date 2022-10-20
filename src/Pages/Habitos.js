import { Alert, LinearProgress } from "@mui/material";
import axios from "axios";
import { useContext, useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import CreatingHabit from "../Components/CreatingHabit";
import Habit from "../Components/Habit";
import { AuthContext } from "../Providers/auth";
import {
  CreateButton,
  HabitsContainer,
  MyHabitsHeader,
} from "../Resources/StyledComponents";

export default function Habitos() {
  const [habits, setHabits] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const [isCreating, setIsCreating] = useState(false);
  const [update, setUpdate] = useState(false);
  const { userInfo } = useContext(AuthContext);
  const navigate = useNavigate();



  useEffect(() => {
    setIsLoading(true);
    if (userInfo) {
    const config = {
      headers: { Authorization: `Bearer ${userInfo.token}` },
    };
    const URL =
      "https://mock-api.bootcamp.respondeai.com.br/api/v2/trackit/habits";
    const promise = axios.get(URL, config);
    promise.then((response) => {
      if (response.data.lenght !== 0) {
        setHabits(response.data);
        setIsLoading(false);
      }
    });
    promise.catch((error) => {
      console.log(error);
    });
  }
  }, [update]);


  useEffect(() => {
    if (userInfo === undefined) {
      setTimeout(() => {
        alert('você foi deslogado e retornará para a pagina inicial')
        navigate("/")
      }, 1500)  
    }
  }, [userInfo])
  

  return (
    <HabitsContainer>
      <>
        <MyHabitsHeader>
          <h2>Meus hábitos</h2>
          <CreateButton
            onClick={() => {
              setIsCreating(true);
            }}
          >
            +
          </CreateButton>
        </MyHabitsHeader>
        {isCreating && (
          <CreatingHabit
            setIsCreating={setIsCreating}
            setUpdate={setUpdate}
            update={update}
          />
        )}
        {isLoading ? <LinearProgress /> : ''}
        {((habits.length === 0) && (!isLoading)) ? (
          <p>
            Você não tem nenhum hábito cadastrado ainda. Adicione um hábito para
            começar a trackear!
          </p>
        ) : (
          habits.map((habit) => {
            return (
              <Habit
                id={habit.id}
                key={habit.id}
                name={habit.name}
                days={habit.days}
                setUpdate={setUpdate}
                update={update}
              ></Habit>
            );
          })
        )}
      </>
    </HabitsContainer>
  );
}

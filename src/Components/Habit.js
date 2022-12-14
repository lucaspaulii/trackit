import axios from "axios";
import { useContext, useState } from "react";
import { AuthContext } from "../Providers/auth";
import { defaultBackground, defaultDetails } from "../Resources/DefaultColors";
import { Day, Days, HabitContainer } from "../Resources/StyledComponents";
import trash from "../Resources/trash-10-32.png";
import loading from "../Resources/cupertino_activity_indicator_selective.gif"

export default function Habit({ id, name, days, update, setUpdate }) {
  const daysArr = [0, 1, 2, 3, 4, 5, 6];
  const daysLetterArr = ["D", "S", "T", "Q", "Q", "S", "S"];
  const [isLoading, setIsLoading] = useState(false);
  const { userInfo } = useContext(AuthContext);

  function deleteHabit() {
    const confirmation = window.confirm('você realmente deseja apagar esse hábito?');
    if (confirmation) {
      setIsLoading(true);
    const URL =
      `https://mock-api.bootcamp.respondeai.com.br/api/v2/trackit/habits/${id}`;
    const config = {
      headers: { Authorization: `Bearer ${userInfo.token}` },
    };
    const promise = axios.delete(URL, config);
    promise.then(() => {
        setUpdate(!update);
        setIsLoading(false);
    })
    promise.catch(() => {
        setIsLoading(false);
    })
    } 
  }

  return (
    <HabitContainer>
      <h3>{name}</h3>
      <Days>
        {daysArr.map((d) => {
          return (
            <Day
              type="button"
              key={d}
              color={days.includes(d) ? defaultBackground : defaultDetails}
              backgroundColor={
                days.includes(d) ? defaultDetails : "transparent"
              }
            >
              {daysLetterArr[d]}
            </Day>
          );
        })}
      </Days>
      <img src={isLoading ? loading : trash} alt="delete" onClick={deleteHabit} />
    </HabitContainer>
  );
}

import { useContext, useEffect, useState } from "react";
import { AuthContext } from "../Providers/auth";
import axios from "axios";

export default function Hoje() {
  const [isLoading, setIsLoading] = useState(true);
  const { userInfo } = useContext(AuthContext);
  const config = {
    headers: { Authorization: `Bearer ${userInfo.token}` },
  };
  console.log(userInfo);

  useEffect(() => {
    const URL =
      "https://mock-api.bootcamp.respondeai.com.br/api/v2/trackit/habits/today";
    const promise = axios.get(URL, config);
    promise.then((response) => {setIsLoading(false)});
    promise.catch((error) => {setIsLoading(false)});
  }, []);
  return <div>{isLoading}</div>;
}

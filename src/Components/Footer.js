import { FooterContainer } from "../Resources/StyledComponents";
import { Link } from "react-router-dom";
import { buildStyles, CircularProgressbar } from "react-circular-progressbar";
import "react-circular-progressbar/dist/styles.css";
import { defaultBackground } from "../Resources/DefaultColors";
import { useContext } from "react";
import { TodayContext } from "../Providers/todaysprogress";

export default function Footer() {
  const { todaysProgress } = useContext(TodayContext);
  return (
    <FooterContainer>
      <Link to={"/habitos"} style={{ textDecoration: "none" }}>
        <p>Hábitos</p>
      </Link>
      <Link to={"/hoje"} style={{ textDecoration: "none" }}>
        <button>
          <CircularProgressbar
            value={todaysProgress}
            text="Hoje"
            styles={buildStyles({
              pathColor: `${defaultBackground}`,
              textColor: `${defaultBackground}`,
              trailColor: "transparent",
              backgroundColor: "transparent",
            })}
          />
        </button>
      </Link>
      <Link to={"/historico"} style={{ textDecoration: "none" }}>
        <p>Histórico</p>
      </Link>
    </FooterContainer>
  );
}

import { useContext } from "react";
import { AuthContext } from "../Providers/auth";
import { HabitsContainer } from "../Resources/StyledComponents";

export default function Habitos() {
    const {userInfo} = useContext(AuthContext);
    console.log(userInfo)
    return (
        <HabitsContainer></HabitsContainer>
    )
};

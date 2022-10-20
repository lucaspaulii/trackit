import { useContext } from "react";
import { AuthContext } from "../Providers/auth";

export default function Hoje() {
    const {userInfo} = useContext(AuthContext);
    console.log(userInfo);
    return (
        <div></div>
    )
    
};

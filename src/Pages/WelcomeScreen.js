import { WelcomeScreenContainer } from "../Resources/StyledComponents";
import { Link } from "react-router-dom";
import trackitLogo from "../Resources/logoWhite.png";


export default function WelcomeScreen() {
    return (
        <WelcomeScreenContainer>
            <img src={trackitLogo} alt="logo"></img>
            <div>
            <Link to={"/login"} style={{ textDecoration: 'none' }}><p>Login</p></Link>
            <Link to={"/cadastro"} style={{ textDecoration: 'none' }}><p>Cadastre-se</p></Link>
            </div>
        </WelcomeScreenContainer>
    )
};

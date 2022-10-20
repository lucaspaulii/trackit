import { HeaderContainer } from "../Resources/StyledComponents";
import trackitWhite from "../Resources/trackitWhite.png";
import { useContext } from "react";
import { AuthContext } from "../Providers/auth";

export default function Header() {
    const {userInfo} = useContext(AuthContext);
  return (
    <HeaderContainer>
      <img src={trackitWhite} alt="track it" />
      <div>
        {userInfo && (<img
          src={userInfo.image}
          alt="profile"
        />)}     
      </div>
    </HeaderContainer>
  );
}

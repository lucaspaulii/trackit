import { HeaderContainer } from "../Resources/StyledComponents";
import trackitWhite from "../Resources/trackitWhite.png"

export default function Header() {
    return (
    <HeaderContainer>
        <img src={trackitWhite} alt="track it" />
        <div>
            <img src="https://f.i.uol.com.br/fotografia/2019/07/13/15630387845d2a1440096be_1563038784_3x2_md.jpg" alt="profile" />
        </div>
    </HeaderContainer>
    )
};

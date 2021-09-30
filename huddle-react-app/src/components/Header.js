import { StyledHeader } from "./styles/HeaderStyled";
import { Nav } from "./styles/HeaderStyled"; 
import { Button } from "./styles/ButtonStyled"; 

export default function Header() {
    return (
        <StyledHeader bg="red">
            <Nav>
                <h1>HUDDLE</h1>
                <Button>
                    Learn More
                </Button>
            </Nav>
        </StyledHeader>
    )
}




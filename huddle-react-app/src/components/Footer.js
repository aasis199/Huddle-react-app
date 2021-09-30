import { StyledFooter } from "./styles/FooterStyled"
export default function Footer() {
    return (
        <div>
            <StyledFooter>

                <div className="container">
                    <div className="row mt-5">
                        <div className="col-lg-3 p-1 mt-5">
                            <h1>HUDDLe</h1>
                            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua</p>
                            <p>+1-543-123-4567</p>
                            <p>example@huddle.com</p>
                        </div>

                        <div className="col-lg-3 p-1 mt-5">
                            <br/><br/>
                            <li><a href="">About Us</a></li>
                            <li><a href="">What We Do</a></li>
                            <li><a href="">FAQ</a></li>
                        </div>

                        <div className="col-lg-3 p-1 mt-5">
                            <br/><br/>
                            <li><a href="">Career</a></li>
                            <li><a href="">Blog</a></li>
                            <li><a href="">Contact Us</a></li>
                        </div>

                        <div className="col-lg-3 p-1 mt-5">
                            <br/><br/>
                            <div className="d-flex">
                                <li><a href=""><i className="fas fa-facebook"></i></a></li>
                                <li><a href="">Fb</a></li>
                                <li><a href="">Fb</a></li>
                            </div>
                        </div>

                    </div>
                    <p className="">© Copyright All Rights Reserved</p>

                </div>
            </StyledFooter>
        </div>
    )
}

import { Button } from "./styles/ButtonStyled";
import { StyledContainer } from './styles/ContainerStyled';
import { Card } from './styles/StyledCard'
import React from 'react';
import hero from './hero.svg';
import hero1 from './1.svg';
import hero2 from './2.svg';
import hero3 from './3.svg';



export default function Container() {
    return (
        <>
        <StyledContainer>
            <div>
                <h1>Build The Community Your Fans Will Love</h1>
                <p>Huddle re-imagines the way we build communities. You have a voice, but so does your audience. Create connections with your users as you engage in genuine discussion.</p>
                <Button >Get Started for Free</Button>
            </div>

            <div>
                <img src={hero} alt="hero" width="100%"></img>
            </div>
        </StyledContainer>

        <Card>
        <img src={hero1} alt="hero1" width="50%"></img>

            <div className="text-card">
                <h4>Grow Together</h4>
                <p>Generate meaningful discussions with your audience and build a strong, loyal community. Think of the insightful conversations you miss out on with a feedback form.</p>
            </div>
       </Card>
       
       <Card>
            <div className="text-card">
                <h4>Flowing Conversations</h4>
                <p>You wouldn't paginate a conversation in real life, so why do it online? Our threads have just-in-time loading for a more natural flow.</p>
            </div>
            <img src={hero2} alt="hero2" width="50%"></img>
       </Card>

       <Card>
       <img src={hero3} alt="hero3" width="50%"></img>

            <div className="text-card">
                <h4>Your Users</h4>
                <p>It takes no time at all to integrate Huddle with your app's authentication solution. This means, once signed in to your app, your users can start chatting immediately.</p>
            </div>
       </Card>

        </>
    )
}

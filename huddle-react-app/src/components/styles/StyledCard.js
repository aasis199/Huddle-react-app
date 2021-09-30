import styled from 'styled-components';

export const Card = styled.div`
    margin:2rem auto;
    background-color:white;
    width:70%;
    max-height:50vh;
    border-radius: 30px;
    box-shadow: 0 0 10px rgb(0 0 0 / 15%);
    display:flex;
    padding: 2rem;
    .text-card{
        margin-top: 3rem;
    }
    h1{
        font-weight: 800;
    }
    p{
        margin-top: 1rem;
         opacity:0.6;
         font-weight:100;
    }
`
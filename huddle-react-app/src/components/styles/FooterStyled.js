import styled from 'styled-components';

export const StyledFooter = styled.footer`
    background-color: ${({ theme }) => ( theme.colors.footer )};
    color:white;
    padding:1rem;
    width:100%;
    p{
        font-weight: 300;
    }
`

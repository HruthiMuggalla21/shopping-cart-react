import styled from 'styled-components';

export const Wrapper = styled.div`

    display:flex;
    justify-content:space-between;
    flex-direction:column;
    width: 100%;
    border: 1px solid #0C2D57;
    border-radius: 20px;
    height: 100%;

    button {
        border-radius: 0 0 20px 20px;
        border: 1px solid #0C2D57;
    }

    button:hover {
        color: white;
        background-color: #0C2D57;
    }

    img {
        max-height: 250px;
        object-fit: cover;
        border-radius: 20px 20px 0 0;
    }

    div {
        font-family: Arial,Helvetica, snas-serif;
        padding: 1 rem;
        height: 100%;
    }
`;
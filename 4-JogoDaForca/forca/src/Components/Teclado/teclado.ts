import styled from "styled-components";

export const Container = styled.div`
    display:grid;
    grid-template-columns: repeat(5, minmax(75px, 1fr));
    gap: 0.5rem;
    margin-top: 40px;

    *{
        font-family: 'Be Vietnam Pro';
        text-transform: uppercase;
    }

    button{
        border-radius: 10px;
        width: 50px;
        height: 40px;
        
        font-weight: bold;
        background-color: white;
        cursor: pointer;
    }

    button:hover {
        box-shadow: 0px 0px 5px rgba(0, 0, 0, 0.3);
    }
`;

export const Button = styled.button<{ isActive: boolean }>`
    opacity: ${(p) => p.isActive ? 'null': '0.3'}

    
`;
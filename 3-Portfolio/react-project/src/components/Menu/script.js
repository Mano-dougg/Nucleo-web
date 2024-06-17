import styled from 'styled-components';


export const Container = styled.div`
        ul{
            flex-direction: column;
            gap: 0px;
            padding-left: 0px;
            justify-content: center;
        }

        li{
            display:flex;
            list-style-type: none;
            text-decoration:none;
            padding-top:25px;
            justify-content: center;
        }
        a {
            font-family:"Be Vietnam Pro";
            font-size:14px;
            color: var(--azul);
            text-decoration:none;
        }

        .social{
            display:flex;
            padding-top:25px;
            justify-content: space-around;
        }
`;

export const ContentMobile = styled.nav`
    display: none;

    @media(max-width: 970px){
        display:flex;
        margin-top:25px;
        margin-left:25px;
        justify-content: start;
    }
`;

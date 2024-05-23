import styled  from "styled-components"

const Keys = ['a', 'b', 'c', 'd', 'e', 'f', 'g', 'h', 'i', 'j', 'k', 'l', 'm', 'n', 'o', 'p', 'q', 'r', 's', 't', 'u', 'v', 'w', 'x', 'y', 'z']

const WRAP = styled.div`
@media screen and (min-width: 200px) and (max-width:768px){
    display: grid;
    gap: 0.5rem;
    grid-template-columns: repeat(auto-fill, minmax(30px, 1fr));
    max-width: 650px; 
    margin: 0 auto; 
    position: relative;
    top:305px;
    left: 23px;
}
@media screen and (min-width: 768px) and (max-width:1270px){
    display: grid;
    gap: 0.8rem;
    grid-template-columns: repeat(auto-fill, minmax(50px, 1fr));
    max-width: 650px; 
    margin: 0 auto; 
    position: relative;
    top:630px;
    left: 20px;
}
@media screen and (min-width:1270px){
    display: grid;
    gap: 0.8rem;
    grid-template-columns: repeat(auto-fill, minmax(50px, 1fr));
    max-width: 650px; 
    margin: 0 auto; 
    position: relative;
    top:550px;
    left: 40px;
}

`

const Button = styled.button`
    padding: 10px;
    font-size: 1.2rem;
    border: none;
    background-color: #4a90e2; 
    border: 1px solid transparent;
    color: #fff; 
    cursor: pointer;
    border-radius:15px;
    transition: border-radius 1000ms;

    &:hover {
        background-color: #e0e0e0;
        border-radius:20px;
        border: 1px solid black;
    }
@media screen and (min-width: 200px) and (max-width:768px){
    padding: 10px;
    font-size: 1.0rem;
    border: none;
    background-color: #4a90e2; 
    border: 1px solid transparent;
    color: #fff; 
    cursor: pointer;
    border-radius:15px;
    transition: border-radius 1000ms;
    position:relative;
    left:-13px;

    &:hover {
        background-color: #e0e0e0;
        border-radius:20px;
        border: 1px solid black;
    }
}
`;

function Escrever(){
    return(
        <WRAP>
            {Keys.map((letter)=>(
                <Button key={letter}>{letter}</Button>
            ))}
        </WRAP>
    )
}

export default Escrever
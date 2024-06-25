import NavBar from "@/components/ui/NavBar/NavBar";
import { HomeContainer } from "./HomeStyle";
import Header from "@/components/ui/Header/Header";
import ContentSec from "@/components/ui/ContentSec/ContentSec";
import { createClient } from "../../../../jaedsonblog/src/prismicio";

interface teste{
    children:any;
}


const HomeScreen:React.FC<teste> = ({children}) => {

   /* page.data.descricao[0].text; */

    return ( 
        <HomeContainer>
            {children}
        </HomeContainer>
     );
}


 
export default HomeScreen;
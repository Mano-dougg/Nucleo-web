import './style.css'
import Header from "./Header"
import Section from "./Section"
import { useFirstPrismicDocument} from '@prismicio/react'


export default function Main(){

    const [document] = useFirstPrismicDocument('home');
    
    console.log(document) 

    //console.log(document.data)
    return(
        <main>
            
            < Header />
            <p></p>
            <Section></Section>
        </main>
    )
}
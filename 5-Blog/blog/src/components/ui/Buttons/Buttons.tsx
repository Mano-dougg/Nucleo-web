import Link from "next/link";
import {ButtonContainer} from './button';

interface ButtonsProps{
    PlaceHolder:string;
    classes:string;
    link:string;
}


const Buttons:React.FC <ButtonsProps> = ({PlaceHolder, classes, link = "link"}) => {
    return ( 
        <ButtonContainer>
            <Link href={link} className={classes}>
                {PlaceHolder}
            </Link>    
        </ButtonContainer>
     );
}
 
export default Buttons;
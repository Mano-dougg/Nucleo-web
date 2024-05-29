import Link from "next/link";
import {ButtonContainer} from './button';

interface ButtonsProps{
    PlaceHolder:string;
    classes:any;
}


const Buttons:React.FC <ButtonsProps> = ({PlaceHolder, classes}) => {
    return ( 
        <ButtonContainer>
            <Link href={""} className={classes}>
                {PlaceHolder}
            </Link>    
        </ButtonContainer>
     );
}
 
export default Buttons;
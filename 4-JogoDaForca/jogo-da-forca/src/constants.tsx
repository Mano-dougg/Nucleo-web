import { createContext } from "react";

export class gameWord{
    constructor(initialString:()=>string, setter:(str:string)=>void){
        this.wordGetter = initialString;
        this.wordChooser = setter;
    }

    wordGetter:()=>string;
    wordChooser:(wordToSet:string)=>void;
}

export const wordContext = createContext(new gameWord(()=>'', (str:string)=>{str+''}))
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

//game tracker

export type singleTrack = {
    result:string,
    pastWord:string
}

export class gameTracker{
    constructor(initialTracker:()=>singleTrack[], setter:(track:singleTrack)=>void){
        this.trackerGetter = initialTracker;
        this.trackerSetter = setter;
    }

    trackerGetter:()=>singleTrack[];
    trackerSetter:(track:singleTrack)=>void;
}

export const trackerContext = createContext(new gameTracker(()=>[{result:'',pastWord:''}], ({result,pastWord}:singleTrack)=>{result+pastWord}))

//player list

export class playerList{
    constructor(getter:()=>string[], setter:(str:string)=>void){
        this.getter = getter;
        this.setter = setter;
    }

    getter:()=>string[]
    setter:(str:string)=>void
}

export const playerListContext = createContext(new playerList(()=>[''], (str:string)=>{str}))

//word list

class listOfWords{
    constructor(){}   

    get(prop:string):string[]{
            switch(prop){
                case 'animais':
                    return this.animais;
                case 'comidas':
                    return this.comidas;
                case 'lugares':
                    return this.lugares;
                case 'nomes próprios':
                    return this["nomes próprios"];
                case 'objetos':
                    return this.objetos;
                default:
                    return this["aleatório"]
            }
        }

    animais:string[]=[
        'cachorro',
        'gato',
        'preguiça',
        'caranguejo',
        'siri',
        'urubu',
        'besouro',
        'lagartixa',
        'peixe-palhaço',
        'baiacu'
    ];
    comidas:string[]=[
        'pizza',
        'arroz',
        'feijao',
        'feijoada',
        'macarrão',
        'hamburguer',
        'pao de alho',
        'biscoito',
        'cuzcuz',
        'ovo'
    ];
    lugares:string[]=[
        'brasil',
        'salvador',
        'lua',
        'sao paulo',
        'egito',
        'terra',
        'republica democratica do congo',
        'china',
        'acre',
        'ceara'
    ];
    'nomes próprios':string[]=[
        'bruno',
        'mikael',
        'julia',
        'carlos',
        'alecio',
        'joao',
        'fernando',
        'levi',
        'daiane',
        'fabio',
    ];
    objetos:string[]=[
        'escova de dente',
        'isqueiro',
        'caderno',
        'caneta',
        'vassoura',
        'alicate',
        'mamadeira',
        'mascara',
        'mochila',
        'bolsa'
    ];
    'aleatório':string[]=[
        'Animais',
        'Comidas',
        'Lugares',
        'Nomes próprios',
        'Objetos'
    ];
}

export const wordList:listOfWords = new listOfWords()
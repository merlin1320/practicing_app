import { createContext } from "react";

type BackgroundColorTextProps={
    currentColor: string,
    updateBackgroundColor(newColor: string): void
}

export const BackgroundColorContext= createContext<BackgroundColorTextProps> ({
    currentColor: 'blue', 
    updateBackgroundColor:()=>{
        
    }})

export default BackgroundColorContext
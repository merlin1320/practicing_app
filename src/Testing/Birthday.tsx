// import { ReactNode } from "react";

// const myBday = new Date('1992-01-09');
// const age = Math.floor((today.getTime() - myBday.getTime())/ (1000 * 60 * 60 * 24 * 365))



const today = new Date();
export function Birthday(props: {birthdate: string}) {
    const newDate = new Date(props.birthdate);
    const age = Math.floor((today.getTime() - newDate.getTime())/ (1000 * 60 * 60 * 24 * 365))
    return age
}
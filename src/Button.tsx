import { ReactNode } from "react"

type ButtonProps = {
    children: ReactNode;
    title: string;
}

export function Button(props:ButtonProps){
    return props.children
}

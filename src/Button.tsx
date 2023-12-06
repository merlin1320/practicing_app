import { FC, ReactNode } from "react"

type ButtonProps = {
    children: ReactNode
}

export const Button:FC<ButtonProps> =(props ) => {
    return props.children
}
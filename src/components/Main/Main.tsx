import { ReactNode } from "react"
import "./Main.css"

interface IMain{
    children?: ReactNode
}
export function Main(props: IMain){
    return (
        <div className="maindiv">
            { props.children}
        </div>
    )
}
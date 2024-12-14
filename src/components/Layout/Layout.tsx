import { Header } from "../Header/Header";
import { Footer } from "../Footer/Footer";
import { PostList } from '../PostList/PostList'
import { ReactNode } from "react";
import { Main } from "../Main/Main";
import "./Layout.css";
import { Outlet } from "react-router-dom";

interface ILayout{
    children?: ReactNode
}
export function Layout(props: ILayout){
    return (
        <div className="layout">
            <Header></Header>
            <Main>
                <Outlet></Outlet>
            </Main>
            <Footer></Footer>
        </div>
    )
}
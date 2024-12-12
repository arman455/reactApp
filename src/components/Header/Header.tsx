import { Link } from "react-router-dom"
import "./Header.css"

export function Header(){
    return (
        <div className="header">
            <Link to={"/"}>
                <div className="postfun">
                    <a href="/"><img className="stariyIMG" src="/static/stariy 6.png" alt="" /></a>
                    <a href="/" className="font">PostFun</a>
                </div>
            </Link>

            <Link id="othertext" to={"/posts"}>
                <a href="" id="othertext" className="font">All Post</a>
            </Link>
            <a href="" id="othertext" className="font">Search</a>
        </div>
    )
}
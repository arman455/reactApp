import { Link } from "react-router-dom"
import "./Footer.css"

export function Footer(){
    return (
        <div className="footer">
            
            <a href="/" className="linkFooter"><img src="/static/viber.png" className="imgFooter" alt="" />Viber</a>
            <a href="/" className="linkFooter"><img src="/static/insta.png"className="imgFooter" alt="" />Instagram</a>
            <a href="/" className="linkFooter"><img src="/static/tg.png" className="imgFooter" alt="" />Telegram</a>
            <a href="https://www.twitch.tv/stariy_bog/" className="linkFooter"><img src="/static/twitch.png" className="imgFooter" alt="" />Twitch</a>

            <Link to={"/"}>
                <div className="postfun">
                    <a href="/" className="fontFooter">PostFun</a>
                    <a href="/"><img className="stariyIMG" src="/static/stariy 7.png" alt="" /></a>
                </div>
            </Link>

        </div>
    )
}
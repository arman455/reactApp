import "./Header.css"

export function Header(){
    return (
        <div className="header">

            <div className="postfun">
                <a href="/"><img className="stariyIMG" src="/static/stariy 6.png" alt="" /></a>
                <a href="/" className="font">PostFun</a>
            </div>

            <a href="" id="othertext" className="font">All Post</a>
            <a href="" id="othertext" className="font">Search</a>
        </div>
    )
}
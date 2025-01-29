import { Link } from "react-router-dom"

import "./SearchPost.css"

interface ISearchPostProps {
    id: number,
    title: string,
    social_img: string,
}

export function SearchPost(props:ISearchPostProps){
    return(
        <div>
            <Link className="search-post" to={`/post/${props.id}`}>
                <div className="search-prodInfo">
                    <img className="postImg" src={props.social_img} alt=""/>
                    <h1 className="search-text">{props.title.slice(0,80)}..</h1>
                </div>
            </Link>
        </div>
    )
}

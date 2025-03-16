import { Link } from "react-router-dom";
import "./SearchPost.css";

interface ISearchPostProps {
  id: number;
  name: string;
  social_img?: string;
}

export function SearchPost(props: ISearchPostProps) {
  return (
      <div className="search-post-container">
        <div className="search-prodInfo">
          <img className="postImg" src={props.social_img} />
          <h1 className="search-text">{props.name.slice(0, 80)}..</h1>
        </div>
      </div>
  );
}
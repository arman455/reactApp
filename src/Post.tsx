import { useState } from "react";

interface PostProps {
    header: string;
    description: string;
    image: string;
    author: string;
    children?: React.ReactNode;
}

export function Post(props: PostProps){

    const [amountLike, setLikeAmount] = useState(0)
    const [isLiked, setIsLiked] = useState(false);

    const [amountDisLike, setDisAmount] = useState(0)
    const [isDisLiked, setIsDisLiked] = useState(false);

    function Like() {
        if (!isLiked) {
            setLikeAmount(amountLike + 1);
            setIsLiked(true);
        }
    }

    function disLike() {
        if (!isDisLiked) {
            setDisAmount(amountDisLike + 1);
            setIsDisLiked(true);
        }
    }

    return (
        <div>
            <h1>{props.header}</h1>
            <p>{props.description}</p>
            <img width={300} height={300} src={props.image} alt="imagePost" />
            <p>{props.author}</p>

            <p>Like: {amountLike}</p>
            <button onClick={Like} disabled={isLiked}>Like</button>

            <p>Dislike: {amountDisLike}</p>
            <button onClick={disLike} disabled={isDisLiked}>Dislike</button>

        </div>
    )
}
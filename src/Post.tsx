import { isDisabled } from "@testing-library/user-event/dist/utils";
import { useState } from "react";

interface PostProps {
    header: string;
    description: string;
    image: string;
    author: string;
    children?: React.ReactNode;
}

export function Post(props: PostProps){

    const [amount, setAmount] = useState(0)
    const [isLiked, setIsLiked] = useState(false);

    function Like() {
        if (!isLiked) {
            setAmount(amount + 1);
            setIsLiked(true);
        }
    }

    return (
        <div>
            <h1>{props.header}</h1>
            <p>{props.description}</p>
            <img width={300} height={300} src={props.image} alt="imagePost" />
            <p>{props.author}</p>
            <p>{amount}</p>
            <button onClick={Like}>Like</button>
        </div>
    )
}
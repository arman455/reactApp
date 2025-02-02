import { useContext, useRef, useState } from "react";
import "./PostCard.css";
import {ModalForPost} from "../../ModalForPost/ModalForPost";
import { Link } from "react-router-dom";
import { likedPostContext } from "../../../context/likedContext";


interface PostProps {
    id: number;
    name: string;
    description: string;
    image: string;
    author: string;
    children?: React.ReactNode;
}

export function Post(props: PostProps) {

    const [amountDisLike, setDisAmount] = useState(0);
    const [isDisLiked, setIsDisLiked] = useState(false);
    const [isModalOpen, setIsModalOpen] = useState(false);

    const { likesPost, addLikesItem, deleteLikesItem } = useContext(likedPostContext);
    const [isClick, setIsClick] = useState(false);

    const openModal = () => {
        setIsModalOpen(true);
    };

    const closeModal = () => {
        setIsModalOpen(false);
    };

    const handleDislike = () => {
        if (!isDisLiked) {
            setDisAmount(amountDisLike + 1);
            setIsDisLiked(true);
        }
    };

    const currentLikeCount = likesPost.find((post) => post.id === props.id)?.likes || 0;

    function handleLike() {
        const updatedLikeCount = isClick ? currentLikeCount - 1 : currentLikeCount + 1;
    
        if (isClick) {
            deleteLikesItem(props.id);
        } else {
            addLikesItem({
                id: props.id,
                title: props.name,
                description: props.description,
                social_image: props.image,
                user: { name: props.name },
                likes: updatedLikeCount,
            });
        }
        setIsClick(!isClick);
        // console.log(updatedLikeCount);
    }


    return (
        <div className="postdiv">
            <Link className="linkdiv" to={`/post/${props.id}`}>
                <h1 className="name">{props.name.slice(0, 75)}...</h1>
                <img
                    width={350}
                    height={170}
                    src={props.image}
                    className="imgpost"
                    alt="imagePost"
                />
            </Link>
            <button onClick={openModal} className="buttondetailed">Detailed</button>

            <ModalForPost isOpen={isModalOpen} onClose={closeModal}>
                <div className="modal-div">

                    <div className="namediv">
                    <h1 className="name">{props.author}: {props.name}</h1>
                    </div>
                    <img width={500} height={250} src={props.image} className="imgpost" alt="imagePost" />
                    <div className="namediv">
                        <p className="description">{props.description}</p>
                    </div>
                    <div className="divButton">
                        <button className="buttonLike" onClick={handleLike}>{currentLikeCount ? `Like: ${currentLikeCount}` : "Like"}</button>
                        <button className="buttonDislike" onClick={handleDislike} disabled={isDisLiked}>{isDisLiked ? `Dislike: ${amountDisLike}` : "Dislike"}</button>
                        <button className="buttondetailed" onClick={closeModal}>Back</button>
                    </div>

                </div>
            </ModalForPost>
        </div>
    );
}

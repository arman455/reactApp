import { useState } from "react";
import "./PostCard.css"
import ModalWindow from "../../ModalWindow/ModalWindow";
import { Link } from "react-router-dom";

interface PostProps {
    id: number;
    name: string;
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

    const [isModalOpen, setIsModalOpen] = useState(false);

    const openModal = () => setIsModalOpen(true);
    const closeModal = () => setIsModalOpen(false);


    const handleLike = () => {
        if (!isLiked) {
          setLikeAmount(amountLike + 1);
          setIsLiked(true);
        }
      };
    
      const handleDislike = () => {
        if (!isDisLiked) {
          setDisAmount(amountDisLike + 1);
          setIsDisLiked(true);
        }
      };


    return (
        <div className="postdiv">
            <Link className="linkdiv" to={`/post/${props.id}`}>
                <h1 className="name">{props.name.slice(0,75)}...</h1>
                <img width={350} height={170} src={props.image} className="imgpost" alt="imagePost" />
            </Link>

            <button onClick={openModal} className="buttondetailed">Detailed</button>

            <ModalWindow isOpen={isModalOpen} onClose={closeModal}>
                <div className="modaldiv">

                    <div className="namediv">
                    <h1 className="name">{props.author}: {props.name}</h1>
                    </div>
                    <img width={500} height={250} src={props.image} className="imgpost" alt="imagePost" />
                    <div className="namediv">
                        <p className="description">{props.description}</p>
                    </div>
                    <div className="divButton">
                        <button className="buttonLike"onClick={handleLike} disabled={isLiked}>{isLiked ? `Like: ${amountLike}` : "Like"}</button>
                        <button className="buttonDislike" onClick={handleDislike} disabled={isDisLiked}>{isDisLiked ? `Dislike: ${amountDisLike}` : "Dislike"}</button>
                        <button className="buttondetailed" onClick={closeModal}>Back</button>
                    </div>

                </div>
            </ModalWindow>
        </div>
    )
}
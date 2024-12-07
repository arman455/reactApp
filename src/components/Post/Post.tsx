import { useState } from "react";
import "./Post.css"
import Modal from "../ModalWindow/ModalWindow";

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

    const [isModalOpen, setIsModalOpen] = useState(false);

    const openModal = () => setIsModalOpen(true);
    const closeModal = () => setIsModalOpen(false);

    const [buttonText1, setButtonText1] = useState("Like");
    const [buttonText2, setButtonText2] = useState("Dislike");


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
            <h1 className="name">{props.header}</h1>
            <img width={300} height={300} src={props.image} className="imgpost" alt="imagePost" />

            <button onClick={openModal} className="buttondetailed">Detailed</button>

            <Modal isOpen={isModalOpen} onClose={closeModal}>
                <div className="modaldiv">

                    <div className="namediv">
                    <h1 className="name">{props.author}: {props.header}</h1>
                    </div>

                    <img width={300} height={300} src={props.image} className="imgpost" alt="imagePost" />

                    <div className="namediv">
                        <p className="name">{props.description}</p>
                    </div>

                    <div className="divButton">

                        <button className="buttonLike"onClick={handleLike} disabled={isLiked}>{isLiked ? `Like: ${amountLike}` : "Like"}</button>

                        <button className="buttonDislike" onClick={handleDislike} disabled={isDisLiked}>{isDisLiked ? `Dislike: ${amountDisLike}` : "Dislike"}</button>

                        <button className="buttondetailed" onClick={closeModal}>Back</button>
                    </div>

                </div>
            </Modal>

        </div>
    )
}
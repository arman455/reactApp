import { ReactNode } from "react";
import "./ModalForPost.css"; 

interface IModalProps {
    isOpen: boolean;
    onClose: () => void;
    children: ReactNode;
}
// модалка только для поста? очень специфическая, и в принципе ничем не отличается от обычной модалки
export function ModalForPost({ isOpen, onClose, children }: IModalProps){
    if (!isOpen) return null;

    return (
        <div className="modal-overlay" onClick={onClose}>
            <div className="modal-content" onClick={(e) => e.stopPropagation()}>
                <button className="modal-close" onClick={onClose}>
                </button>
                {children}
            </div>
        </div>
    );
};
import React, { ReactNode, useEffect, useRef } from "react";
import "./Modal.css"; 
import { createPortal } from "react-dom";

interface ModalProps {
    allowModalCloseOutside: boolean,
    onClose: ()=> void,
    container?: Element,
    className: string,
    children: ReactNode
}

export function ModalWindow(props: ModalProps){

    let {children, allowModalCloseOutside, onClose, container=document.body, className} = props
    const modalRef = useRef<HTMLDivElement | null>(null)

    function handleClickOutside(event: MouseEvent){
        if (modalRef.current !== event.target && !modalRef.current?.contains(event.target as Node)){
            onClose()
        }
    }

    useEffect(() => {
        if (!allowModalCloseOutside){
            return
        }

        document.addEventListener("click", handleClickOutside)
        return () => {
            document.removeEventListener("click", handleClickOutside)
        }
    }, [])

    if(document.querySelector("." + className)){
        onClose()
        return null
    }

    return createPortal(
        <div ref={modalRef} className = {"modal " + className} >{children}</div>,
        container
    )
};



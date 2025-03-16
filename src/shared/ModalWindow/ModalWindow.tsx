import React, { ReactNode, useEffect, useRef } from "react";
import "./Modal.css";
import { createPortal } from "react-dom";

interface ModalProps {
  allowModalCloseOutside: boolean;
  onClose: () => void;
  container?: HTMLElement | null;
  className: string;
  children: ReactNode;
}

export function ModalWindow(props: ModalProps) {
  const { children, allowModalCloseOutside, onClose, container = document.body, className } = props;
  const modalRef = useRef<HTMLDivElement | null>(null);

  const handleClickOutside = (event: MouseEvent) => {
    if (modalRef.current && !modalRef.current.contains(event.target as Node)) {
      onClose();
    }
  };

  useEffect(() => {
    if (allowModalCloseOutside) {
      document.addEventListener("click", handleClickOutside);
    }
    return () => {
      document.removeEventListener("click", handleClickOutside);
    };
  }, [allowModalCloseOutside, onClose]);

  const modalContainer = container || document.body;

  return createPortal(
    <div ref={modalRef} className={`modal ${className}`}>
      {children}
    </div>,
    modalContainer
  );
}
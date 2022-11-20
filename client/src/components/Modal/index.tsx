import { useEffect, useState } from "react";
import create from "zustand";
import ReactModal from "react-modal";
import { Button } from "../Button";
import { ModalActions, ModalContent, modalStyle, ModalTitle } from "./style";
ReactModal.setAppElement("#root");

export const useModal = create<ModalProps>((set) => ({
  content: undefined,
  showModal: ({ content, title }: ModalView) => set({ content, title }),
  title: null,
}));

export const Modal = () => {
  const [isOpen, setOpen] = useState(false);
  const { content, showModal, title } = useModal();

  useEffect(() => setOpen(content ? true : false), [content]);

  const handleClose = () => {
    showModal({ content: undefined, title: "" });
    setOpen(false);
  };

  return (
    <ReactModal isOpen={isOpen} onRequestClose={handleClose} style={modalStyle}>
      <ModalTitle>{title}</ModalTitle>
      <ModalContent>{content}</ModalContent>
      <ModalActions>
        <Button onClick={handleClose} type="reset">
          Close
        </Button>
      </ModalActions>
    </ReactModal>
  );
};

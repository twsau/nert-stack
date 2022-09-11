import { useEffect, useState } from "react";
import create from "zustand";
import ReactModal from "react-modal";
ReactModal.setAppElement("#root");

interface ModalState {
  content: React.ReactElement<any> | null;
  showModal: (c: React.ReactElement<any> | null) => void;
}

const style = {
  overlay: {
    alignItems: "center",
    background: "none",
    animation: "var(--animation-fade-in) forwards",
    backdropFilter: "blur(5px) brightness(0.9)",
    display: "flex",
    inest: 0,
    opactiy: 0,
    position: "fixed",
  },
  content: {
    animation: "var(--animation-slide-in-up)",
    backgroundColor: "var(--surface-1)",
    border: "1px solid var(--text)",
    borderRadius: "var(--radius-2)",
    boxShadow: "var(--shadow-2)",
    height: "fit-content",
    margin: "auto",
    maxWidth: "var(--size-content-3)",
    padding: "var(--size-3)",
    width: "fit-content",
  },
};

export const useModal = create<ModalState>((set) => ({
  content: null,
  showModal: (content) => set({ content }),
}));

export const Modal = () => {
  const [isOpen, setOpen] = useState(false);
  const { content } = useModal();

  useEffect(() => setOpen(content ? true : false), [content]);
  return (
    <ReactModal
      children={content}
      // className="modal"
      isOpen={isOpen}
      onRequestClose={() => setOpen(false)}
      style={style}
      // overlayClassName="modal-container"
    />
  );
};

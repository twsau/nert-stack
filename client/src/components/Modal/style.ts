import styled from "styled-components";

export const modalStyle = {
  overlay: {
    alignItems: "center",
    background: "none",
    animation: "var(--animation-fade-in) forwards",
    backdropFilter: "blur(5px) brightness(0.9)",
    display: "flex",
    inset: 0,
    opacity: 0,
    position: "fixed",
  },
  content: {
    animation: "var(--animation-slide-in-up)",
    backgroundColor: "var(--surface-1)",
    border: "1px solid var(--text-1)",
    borderRadius: "var(--radius-2)",
    boxShadow: "var(--shadow-2)",
    height: "fit-content",
    margin: "auto",
    width: "min(100%, var(--size-content-3))",
    padding: "var(--size-3)",
  },
};

export const ModalTitle = styled.h3`
  text-align: center;
`;

export const ModalContent = styled.div`
  padding: var(--size-3);
`;

export const ModalActions = styled.div`
  align-items: center;
  display: flex;
  gap: var(--size-3);
  justify-content: flex-end;
  margin: var(--size-3);
`;

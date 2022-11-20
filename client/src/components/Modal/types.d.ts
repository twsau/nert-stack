interface ModalProps {
  content: React.ReactNode;
  showModal: (view: ModalView) => void;
  title: string | null;
}

interface ModalView {
  content: React.ReactNode;
  title: string;
}

type ButtonType = "button" | "reset" | "submit" | undefined;

interface ButtonProps {
  children: React.ReactNode;
  onClick: (event: React.MouseEvent) => void;
  type?: ButtonType;
}

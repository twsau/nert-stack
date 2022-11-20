interface CardProps {
  children: React.ReactNode;
  icon?: React.ReactNode;
  title?: string;
  type?: "error" | "info" | "success" | "warning";
}

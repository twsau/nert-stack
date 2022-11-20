interface CardProps {
  children: React.ReactNode;
  title: string;
  type?: "error" | "info" | "success" | "warning";
}

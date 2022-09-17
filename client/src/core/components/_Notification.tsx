import toast, { Toaster } from "react-hot-toast";

export const Notifications = () => (
  <Toaster
    toastOptions={{
      position: "top-right",
      style: {
        backgroundColor: "var(--surface-1)",
        border: "1px solid var(--surface-4)",
        boxShadow: "var(--shadow-2)",
        color: "var(--text-1)",
      },
    }}
  />
);
export const msg = toast;

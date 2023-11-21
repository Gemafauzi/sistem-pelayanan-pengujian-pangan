import { NextUIProvider } from "@nextui-org/react";
import { useNavigate, Outlet } from "react-router-dom";
import Header from "./components/Header";

export default function App() {
  const navigate = useNavigate();
  return (
    <NextUIProvider
      navigate={navigate}
      className="min-h-screen light text-foreground bg-background"
    >
      <Header />
      <Outlet />
    </NextUIProvider>
  );
}

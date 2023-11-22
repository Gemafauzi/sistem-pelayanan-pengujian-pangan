import { NextUIProvider } from "@nextui-org/react";
import { useNavigate, Outlet } from "react-router-dom";
import Footer from "./components/layout/Footer";
import Header from "./components/layout/Header";
import { RootProvider } from "./libs/providers/RootProvider";

export default function App() {
  const navigate = useNavigate();

  return (
    <NextUIProvider
      navigate={navigate}
      className="flex flex-col min-h-screen light text-foreground bg-background"
    >
      <RootProvider>
        <Header />
        <Outlet />
        <Footer />
      </RootProvider>
    </NextUIProvider>
  );
}

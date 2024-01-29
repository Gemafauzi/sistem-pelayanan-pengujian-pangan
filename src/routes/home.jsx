import { useEffect } from "react";
import HeroHome from "../components/home/HeroHome";
import ServiceHome from "../components/home/ServiceHome";
import { useNavigate } from 'react-router-dom';

const Home = () => {
  const navigate = useNavigate();

  useEffect(() => {
   const user =JSON.parse(localStorage.getItem('user'));
   if (!user) {
    navigate('/login');
   }
   
  }, []);

  return (
    <main className="w-full min-h-screen">
      <HeroHome />
      <ServiceHome />
    </main>
  );
};

export default Home;

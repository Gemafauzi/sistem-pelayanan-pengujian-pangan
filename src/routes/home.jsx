import HeroHome from "../components/home/HeroHome";
import ServiceHome from "../components/home/ServiceHome";

const Home = () => {
  return (
    <main className="w-full min-h-screen">
      <HeroHome />
      <ServiceHome />
    </main>
  );
};

export default Home;

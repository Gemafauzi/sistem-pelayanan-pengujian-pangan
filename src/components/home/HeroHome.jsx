import { Image } from "@nextui-org/react";
import { Splide, SplideSlide } from "@splidejs/react-splide";
import "@splidejs/react-splide/css";

const dataHero = [
  {
    title: "Apa saja keuntungan melakukan pengujian disini?",
    imgUrl:
      "https://images.unsplash.com/photo-1695653423034-d15c9f3d1328?q=80&w=1742&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDF8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
  },
  {
    title: "Lorem ipsum dolor sit amet?",
    imgUrl:
      "https://plus.unsplash.com/premium_photo-1700391373098-cd9acd1b7e7c?q=80&w=1740&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
  },
];

const HeroHome = () => {
  return (
    <Splide
      options={{ rewind: true, type: "fade", autoplay: true, arrows: false }}
      tag="section"
      aria-label="Banner Home"
    >
      {dataHero.map((banner, index) => (
        <SplideSlide key={index} className="relative">
          <Image
            width={"100%"}
            src={banner.imgUrl}
            alt={`Banner ${index + 1}`}
            className="object-cover object-center w-full max-h-[70vh] brightness-90 rounded-none"
          />

          <h2 className="absolute z-10 text-2xl font-bold text-center text-white -translate-x-1/2 -translate-y-1/2 md:text-4xl lg:text-5xl top-1/2 left-1/2">
            {banner.title}
          </h2>
        </SplideSlide>
      ))}
    </Splide>
  );
};

export default HeroHome;

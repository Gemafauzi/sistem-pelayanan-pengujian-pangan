import { Link } from "react-router-dom";
import { Image } from "@nextui-org/react";

const dummyLayanan = [
  {
    name: "Uji Nutrisi",
    imgUrl:
      "https://images.unsplash.com/photo-1695653423034-d15c9f3d1328?q=80&w=1742&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDF8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    link: "/service/uji-nutrisi",
  },
  {
    name: "Uji Nutrisi",
    imgUrl:
      "https://images.unsplash.com/photo-1695653423034-d15c9f3d1328?q=80&w=1742&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDF8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    link: "/service/uji-nutrisi",
  },
  {
    name: "Uji Nutrisi",
    imgUrl:
      "https://images.unsplash.com/photo-1695653423034-d15c9f3d1328?q=80&w=1742&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDF8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    link: "/service/uji-nutrisi",
  },
  {
    name: "Uji Nutrisi",
    imgUrl:
      "https://images.unsplash.com/photo-1695653423034-d15c9f3d1328?q=80&w=1742&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDF8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    link: "/service/uji-nutrisi",
  },
  {
    name: "Uji Nutrisi",
    imgUrl:
      "https://images.unsplash.com/photo-1695653423034-d15c9f3d1328?q=80&w=1742&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDF8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    link: "/service/uji-nutrisi",
  },
  {
    name: "Uji Nutrisi",
    imgUrl:
      "https://images.unsplash.com/photo-1695653423034-d15c9f3d1328?q=80&w=1742&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDF8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    link: "/service/uji-nutrisi",
  },
];

const ServiceHome = () => {
  return (
    <section className="container flex flex-col items-center gap-12 py-24">
      <h2 className="text-3xl font-semibold text-center lg:text-5xl">
        Layanan Kami
      </h2>

      <ul className="grid grid-cols-1 gap-6 sm:grid-cols-2 md:grid-cols-3">
        {dummyLayanan.map((service, index) => (
          <li key={index}>
            <Link
              to={service.link}
              className="relative overflow-hidden rounded-2xl"
            >
              <Image
                isZoomed
                src={service.imgUrl}
                alt={service.name}
                className="object-cover object-center w-full h-[262px] brightness-75 rounded-none"
              />

              <h3 className="absolute z-10 text-2xl font-semibold text-center text-white -translate-x-1/2 bottom-5 left-1/2">
                {service.name}
              </h3>
            </Link>
          </li>
        ))}
      </ul>
    </section>
  );
};

export default ServiceHome;

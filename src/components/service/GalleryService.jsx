import { Splide, SplideSlide } from "@splidejs/react-splide";
import { Image } from "@nextui-org/react";
import "@splidejs/react-splide/css";
import { FaRegBuilding } from "react-icons/fa";
import { BsPinMapFill } from "react-icons/bs";

const dataGallery = [
  {
    img: "https://images.unsplash.com/photo-1695653423034-d15c9f3d1328?q=80&w=1742&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDF8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
  },
  {
    img: "https://plus.unsplash.com/premium_photo-1700391373098-cd9acd1b7e7c?q=80&w=1740&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
  },
  {
    img: "https://images.unsplash.com/photo-1695653423034-d15c9f3d1328?q=80&w=1742&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDF8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
  },
  {
    img: "https://plus.unsplash.com/premium_photo-1700391373098-cd9acd1b7e7c?q=80&w=1740&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
  },
];

const GalleryService = () => {
  return (
    <article className="flex flex-col col-span-2 gap-6">
      <Splide
        options={{ rewind: true, arrows: true }}
        tag="div"
        aria-label="Gallery Service"
      >
        {dataGallery.map((banner, index) => (
          <SplideSlide key={index} className="relative">
            <Image
              width={"100%"}
              src={banner.img}
              alt={`Banner ${index + 1}`}
              className="object-cover object-center w-full max-h-[393px] aspect-[9/16] rounded-none"
            />
          </SplideSlide>
        ))}
      </Splide>

      <ul className="space-y-2 text-xs">
        <li className="flex items-center gap-4">
          <FaRegBuilding className="text-4xl" />

          <p>
            Laboratorium Pengujian Produk Pangan, Gedung C Lantai 3 - Kampus IV
            Universitas Pasundan Bandung.
          </p>
        </li>

        <li className="flex items-center gap-4">
          <BsPinMapFill className="text-4xl" />

          <p>
            Jl. Dr. Setiabudi No.193, Gegerkalong, Kec. Sukasari, Kota Bandung,
            Jawa Barat 40153
          </p>
        </li>
      </ul>
    </article>
  );
};

export default GalleryService;

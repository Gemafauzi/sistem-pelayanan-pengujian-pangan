import { Image } from "@nextui-org/react";
import { IoLogoWhatsapp, IoMdMail } from "react-icons/io";
import logoKAN from "@/assets/logo/kan.png";
import logoCiptaKarya from "@/assets/logo/pt-cipta-karya-pangan.png";
import logoUnpas from "@/assets/logo/unpas.png";

const Footer = () => {
  return (
    <footer className="w-full py-12 mt-auto text-white bg-base/80">
      <article className="container flex flex-wrap items-center gap-10 md:gap-6">
        <ul className="flex-[1_0_200px] text-xs flex flex-col items-center md:items-start text-center md:text-left">
          <li>
            Jl. Dr. Setiabudi No. 193 Bandung (Kampus IV Universitas Pasundan
            Gedung C Lantai 3) Bandung 40153
          </li>
          <li>Telp. (022) 2019339 – 2019433</li>
          <li>Fax. (022) 2019339</li>
        </ul>

        <div className="flex flex-col items-center gap-3 flex-[1_0_200px] order-first lg:order-none">
          <Image
            width={129}
            height={55}
            alt="logo KAN"
            src={logoKAN}
            className="object-contain"
          />

          <div className="flex flex-col items-center gap-3">
            <div className="flex items-center gap-6">
              <Image
                width={41}
                height={41}
                alt="logo Unpas"
                src={logoUnpas}
                className="object-contain"
              />

              <Image
                width={41}
                height={41}
                alt="logo Cipta Karya"
                src={logoCiptaKarya}
                className="object-contain"
              />
            </div>

            <p className="text-sm font-semibold text-center">
              PT. Cipta Karya Pangan Pasundan
            </p>
          </div>

          <p className="text-xs font-medium text-center">
            Jasa Analisis Pangan | Laboratorium Teknologi Pangan
          </p>
        </div>

        <div className="flex flex-col items-center gap-4 flex-[1_0_200px]">
          <h3 className="font-bold text-center">Hubungi Kami</h3>

          <ul className="space-y-4">
            <li className="flex items-center gap-2">
              <IoMdMail fill="#ffffff" className="text-2xl" />

              <a
                href="mailto:labteknologipangan@unpas.ac.id"
                target="_blank"
                rel="noreferrer"
                className="text-sm font-medium"
              >
                labteknologipangan@unpas.ac.id
              </a>
            </li>

            <li className="flex items-center gap-2">
              <IoLogoWhatsapp fill="#ffffff" className="text-2xl" />

              <a
                href="https://wa.me/6281234567890"
                target="_blank"
                rel="noreferrer"
                className="text-sm font-medium"
              >
                6281234567890
              </a>
            </li>
          </ul>
        </div>
      </article>
    </footer>
  );
};

export default Footer;

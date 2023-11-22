import logoKAN from "@/assets/logo/kan.png";
import logoCiptaKarya from "@/assets/logo/pt-cipta-karya-pangan.png";
import { Image } from "@nextui-org/react";
import { Outlet } from "react-router-dom";

export default function AboutUs() {
  return (
    <main className="container flex flex-col justify-center gap-12 py-20 grow">
      <section className="flex flex-col items-center justify-center gap-4 text-center">
        <div className="flex items-center gap-4">
          <Image
            width={314}
            height={133}
            alt="logo KAN"
            src={logoKAN}
            className="object-contain rounded-none"
          />

          <Image
            width={242}
            height={246}
            alt="logo Cipta Karya"
            src={logoCiptaKarya}
            className="object-contain rounded-none"
          />
        </div>

        <div className="flex flex-col">
          <h1 className="text-xl font-bold lg:text-3xl">
            PT. CIPTA KARYA PANGAN PASUNDAN
          </h1>

          <p className="text-base font-medium lg:text-xl">
            JASA ANALISIS PANGAN | LABORATORIUM TEKNOLOGI PANGAN
          </p>
        </div>
      </section>

      <Outlet />
    </main>
  );
}

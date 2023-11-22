import logoWA from "@/assets/logo/whatsapp.png";
import { Image, Button, Link } from "@nextui-org/react";

export default function ConsultingServices() {
  return (
    <main className="container flex flex-col items-center justify-center max-w-5xl gap-6 py-20 grow">
      <h1 className="text-2xl font-semibold text-center md:text-3xl">
        Mengalami Kebingungan Saat Mengajukan Layanan ?
      </h1>

      <Image
        width={198}
        height={197}
        alt="logo WA"
        src={logoWA}
        className="object-contain"
      />

      <article className="flex flex-col items-center justify-center gap-4">
        <h2 className="text-xl font-semibold text-center md:text-2xl">
          Klik Tombol Dibawah Ini
        </h2>

        <Button
          as={Link}
          target="_blank"
          color="primary"
          href="https://wa.me/6281234567890"
          radius="sm"
        >
          Hubungi Kami
        </Button>
      </article>
    </main>
  );
}

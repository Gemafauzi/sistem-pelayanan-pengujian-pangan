import GalleryService from "../../components/service/GalleryService";
import DescriptionService from "../../components/service/DescriptionService";

export default function DetailService() {
  return (
    <main className="container flex flex-col justify-center max-w-5xl gap-6 py-20 grow">
      <h1 className="text-2xl font-semibold">Jasa Pengujian Umur Simpan</h1>

      <section className="grid grid-cols-1 gap-6 md:grid-cols-5">
        <GalleryService />
        <DescriptionService />
      </section>
    </main>
  );
}

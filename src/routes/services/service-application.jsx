import FormServiceApplication from "@/components/service/FormServiceApplication";

export default function ServiceApplication() {
  return (
    <main className="container flex flex-col justify-center max-w-5xl gap-6 py-20 grow">
      <article className="mb-6 text-center">
        <h1 className="text-3xl font-semibold">
          Pengajuan Layanan - Analisis Kadar Karbohidrat
        </h1>

        <p>
          Silahkan Isi Formulir Berikut Untuk Mengajukan Permintaan Analisis
          Laboratorium.
        </p>
      </article>

      <FormServiceApplication />
    </main>
  );
}

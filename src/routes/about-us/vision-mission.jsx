export default function AboutUsVisionMission() {
  return (
    <section className="flex flex-col gap-12 mx-auto">
      <article className="flex flex-col gap-6">
        <h2 className="text-2xl font-semibold text-center uppercase lg:text-3xl">
          Visi
        </h2>

        <div className="prose text-center">
          <p>
            Menjadi Laboratorium Analisis Pangan yang Unggul dan Terpercaya di
            Tingkat Nasional
          </p>
        </div>
      </article>

      <article className="flex flex-col gap-6">
        <h2 className="text-2xl font-semibold text-center uppercase lg:text-3xl">
          Misi
        </h2>

        <div className="prose text-left">
          <ul>
            <li>Menjadi laboratorium pengujian pangan yang terakreditasi</li>
            <li>
              Memiliki Sumber Daya Manusia yang terampil, teliti dan memiliki
              keahlian di bidang analisis pangan{" "}
            </li>
            <li>
              Memiliki fasilitas laboratorium yang mumpuni dan terkalibras
            </li>
          </ul>
        </div>
      </article>
    </section>
  );
}

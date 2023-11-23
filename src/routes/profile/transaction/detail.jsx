export default function ProfileDetailTransaction() {
  return (
    <main className="container flex flex-col justify-center max-w-5xl gap-6 py-20 grow">
      <h1 className="text-3xl font-semibold text-center">Detail Transaksi</h1>

      <section className="flex flex-col gap-4">
        <h2 className="text-sm font-semibold">
          #U-0001 - Pengujian Umur Simpan{" "}
        </h2>

        <article className="flex flex-col gap-2 px-6">
          {Array.from({ length: 5 }).map((_, index) => (
            <div key={index} className="grid grid-cols-8 gap-4">
              <p className="col-span-2">Tanggal Pengajuan: </p>

              <div className="col-span-6">01 Januari 2023</div>
            </div>
          ))}
        </article>
      </section>
    </main>
  );
}

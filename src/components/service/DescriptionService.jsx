import { Button, Link } from "@nextui-org/react";
import { useParams } from "react-router-dom";

const DescriptionService = () => {
  const { slug } = useParams();

  return (
    <article className="flex flex-col col-span-3 gap-6">
      <div className="flex items-start justify-between gap-4">
        <div className="flex flex-col">
          <h2 className="text-2xl font-semibold">Deskripsi Layanan</h2>

          <div className="flex items-center gap-4 font-medium">
            <p>Rating 4.7 / 5.0</p>
          </div>
        </div>

        <h3 className="text-2xl font-semibold text-right">Rp. 100.000</h3>
      </div>

      <p className="md:text-lg">
        Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod
        tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim
        veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea
        commodo consequat. Duis aute irure dolor in reprehenderit in voluptate
        velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint
        occaecat cupidatat non proident, sunt in culpa qui officia deserunt
        mollit anim id est laborum.
      </p>

      <Button
        as={Link}
        href={`/services/${slug}/form`}
        color="primary"
        className="ml-auto w-fit"
        radius="sm"
      >
        Ajukan Layanan
      </Button>
    </article>
  );
};

export default DescriptionService;

import useForm from "@/libs/hooks/useForm";
import {
  Button,
  Input,
  Select,
  SelectItem,
  Image,
  Textarea,
  CheckboxGroup,
  Checkbox,
} from "@nextui-org/react";
import { useRef } from "react";
import { FiPlus } from "react-icons/fi";
import { IoMdCloseCircle } from "react-icons/io";
import { useNavigate, useParams } from "react-router-dom";

const listTestParameters = [
  {
    label: "Air",
    value: "Air",
  },
  {
    label: "Abu",
    value: "Abu",
  },
  {
    label: "Serat Kasar",
    value: "Serat Kasar",
  },
  {
    label: "Lemak",
    value: "Lemak",
  },
  {
    label: "Protein (N-Total)",
    value: "Protein (N-Total)",
  },
  {
    label: "Karbohidrat (Pati)",
    value: "Karbohidrat (Pati)",
  },
  {
    label: "Karbohidrat (Gula Total)",
    value: "Karbohidrat (Gula Total)",
  },
  {
    label: "Vitamin C",
    value: "Vitamin C",
  },
  {
    label: "Aktivitas Antioksidan",
    value: "Aktivitas Antioksidan",
  },
  {
    label: "Viskositas",
    value: "Viskositas",
  },
  {
    label: "Warna",
    value: "Warna",
  },
  {
    label: "Boraks",
    value: "Boraks",
  },
  {
    label: "Formalin",
    value: "Formalin",
  },
  {
    label: "Pewarna",
    value: "Pewarna",
  },
  {
    label: "Pemanis",
    value: "Pemanis",
  },
  {
    label: "Coliform",
    value: "Coliform",
  },
  {
    label: "E. Coli",
    value: "E. Coli",
  },
  {
    label: "Salmonella",
    value: "Salmonella",
  },
];

const FormServiceApplication = () => {
  const navigate = useNavigate();
  const { slug } = useParams();

  const fotoInputRef = useRef(null);

  const {
    form: formApplication,
    setForm: setFormApplication,
    handleChange,
  } = useForm({
    name: "",
    address: "",
    phone: "",
    email: "",
    typeSample: "",
    totalSample: "",
    merkSample: "",
    testParameters: [],
    costPackage: false,
    fotoSample: [],
  });

  const onSubmit = (event) => {
    event.preventDefault();

    navigate(`/services/${slug}/paid`);
  };

  return (
    <form onSubmit={onSubmit} className="flex flex-col items-center gap-6">
      <Input
        radius="sm"
        size="sm"
        type="text"
        label="Nama Konsumen / Unit Usaha"
        className="w-full"
        value={formApplication.name}
        onChange={handleChange}
        name="name"
        isRequired
      />

      <Textarea
        radius="sm"
        size="sm"
        type="text"
        label="Alamat Konsumen / Unit Usaha"
        className="w-full"
        name="address"
        value={formApplication.address}
        onChange={handleChange}
        isRequired
      />

      <Input
        radius="sm"
        size="sm"
        type="number"
        label="No. Telepon"
        className="w-full"
        name="phone"
        value={formApplication.phone}
        onChange={handleChange}
        isRequired
      />

      <Input
        radius="sm"
        size="sm"
        type="email"
        label="Email"
        className="w-full"
        name="email"
        value={formApplication.email}
        onChange={handleChange}
        isRequired
      />

      <Select
        isRequired
        size="sm"
        items={[
          {
            label: "Minuman Berbasis Air Berperisa",
            value: "minuman-berbasis-air-berperisa",
          },
          {
            label: "Cake / Kue / Wafer",
            value: "cake-kue-wafer",
          },
          {
            label: "Kopi / Teh / Seduhan Herbal",
            value: "kopi-teh-seduhan-herbal",
          },
        ]}
        label="Jenis Sampel yang Akan Dianalisis"
        className="w-full"
        value={formApplication.typeSample}
        onChange={handleChange}
        name="typeSample"
        classNames={{
          popoverContent: "rounded-md",
        }}
      >
        {(typeSample) => (
          <SelectItem key={typeSample.value} className="rounded-md">
            {typeSample.label}
          </SelectItem>
        )}
      </Select>

      <Input
        radius="sm"
        size="sm"
        type="number"
        label="Jumlah Sampel yang Akan Diuji"
        className="w-full"
        name="totalSample"
        value={formApplication.totalSample}
        onChange={handleChange}
        isRequired
      />

      <Input
        radius="sm"
        size="sm"
        type="text"
        label="Merk Sampel yang Akan Diuji"
        className="w-full"
        name="merkSample"
        value={formApplication.merkSample}
        onChange={handleChange}
        isRequired
      />

      <CheckboxGroup
        label="Pilih Parameter Uji"
        className="w-full"
        classNames={{
          label: "font-medium text-foreground",
          wrapper: "columns-sm grid grid-cols-2 md:grid-cols-3",
        }}
        isRequired
        value={formApplication.testParameters}
        onValueChange={(params) =>
          setFormApplication({ ...formApplication, testParameters: params })
        }
      >
        {listTestParameters.map((item, index) => (
          <Checkbox key={index} value={item.value}>
            {item.label}
          </Checkbox>
        ))}
      </CheckboxGroup>

      <div className="flex flex-col w-full gap-2">
        <label htmlFor="#fotoSample" className="font-medium">
          Biaya Per Paket Untuk UMKM
        </label>

        <Checkbox
          isSelected={formApplication.costPackage}
          onValueChange={(isSelected) =>
            setFormApplication({ ...formApplication, costPackage: isSelected })
          }
        >
          Lemak, Karbohidrat, Kalori, %AKG, Umur Simpan (Satu Suhu Penyimpanan)
        </Checkbox>
      </div>

      <div className="flex flex-col w-full gap-2">
        <label htmlFor="#fotoSample" className="font-medium">
          Unggah Foto Sampel
        </label>
        <p className="text-xs">Ukuran Maximal 3 Mb</p>

        <div className="flex flex-wrap items-center gap-4">
          {formApplication.fotoSample.map((item, index) => (
            <div key={index} className="relative">
              <Image
                src={URL.createObjectURL(item)}
                fallbackSrc="https://via.placeholder.com/130x160"
                alt="Profile Picture"
                className="h-[200px] w-fit max-w-[180px] rounded-md object-cover"
                classNames={{
                  wrapper: "flex-[1_0_180px]",
                }}
                isZoomed
              />

              <Button
                color="danger"
                radius="sm"
                variant="flat"
                className="absolute z-10 flex items-center min-w-0 p-1 text-xl h-fit w-fit top-2 right-2"
                onClick={() => {
                  setFormApplication((prev) => ({
                    ...prev,
                    fotoSample: prev.fotoSample.filter((_, i) => i !== index),
                  }));
                }}
              >
                <IoMdCloseCircle />
              </Button>
            </div>
          ))}

          <Button
            color="default"
            radius="sm"
            variant="light"
            className="w-[180px] h-[200px] text-4xl p-2 border"
            onClick={() => fotoInputRef.current.click()}
          >
            <FiPlus />
          </Button>
        </div>

        <input
          required
          id="fotoSample"
          type="file"
          accept="image/*"
          ref={fotoInputRef}
          className="hidden"
          onChange={(e) => {
            setFormApplication((prev) => ({
              ...prev,
              fotoSample: [...prev.fotoSample, ...e.target.files],
            }));
          }}
          multiple
        />
      </div>

      <Button
        type="submit"
        color="primary"
        radius="sm"
        className="min-w-[139px]"
        isLoading={false}
      >
        Ajukan Layanan
      </Button>
    </form>
  );
};

export default FormServiceApplication;

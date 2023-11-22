/* eslint-disable react/prop-types */
import { genders } from "@/libs/data/form";
import { Button, Input, Select, SelectItem } from "@nextui-org/react";
import { useMemo } from "react";

const DataProfile = ({ formProfile, handleChange }) => {
  const isInvalidEmail = useMemo(() => {
    // eslint-disable-next-line react/prop-types
    const { email } = formProfile;
    const validateEmail = (value) =>
      value.match(/^[A-Z0-9._%+-]+@[A-Z0-9.-]+.[A-Z]{2,4}$/i);

    if (email === "") return false;

    return validateEmail(email) ? false : true;
  }, [formProfile]);

  return (
    <section className="flex flex-col items-center w-full gap-4">
      <Input
        radius="sm"
        size="sm"
        type="text"
        label="Nama Lengkap"
        className="w-full"
        value={formProfile.name}
        onChange={handleChange}
        name="name"
        isRequired
      />

      <Input
        isRequired
        radius="sm"
        size="sm"
        type="email"
        label="Alamat Email"
        className="w-full"
        value={formProfile.email}
        onChange={handleChange}
        name="email"
        isInvalid={isInvalidEmail}
        errorMessage={isInvalidEmail && "Please enter a valid email"}
      />

      <Input
        isRequired
        radius="sm"
        size="sm"
        type="number"
        label="No Handphone / Whatsapp"
        className="w-full"
        value={formProfile.phone}
        onChange={handleChange}
        name="phone"
      />

      <div className="grid w-full grid-cols-2 gap-4">
        <Select
          isRequired
          size="sm"
          items={genders}
          label="Jenis Kelamin"
          placeholder="Pilih jenis kelamin"
          className="w-full"
          value={formProfile.gender}
          onChange={handleChange}
          name="gender"
          classNames={{
            popoverContent: "rounded-md",
          }}
        >
          {(gender) => (
            <SelectItem key={gender.value} className="rounded-md">
              {gender.label}
            </SelectItem>
          )}
        </Select>

        <Input
          isRequired
          radius="sm"
          size="sm"
          type="date"
          label="Tanggal lahir"
          placeholder="Tanggal lahir"
          className="w-full"
          value={formProfile.birthday}
          onChange={handleChange}
          name="birthday"
        />
      </div>

      <Button
        type="submit"
        color="primary"
        radius="sm"
        className="min-w-[139px]"
        isLoading={false}
      >
        Simpan
      </Button>
    </section>
  );
};

export default DataProfile;

import logoCiptaKarya from "@/assets/logo/pt-cipta-karya-pangan.png";
import PasswordInput from "@/components/ui/PasswordInput";
import { genders } from "@/libs/data/form";
import useForm from "@/libs/hooks/useForm";
import {
  Button,
  Image,
  Input,
  Link,
  Select,
  SelectItem,
} from "@nextui-org/react";
import { useMemo } from "react";

export default function Register() {
  const { form: formRegister, handleChange } = useForm({
    name: "",
    email: "",
    phone: "",
    password: "",
    confirmPassword: "",
    gender: "",
    birthday: "",
  });

  const isInvalidEmail = useMemo(() => {
    const { email } = formRegister;
    const validateEmail = (value) =>
      value.match(/^[A-Z0-9._%+-]+@[A-Z0-9.-]+.[A-Z]{2,4}$/i);

    if (email === "") return false;

    return validateEmail(email) ? false : true;
  }, [formRegister]);

  const isInvalidPassword = useMemo(() => {
    const { password } = formRegister;
    const validatePass = (value) => value.match(/^(?=.*[A-Z])(?=.*\d).{6,}$/i);

    if (password === "") return false;

    return validatePass(password) ? false : true;
  }, [formRegister]);

  const isInvalidConfirmPassword = useMemo(() => {
    const { password, confirmPassword } = formRegister;
    const validateConfirmPass = (value) => value === password;

    if (confirmPassword === "") return false;

    return validateConfirmPass(confirmPassword) ? false : true;
  }, [formRegister]);

  const onSubmit = (event) => {
    event.preventDefault();
    console.log(formRegister);
  };

  return (
    <main className="container flex flex-col items-center justify-center max-w-2xl gap-4 py-20 grow">
      <h1 className="text-2xl font-medium text-center md:text-3xl">
        Belum Punya Akun? Daftar Sekarang
      </h1>

      <form
        onSubmit={onSubmit}
        className="flex flex-col items-center w-full gap-6 p-6 rounded-md shadow-medium"
      >
        <Image
          alt="logo Cipta Karya"
          src={logoCiptaKarya}
          width={150}
          height={150}
          className="object-contain aspect-square"
        />

        <div className="flex flex-col items-center w-full gap-4">
          <Input
            radius="sm"
            size="sm"
            type="text"
            label="Nama Lengkap"
            className="w-full"
            value={formRegister.name}
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
            value={formRegister.email}
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
            value={formRegister.phone}
            onChange={handleChange}
            name="phone"
          />

          <div className="grid w-full grid-cols-2 gap-4">
            <PasswordInput
              isRequired
              size="sm"
              label="Password"
              className="w-full"
              value={formRegister.password}
              onChange={handleChange}
              name="password"
              description="Password: minimum 6 characters, 1 uppercase letter, 1 number."
              color={
                formRegister.password
                  ? isInvalidPassword
                    ? "danger"
                    : "success"
                  : "default"
              }
              isInvalid={isInvalidPassword}
              errorMessage={
                isInvalidPassword &&
                "Password: minimum 6 characters, 1 uppercase letter, 1 number."
              }
            />

            <PasswordInput
              isRequired
              size="sm"
              label="Konfirmasi Password"
              className="w-full"
              value={formRegister.customPassword}
              onChange={handleChange}
              name="confirmPassword"
              color={
                formRegister.confirmPassword
                  ? isInvalidConfirmPassword
                    ? "danger"
                    : "success"
                  : "default"
              }
              isInvalid={isInvalidConfirmPassword}
              errorMessage={isInvalidConfirmPassword && "Passwords must match."}
            />

            <Select
              isRequired
              size="sm"
              items={genders}
              label="Jenis Kelamin"
              placeholder="Pilih jenis kelamin"
              className="w-full"
              value={formRegister.gender}
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
              value={formRegister.birthday}
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
            Daftar
          </Button>
        </div>
      </form>

      <article className="flex items-center gap-2 mx-auto text-center w-fit">
        <p className="font-medium">Sudah punya akun?</p>

        <Button as={Link} href="/login" color="primary" radius="sm">
          Masuk
        </Button>
      </article>
    </main>
  );
}

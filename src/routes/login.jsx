import logoCiptaKarya from "../assets/logo/pt-cipta-karya-pangan.png";
import PasswordInput from "../components/ui/PasswordInput";
import useForm from "../libs/hooks/useForm";
import { Button, Image, Input, Link } from "@nextui-org/react";

export default function Login() {
  const { form: formLogin, handleChange } = useForm({
    email: "",
    password: "",
  });

  const onSubmit = (event) => {
    event.preventDefault();
    console.log(formLogin);
  };

  return (
    <main className="container flex flex-col items-center justify-center max-w-2xl gap-4 py-20 grow">
      <h1 className="text-2xl font-medium text-center md:text-3xl">
        Masuk ke akun Anda
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
            type="email"
            label="Email"
            className="w-full"
            name="email"
            value={formLogin.email}
            onChange={handleChange}
          />

          <PasswordInput
            size="sm"
            radius="sm"
            label="Password"
            className="w-full"
            name="password"
            value={formLogin.password}
            onChange={handleChange}
          />

          <Button
            type="submit"
            color="primary"
            radius="sm"
            className="min-w-[139px]"
            isLoading={false}
          >
            Masuk
          </Button>
        </div>
      </form>

      <article className="flex items-center gap-2 mx-auto text-center w-fit">
        <p className="font-medium">Belum mempunyai akun?</p>

        <Button as={Link} href="/register" color="primary" radius="sm">
          Buat Akun
        </Button>
      </article>
    </main>
  );
}

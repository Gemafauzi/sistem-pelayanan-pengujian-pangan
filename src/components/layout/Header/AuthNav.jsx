import {
  Button,
  Dropdown,
  DropdownItem,
  DropdownMenu,
  DropdownTrigger,
  Link,
  NavbarContent,
  NavbarItem,
} from "@nextui-org/react";
import { IoChevronDown } from "react-icons/io5";
import { FaUser } from "react-icons/fa";

const AuthNavNotLogin = () => {
  return (
    <NavbarContent justify="end">
      <NavbarItem>
        <Button
          as={Link}
          color="default"
          href="/login"
          radius="sm"
          variant="light"
          className="hidden lg:flex"
        >
          Masuk
        </Button>

        <Button
          as={Link}
          color="default"
          href="/login"
          radius="sm"
          variant="flat"
          className="flex lg:hidden"
        >
          Masuk
        </Button>
      </NavbarItem>

      <NavbarItem className="hidden lg:flex">
        <Button
          as={Link}
          color="default"
          href="/register"
          radius="sm"
          variant="flat"
        >
          Daftar
        </Button>
      </NavbarItem>
    </NavbarContent>
  );
};

const navProfile = [
  {
    name: "Lihat profil",
    link: "/profile",
  },
  {
    name: "Transaksi Saya",
    link: "/profile/transaction",
  },
];

const AuthNav = () => {
  const isLogin = true;

  if (!isLogin) {
    return <AuthNavNotLogin />;
  }

  return (
    <NavbarContent justify="end">
      <Dropdown
        classNames={{
          content: "rounded-md",
        }}
      >
        <NavbarItem>
          <DropdownTrigger>
            <Button
              disableRipple
              className="flex items-center gap-2"
              radius="sm"
              variant="light"
              endContent={<IoChevronDown />}
            >
              Hi, Herlan{" "}
              <span>
                <FaUser className="text-3xl text-black" />
              </span>
            </Button>
          </DropdownTrigger>
        </NavbarItem>

        <DropdownMenu
          aria-label={`Profile child`}
          itemClasses={{
            base: "gap-4 rounded-md",
          }}
        >
          {navProfile.map((nav, index) => (
            <DropdownItem
              key={index}
              href={nav.link}
              as={Link}
              className="text-foreground"
              aria-current="page"
            >
              {nav.name}
            </DropdownItem>
          ))}

          <DropdownItem aria-current="logout" color="danger" variant="flat">
            Keluar
          </DropdownItem>
        </DropdownMenu>
      </Dropdown>
    </NavbarContent>
  );
};

export default AuthNav;

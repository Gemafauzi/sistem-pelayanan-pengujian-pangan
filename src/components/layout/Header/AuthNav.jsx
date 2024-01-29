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
import {useState, useEffect} from 'react'
import { useNavigate } from 'react-router-dom';

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
  const navigate = useNavigate();
  const [isLogin, setIsLogin] = useState(false);

  useEffect(() => {
    const user = JSON.parse(localStorage.getItem('user'));
    if (user) {
      setIsLogin(user.login);
    }
    console.log(isLogin);
   }, [isLogin]);

   const logOut = ()=> {
    setIsLogin(false);
    localStorage.removeItem('user');
    navigate('/login');
   }

  return ( 
    <div>
    {isLogin ? 
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
              Hi, Rifki Gema{" "}
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

          <DropdownItem aria-current="logout" color="danger" variant="flat" onClick={logOut}>
            Keluar
          </DropdownItem>
        </DropdownMenu>
      </Dropdown>
    </NavbarContent> : <AuthNavNotLogin />}
    </div>
  );
};

export default AuthNav;

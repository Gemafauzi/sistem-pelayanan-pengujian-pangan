import {
  Button,
  Link,
  Navbar,
  NavbarBrand,
  NavbarContent,
  NavbarItem,
  NavbarMenuToggle,
  NavbarMenu,
  NavbarMenuItem,
  Image,
  DropdownItem,
  DropdownTrigger,
  Dropdown,
  DropdownMenu,
  Accordion,
  AccordionItem,
} from "@nextui-org/react";
import { IoChevronDown } from "react-icons/io5";
import { useState } from "react";
import logoCiptaKarya from "@/assets/logo/pt-cipta-karya-pangan.png";
import AuthNav from "./AuthNav";

export default function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const navItems = [
    {
      name: "Beranda",
      link: "/",
    },
    {
      name: "Jasa Analisis",
      listChild: [
        {
          name: "Daftar Harga",
          link: "/daftar-harga",
        },
        {
          name: "Konsultasi Layanan",
          link: "/consulting-services",
        },
      ],
    },
    {
      name: "Bantuan",
      link: "/help",
    },
    {
      name: "Tentang Kami",
      listChild: [
        {
          name: "Sejarah & Pengalaman",
          link: "/about-us/history-experience",
        },
        {
          name: "Visi & Misi",
          link: "/about-us/vision-mission",
        },
        {
          name: "Legalitas Hukum",
          link: "/about-us/legality",
        },
      ],
    },
  ];

  return (
    <Navbar
      isBlurred
      isBordered
      shouldHideOnScroll
      isMenuOpen={isMenuOpen}
      onMenuOpenChange={setIsMenuOpen}
      maxWidth="xl"
    >
      <NavbarContent justify="start" className="w-fit !grow-0 !basis-auto">
        <NavbarMenuToggle
          aria-label={isMenuOpen ? "Close menu" : "Open menu"}
          className="sm:hidden"
        />
        <NavbarBrand>
          <Link href={"/"} aria-current="home-page">
            <Image
              alt="cipta karya"
              src={logoCiptaKarya}
              width={61.95}
              className="object-contain aspect-square"
            />
          </Link>
        </NavbarBrand>
      </NavbarContent>

      <NavbarContent className="hidden gap-8 ml-6 sm:flex" justify="start">
        {navItems.map((item, index) => {
          if (!item?.listChild) {
            return (
              <NavbarItem key={index}>
                <Link
                  color="foreground"
                  href={item.link}
                  className="font-normal text-small lg:text-base"
                  aria-current="page"
                >
                  {item.name}
                </Link>
              </NavbarItem>
            );
          }

          return (
            <Dropdown
              key={index}
              classNames={{
                content: "rounded-md",
              }}
            >
              <NavbarItem>
                <DropdownTrigger>
                  <Button
                    disableRipple
                    className="p-0 bg-transparent data-[hover=true]:bg-transparent text-small lg:text-base"
                    radius="sm"
                    variant="light"
                    endContent={<IoChevronDown />}
                  >
                    {item.name}
                  </Button>
                </DropdownTrigger>
              </NavbarItem>

              <DropdownMenu
                aria-label={`${item.name} child`}
                itemClasses={{
                  base: "gap-4 rounded-md",
                }}
              >
                {item.listChild.map((child, index) => (
                  <DropdownItem
                    key={index}
                    as={Link}
                    className="text-foreground"
                    href={child.link}
                    aria-current="page"
                  >
                    {child.name}
                  </DropdownItem>
                ))}
              </DropdownMenu>
            </Dropdown>
          );
        })}
      </NavbarContent>

      <AuthNav />

      <NavbarMenu>
        {navItems.map((item, index) => (
          <NavbarMenuItem key={index}>
            {item?.listChild ? (
              <Accordion
                isCompact
                className="p-0"
                itemClasses={{
                  trigger: "p-0",
                  content: "mt-2",
                }}
              >
                <AccordionItem key="1" aria-label={item.name} title={item.name}>
                  <ul className="flex flex-col items-center justify-center gap-2">
                    {item.listChild.map((child, index) => (
                      <li key={index} className="w-[95%]">
                        <Link
                          color="foreground"
                          href={child.link}
                          onClick={() => setIsMenuOpen(false)}
                        >
                          {child.name}
                        </Link>
                      </li>
                    ))}
                  </ul>
                </AccordionItem>
              </Accordion>
            ) : (
              <Link
                color="foreground"
                href={item.link}
                aria-current="page"
                onClick={() => setIsMenuOpen(false)}
              >
                {item.name}
              </Link>
            )}
          </NavbarMenuItem>
        ))}
      </NavbarMenu>
    </Navbar>
  );
}

'use client'
import React from "react";
import {
  Navbar,
  NavbarBrand,
  NavbarContent,
  NavbarItem,
  Link,
  NavbarMenuToggle,
  NavbarMenu,
  Button,
} from "@nextui-org/react";
import { usePathname } from "next/navigation";

const MenuItems = () => {
  const items = [
    { title: "Home", href: "/" },
    { title: "About", href: "/about" },
    { title: "Projects", href: "/projects" },
    { title: "Blog", href: "/blog" },
  ];

  const pathname = usePathname();

  return items.map((item, index) => (
    <NavbarItem key={index}>
      <Link
        color="foreground"
        href={item.href}
        className={`${
          pathname === item.href
            ? "text-4xl sm:text-lg uppercase font-black sm:font-bold my-4 sm:my-1 foregroundBlurDark border-b-2 border-current pb-1"
            : "text-4xl sm:text-lg uppercase font-black sm:font-semibold my-4 sm:my-1 foregroundBlurDark hover:underline"
        } `}
      >
        {item.title}
      </Link>
    </NavbarItem>
  ));
};
export default function App() {
  const [isMenuOpen, setIsMenuOpen] = React.useState(false);

  return (
    <Navbar
      className=""
      onMenuOpenChange={setIsMenuOpen}
      isMenuOpen={isMenuOpen}
    >
      <NavbarBrand justify="start">
        <Link href="/">
          <h1 className="text-4xl font-black tracking-wide hover:text-cyan-400 transition">
            RM.
          </h1>
        </Link>
      </NavbarBrand>

      <NavbarContent className="hidden sm:flex gap-4" justify="center">
        <MenuItems />
      </NavbarContent>
      <NavbarContent className="sm:hidden" justify="end">
        <NavbarMenuToggle
          aria-label={isMenuOpen ? "Close menu" : "Open menu"}
          className="sm:hidden"
        ></NavbarMenuToggle>
        <NavbarMenu className="bg-background/70 text-center">
          <MenuItems />
          <Link href="/contact" className="mx-auto mt-4">
            <Button
              variant="ghost"
              className="bg-foreground text-background rounded-full p-2 font-semibold shadow-lg"
            >
              Say Hello
            </Button>
          </Link>
        </NavbarMenu>
      </NavbarContent>
      <NavbarContent className="hidden sm:flex" justify="end">
        <Link href="/contact">
          <Button
            variant="ghost"
            className="bg-foreground text-background rounded-full p-2 font-semibold shadow-lg"
          >
            Say Hello
          </Button>
        </Link>
      </NavbarContent>
    </Navbar>
  );
}

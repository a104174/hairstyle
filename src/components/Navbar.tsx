import Link from "next/link";
import { useRouter } from "next/router";
import clsx from "clsx";
import ThemeToggle from "./ThemeToggle";
import Image from "next/image";

const routes = [
  { href: "/", label: "Home" },
  { href: "/about", label: "Sobre mim" },
  { href: "/services", label: "Serviços" },
  { href: "/bookings", label: "Marcações" },
  { href: "/gallery", label: "Galeria" },
  { href: "/schedule", label: "Horário" },
];

export default function Navbar() {
  const { pathname } = useRouter();

  return (
    <header className="flex justify-between items-center py-4 px-6 lg:px-16 bg-background/80 backdrop-blur-md dark:bg-gray-800 sticky top-0 z-50 shadow-sm">
      {/* logotipo (apenas parte manuscrita) */}
      <Link
        href="/"
        className="relative shrink-0"
        style={{ width: "180px", height: "60px" }}
      >
        <Image
          src="/img/logo-paula.png"
          alt="Paula Peixoto"
          fill
          priority
          sizes="180px"
          className="object-contain"
        />
      </Link>

      {/* navegação */}
      <nav className="ml-auto flex gap-4 items-center">
        {routes.map(({ href, label }) => {
          const isActive = pathname === href;
          return (
            <Link
              key={href}
              href={href}
              className={clsx(
                "nav-link",
                isActive && "active text-gray-900 dark:text-gray-100 font-semibold"
              )}
            >
              {label}
            </Link>
          );
        })}
        <ThemeToggle />
      </nav>
    </header>
  );
}




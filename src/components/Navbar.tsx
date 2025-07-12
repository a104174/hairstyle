import Link from "next/link";
import { useRouter } from "next/router";
import clsx from "clsx";
import ThemeToggle from "./ThemeToggle";

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
      <Link href="/" className="text-3xl font-extrabold text-primary">
        P
      </Link>

      <nav className="flex gap-6 items-center">
  {routes.map(({ href, label }) => {
    const isActive = pathname === href;

    const baseLayout =
      "inline-flex items-center justify-center px-4 py-1.5 rounded-md font-medium";
    const baseColor =
      "text-gray-700 dark:text-gray-200 transition-colors duration-200";
    const hoverColor = "hover:text-primary";
    const activeColor = "text-gray-900 dark:text-gray-100 font-semibold";
    const activeBg = "nav-active";

    /* ---- HOME ---- */
    if (href === "/") {
      return (
        <Link
          key={href}
          href={href}
          className={clsx(
            "home-btn",
            baseLayout,
            baseColor,
            hoverColor,
            isActive && ["active", activeColor, activeBg]
          )}
        >
          {label}
        </Link>
      );
    }

    /* ---- RESTO ---- */
    return (
      <Link
        key={href}
        href={href}
        className={clsx(
          baseLayout,
          baseColor,
          hoverColor,
          isActive && [activeColor, activeBg]
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





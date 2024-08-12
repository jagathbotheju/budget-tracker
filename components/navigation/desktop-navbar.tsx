import Logo from "@/components/logo";
import { ThemeSwitcher } from "@/components/theme-switcher";
import { navLinks } from "@/lib/nav-links";
import NavbarItem from "./navbar-item";
import AuthButton from "./auth-button";

const DesktopNavbar = () => {
  return (
    <div className="hidden md:block bg-background max-w-7xl mx-auto">
      <nav className="container flex items-center justify-between px-8">
        <Logo />
        <div className="flex gap-5 items-center">
          {navLinks.map((item) => (
            <NavbarItem key={item.label} link={item.link} label={item.label} />
          ))}
          <AuthButton />
          <ThemeSwitcher />
        </div>
      </nav>
    </div>
  );
};

export default DesktopNavbar;

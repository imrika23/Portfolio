import { useState } from "react";
import { Button } from "./ui/button";
import { Menu, X } from "lucide-react";

const Navigation = () => {
  const [isOpen, setIsOpen] = useState(false);

  const navItems = [
    { name: "About", href: "#about" },
    { name: "Skills", href: "#skills" },
    { name: "Projects", href: "#projects" },
    { name: "Contact", href: "#contact" },
  ];

  const scrollToSection = (href: string) => {
    const element = document.querySelector(href);
    element?.scrollIntoView({ behavior: "smooth" });
    setIsOpen(false);
  };

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-background/80 backdrop-blur-lg border-b border-border">
      <div className="container mx-auto px-5">
        <div className="flex items-center justify-between h-16">
          <div
            onClick={() => scrollToSection("#hero")}
            className="text-2xl md:text-3xl sm:text-2xl font-bold bg-gradient-primary bg-clip-text text-transparent cursor-pointer"
          >
            Portfolio
          </div>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-8">
            {navItems.map((item) => (
              <button
                key={item.name}
                onClick={() => scrollToSection(item.href)}
                className="text-xl md:text-lg sm:text-base text-muted-foreground hover:text-foreground transition-colors"

              >
                {item.name}
              </button>
            ))}
            <Button variant="hero" size="sm" asChild>
              <a href="/Portfolio/Erika%20Joy%20Guamos-CV.pdf" download>
                Download CV
              </a>
            </Button>


          </div>

          {/* Mobile Menu Button */}
          <button
            className="md:hidden"
            onClick={() => setIsOpen(!isOpen)}
          >
            {isOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>

        {/* Mobile Navigation */}
        {isOpen && (
          <div className="md:hidden py-4 border-t border-border animate-fade-in">
            <div className="flex flex-col space-y-4">
              {navItems.map((item) => (
                <button
                  key={item.name}
                  onClick={() => scrollToSection(item.href)}
                  className="text-left text-muted-foreground hover:text-foreground transition-colors py-2"
                >
                  {item.name}
                </button>
              ))}
              <Button variant="hero" size="sm" className="w-fit" asChild>
                <a href="/Erika Joy Guamos-CV.pdf" download>
                  Download CV
                </a>
              </Button>
            </div>
          </div>
        )}
      </div>
    </nav>
  );
};

export default Navigation;
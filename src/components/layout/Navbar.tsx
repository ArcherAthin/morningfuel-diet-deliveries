
import { useState } from "react";
import { Link } from "react-router-dom";
import { Menu, X } from "lucide-react";
import { Button } from "@/components/ui/button";
import { useIsMobile } from "@/hooks/use-mobile";

const Navbar = () => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const isMobile = useIsMobile();

  const navItems = [
    { name: "Home", path: "/" },
    { name: "Plans", path: "/plans" },
    { name: "Why Breakfast", path: "/why-breakfast" },
    { name: "Testimonials", path: "/testimonials" },
    { name: "FAQ", path: "/faq" },
    { name: "Contact", path: "/contact" },
  ];

  return (
    <nav className="w-full bg-white shadow-sm sticky top-0 z-50">
      <div className="container px-4 md:px-6 mx-auto">
        <div className="flex items-center justify-between h-16">
          {/* Logo */}
          <Link to="/" className="flex items-center">
            <span className="font-heading text-brand-darkCharcoal text-xl md:text-2xl font-bold">
              Morning<span className="text-brand-orange">Fuel</span>
            </span>
          </Link>

          {/* Desktop Navigation */}
          {!isMobile && (
            <div className="hidden md:flex items-center space-x-4">
              {navItems.map((item) => (
                <Link
                  key={item.name}
                  to={item.path}
                  className="text-brand-charcoal hover:text-brand-orange transition-colors px-3 py-2 text-sm font-medium"
                >
                  {item.name}
                </Link>
              ))}
              <Button className="ml-4 bg-brand-orange text-white hover:bg-orange-600">
                Get Started
              </Button>
            </div>
          )}

          {/* Mobile Menu Button */}
          {isMobile && (
            <button
              className="md:hidden text-brand-charcoal focus:outline-none"
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            >
              {mobileMenuOpen ? (
                <X className="h-6 w-6" />
              ) : (
                <Menu className="h-6 w-6" />
              )}
            </button>
          )}
        </div>
      </div>

      {/* Mobile Navigation */}
      {isMobile && mobileMenuOpen && (
        <div className="md:hidden bg-white border-t border-gray-100">
          <div className="container px-4 pt-2 pb-3 space-y-1">
            {navItems.map((item) => (
              <Link
                key={item.name}
                to={item.path}
                className="block text-brand-charcoal hover:text-brand-orange transition-colors px-3 py-2 text-base font-medium"
                onClick={() => setMobileMenuOpen(false)}
              >
                {item.name}
              </Link>
            ))}
            <div className="px-3 pt-2">
              <Button className="w-full bg-brand-orange text-white hover:bg-orange-600">
                Get Started
              </Button>
            </div>
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navbar;

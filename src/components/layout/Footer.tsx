
import { Link } from "react-router-dom";
import { Instagram, Facebook, Twitter, Mail, MapPin, Phone } from "lucide-react";

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-brand-charcoal text-white pt-12 pb-6">
      <div className="container px-4 md:px-6 mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* Brand Section */}
          <div className="space-y-4">
            <h2 className="font-heading text-xl font-bold">
              Morning<span className="text-brand-orange">Fuel</span>
            </h2>
            <p className="text-gray-300 text-sm">
              Bringing convenience and nutrition to your mornings with expert-crafted breakfast plans delivered to your doorstep.
            </p>
            <div className="flex space-x-4">
              <a href="#" className="text-gray-300 hover:text-brand-orange">
                <Instagram size={20} />
              </a>
              <a href="#" className="text-gray-300 hover:text-brand-orange">
                <Facebook size={20} />
              </a>
              <a href="#" className="text-gray-300 hover:text-brand-orange">
                <Twitter size={20} />
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div className="space-y-4">
            <h3 className="font-heading text-lg font-semibold">Quick Links</h3>
            <ul className="space-y-2">
              <li>
                <Link to="/" className="text-gray-300 hover:text-brand-orange text-sm">
                  Home
                </Link>
              </li>
              <li>
                <Link to="/plans" className="text-gray-300 hover:text-brand-orange text-sm">
                  Plans
                </Link>
              </li>
              <li>
                <Link to="/why-breakfast" className="text-gray-300 hover:text-brand-orange text-sm">
                  Why Breakfast
                </Link>
              </li>
              <li>
                <Link to="/testimonials" className="text-gray-300 hover:text-brand-orange text-sm">
                  Testimonials
                </Link>
              </li>
              <li>
                <Link to="/faq" className="text-gray-300 hover:text-brand-orange text-sm">
                  FAQ
                </Link>
              </li>
            </ul>
          </div>

          {/* Legal Links */}
          <div className="space-y-4">
            <h3 className="font-heading text-lg font-semibold">Legal</h3>
            <ul className="space-y-2">
              <li>
                <Link to="/terms" className="text-gray-300 hover:text-brand-orange text-sm">
                  Terms & Conditions
                </Link>
              </li>
              <li>
                <Link to="/privacy" className="text-gray-300 hover:text-brand-orange text-sm">
                  Privacy Policy
                </Link>
              </li>
              <li>
                <Link to="/refund" className="text-gray-300 hover:text-brand-orange text-sm">
                  Refund Policy
                </Link>
              </li>
            </ul>
          </div>

          {/* Contact Info */}
          <div className="space-y-4">
            <h3 className="font-heading text-lg font-semibold">Contact Us</h3>
            <ul className="space-y-3">
              <li className="flex items-start space-x-3 text-sm">
                <MapPin size={18} className="text-brand-orange flex-shrink-0 mt-0.5" />
                <span className="text-gray-300">123 Nutrition Street, Health City, HC 10001</span>
              </li>
              <li className="flex items-center space-x-3 text-sm">
                <Phone size={18} className="text-brand-orange flex-shrink-0" />
                <span className="text-gray-300">+1 (555) 123-4567</span>
              </li>
              <li className="flex items-center space-x-3 text-sm">
                <Mail size={18} className="text-brand-orange flex-shrink-0" />
                <span className="text-gray-300">contact@morningfuel.com</span>
              </li>
            </ul>
          </div>
        </div>

        <div className="border-t border-gray-700 mt-8 pt-6 text-center text-sm text-gray-400">
          <p>© {currentYear} MorningFuel. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;

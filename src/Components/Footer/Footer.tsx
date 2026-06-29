import Logo from "../Navigation Bar/Logo/Logo";
import { scrollToSection } from "../../utils/scrollToSection";

export default function Footer() {
  const currentYear = new Date().getFullYear();

  const navItems = [
    { name: "Home", section: "home" },
    { name: "About", section: "about" },
    { name: "Skills", section: "skills" },
    { name: "Portfolio", section: "portfolio" },
    { name: "Contact", section: "contact" },
  ];

  return (
    <footer className="bg-[#0a0a0a] border-t border-[#1a73e8]/20 mt-16">
      <div className="container mx-auto px-4 py-12">
        
        {/* Main Footer Grid */}
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8 mb-8">
          
          {/* Brand Column */}
          <div className="flex flex-col items-center md:items-start">
            <div className="flex items-center gap-2 mb-4">
              <Logo />
              <span className="name-deco text-xl font-bold">DevMahlatsi</span>
            </div>
            <p className="text-gray-500 text-sm text-center md:text-left">
              Full Stack Software Developer<br />
              Building solutions that matter.
            </p>
          </div>
          
          {/* Navigation Column */}
          <div className="text-center md:text-left">
            <h3 className="text-white font-semibold mb-4">Navigation</h3>
            <ul className="space-y-2">
              {navItems.map((item) => (
                <li key={item.name}>
                  <button
                    onClick={() => scrollToSection(item.section)}
                    className="text-gray-500 hover:text-[#1a73e8] transition-colors text-sm"
                  >
                    {item.name}
                  </button>
                </li>
              ))}
            </ul>
          </div>
          
          {/* Contact Column */}
          <div className="text-center md:text-left">
            <h3 className="text-white font-semibold mb-4">Contact</h3>
            <ul className="space-y-2 text-sm">
              <li>
                <a 
                  href="mailto:DevMahlatsi@gmail.com"
                  className="text-gray-500 hover:text-[#1a73e8] transition-colors"
                >
                  DevMahlatsi@gmail.com
                </a>
              </li>
              <li>
                <span className="text-gray-500">Gauteng, South Africa</span>
              </li>
            </ul>
          </div>
          
          {/* Social/Legal Column */}
          <div className="text-center md:text-left">
            <h3 className="text-white font-semibold mb-4">Connect</h3>
            <div className="flex flex-col gap-2">
              <a 
                href="https://github.com/DevMahlatsi"
                target="_blank"
                rel="noopener noreferrer"
                className="text-gray-500 hover:text-[#1a73e8] transition-colors text-sm"
              >
                GitHub
              </a>
              <a 
                href="https://www.linkedin.com/in/lugisani-j-mahlatsi-b85739261/"
                target="_blank"
                rel="noopener noreferrer"
                className="text-gray-500 hover:text-[#1a73e8] transition-colors text-sm"
              >
                LinkedIn
              </a>
            </div>
          </div>
        </div>
        
        {/* Bottom Bar */}
        <div className="pt-8 border-t border-gray-800 text-center">
          <p className="text-gray-600 text-sm">
            © {currentYear} DevMahlatsi. All rights reserved.
          </p>
          <p className="text-gray-700 text-xs mt-2">
            Built with React & Tailwind CSS
          </p>
        </div>
      </div>
    </footer>
  );
}
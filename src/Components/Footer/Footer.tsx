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
    <footer className="bg-[var(--bg-raised)] border-t border-[var(--border)] mt-16">
      <div className="container mx-auto px-4 py-12">

        {/* Main Footer Grid */}
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8 mb-8">

          {/* Brand Column */}
          <div className="flex flex-col items-center md:items-start">
            <div className="flex items-center gap-2 mb-4">
              <Logo />
            </div>
            <p className="text-[var(--text-muted)] text-sm text-center md:text-left">
              Full stack developer.<br />
              Built without a template.
            </p>
          </div>
          
          {/* Navigation Column */}
          <div className="text-center md:text-left">
            <h3 className="text-[var(--text-primary)] font-semibold mb-4">navigation</h3>
            <ul className="space-y-2">
              {navItems.map((item) => (
                <li key={item.name}>
                  <button
                    onClick={() => scrollToSection(item.section)}
                    className="text-[var(--text-muted)] hover:text-[var(--accent-mono)] transition-colors text-sm"
                  >
                    {item.name.toLowerCase()}
                  </button>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact Column */}
          <div className="text-center md:text-left">
            <h3 className="text-[var(--text-primary)] font-semibold mb-4">contact</h3>
            <ul className="space-y-2 text-sm">
              <li>
                <a
                  href="mailto:DevMahlatsi@gmail.com"
                  className="text-[var(--text-muted)] hover:text-[var(--accent-mono)] transition-colors"
                >
                  DevMahlatsi@gmail.com
                </a>
              </li>
              <li>
                <span className="text-[var(--text-muted)]">Gauteng, South Africa</span>
              </li>
            </ul>
          </div>

          {/* Social/Legal Column */}
          <div className="text-center md:text-left">
            <h3 className="text-[var(--text-primary)] font-semibold mb-4">connect</h3>
            <div className="flex flex-col gap-2">
              <a
                href="https://github.com/DevMahlatsi"
                target="_blank"
                rel="noopener noreferrer"
                className="text-[var(--text-muted)] hover:text-[var(--accent-mono)] transition-colors text-sm"
              >
                github →
              </a>
              <a
                href="https://www.linkedin.com/in/lugisani-j-mahlatsi-b85739261/"
                target="_blank"
                rel="noopener noreferrer"
                className="text-[var(--text-muted)] hover:text-[var(--accent-mono)] transition-colors text-sm"
              >
                linkedin →
              </a>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="pt-8 border-t border-[var(--border)] flex flex-col md:flex-row justify-between items-center gap-2 text-center">
          <p className="text-[var(--text-dim)] text-sm">
            © {currentYear} Dev Mahlatsi. All opinions correct.
          </p>
          <p className="text-[var(--text-dim)] text-xs">
            built without a template
          </p>
        </div>
      </div>
    </footer>
  );
}
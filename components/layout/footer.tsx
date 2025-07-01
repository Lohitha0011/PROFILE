import Link from "next/link";
import { Copyright } from "lucide-react";

export function Footer() {
  return (
    <footer className="bg-background border-t py-8 mt-12">
      <div className="container px-4 md:px-6 mx-auto">
        <div className="grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-4">
          {/* About Section */}
          <div className="space-y-4">
            <h3 className="text-lg font-bold">Bonthu Lohitha</h3>
            <p className="text-sm text-muted-foreground max-w-xs">
              Full Stack Developer & Machine Learning Enthusiast. Specialized in creating modern web applications and AI/ML solutions.
            </p>
          </div>
          {/* Quick Links */}
          <div className="space-y-4">
            <h3 className="text-lg font-bold">Quick Links</h3>
            <ul className="space-y-2">
              <li>
                <Link href="/about" className="text-sm text-muted-foreground hover:text-primary transition-colors">
                  About Me
                </Link>
              </li>
              <li>
                <Link href="/projects" className="text-sm text-muted-foreground hover:text-primary transition-colors">
                  Projects
                </Link>
              </li>
              <li>
                <Link href="/experience" className="text-sm text-muted-foreground hover:text-primary transition-colors">
                  Experience
                </Link>
              </li>
              <li>
                <Link href="/contact" className="text-sm text-muted-foreground hover:text-primary transition-colors">
                  Contact
                </Link>
              </li>
            </ul>
          </div>
          {/* Contact Info */}
          <div className="space-y-4">
            <h3 className="text-lg font-bold">Contact</h3>
            <ul className="space-y-2">
              <li>
                <a href="mailto:lohitha0801@gmail.com" className="text-sm text-muted-foreground hover:text-primary transition-colors">
                  lohitha0801@gmail.com
                </a>
              </li>
              <li>
                <a href="tel:1234567890" className="text-sm text-muted-foreground hover:text-primary transition-colors">
                  6303197497
                </a>
              </li>
              <li>
                <a href="https://github.com/Lohitha0011" target="_blank" rel="noopener noreferrer" className="text-sm text-muted-foreground hover:text-primary transition-colors">
                  GitHub
                </a>
              </li>
              <li>
                <a href="https://linkedin.com/in/lohithabonthu" target="_blank" rel="noopener noreferrer" className="text-sm text-muted-foreground hover:text-primary transition-colors">
                  LinkedIn
                </a>
              </li>
            </ul>
          </div>
        </div>
        <div className="mt-8 border-t pt-4 flex flex-col md:flex-row justify-between items-center gap-4">
         
          
        </div>
      </div>
    </footer>
  );
}
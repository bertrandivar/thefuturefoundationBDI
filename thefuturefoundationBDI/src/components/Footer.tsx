import { Mail, Phone, MapPin, Facebook, Instagram, Twitter, Linkedin } from "lucide-react";

const Footer = () => {
  return (
    <footer id="contact" className="bg-primary text-primary-foreground">
      <div className="container mx-auto px-4 py-16">
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-12">
          
          {/* Brand */}
          <div className="lg:col-span-2">
            <div className="flex items-center gap-3 mb-4">
              <img 
                src="/futurelogo.jpg" 
                alt="The Future Foundation BDI" 
                className="w-12 h-12 rounded-full object-cover border-2 border-secondary" 
              />
              <span className="font-bold text-xl tracking-tight">The Future Foundation BDI</span>
            </div>
            <p className="text-primary-foreground/80 mb-6 max-w-md">
              Organisation caritative dédiée à l'autonomisation des jeunes Burundais. 
              La réussite de tous est notre priorité.
            </p>
            <div className="flex gap-4">
              {/* LIEN INSTAGRAM MIS À JOUR */}
              <a 
                href="https://www.instagram.com/thefuturefoundationbdi/" 
                target="_blank" 
                rel="noopener noreferrer" 
                className="w-10 h-10 rounded-full bg-primary-foreground/10 flex items-center justify-center hover:bg-secondary hover:text-secondary-foreground transition-all"
              >
                <span className="sr-only">Instagram</span>
                <Instagram className="w-5 h-5" />
              </a>
              <a href="#" className="w-10 h-10 rounded-full bg-primary-foreground/10 flex items-center justify-center hover:bg-secondary hover:text-secondary-foreground transition-all opacity-50 cursor-not-allowed">
                <Facebook className="w-5 h-5" />
              </a>
              <a href="#" className="w-10 h-10 rounded-full bg-primary-foreground/10 flex items-center justify-center hover:bg-secondary hover:text-secondary-foreground transition-all opacity-50 cursor-not-allowed">
                <Twitter className="w-5 h-5" />
              </a>
            </div>
          </div>

          {/* Quick Links MIS À JOUR */}
          <div>
            <h4 className="font-bold text-lg mb-4">Liens Rapides</h4>
            <ul className="space-y-3">
              <li><a href="#" className="text-primary-foreground/80 hover:text-secondary transition-colors">Accueil</a></li>
              <li><a href="#mission" className="text-primary-foreground/80 hover:text-secondary transition-colors">Notre Mission</a></li>
              <li><a href="#livre" className="text-primary-foreground/80 hover:text-secondary transition-colors">Notre Livre</a></li>
              <li><a href="#equipe" className="text-primary-foreground/80 hover:text-secondary transition-colors">Notre Équipe</a></li>
              <li><a href="#contact" className="text-primary-foreground/80 hover:text-secondary transition-colors">Contact</a></li>
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h4 className="font-bold text-lg mb-4">Contact</h4>
            <ul className="space-y-4">
              <li className="flex items-start gap-3">
                <MapPin className="w-5 h-5 text-secondary mt-0.5" />
                <span className="text-primary-foreground/80">Bujumbura, Burundi</span>
              </li>
              <li className="flex items-center gap-3">
                <Phone className="w-5 h-5 text-secondary" />
                <a href="tel:+25779186635" className="text-primary-foreground/80 hover:text-secondary transition-colors">+257 79 186 635</a>
              </li>
              <li className="flex items-center gap-3">
                <Mail className="w-5 h-5 text-secondary" />
                <a href="mailto:thefuturefoundationbdi@gmail.com" className="text-primary-foreground/80 hover:text-secondary transition-colors">thefuturefoundationbdi@gmail.com</a>
              </li>
            </ul>
          </div>
        </div>

        <div className="border-t border-primary-foreground/10 mt-12 pt-8 text-center">
          <p className="text-primary-foreground/60 text-sm">
            © {new Date().getFullYear()} The Future Foundation BDI. Tous droits réservés.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;

import { Button } from "@/components/ui/button";
import { ArrowRight, Mail, MessageCircle } from "lucide-react";

const HeroSection = () => {
  // Configuration des contacts
  const WHATSAPP_NUMBER = "25779186635";
  const EMAIL_ADDRESS = "thefuturefoundationbdi@gmail.com";
  const BOOK_TITLE = "L'Argent Révélé: La Clé de la Liberté financière";

  // Fonction pour ouvrir la WhatsApp
  const handleWhatsAppOrder = () => {
    const message = encodeURIComponent(`Bonjour, je souhaite commander le livre "${BOOK_TITLE}".`);
    window.open(`https://wa.me/${WHATSAPP_NUMBER}?text=${message}`, "_blank");
  };

  // Fonction pour ouvrir l'Email
  const handleEmailOrder = () => {
    const subject = encodeURIComponent(`Commande : ${BOOK_TITLE}`);
    const body = encodeURIComponent(`Bonjour,\n\nJe souhaiterais commander un exemplaire de votre ouvrage "${BOOK_TITLE}".\n\nMerci de m'indiquer la marche à suivre.`);
    window.location.href = `mailto:${EMAIL_ADDRESS}?subject=${subject}&body=${body}`;
  };

  // Fonction pour ouvrir la modale de la préface située dans Index.tsx
  const openPrefaceModal = () => {
    const modal = document.getElementById('modal-preface');
    if (modal) {
      modal.classList.remove('hidden');
    }
  };

  return (
    <section id="accueil" className="relative min-h-screen flex items-center pt-20 overflow-hidden">
      {/* Background Image - Assure-toi que coverweb.png est dans le dossier public */}
      <div className="absolute inset-0 z-0">
        <img
          src="/coverweb.png" 
          alt={BOOK_TITLE}
          className="w-full h-full object-cover object-right md:object-center"
        />
        {/* Overlay pour assurer la lisibilité du texte à gauche */}
        <div className="absolute inset-0 bg-gradient-to-r from-emerald-950/95 via-emerald-900/70 to-transparent" />
      </div>

      <div className="container mx-auto px-4 relative z-10">
        <div className="max-w-2xl animate-fade-up">
          <span className="inline-block px-4 py-2 bg-secondary/20 backdrop-blur-sm rounded-full text-secondary font-semibold text-sm mb-6">
            🇧🇮 Burundi • Éducation Financière
          </span>
          
          <h1 className="text-4xl md:text-6xl lg:text-7xl font-black text-primary-foreground leading-tight mb-6">
            L'Argent <span className="text-secondary">Révélé</span>
          </h1>
          
          <p className="text-lg md:text-xl text-primary-foreground/90 mb-8 leading-relaxed">
            Découvrez la clé de la liberté financière avec l'ouvrage de référence de 
            <strong> The Future Foundation</strong>. Apprenez à transformer votre vision 
            de l'argent pour bâtir un avenir prospère.
          </p>

          <div className="flex flex-col gap-8">
            {/* Options de commande */}
            <div className="space-y-4">
              <p className="text-secondary font-bold text-sm uppercase tracking-widest">Commander l'ouvrage via :</p>
              <div className="flex flex-wrap gap-4">
                <button 
                  onClick={handleWhatsAppOrder}
                  className="flex items-center bg-[#25D366] hover:bg-[#128C7E] text-white px-6 py-4 rounded-lg text-lg font-bold transition-transform hover:scale-105 shadow-lg"
                >
                  <MessageCircle className="mr-2 h-6 w-6" />
                  WhatsApp
                </button>
                <button 
                  onClick={handleEmailOrder}
                  className="flex items-center bg-white text-emerald-900 hover:bg-gray-100 px-6 py-4 rounded-lg text-lg font-bold transition-transform hover:scale-105 shadow-lg"
                >
                  <Mail className="mr-2 h-6 w-6" />
                  Email
                </button>
              </div>
            </div>

            {/* Bouton pour la préface */}
            <div>
              <Button 
                variant="heroOutline" 
                size="xl" 
                onClick={openPrefaceModal}
                className="group border-white/30 text-white hover:bg-white/10"
              >
                Lire un extrait
                <ArrowRight className="ml-2 h-5 w-5 group-hover:translate-x-1 transition-transform" />
              </Button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;

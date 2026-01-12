import { useState } from "react";
import { 
  User, ShieldCheck, Landmark, Calendar, Megaphone, 
  Trophy, TrendingUp, FileText, X, ArrowRight, Users 
} from "lucide-react";
import { Button } from "./ui/button";

const team = [
  {
    name: "NIYOMFURA Guy Bertrand",
    role: "Directeur Général",
    icon: <Trophy className="w-8 h-8" />,
    color: "bg-primary"
  },
  {
    name: "KANYANA Perle Deborah",
    role: "Secrétaire",
    icon: <FileText className="w-8 h-8" />,
    color: "bg-emerald-600"
  },
  {
    name: "KOMEZA Adiella Princia",
    role: "Trésorerie",
    icon: <Landmark className="w-8 h-8" />,
    color: "bg-emerald-700"
  },
  {
    name: "ISHIMWE Lysa Fleur",
    role: "Responsable Opérations & Événementiel",
    desc: "Planification et exécution des actions terrain : sessions, événements et campagnes communautaires.",
    icon: <Calendar className="w-8 h-8" />,
    color: "bg-secondary"
  },
  {
    name: "IRAKOZE Reine Roxanne",
    role: "Vice Responsable Opérations & Événementiel",
    icon: <Calendar className="w-8 h-8" />,
    color: "bg-secondary"
  },
  {
    name: "NIMUBONA Don Fleury",
    role: "Responsable Communication & Partenariat",
    desc: "Gestion de l'image, réseaux sociaux, presse, partenariats stratégiques et financements.",
    icon: <Megaphone className="w-8 h-8" />,
    color: "bg-emerald-800"
  },
  {
    name: "ITERITEKA Anniella",
    role: "Responsable Marketing & Promotion",
    desc: "Supports visuels et promotion des programmes d'éducation financière et développement personnel.",
    icon: <TrendingUp className="w-8 h-8" />,
    color: "bg-emerald-900"
  }
];

const otherFounders = [
  { name: "GAHUNGU Bertin", role: "Membre Fondateur" },
  { name: "NDAGARA Kercie Ketina", role: "Membre Fondateur" },
  { name: "IGIRANEZA Garenne", role: "Membre Fondateur" },
  { name: "IGIRANEZA Billy Don de Dieu", role: "Membre Fondateur" },
];

const TeamSection = () => {
  const [showFounders, setShowFounders] = useState(false);

  return (
    <section id="equipe" className="py-24 bg-white">
      <div className="container mx-auto px-4">
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <span className="text-secondary font-bold uppercase tracking-widest text-sm italic">Organigramme</span>
          <h2 className="text-4xl md:text-5xl font-black text-primary mt-3 mb-6">Direction de la Fondation</h2>
          <p className="text-lg text-muted-foreground">
            Les visages derrière la mission de <strong>The Future Foundation BDI</strong>.
          </p>
        </div>

        {/* Grille Direction */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16">
          {team.map((member, index) => (
            <div key={index} className="group bg-card rounded-2xl p-8 border border-slate-100 shadow-sm hover:shadow-xl transition-all duration-300">
              <div className="relative mb-6">
                <div className={`w-20 h-20 ${member.color} rounded-2xl flex items-center justify-center text-white mb-4 shadow-lg transform group-hover:scale-110 transition-transform`}>
                  {member.icon}
                </div>
                <div className="absolute top-0 right-0 w-12 h-12 bg-slate-50 rounded-full border-4 border-white flex items-center justify-center text-slate-300">
                  <User className="w-6 h-6" />
                </div>
              </div>
              
              <h3 className="text-xl font-bold text-primary mb-1">{member.name}</h3>
              <p className="text-secondary font-bold text-xs uppercase mb-4 tracking-tighter">{member.role}</p>
              
              {member.sub && (
                <div className="flex flex-col gap-1 mb-3">
                  <p className="text-[10px] text-muted-foreground uppercase font-bold">En collaboration avec :</p>
                  <p className="text-xs font-bold text-emerald-700 px-3 py-1.5 bg-emerald-50 rounded-lg border border-emerald-100 flex items-center gap-2">
                    <User className="w-3 h-3" /> {member.sub}
                  </p>
                </div>
              )}
              
              {member.desc && (
                <p className="text-sm text-muted-foreground leading-relaxed italic border-l-2 border-slate-100 pl-3">
                  {member.desc}
                </p>
              )}
            </div>
          ))}
        </div>

        {/* Bouton Modal */}
        <div className="flex justify-center">
          <Button 
            onClick={() => setShowFounders(true)}
            variant="outline" 
            className="group border-primary text-primary hover:bg-primary hover:text-white rounded-full px-8 py-6 h-auto text-lg font-bold transition-all shadow-lg"
          >
            Découvrir tous les fondateurs
            <ArrowRight className="ml-2 w-5 h-5 group-hover:translate-x-1 transition-transform" />
          </Button>
        </div>

        {/* Modal Autres Fondateurs */}
        {showFounders && (
          <div className="fixed inset-0 z-[110] flex items-center justify-center p-4 bg-primary/80 backdrop-blur-md animate-fade-in">
            <div className="bg-white w-full max-w-3xl rounded-3xl shadow-2xl overflow-hidden animate-scale-in relative">
              <div className="p-6 border-b flex justify-between items-center bg-slate-50">
                <div className="flex items-center gap-3 text-primary">
                  <Users className="w-6 h-6 text-secondary" />
                  <h3 className="font-bold text-xl uppercase tracking-tighter">Membres Fondateurs</h3>
                </div>
                <button 
                  onClick={() => setShowFounders(false)} 
                  className="p-2 hover:bg-slate-200 rounded-full transition-colors text-primary"
                >
                  <X className="w-6 h-6" />
                </button>
              </div>

              <div className="p-8 max-h-[70vh] overflow-y-auto">
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                  {otherFounders.map((founder, i) => (
                    <div key={i} className="flex items-center gap-4 p-4 bg-slate-50 rounded-2xl border border-slate-100 hover:border-secondary transition-all group">
                      <div className="w-16 h-16 rounded-full bg-slate-200 border-2 border-white shadow-sm flex items-center justify-center overflow-hidden shrink-0 group-hover:bg-secondary/20 transition-colors">
                        <User className="w-8 h-8 text-slate-400 group-hover:text-secondary" />
                      </div>
                      <div>
                        <h4 className="font-bold text-primary leading-tight">{founder.name}</h4>
                        <p className="text-xs text-secondary font-bold uppercase">{founder.role}</p>
                      </div>
                    </div>
                  ))}
                </div>
                
                <div className="mt-8 p-4 bg-emerald-50 rounded-xl border border-emerald-100 flex items-start gap-3">
                  <ShieldCheck className="w-5 h-5 text-emerald-600 mt-1 flex-shrink-0" />
                  <p className="text-xs text-emerald-800 italic">
                    Ces membres constituent le socle de <strong>The Future Foundation BDI</strong>. Leur engagement commun permet aujourd'hui de soutenir la jeunesse burundaise.
                  </p>
                </div>
              </div>

              <div className="p-4 bg-primary text-white text-center text-[10px] tracking-widest uppercase">
                The Future Foundation BDI • Unis pour l'impact
              </div>
            </div>
          </div>
        )}
      </div>
    </section>
  );
};

export default TeamSection;

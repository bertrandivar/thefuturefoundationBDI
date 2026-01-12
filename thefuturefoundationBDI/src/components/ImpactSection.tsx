import { GraduationCap, Users, MapPin, Award } from "lucide-react";

const ImpactSection = () => {
  const stats = [
    {
      icon: GraduationCap,
      number: "500+",
      label: "Jeunes formés",
      description: "Adolescents et jeunes diplômés accompagnés",
    },
    {
      icon: Users,
      number: "50+",
      label: "Bénévoles actifs",
      description: "Mentors dévoués à notre cause",
    },
    {
      icon: MapPin,
      number: "10+",
      label: "Communautés",
      description: "Régions du Burundi touchées",
    },
    {
      icon: Award,
      number: "95%",
      label: "Satisfaction",
      description: "Taux de satisfaction des participants",
    },
  ];

  return (
    <section id="impact" className="py-20 md:py-32 bg-hero-gradient text-primary-foreground">
      <div className="container mx-auto px-4">
        {/* Header */}
        <div className="max-w-3xl mx-auto text-center mb-16">
          <span className="inline-block px-4 py-2 bg-secondary/20 rounded-full text-secondary font-semibold text-sm mb-4">
            Notre Impact
          </span>
          <h2 className="text-3xl md:text-5xl font-bold mb-6">
            Des résultats qui{" "}
            <span className="text-secondary">parlent d'eux-mêmes</span>
          </h2>
          <p className="text-lg text-primary-foreground/80">
            Chaque jour, nous travaillons à créer un changement durable dans la 
            vie des jeunes burundais et de leurs communautés.
          </p>
        </div>

        {/* Stats Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
          {stats.map((stat, index) => (
            <div
              key={stat.label}
              className="text-center p-8 rounded-2xl bg-primary-foreground/5 backdrop-blur-sm border border-primary-foreground/10 hover:bg-primary-foreground/10 transition-all duration-300"
            >
              <div className="w-16 h-16 mx-auto rounded-full bg-secondary/20 flex items-center justify-center mb-4">
                <stat.icon className="w-8 h-8 text-secondary" />
              </div>
              <p className="text-4xl md:text-5xl font-black text-secondary mb-2">
                {stat.number}
              </p>
              <p className="text-xl font-bold mb-2">{stat.label}</p>
              <p className="text-sm text-primary-foreground/70">
                {stat.description}
              </p>
            </div>
          ))}
        </div>

        {/* Objectives */}
        <div className="mt-20 max-w-4xl mx-auto">
          <h3 className="text-2xl md:text-3xl font-bold text-center mb-10">
            Nos Objectifs
          </h3>
          <div className="grid md:grid-cols-3 gap-6">
            <div className="p-6 rounded-xl bg-primary-foreground/5 border border-primary-foreground/10">
              <div className="w-10 h-10 rounded-full bg-secondary flex items-center justify-center text-secondary-foreground font-bold mb-4">
                1
              </div>
              <h4 className="font-bold text-lg mb-2">Compétences Pratiques</h4>
              <p className="text-primary-foreground/80 text-sm">
                Fournir des compétences de vie pratiques pour aider les jeunes à 
                naviguer dans la société.
              </p>
            </div>
            <div className="p-6 rounded-xl bg-primary-foreground/5 border border-primary-foreground/10">
              <div className="w-10 h-10 rounded-full bg-secondary flex items-center justify-center text-secondary-foreground font-bold mb-4">
                2
              </div>
              <h4 className="font-bold text-lg mb-2">Développement Personnel</h4>
              <p className="text-primary-foreground/80 text-sm">
                Encourager l'amélioration de la confiance en soi et l'estime de soi.
              </p>
            </div>
            <div className="p-6 rounded-xl bg-primary-foreground/5 border border-primary-foreground/10">
              <div className="w-10 h-10 rounded-full bg-secondary flex items-center justify-center text-secondary-foreground font-bold mb-4">
                3
              </div>
              <h4 className="font-bold text-lg mb-2">Jeunes Visionnaires</h4>
              <p className="text-primary-foreground/80 text-sm">
                Bâtir une génération capable de contribuer au développement de leur 
                communauté.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ImpactSection;

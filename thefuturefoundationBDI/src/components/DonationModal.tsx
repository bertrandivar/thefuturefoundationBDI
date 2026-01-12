import { useState } from "react";
import { X, CreditCard, Smartphone, Globe, Home, CheckCircle2 } from "lucide-react";
import { Button } from "./ui/button";

interface DonationModalProps {
  isOpen: boolean;
  onClose: () => void;
}

const DonationModal = ({ isOpen, onClose }: DonationModalProps) => {
  const [currency, setCurrency] = useState<"USD" | "BIF">("USD");
  const [amount, setAmount] = useState<string>("");

  if (!isOpen) return null;

  const amountsUSD = ["5", "10", "20", "50"];
  const amountsBIF = ["2000", "5000", "10000", "50000"];

  const minAmount = currency === "USD" ? 5 : 2000;
  const isInvalid = amount !== "" && parseFloat(amount) < minAmount;

  // Fonction pour envoyer la confirmation sur WhatsApp
  const handleWhatsAppConfirm = () => {
    const WHATSAPP_NUMBER = "25779186635";
    const message = encodeURIComponent(
      `Bonjour The Future Foundation, je viens d'effectuer un don de ${amount} ${currency === "BIF" ? "Fbu" : "$"} pour soutenir la fondation. [Je joins ma capture d'écran ci-dessous]`
    );
    window.open(`https://wa.me/${WHATSAPP_NUMBER}?text=${message}`, "_blank");
  };

  return (
    <div className="fixed inset-0 z-[100] flex items-center justify-center p-4 bg-primary/60 backdrop-blur-sm animate-fade-in">
      <div className="bg-white w-full max-w-md rounded-2xl shadow-2xl overflow-hidden animate-scale-in">
        
        {/* Header */}
        <div className="p-6 border-b flex justify-between items-center bg-slate-50">
          <div>
            <h3 className="text-xl font-bold text-primary">Faire un Don</h3>
            <p className="text-sm text-muted-foreground">Soutenez la jeunesse burundaise</p>
          </div>
          <button onClick={onClose} className="p-2 hover:bg-slate-200 rounded-full transition-colors">
            <X className="w-5 h-5" />
          </button>
        </div>

        <div className="p-6 space-y-6">
          {/* Choix de la Localisation */}
          <div className="flex gap-2 p-1 bg-slate-100 rounded-lg">
            <button 
              onClick={() => { setCurrency("USD"); setAmount(""); }}
              className={`flex-1 flex items-center justify-center gap-2 py-2 rounded-md text-sm font-bold transition-all ${currency === "USD" ? "bg-white shadow text-primary" : "text-slate-500"}`}
            >
              <Globe className="w-4 h-4" /> International ($)
            </button>
            <button 
              onClick={() => { setCurrency("BIF"); setAmount(""); }}
              className={`flex-1 flex items-center justify-center gap-2 py-2 rounded-md text-sm font-bold transition-all ${currency === "BIF" ? "bg-white shadow text-primary" : "text-slate-500"}`}
            >
              <Home className="w-4 h-4" /> Burundi (Fbu)
            </button>
          </div>

          {/* Sélection Montant Rapide */}
          <div className="grid grid-cols-4 gap-2">
            {(currency === "USD" ? amountsUSD : amountsBIF).map((val) => (
              <button
                key={val}
                onClick={() => setAmount(val)}
                className={`py-2 border-2 rounded-xl text-sm font-bold transition-all ${amount === val ? "border-secondary bg-secondary/10 text-primary" : "border-slate-100 hover:border-slate-200"}`}
              >
                {val}
              </button>
            ))}
          </div>

          {/* Input Montant Personnalisé */}
          <div className="relative">
            <input 
              type="number"
              placeholder={`Autre montant (min ${minAmount} ${currency === "USD" ? "$" : "Fbu"})`}
              value={amount}
              onChange={(e) => setAmount(e.target.value)}
              className={`w-full p-4 pr-12 border-2 rounded-xl focus:outline-none focus:ring-2 transition-all ${isInvalid ? "border-red-500 focus:ring-red-200" : "border-slate-100 focus:ring-primary/20"}`}
            />
            <span className="absolute right-4 top-1/2 -translate-y-1/2 font-bold text-slate-400">
              {currency === "USD" ? "$" : "Fbu"}
            </span>
          </div>

          {/* SECTION PAIEMENT */}
          <div className="space-y-4 pt-2">
            {currency === "USD" ? (
              /* International : PayPal / Carte */
              <Button 
                disabled={isInvalid || !amount}
                className="w-full h-14 bg-[#0070ba] hover:bg-[#003087] flex gap-3 text-lg"
                onClick={() => window.open("https://paypal.me/votrecompte", "_blank")}
              >
                <CreditCard className="w-5 h-5" /> Payer par Carte / PayPal
              </Button>
            ) : (
              /* Burundi : Mode de paiement Local */
              <div className="space-y-4">
                <div className="p-4 bg-emerald-50 border border-emerald-200 rounded-xl">
                  <h4 className="font-bold text-emerald-800 flex items-center gap-2 mb-3 text-sm">
                    <Smartphone className="w-4 h-4" /> Instructions de transfert
                  </h4>
                  
                  {/* Logos des services (Espace pour vos images) */}
                  <div className="grid grid-cols-3 gap-2 mb-4">
                    <div className="h-10 bg-white rounded border border-emerald-100 flex items-center justify-center p-1 overflow-hidden">
                       <img src="/lumicash_logo.png" alt="Lumicash" className="h-full object-contain error-fallback" onError={(e) => e.currentTarget.style.display='none'} />
                    </div>
                    <div className="h-10 bg-white rounded border border-emerald-100 flex items-center justify-center p-1">
                       <img src="/beenoti_logo.png" alt="Be-enoti" className="h-full object-contain" onError={(e) => e.currentTarget.style.display='none'} />
                    </div>
                    <div className="h-10 bg-white rounded border border-emerald-100 flex items-center justify-center p-1">
                       <img src="/ihela_logo.png" alt="Ihela" className="h-full object-contain" onError={(e) => e.currentTarget.style.display='none'} />
                    </div>
                  </div>

                  <div className="space-y-2 text-[12px] text-emerald-700 leading-relaxed">
                    <p>• <strong>LUMICASH / ECOCASH :</strong> Composez <strong>*150#</strong> ou <strong>*444#</strong> {'>'} Paiement Marchand {'>'} Code : <strong>[VOTRE_CODE]</strong></p>
                    <p>• <strong>BE-ENOTI / IHELA :</strong> Transférez vers le compte : <strong>[NUMERO_COMPTE]</strong></p>
                    <p className="mt-2 pt-2 border-t border-emerald-200 font-bold text-sm">
                      Montant à envoyer : {amount || "0"} Fbu
                    </p>
                  </div>
                </div>

                {/* Bouton WhatsApp pour confirmation */}
                <Button 
                  disabled={isInvalid || !amount}
                  onClick={handleWhatsAppConfirm}
                  className="w-full bg-[#25D366] hover:bg-[#128C7E] text-white flex gap-2 h-12"
                >
                  <CheckCircle2 className="w-5 h-5" /> Confirmer mon don (WhatsApp)
                </Button>
              </div>
            )}
            
            <p className="text-[10px] text-center text-muted-foreground uppercase tracking-widest pt-2">
              The Future Foundation BDI • La réussite de tous
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default DonationModal;

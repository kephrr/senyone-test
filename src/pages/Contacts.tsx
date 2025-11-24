import { useRef, useState } from "react";
import emailjs from '@emailjs/browser';
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { Input } from "@/components/ui/input";
import { Checkbox } from "@/components/ui/checkbox";
import { Label } from "@/components/ui/label";
import HeroSection from "@/components/HeroSection";
import { Toast } from "@/components/ui/toast";
import { Toaster } from "@/components/ui/toaster";
import { useToast } from "@/components/ui/use-toast";

const Contact = () => {
  const form = useRef<HTMLFormElement>(null);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const { toast } = useToast();

  const successNotification = () => {
    toast({
      title: "Envoyé",
      description: "Nous avons bien reçu votre message",
      duration: 3000, // Durée en ms (optionnel, 5000 par défaut)
    });
  };

  const errorNotification = () => {
    toast({
      title: "Erreur",
      description: "Une erreur est survenue, veuillez réessayer plus tard.",
      duration: 3000, // Durée en ms (optionnel, 5000 par défaut)
    });
  };

  const typingErrorNotification = () => {
    toast({
      title: "Erreur",
      description: "Veuillez remplir correctement tous les champs obligatoires",
      duration: 3000, // Durée en ms (optionnel, 5000 par défaut)
    });
  };

  const sendEmail = async (e: React.FormEvent) => {
    e.preventDefault();
    const formElement = e.target as HTMLFormElement;
    const formData = new FormData(formElement);
    
    // Récupération des valeurs du formulaire
    const nom = formData.get('lastname') as string;
    const prenom = formData.get('firstname') as string;
    const email = formData.get('email') as string;
    const phone = formData.get('phone') as string;
    const message = formData.get('message') as string;

    // Validation des champs
    if (!nom || !prenom || !email || !phone) {
      typingErrorNotification();
      return;
    }

    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(email)) {
      typingErrorNotification();
      return;
    }

    if (!form.current) return;

    setIsSubmitting(true);

    try {
      const templateParams = {
        lastname: nom,
        firstname: prenom,
        from_email: email, 
        phone: phone,
        message: message || 'Aucun message',
        'g-recaptcha-response': '03AHJ_ASjnLA214KSNKFJAK12sfKASfehbmfd...' // Si vous utilisez reCAPTCHA
      };

      const response = await emailjs.send(
        'service_zcnep4v',
        'template_wjz6ftf',
        templateParams,
        'GHlVqEnKJxg2QfSGc'
      );

      if (response.status === 200) {
        successNotification();
        form.current.reset();
      }
    } catch (error) {
      console.error('Erreur:', error);
      errorNotification();
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />
      <HeroSection 
        title="Nous contacter"
        description="Souhaitez-vous nous contacter ? Voici tout ce dont vous avez besoin"
        showButtons={false}
        maxWidth="max-w-8xl"
      />
      <Toaster/>
      <main className="flex-grow container mx-auto px-4 py-12">
        <div className="max-w-2xl mx-auto bg-white p-8">
          <h1 className="text-3xl font-bold text-center mb-8 font-neue-plak">Quelque chose à nous dire ?</h1>
          
          <form ref={form} onSubmit={sendEmail} className="space-y-6 font-neue-plak-thin">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div className="space-y-2">
                <Label htmlFor="lastname">Nom *</Label>
                <Input 
                  id="lastname" 
                  name="lastname" 
                  placeholder="SECK" 
                  className="w-full" 
                  required 
                />
              </div>
              
              <div className="space-y-2">
                <Label htmlFor="firstname">Prénom *</Label>
                <Input 
                  id="firstname" 
                  name="firstname" 
                  placeholder="Mohamadou Lamine" 
                  className="w-full" 
                  required 
                />
              </div>
              
              <div className="space-y-2 md:col-span-2">
                <Label htmlFor="email">Adresse mail *</Label>
                <Input 
                  id="email" 
                  name="email" 
                  type="email" 
                  placeholder="mohalamine@monmail.com" 
                  className="w-full" 
                  required 
                />
              </div>
              
              <div className="space-y-2 md:col-span-2">
                <Label htmlFor="phone">Numéro de téléphone *</Label>
                <Input 
                  id="phone" 
                  name="phone" 
                  placeholder="78-111-22-33" 
                  className="w-full" 
                  required 
                />
              </div>
              
              <div className="space-y-2 md:col-span-2">
                <Label htmlFor="message">Message</Label>
                <textarea
                  id="message"
                  name="message"
                  rows={4}
                  className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-[#00929e]"
                  placeholder="Votre message ici..."
                ></textarea>
              </div>
            </div>
            
            <div className="flex items-start space-x-2">
              <Checkbox id="privacy" name="privacy" required />
              <div className="grid gap-1.5 leading-none">
                <Label htmlFor="privacy" className="text-sm font-medium leading-none">
                  Veuillez accepter notre politique de confidentialité *
                </Label>
                <p className="text-sm text-muted-foreground">
                  En soumettant ce formulaire, vous acceptez notre politique de confidentialité.
                </p>
              </div>
            </div>
            
            <div className="pt-4">
              <button 
                type="submit" 
                className={`w-full bg-[#00929e] rounded-lg text-white py-3 text-lg hover:bg-[#007a85] transition-colors ${
                  isSubmitting ? 'opacity-70 cursor-not-allowed' : ''
                }`}
                disabled={isSubmitting}
              >
                {isSubmitting ? 'Envoi en cours...' : 'Envoyer'}
              </button>
            </div>
          </form>
        </div>
      </main>
      
      <Footer />
    </div>
  );
};

export default Contact;
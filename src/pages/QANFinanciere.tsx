import { CheckCircle2, Timer, BookOpenCheck } from "lucide-react";
import { SolutionCardProps } from "@/components/SolutionsSurMesureSection";
import { CasClient } from "@/components/CasClientSection";
import { DefiCardProps } from "@/components/DefisCardsSection";
import { HeroText } from "@/components/HeroSection";
import {QuiAidonsNous} from "@/pages/interface/QuiAidonsNous";

const QANFinanciere = () => {
    const heroText:HeroText = {
        title: "Direction Financière",
        description: "Clôturez en 3 jours au lieu de 15, Automatisez. Fiabilisez. Pilotez.",
    };

    const solutionsCards:SolutionCardProps[] = [
        {
        icon: <CheckCircle2 className="w-10 h-10 text-[#008D92]" />,
        title: "Clôture Flash",
        items: [
            "Automatisation des écritures",
            "Rapprochements IA",
            "Contrôles automatiques",
        ],
        badge: "J+3 au lieu de J+15",
        },
        {
        icon: <BookOpenCheck className="w-10 h-10 text-[#E44849]" />,
        title: "Conformité garantie",
        items: [
            "Workflows de validation",
            "Piste d'audit complète",
            "Archivage légal 10 ans",
        ],
        badge: "100% OHADA compliant",
        },
        {
        icon: <Timer className="w-10 h-10 text-[#ED6E3D]" />,
        title: "Pilotage temps réel",
        items: [
            "Tableaux de bord dynamiques",
            "Alertes intelligentes",
            "Prévisions IA",
        ],
        badge: "Décisions éclairées quotidiennes",
        },
  ];

  const cases: CasClient[] = [
    {
      title: "Cas client DAF",
      quote:
        "Nous avons sécurisé l'ensemble de nos contrats et gagné en réactivité sur les négociations.",
      author: "Directeur Financier",
      role: "",
      company: "Holding Financière",
    },
  ];

  const cards: DefiCardProps[] = [
    {
      title: "Rapprochements manuels source d'erreurs",
      color: "#008D92",
      align: "left",
      visible: true,
      delayClass: "delay-300",
    },
    {
      title: "Conformité OHADA/SYSCOHADA complexe",
      color: "#F7A500",
      align: "left",
      visible: true,
      delayClass: "delay-700",
    },
    {
      title: "Clôtures interminables et stressantes",
      color: "#E44849",
      align: "right",
      visible: true,
      delayClass: "delay-100",
    },
    {
      title: "Reporting chronophage peu valorisant",
      color: "#8B3CF4",
      align: "right",
      visible: true,
      delayClass: "delay-500",
    },
    {
      title: "Pression sur la réduction des coûts",
      color: "#1F8BFF",
      align: "right",
      visible: true,
      delayClass: "delay-1000",
    },
  ];

    return (
        <QuiAidonsNous heroText={heroText} solutionsCards={solutionsCards} cases={cases} cards={cards} />
    );
};

export default QANFinanciere;
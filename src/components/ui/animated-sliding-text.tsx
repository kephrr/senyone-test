import React from "react";
import { motion } from "framer-motion";

type Props = {
  /** Texte à afficher ([:max 5 caractères]) */
  text: string;
  className?: string;
  /** durée d'apparition d'un caractère (en secondes) */
  duration?: number;
  /** délai entre chaque caractère (en secondes) */
  stagger?: number;
  /** optionnel : début différé global (en secondes) */
  delay?: number;
  /** contrôle externe pour déclencher l'animation */
  animate?: boolean;
  /** répéter l'animation indéfiniment */
  repeat?: boolean;
  /** délai entre les répétitions (en secondes) */
  repeatDelay?: number;
};

const containerVariants = (stagger: number, delay = 0) => ({
  hidden: {},
  visible: {
    transition: {
      staggerChildren: stagger,
      delay,
    },
  },
});

const charVariants = (duration: number, repeat: boolean, repeatDelay: number) => ({
  hidden: { y: -20, opacity: 0 },
  visible: {
    y: 0,
    opacity: 1,
    transition: {
      duration,
      repeat: repeat ? Infinity : 0,
      repeatDelay,
      repeatType: "loop" as const,
    },
  },
});

export default function AnimatedSlidingText({
  text,
  className = "",
  duration = 0.35,
  stagger = 0.08,
  delay = 0,
  animate = true,
  repeat = false,
  repeatDelay = 1,
}: Props) {
  const safeText = (text ?? "").toString();
  const trimmed = safeText.slice(0, 5); // max 5 caractères

  if (safeText.length > 5) {
    // avertissement utile en dev
    // eslint-disable-next-line no-console
    console.warn("SlidingChars: le texte a été tronqué à 5 caractères.");
  }

  const chars = Array.from(trimmed);

  return (
    <motion.div
      initial="hidden"
      animate={animate ? "visible" : "hidden"}
      variants={containerVariants(stagger, delay)}
      className={`inline-flex items-center gap-0.5 ${className}`}
      aria-label={trimmed}
      role="text"
    >
      {chars.map((ch, i) => (
        <motion.span
          key={i}
          variants={charVariants(duration, repeat, repeatDelay)}
          className="inline-block leading-none"
          aria-hidden={false}
        >
          {ch}
        </motion.span>
      ))}
    </motion.div>
  );
}

/*
Usage :
1) installer framer-motion :
   npm install framer-motion

2) importer et utiliser :
   import SlidingChars from "./SlidingChars";
   <SlidingChars text={"HELLO"} animate={trigger} repeat repeatDelay={2} />

Props utiles :
- text (string) : texte (sera tronqué à 5 caractères)
- duration (number) : durée d'apparition d'un caractère (s)
- stagger (number) : délai entre chaque caractère (s)
- delay (number) : délai initial avant de commencer l'animation (s)
- animate (boolean) : contrôle externe de l'animation (true = joue l'animation, false = état caché)
- repeat (boolean) : répète l'animation à l'infini
- repeatDelay (number) : délai entre les répétitions (s)

Exemple avancé :
  <SlidingChars text="BYE!" animate={true} repeat repeatDelay={3} />
*/
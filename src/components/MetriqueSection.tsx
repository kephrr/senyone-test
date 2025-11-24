import { EqualApproximately, CalendarSync, BanknoteIcon } from "lucide-react"
import AnimatedSlidingText from "./ui/animated-sliding-text"
import { useScrollAnimation } from "./hook/useScrollAnimation";
import pattern from "@/assets/images/pattern.png";

export function MetricsSection() {
  const [sectionRef, sectionVisible] = useScrollAnimation(0.1);
  
  return (
    <div className={`w-full mx-auto bg-[#00929e] rounded-b-[50px] bg-[url(assets/images/pattern.png)] bg-repeat-x bg-cover`} style={{ backgroundImage: `url(${pattern})` }}>
      <div className="bg-[#efefef] w-full rounded-b-[50px] h-20"></div>
      <div className=" rounded-3xl p-12 text-white">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-12 justify-items-center mx-60 my-10">
          {/* Automatisations déployées */}
          <div ref={sectionRef} className="text-center space-y-6 max-w-40">
            <div className="mb-16">
              <div className="flex justify-start">
                <CalendarSync className="w-8 h-8 text-white" strokeWidth={1.5} />
              </div>
              <div className="space-y-2" >
                <AnimatedSlidingText text="+100" className="text-4xl font-bold w-full"
                repeat={true} repeatDelay={10} duration={0.3} delay={0} stagger={0.2} animate={sectionVisible} />
                <h3 className="text-lg font-medium leading-tight font-neue-plak text-start">
                  Automatisations
                  déployées
                </h3>
              </div>
            </div>

            <div className="space-y-2">
              <div className="text-4xl font-bold text-start">
                5<span className="text-2xl font-normal font-neue-plak"> ANS</span>
              </div>
              <p className="text-base leading-tight font-neue-plak text-start">
                d'expertise en
                <br />
                Afrique de l'Ouest
              </p>
            </div>
          </div>

          {/* ROI Moyen */}
          <div className="text-center space-y-6 max-w-40">
            <div className="mb-16">
              <div className="flex justify-start">
                <EqualApproximately className="w-12 h-12 text-white" strokeWidth={1.5} />
              </div>
              <div className="space-y-2">
                <AnimatedSlidingText text="300%" className="text-4xl font-bold w-full"
                repeat={true} repeatDelay={10} duration={0.3} delay={0} stagger={0.2} animate={sectionVisible} />
                <h3 className="text-lg font-medium leading-tight font-neue-plak text-start">
                  ROI moyen en 12 mois
                </h3>
              </div>
          </div>

          <div className="space-y-2">
            <div className="text-4xl font-bold text-start">95%</div>
              <p className="text-base leading-tight font-neue-plak text-start">
                Satisfaction
                <br />
                client
              </p>
            </div>
          </div>

          {/* Économisés par client */}
          <div className="text-center space-y-6 max-w-40">
            <div className="mb-16">
              <div className="flex justify-start">
                <BanknoteIcon className="w-12 h-12 text-white" strokeWidth={1.5} />
              </div>
              <div className="space-y-2">
                  <AnimatedSlidingText text="15M" className="text-4xl font-bold w-full" 
                  duration={0.3} delay={0} stagger={0.2} animate={sectionVisible} repeat={true} repeatDelay={10} />
                  <h3 className="text-lg font-medium leading-tight font-neue-plak text-start">
                    Economosé par client par an
                  </h3>
              </div>
            </div>

            <div className="space-y-2">
              <div className="text-4xl font-bold">
                2<span className="text-xl font-normal font-neue-plak"> SEMAINES</span>
              </div>
              <p className="text-base leading-tight font-neue-plak">
                Votre première
                <br />
                automatisation
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

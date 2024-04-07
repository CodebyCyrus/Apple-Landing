import gsap from "gsap";
import { useGSAP } from "@gsap/react";

const Hero = () => {
  useGSAP(() => {
    gsap.to("#hero", { opacity: 1, delay: 1.5 });
  }, []);

  return (
    <section className="w-full nav-hight bg-black relative">
      <div className="h-5/6 w-full flex-col flex-center">
        <p id="hero" className="hero-title">
          iPhone 15 Pro
        </p>
      </div>
    </section>
  );
};

export default Hero;

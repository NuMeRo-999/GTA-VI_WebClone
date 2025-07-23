import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

const tl = gsap.timeline({
  ease: "power2.out",
  scrollTrigger: {
    scrub: 1,
  },
});

tl.to("#hero-key", { duration: 1, scale: 1 })
  .to("#hero-key-logo", { opacity: 0 }, "<")
  .to("#hero-footer", { opacity: 0 }, "<")
  .to("#hero-play-button", { opacity: 0 }, "<")
  .to(
    "#logo-mask",
    {
      maskSize: "clamp(20vh, 25%, 30vh)",
    },
    0.15
  )
  .to(
    "#hero-key",
    {
      opacity: 0,
      duration: 0.2,
    },
    0.4
  );

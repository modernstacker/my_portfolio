import { motion } from "framer-motion";
import { styles } from "../styles";
import { TypeAnimation } from "react-type-animation";
import { useState, useEffect } from "react";
import { EarthCanvas } from "./canvas";
import { SectionWrapper } from "../hoc";

const Hero = () => {
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    // Add a listener for changes to the screen size
    const mediaQuery = window.matchMedia("(max-width: 500px)");

    // Set the initial value of the `isMobile` state variable
    setIsMobile(mediaQuery.matches);

    // Define a callback function to handle changes to the media query
    const handleMediaQueryChange = (event) => {
      setIsMobile(event.matches);
    };

    // Add the callback function as a listener for changes to the media query
    mediaQuery.addEventListener("change", handleMediaQueryChange);

    // Remove the listener when the component is unmounted
    return () => {
      mediaQuery.removeEventListener("change", handleMediaQueryChange);
    };
  }, []);

  return (
    <section className={`relative w-full h-screen mx-auto `}>
      <div
        className={`absolute inset-0 top-[130px]  max-w-7xl mx-auto ${styles.paddingX} flex flex-row items-start gap-5 `}
      >
        <div className="flex flex-col justify-center items-center mt-5">
          <div className="w-10 h-10 rounded-full bg-[#213555]" />
          <div className="w-1 sm:h-80 h-40 violet-gradient" />
        </div>

        <div className="z-10">
          <h1 className={`text-hover-active ${styles.heroHeadText}`}>
            Hi, I'm{" "}
            {isMobile ? (
              "Pavlo "
            ) : (
              <TypeAnimation
                sequence={["Pavlo", 1000, "Full Stack", 1000, "Developer", 1000]}
                wrapper="span"
                speed={50}
                repeat={Infinity}
                className="text-[#213555] inline-block"
              />
            )}
          </h1>
          <p
            className={`${styles.heroSubText} mt-5 text-hover-active rounded-xl`}
          >
            Great Quality and 100% Complete work
            <br className="sm:block hidden" />
            with 10+ years of experience specializing in React, Java, TypeScript, Node.js, Vue.js, Python, Django, PHP, Laravel, and API development/integration. I build scalable web apps, lead engineering teams, and deliver clean, efficient code.
            <br className="sm:block hidden" />
            application and programs.
          </p>
          <button className="text-white h-10 w-auto bg-[#213555] rounded-xl bg-opacity-90 text-[15px] font-bold mt-7 px-4">
            <a href="pavlo_resume.pdf" download="Pavlo CV">
              Download My CV now!
            </a>
          </button>
        </div>
      </div>
    </section>
  );
};

export default SectionWrapper(Hero, "home");

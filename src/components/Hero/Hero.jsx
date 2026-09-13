import BackgroundEffects from "./BackgroundEffects";
import HeroContent from "./HeroContent";
import HeroImage from "./HeroImage";

export default function Hero() {
  return (
    <section
      id="home"
      className="
        relative
        isolate
        overflow-hidden
        bg-white
        transition-colors
        duration-300
        dark:bg-slate-950
      "
    >
      {/* Background */}
      <BackgroundEffects />

      {/* Main Container */}
      <div
        className="
          relative
          z-10
          mx-auto
          flex
          min-h-screen
          max-w-7xl
          items-center
          px-6
          pt-28
          pb-16

          sm:px-8
          lg:px-10
        "
      >
        <div
          className="
            grid
            w-full
            items-center
            gap-20

            lg:grid-cols-2
          "
        >
          {/* Left */}
          <HeroContent />

          {/* Right */}
          <div
            className="
            hidden
            lg:block
          "
          >
            <HeroImage />
          </div>
        </div>
      </div>
    </section>
  );
}

function Hero() {
  return (
    <section
      className="relative h-[336px] md:h-[536px] lg:h-[736px] flex items-center bg-center-top"
      style={{
        backgroundImage:
          "linear-gradient(103deg, rgba(18, 18, 17, 0.78) 2.03%, rgba(18, 18, 17, 0.6) 58.46%, rgba(18, 18, 17, 0) 90.36%), url('/hero-section-pic.jpg')",
        backgroundSize: "cover",
        backgroundRepeat: "no-repeat",
        backgroundPosition: "center top",
      }}
    >
      <div className="container">
        <h1 className="relative font-extrabold text-center text-[47px] mb-25 leading-tight text-light-color md:top-0 md:mb-12 md:text-[107px] lg:text-[128px] lg:line-height-[1.5] lg:mb-0">
          <span className="text-brand-color">Modern </span>Bakery
        </h1>
        <button
          className="sm:hidden mx-auto block px-4 py-2 bg-brand-color text-light-color border border-brand-color rounded-lg cursor-pointer font-semibold md:px-8 md:py-4"
          type="button"
        >
          Request a call
        </button>
      </div>
    </section>
  );
}

export default Hero;

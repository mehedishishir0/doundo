import Image from "next/image";

const OurStory = () => {
  const storyData = {
    title: "Our Story So Far",
    subtitle: "Meet the team and learn about our mission.",
    aboutTitle: "About DoUndo",
    aboutDescription: [
      "DoUndo is an independent game company based in Canada, creating innovative tabletop games and symbolic experiences that are simple to learn, yet always offer something new to discover.",
      "At the heart of every DoUndo project are thirteen unique symbols, a system that links our games, fortune-telling practices, and accessories into one shared universe.",
      "DoUndo is more than a game publisher. It is a brand with its own identity and language. Our journey is just beginning.",
      "We are developing a collection of original games, from strategic duels and memory challenges to party experiences and symbolic readings. Alongside these games, we are exploring accessories, apparel, and digital projects inspired by the same symbolic system.",
      "Every DoUndo experience is designed to spark memorable shared moments that continue beyond the table, as we grow into a global brand that bridges creativity, design, and storytelling.",
    ],
    image: {
      src: "/images/About-Us-images.jpg",
      alt: "DoUndo team collaborating on game design",
      width: 600,
      height: 600,
    },
  };

  return (
    <section className=" my-8 md:my-10 " aria-labelledby="story-heading">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-7xl">
        {/* Header Section */}
        <div className="text-center mb-12 md:mb-16 lg:mb-20 max-w-3xl mx-auto">
          <div className="inline-flex items-center justify-center mb-4">
            <span className="inline-block px-4 py-2 bg-secondary text-primary-foreground text-xs font-semibold border-none outline-none tracking-wide uppercase rounded-full">
              About Us
            </span>
          </div>

          <h2
            id="story-heading"
            className="text-3xl md:text-5xl lg:text-6xl font-bold text-gray-900 mb-4 leading-tight"
          >
            {storyData.title}
          </h2>

          <p className="text-lg md:text-xl text-gray-600 max-w-2xl mx-auto">
            {storyData.subtitle}
          </p>
        </div>

        {/* Content Grid */}
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">
          {/* Text Content */}
          <div className="space-y-6 md:space-y-8 order-2 lg:order-1">
            <div className="space-y-3">
              <div className="inline-flex items-center gap-2">
                {/* <div className="w-8 h-0.5 bg-amber-500"></div> */}
                <span className="inline-block px-4 py-2 bg-secondary text-primary-foreground text-xs sm:text-xs font-semibold tracking-wide border-none outline-none uppercase rounded-full">
                  Who We Are
                </span>
              </div>

              <h3 className="text-2xl md:text-4xl lg:text-5xl font-bold text-gray-900 leading-tight">
                {storyData.aboutTitle}
              </h3>
            </div>

            <div className="space-y-4 md:space-y-6">
              {storyData.aboutDescription.map((paragraph, index) => (
                <p
                  key={index}
                  className="text-gray-700 leading-relaxed md:leading-loose text-base "
                >
                  {paragraph}
                </p>
              ))}
            </div>

            {/* Stats/Highlights */}
            {/* <div className="grid grid-cols-2 sm:grid-cols-4 gap-4 pt-6 border-t border-gray-200">
              {[
                { number: "13", label: "Unique Symbols" },
                { number: "50+", label: "Game Designs" },
                { number: "3", label: "Product Lines" },
                { number: "2023", label: "Founded" }
              ].map((stat, index) => (
                <div 
                  key={index}
                  className="text-center p-4 bg-white/50 rounded-xl border border-gray-100"
                >
                  <div className="text-2xl md:text-3xl font-bold text-amber-600">
                    {stat.number}
                  </div>
                  <div className="text-xs md:text-sm text-gray-600 mt-1 font-medium">
                    {stat.label}
                  </div>
                </div>
              ))}
            </div> */}
          </div>

          {/* Image Content */}
          <div className="order-1 lg:order-2 relative">
            <div className="relative aspect-square max-w-lg mx-auto lg:max-w-none">
              {/* Decorative Background Elements */}
              {/* <div className="absolute -top-6 -right-6 w-32 h-32 bg-amber-200/20 rounded-full blur-2xl"></div> */}
              {/* <div className="absolute -bottom-6 -left-6 w-40 h-40 bg-blue-200/10 rounded-full blur-2xl"></div> */}

              {/* Main Image Container */}
              <div className="relative rounded-3xl overflow-hidden  ">
                <Image
                  src={storyData.image.src}
                  alt={storyData.image.alt}
                  width={storyData.image.width}
                  height={storyData.image.height}
                  className="w-full h-full object-cover hover:scale-105 transition-transform duration-700"
                  sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 600px"
                  priority
                  quality={85}
                />

                {/* Image Overlay Effect */}
                {/* <div className="absolute inset-0 bg-linear-to-t from-black/10 to-transparent opacity-0 hover:opacity-100 transition-opacity duration-300"></div> */}
              </div>

              {/* Floating Badge */}
              {/* <div className="absolute -bottom-4 -right-4 bg-white p-4 rounded-2xl shadow-xl border border-gray-100">
                <div className="flex items-center gap-2">
                  <div className="w-8 h-8 bg-secondary rounded-full flex items-center justify-center">
                    <span className="text-primary font-bold">✓</span>
                  </div>
                  <div className="text-left">
                    <div className="text-xs font-semibold text-gray-900">
                      Made in
                    </div>
                    <div className="text-sm font-bold text-gray-900">
                      Canada
                    </div>
                  </div>
                </div>
              </div> */}
            </div>

            {/* Decorative Pattern */}
            {/* <div className="hidden lg:block absolute -z-10 top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-full h-full">
              <div className="absolute top-0 left-0 w-32 h-32 border-2 border-amber-200/30 rounded-full"></div>
              <div className="absolute bottom-0 right-0 w-24 h-24 border-2 border-blue-200/30 rounded-full"></div>
            </div> */}
          </div>
        </div>

        {/* Mission Statement */}
        {/* <div className="mt-16 md:mt-24 lg:mt-32 bg-gradient-to-r from-amber-500 to-amber-600 rounded-3xl p-8 md:p-12 lg:p-16 text-white relative overflow-hidden">

          <div className="absolute inset-0 opacity-10">
            <div className="absolute top-0 right-0 w-64 h-64 bg-white rounded-full -translate-y-1/2 translate-x-1/2"></div>
            <div className="absolute bottom-0 left-0 w-48 h-48 bg-white rounded-full translate-y-1/2 -translate-x-1/2"></div>
          </div>
          
          <div className="relative z-10 max-w-3xl mx-auto text-center">
            <div className="inline-flex items-center justify-center mb-6">
              <div className="w-12 h-1 bg-white/50"></div>
              <span className="mx-4 text-white/90 font-semibold tracking-widest text-sm uppercase">
                Our Mission
              </span>
              <div className="w-12 h-1 bg-white/50"></div>
            </div>
            
            <blockquote className="text-2xl md:text-4xl lg:text-5xl font-bold leading-tight mb-6">
              "To create experiences that bring people together through creativity and play."
            </blockquote>
            
            <p className="text-white/90 text-lg md:text-xl">
              Building connections one game at a time
            </p>
          </div>
        </div> */}
      </div>
    </section>
  );
};

export default OurStory;

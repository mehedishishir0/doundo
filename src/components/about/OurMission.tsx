import { Brain, Eye, Users, Globe } from "lucide-react";
import React from "react";

const OurMission = () => {
  const missionData = {
    title: "Our Mission...",
    description:
      "Our mission is to design games and symbolic experiences that bring people closer. Each DoUndo project is made to spark moments of play, discovery, and joy. We believe games are more than entertainment. They are a way to share stories, explore ideas, and create lasting memories.",

    values: [
      {
        id: "vision",
        title: "Vision",
        description:
          "Creating games that turn play into meaning, and moments into memories.",
        icon: Eye,
        iconColor: "text-blue-600",
        bgColor: "bg-blue-50",
        borderColor: "border-blue-200",
        gradient: "from-blue-50 to-white",
      },
      {
        id: "creativity",
        title: "Creativity",
        description:
          "Designing playful worlds where imagination and strategy thrive together.",
        icon: Brain,
        iconColor: "text-purple-600",
        bgColor: "bg-purple-50",
        borderColor: "border-purple-200",
        gradient: "from-purple-50 to-white",
      },
      {
        id: "exploration",
        title: "Exploration",
        description:
          "Building symbolic experiences that reveal depth through simple rules.",
        icon: Globe,
        iconColor: "text-amber-600",
        bgColor: "bg-amber-50",
        borderColor: "border-amber-200",
        gradient: "from-amber-50 to-white",
      },
      {
        id: "community",
        title: "Community",
        description:
          "Crafting moments of joy that bring people closer through play.",
        icon: Users,
        iconColor: "text-green-600",
        bgColor: "bg-green-50",
        borderColor: "border-green-200",
        gradient: "from-green-50 to-white",
      },
    ],
  };

  return (
    <section
      className="my-12 md:my-20  "
      aria-labelledby="mission-heading"
      itemScope
      itemType="https://schema.org/AboutPage"
    >
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-7xl">
        {/* Schema.org structured data for About Page */}
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "AboutPage",
              name: missionData.title,
              description: missionData.description,
              publisher: {
                "@type": "Organization",
                name: "DoUndo",
                description:
                  "Independent game company creating symbolic experiences",
              },
            }),
          }}
        />

        {/* Header Section */}
        <header className="text-center mb-12 md:mb-16 lg:mb-20 max-w-4xl mx-auto">
          <div
            className="inline-flex items-center justify-center mb-4"
            role="region"
            aria-label="Mission tag"
          >
            <span
              className="inline-block text-xs px-4 py-2 bg-secondary text-primary-foreground sm:text-sm font-semibold tracking-wide uppercase rounded-full  "
              itemProp="keywords"
            >
              Our Mission & Values
            </span>
          </div>

          <h1
            id="mission-heading"
            className="text-2xl md:text-4xl lg:text-5xl font-bold text-primary-foreground mb-6 leading-tight"
            itemProp="headline"
          >
            {missionData.title}
          </h1>

          <p
            className="text-lg md:text-xl text-gray-600 leading-relaxed md:leading-loose"
            itemProp="description"
          >
            {missionData.description}
          </p>
        </header>

        {/* Values Grid */}
        <div
          className="grid grid-cols-1 md:grid-cols-2 gap-6 lg:gap-8"
          role="list"
          aria-label="Company values"
        >
          {missionData.values.map((value, index) => {
            const IconComponent = value.icon;

            return (
              <article
                key={value.id}
                className={`group relative rounded-2xl border-2 bg-secondary text-primary-foreground/70 border-none  p-8 md:p-10 transition-all duration-300 hover:scale-[1.02] hover:shadow-2xl hover:shadow-${
                  value.iconColor.split("-")[1]
                }-200/30 hover:-translate-y-1`}
                role="listitem"
                itemScope
                itemType="https://schema.org/Intangible"
                itemProp="mainEntity"
              >
                {/* Hover Effect Background */}
                {/* <div
                  className={`absolute inset-0 rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-500`}
                ></div> */}

                <div className="relative z-10">
                  {/* Icon Container */}
                  <div
                    className={`inline-flex items-center justify-center p-4 bg-white rounded-full mb-6 `}
                    aria-hidden="true"
                  >
                    <IconComponent
                      className={`w-7 h-7 text-primary`}
                      aria-label={`${value.title} icon`}
                    />
                  </div>

                  {/* Value Title */}
                  <h2
                    className="text-xl md:text-xl lg:text-3xl font-semibold text-gray-900 mb-4 leading-tight"
                    itemProp="name"
                  >
                    {value.title}
                  </h2>

                  {/* Value Description */}
                  <p
                    className="text-gray-700 leading-relaxed md:leading-loose  md:text-lg   text-base"
                    itemProp="description"
                  >
                    {value.description}
                  </p>

                  {/* Decorative Elements */}
                  <div className="mt-6 pt-6">
                    <div
                      className={`w-12 h-1 bg-primary rounded-full group-hover:w-24 transition-all duration-500`}
                    ></div>
                  </div>
                </div>

                {/* Hidden Schema.org data */}
                <meta itemProp="position" content={String(index + 1)} />
              </article>
            );
          })}
        </div>

        {/* Mission Statement Schema.org */}

        {/* Additional SEO Content - Hidden from view but accessible to screen readers */}
        <div className="sr-only" aria-hidden="false">
          <h2>DoUndo Company Values</h2>
          <p>
            Our mission focuses on creating meaningful gaming experiences that
            foster connection and creativity.
          </p>
          <p>
            As an independent game studio, we value innovation, community,
            exploration, and design excellence.
          </p>
        </div>
      </div>
    </section>
  );
};

export default OurMission;

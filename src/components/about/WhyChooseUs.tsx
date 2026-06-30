import React from "react";

const WhyChooseUs = () => {
  const data = [
    {
      title: "Unique Identity",
      description:
        "Every DoUndo game is a story you can play.  Each title has its own character and  purpose. Some are already here, like  DoUndo, a psychological and deduction  duel. Others are still in the making, like a  puzzle for solo thinkers or a party game full  of chance and laughter. All of them are  designed to leave their mark and bring  people together.",
    },
    {
      title: "Simple to Learn, Rich in Experience",
      description:
        "Our games can be learned in minutes.  Some open into layers of strategy and  discovery, while others bring joy, surprise,  and the kind of laughter that turns time into  memory.",
    },
    {
      title: "A Growing Universe",
      description:
        "DoUndo doesn’t stop at one game. We are  creating new board games, and exploring  apparel, accessories, and digital projects.  Some ideas are already here, and others  Independent and Vision-Driven  As an independent Canadian studio, we are free from the limits of mass-market formulas. Each project  comes from careful craft, imagination, and a desire to do things differently.",
    },
    {
      title: "Shared Moments",
      description:
        "Games are about people, not just pieces. What matters most is the time spent together, the laughs, the  choices, the memories. DoUndo is made to create those moments you’ll want to keep.",
    },
  ];
  return (
    <section className="my-10 md:my-16 lg:my-20">
      <div className="">
        <h2 className="text-2xl md:text-5xl font-bold text-center text-primary-foreground">
          Why We’re Unique?
        </h2>

        <ul className="md:mt-12 grid gap-8 md:gap-12 max-w-4xl mx-auto text-center">
          {data?.map((item, idx) => (
            <li key={idx} className="mb-1">
              <h3 className="text-xl md:text-2xl font-semibold text-primary-foreground leading-[150%] text-center mb-4 mt-4 md:mt-8">
                {item?.title}
              </h3>
              <p className="text-[#181D27] text-base lg:text-lg  leading-[150%]">
                {item?.description}
              </p>
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
};

export default WhyChooseUs;

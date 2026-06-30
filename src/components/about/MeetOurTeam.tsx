"use client";
import Image from "next/image";
import Link from "next/link";
import { FaLinkedinIn } from "react-icons/fa6";

const MeetOurTeam = () => {
  const data = [
    {
      img: "/images/Amir_image.JPG",
      name: "Amir Imani",
      position: "Founder",
      discription:
        "Amir Imani is the creator of DoUndo, a series of games with simple rules and open possibilities. Thirteen unique symbols lie at the heart of his work, each carrying a story that brings depth and meaning to every game.",
      side: `left`,
      socialLink: [
        {
          link: "https://www.linkedin.com/in/amir-imani-fazel-5166a359/",
        },
      ],
    },
    {
      img: "/images/sara_image.jpg",
      name: "Sara Seydi",
      position: "Co Founder & Director of Strategy and Growth",
      discription:
        "Sara is the strategic force behind DoUndo, turning ideas into reality and guiding them toward growth. With expertise in management and leadership, she shapes branding, partnerships, strategy, and funding, laying strong foundations for DoUndo’s journey as a global brand.",
      side: `right`,
      socialLink: [
        {
          link: "https://www.linkedin.com/in/sara-seydi-7934632a3/",
        },
      ],
    },
    {
      img: "/images/Shikha.webp",
      name: "Shikha Singh",
      position: "Creative Head",
      discription:
        "Shikha is the creative force behind DoUndo’s visual identity. As the creative designer, she brings Amir’s vision to life, crafting every symbol, card, and box design with care and imagination. From brainstorming with the team to shaping the game’s look and feel, Shikha ensures that DoUndo’s design truly connects with its players.",
      side: `left`,
      socialLink: [
        {
          link: "https://www.linkedin.com/in/shikhasingh100/",
        },
      ],
    },
    {
      img: "/images/AshutoshSingh.png",
      name: "Ashutosh Singh",
      position: "Project Manager",
      discription:
        "Ashutosh is the project manager at Doundo and the person who helps turn big ideas into real, playable games. He works closely with the team, keeps everyone aligned, and makes sure no good idea gets lost along the way. From planning and team syncs to fine-tuning the small details, he helps bring the vision to life. With a background in VFX and experience working on major film projects, he brings a strong creative eye and a problem-solver’s mindset to everything we create.",
      side: `right`,
      socialLink: [
        {
          link: "https://www.linkedin.com/in/ashutosh89/",
        },
      ],
    },
  ];

  return (
    <section className="my-10 lg:my-16">
      <div className="container mx-auto">
        <div className="text-center space-y-2">
          <p className="inline-block text-xs px-4 py-2 bg-secondary text-primary-foreground sm:text-sm font-semibold tracking-wide uppercase rounded-full ">
            Team
          </p>
          <h2 className="text-2xl md:text-4xl xl:text-5xl font-bold">
            Meet Our Founders
          </h2>
        </div>
        <div>
          {data.map((item, index) => (
            <div
              key={index}
              className={`flex flex-col md:flex-row items-center my-12 md:my-20 ${
                item.side === "right" ? "md:flex-row-reverse" : ""
              }`}
            >
              <div className=" relative w-90 h-90 lg:w-150 lg:h-150 px-4 ">
                <Image
                  src={item.img}
                  alt={item.name}
                  fill
                  className=" shadow-lg w-full aspect-5/5 object-cover rounded-3xl"
                />
              </div>
              <div className="w-full md:w-1/2 px-4 mt-6 md:mt-0">
                <div className="flex items-center justify-between">
                  <h3 className="text-xl lg:text-3xl font-semibold mb-2">
                    {item.name}
                  </h3>
                  <Link
                    href={item.socialLink[0].link}
                    target="_blank"
                    className=" lg:hidden"
                  >
                    <FaLinkedinIn className=" w-10 h-10 hover:text-primary p-2" />
                  </Link>
                </div>
                <h4 className="text-lg lg:text-xl text-gray-400 mb-4">
                  {item.position}
                </h4>
                <p className="text-gray-600 text-base lg:text-lg">
                  {item.discription}
                </p>
                {/* <p className=" flex gap-3 items-center pt-8">
                  <Link href={"#"}>
                    <FaXTwitter className=" w-10 h-10 hover:text-primary p-2 " />
                  </Link>
                  </p> */}
                <Link
                  href={item.socialLink[0].link}
                  target="_blank"
                  className=" gap-3 items-center pt-8 hidden lg:block"
                >
                  <FaLinkedinIn className=" w-10 h-10 hover:text-primary p-2" />
                </Link>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default MeetOurTeam;

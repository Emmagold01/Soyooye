import Image from "next/image";
import vector from "@/app/assets/vector1.png";
import { Icon } from "@iconify/react";

type Stack = {
  icon: string;
  name: string;
};

export default function Hero() {
  const stacks: Stack[] = [
    { name: "React", icon: "mdi:react" },
    { name: "Next", icon: "akar-icons:nextjs-fill" },
    { name: "Tailwind", icon: "logos:tailwindcss-icon" },
    { name: "Typescript", icon: "logos:typescript-icon" },
  ];

  const shows: Stack[] = [
    { name: "clean", icon: "gravity-ui:sparkles-fill" },
    {
      name: "fast",
      icon: "mdi:bike-fast",
    },
    {
      name: "scalable",
      icon: "icon-park-outline:scale",
    },
  ];

  return (
    <section id="home" className="relative">
      <div>
        <Image
          src={vector}
          alt="vector"
          className="absolute -top-80 -right-82 -z-10 h-[1320px] w-[1500px]"
        />
      </div>

      <div className="font-inter mx-auto max-w-7xl pt-25">
        <div className="flex items-center">
          <div className="space-y-5">
            <div className="flex w-fit items-center space-x-1 rounded-full bg-[#1E1E1E] px-4 py-2 font-bold text-[#B3B3B3]">
              <Icon icon="fluent:shield-task-32-regular" className="text-sm" />
              <p className="text-[12px]">Trusted Frontend Engineer</p>
            </div>
            <h1 className="max-w-3xl text-5xl leading-[115.8%] font-extrabold">
              I Build Modern, Scalable Frontend Experiences
            </h1>
            <p className="text-md max-w-lg font-light">
              Specialized in React, Next.js, and TypeScript delivery performant
              interfaces with pixel-perfect design systems and robust DX.
            </p>
            <div className="flex items-center space-x-3">
              <a
                href="#work"
                className="flex cursor-pointer items-center space-x-2 rounded-3xl bg-[#3B82F6] px-4 py-2 text-sm transition hover:scale-110 hover:shadow-lg"
              >
                <span>
                  <Icon icon="ion:rocket-outline" />
                </span>{" "}
                <span>View My Work</span>
              </a>
              <button className="flex cursor-pointer items-center space-x-2 rounded-3xl bg-[#131315]/90 px-4 py-3 text-[12px]">
                <span>
                  <Icon
                    icon="material-symbols:download-rounded"
                    className="text-xl"
                  />
                </span>{" "}
                <span>Download Resume</span>
              </button>
            </div>
            <div className="flex items-center space-x-2">
              {stacks.map((stack, index) => (
                <div
                  key={index}
                  className="flex items-center space-x-2 rounded-3xl bg-[#131315]/90 px-4 py-3 text-sm"
                >
                  <Icon icon={stack.icon} className="" /> <p>{stack.name}</p>
                </div>
              ))}
            </div>
          </div>

          <div className="flex w-[470px] flex-col space-y-4 rounded-4xl bg-[#121212]/69 p-7 shadow-[inset_0_0_0_3px_#303030] backdrop-blur-lg">
            <div className="bg[#1E1E1E]/28 rounded-[20px] border border-[#DDDDDD]/11 px-6 py-8">
              <p className="text-sm font-light">
                // page/<span className="text-[#FFA1AD]">index.tsx</span>
              </p>
              <p className="text-sm text-white">
                <span className="text-[#615FFF]">export default function</span>{" "}
                Home () {"{"}
                <br />
                &nbsp;&nbsp;return (&lt;
                <span className="text-[#00D5BE]">Hero title</span>{" "}
                <span className="text-white">="Emmanuel UI"</span> /&gt;)
                <br />
                {"}"}
              </p>
            </div>
            <div className="bg[#1E1E1E]/28 space-y-1 rounded-[20px] border border-[#DDDDDD]/11 px-6 py-8">
              <h1 className="text-xl font-bold">Portfolio Showcase</h1>
              <p className="max-w-[20rem] text-sm font-light">
                A collection of my best projects—crafted with React, Next.js,
                and modern UI principles.
              </p>
              <div className="flex items-center space-x-2 pt-3">
                {shows.map((show, idx) => (
                  <div key={idx} className="flex text-sm items-center space-x-1">
                    <Icon icon={show.icon} />
                    <span>{show.name}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

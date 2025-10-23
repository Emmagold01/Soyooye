"use client";

import ellipse from "@/app/assets/Ellipse2.png";
import ellipse2 from "@/app/assets/Ellipse1.png";
import Image from "next/image";
import { Icon } from "@iconify/react";
import { useState } from "react";

type Stack = {
  icon: string;
  name: string;
};

export default function About() {
  const [slide, setSlide] = useState(0);

  const stacks: Stack[] = [
    { name: "React", icon: "mdi:react" },
    { name: "Next", icon: "akar-icons:nextjs-fill" },
    { name: "Tailwind", icon: "logos:tailwindcss-icon" },
    { name: "Typescript", icon: "logos:typescript-icon" },
    { name: "HTML", icon: "material-icon-theme:html" },
    { name: "CSS", icon: "catppuccin:css" },
    { name: "Bootstrap", icon: "devicon:bootstrap" },
    { name: "Material UI", icon: "skill-icons:materialui-dark" },
    { name: "Javascript", icon: "material-icon-theme:javascript" },
    { name: "Git & Github", icon: "ri:github-fill" },
    { name: "Framer", icon: "logos:framer" },
  ];

  const next = () => setSlide((prev) => (prev + 1) % stacks.length);
  const prev = () =>
    setSlide((prev) => (prev - 1 + stacks.length) % stacks.length);

  return (
    <section
      id="about"
      className="font-inter relative overflow-hidden bg-[#0c0c0c] py-20"
    >
      {/* gradients */}
      <Image
        src={ellipse}
        alt="ellipse1"
        className="absolute right-100 bottom-0 lg:right-170 lg:bottom-0"
      />

      <Image
        src={ellipse2}
        alt="ellipse1"
        className="absolute top-30 left-100 lg:top-0 lg:left-160"
      />

      <div className="relative z-10 mx-auto max-w-7xl px-4">
        <h1 className="text-center text-2xl font-extrabold md:text-4xl">
          About Me
        </h1>

        <div className="mt-10 space-y-5">
          {/* Header Card */}
          <div className="w-full rounded-2xl border border-[#2B2B2B] bg-[#1E1E1E] px-5 py-8 md:px-10 md:py-10">
            <h1 className="mb-2 text-2xl font-bold text-white">
              Hi, I'm Soyooye Emmanuel
            </h1>
            <p className="text-sm">
              A creative Front-end developer who enjoys building smooth,
              interactive digital experiences. I focus on turning ideas into
              responsive layouts that not only function — but flow. My work
              blends clean design with subtle detail, aiming for that perfect
              balance between functionality and vibe. I like keeping things
              clean, thoughtful, and a little unexpected. I care about the
              little things — the details people don’t notice at first — but
              feel.
            </p>
          </div>

          {/* Bottom Grid */}
          <div className="grid grid-cols-1 gap-5 md:grid-cols-2">
            {/* Skills Card */}
            <div className="rounded-2xl border border-[#2B2B2B] bg-[#1E1E1E] px-5 py-8 md:px-8">
              <h2 className="mb-6 text-lg font-semibold text-white">Skills</h2>
              <div className="relative">
                <div className="hide-scrollbar flex items-center gap-2 overflow-auto px-3">
                  {stacks.map((stack, index) => (
                    <div
                      key={index}
                      style={{
                        transform: `translateX(-${slide * (100 + 8)}px)`,
                      }}
                      className="flex shrink-0 items-center space-x-2 rounded-3xl bg-[#2B2B2B]/90 px-4 py-3 text-sm transition-transform duration-500 ease-in-out"
                    >
                      <Icon icon={stack.icon} className="" />{" "}
                      <p>{stack.name}</p>
                    </div>
                  ))}
                </div>

                {slide > 0 && (
                  <button
                    onClick={prev}
                    className="absolute top-1/2 -left-4 z-20  -translate-y-1/2 cursor-pointer rounded-md transition-all duration-200 hover:scale-110 flex"
                    aria-label="Previous slide"
                  >
                    <Icon
                      icon="mdi:chevron-left"
                      className="h-4 w-4 text-white sm:h-5 sm:w-5"
                    />
                  </button>
                )}

                {stacks.length > 1 && (
                  <button
                    onClick={next}
                    className="absolute top-1/2 -right-5 z-20  -translate-y-1/2 cursor-pointer rounded-md transition-all duration-200 hover:scale-110 flex"
                    aria-label="Next slide"
                  >
                    <Icon
                      icon="mdi:chevron-right"
                      className="h-4 w-4 text-white sm:h-5 sm:w-5"
                    />
                  </button>
                )}
              </div>
            </div>

            {/* Experience Card */}
            <div className="rounded-2xl border border-[#2B2B2B] bg-[#1E1E1E] px-8 py-8">
              <h2 className="mb-6 text-lg font-semibold text-white">
                Experience
              </h2>
              <div className="text-md flex flex-wrap items-center gap-3">
                <div className="flex items-center gap-2">
                  <Icon icon="mdi:layers" className="h-4 w-4 text-yellow-400" />
                  <span className="text-gray-400">Projects</span>
                </div>
                <span className="text-gray-600">•</span>
                <div className="flex items-center gap-2">
                  <Icon
                    icon="mdi:account-group"
                    className="h-4 w-4 text-yellow-400"
                  />
                  <span className="text-gray-400">Collaboration</span>
                </div>
                <span className="text-gray-600">•</span>
                <div className="flex items-center gap-2">
                  <Icon
                    icon="mdi:trending-up"
                    className="h-4 w-4 text-yellow-400"
                  />
                  <span className="text-gray-400">Growth</span>
                </div>
              </div>
            </div>

            {/* Values Card */}
            <div className="rounded-2xl border border-[#2B2B2B] bg-[#1E1E1E] px-8 py-8">
              <h2 className="mb-6 text-lg font-semibold text-white">Values</h2>
              <p className="text-sm leading-relaxed text-gray-400">
                Attention to detail • Problem-solving • Teamwork
              </p>
            </div>

            {/* Personal Touch Card */}
            <div className="rounded-2xl border border-[#2B2B2B] bg-[#1E1E1E] px-8 py-8">
              <h2 className="mb-6 text-lg font-semibold text-white">
                Personal Touch
              </h2>
              <p className="text-sm leading-relaxed text-gray-400">
                When I'm not coding, I'm probably listening to music.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

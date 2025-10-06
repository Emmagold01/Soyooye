"use client";

import { Icon } from "@iconify/react";
import { projects } from "../data";
import Image from "next/image";
import { motion } from "motion/react";

const techIcons: Record<string, string> = {
  HTML: "vscode-icons:file-type-html",
  CSS: "vscode-icons:file-type-css",
  "Tailwind CSS": "vscode-icons:file-type-tailwind",
  JavaScript: "logos:javascript",
  React: "logos:react",
  TypeScript: "logos:typescript-icon",
  Bootstrap: "logos:bootstrap",
  "Framer Motion": "logos:framer",
};

export default function Portfolio() {
  const scrollIn = {
    initial: { opacity: 0, y: 50 },
    whileInView: { opacity: 1, y: 0 },
    viewport: { once: false, amount: 0.2, margin: "-50px 0px" },
    transition: { duration: 0.6 },
  };

  const scrollInBtn = {
    initial: { opacity: 0, y: 50 },
    whileInView: { opacity: 1, y: 0 },
    viewport: { once: true },
    transition: { duration: 0.6 },
  };

  return (
    <section id="work" className="font-inter bg-[#0D0D0D] py-20">
      <div className="mx-auto max-w-7xl space-y-10 px-5">
        <motion.div {...scrollIn} className="text-center">
          <h1 className="text-5xl font-extrabold">Portfolio</h1>
          <p className="text-xl text-[#B3B3B3]">Selected Works and Projects</p>
        </motion.div>

        <div className="grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-3">
          {projects
            .reverse()
            .slice(0, 6)
            .map((project) => (
              <motion.div
                {...scrollIn}
                key={project.id}
                className="group relative will-change-transform"
              >
                {/* glow */}
                <div className="absolute -inset-2 rounded-3xl bg-[#7326F1] opacity-0 blur-2xl transition-all duration-500 group-hover:opacity-40" />

                {/* card */}
                <div className="relative flex h-full flex-col rounded-2xl bg-[#1E1E1E] p-5 transition hover:shadow-[inset_0_0_0_3px_#303030]">
                  <Image
                    src={project.image}
                    alt={project.title}
                    className="h-[200px] w-full rounded-lg object-cover object-top"
                  />

                  <div className="flex flex-1 flex-col space-y-3 pt-4">
                    <h1 className="text-xl font-extrabold">{project.title}</h1>
                    <p className="text-xs text-[#A1A1AA]">
                      {project.description}
                    </p>

                    <div className="mt-auto flex flex-wrap gap-2">
                      {project.technologies.map((tech, idx) => (
                        <div
                          key={idx}
                          className="flex items-center space-x-2 rounded-2xl bg-[#121212]/69 px-3 py-2 text-sm text-[#A1A1AA] shadow-[inset_0_0_0_3px_#303030] backdrop-blur-lg"
                        >
                          <Icon icon={techIcons[tech] || "mdi:code-tags"} />
                          <span className="text-[10px]">{tech}</span>
                        </div>
                      ))}
                    </div>

                    {/* button at bottom */}
                    <a
                      href={project.liveUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="mt-auto flex w-fit items-center gap-3 rounded-lg bg-[#3B82F6] px-6 py-3 text-sm font-medium text-white transition-all hover:bg-[#3B82F6]/90 hover:shadow-lg hover:shadow-[#3B82F6]/40"
                    >
                      <Icon
                        icon="material-symbols:open-in-new"
                        className="text-lg"
                      />
                      View
                    </a>
                  </div>
                </div>
              </motion.div>
            ))}
        </div>

        <a href="/project" className="mt-5 flex cursor-pointer justify-center">
          <motion.button
            {...scrollInBtn}
            className="flex w-fit items-center space-x-1 rounded-full bg-[#3B82F6] px-4 py-3 text-center text-sm font-bold transition-all hover:bg-[#3B82F6]/90 hover:shadow-lg hover:shadow-[#3B82F6]/40"
          >
            <Icon icon="tabler:border-all" className="text-lg" />
            <span>View All Projects</span>
          </motion.button>
        </a>
      </div>
    </section>
  );
}

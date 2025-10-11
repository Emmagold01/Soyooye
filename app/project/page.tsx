"use client";

import { useState } from "react";
import { Icon } from "@iconify/react";
import { motion } from "framer-motion";
import { projects } from "../data";
import Image from "next/image";
import Link from "next/link";

// Your tech icons mapping
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

export default function AllProjects() {
  const [selectedYear, setSelectedYear] = useState("All");
  const [selectedTech, setSelectedTech] = useState("All");

  // Get unique years and technologies
  const years = ["All", ...Array.from(new Set(projects.map((p) => p.year)))];
  const allTechs = Array.from(new Set(projects.flatMap((p) => p.technologies)));
  const technologies = ["All", ...allTechs];

  // Filter projects
  const filteredProjects = projects.filter((project) => {
    const matchesYear = selectedYear === "All" || project.year === selectedYear;
    const matchesTech =
      selectedTech === "All" || project.technologies.includes(selectedTech);
    return matchesYear && matchesTech;
  });

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.5 },
    },
  };

  return (
    <div className="font-inter min-h-screen bg-[#0D0D0D]">
      {/* Header */}
      <motion.div
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        className="sticky top-0 z-50 border-b border-[#303030] bg-[#0D0D0D]/80 backdrop-blur-lg"
      >
        <div className="mx-auto flex max-w-7xl items-center justify-between px-5 py-6">
          <div className="flex items-center space-x-4">
            <Link
              href="/"
              className="flex items-center space-x-2 text-[#B3B3B3] transition-colors hover:text-white"
            >
              <Icon
                icon="material-symbols:arrow-back-rounded"
                className="text-2xl"
              />
              <span className="hidden text-sm md:block">Back to Home</span>
            </Link>
          </div>
          <div className="text-center">
            <h1 className="text-3xl font-extrabold">All Projects</h1>
            <p className="text-sm text-[#B3B3B3]">
              {filteredProjects.length} Projects
            </p>
          </div>
          <div className="md:w-32" /> {/* Spacer for center alignment */}
        </div>
      </motion.div>

      <div className="mx-auto max-w-7xl px-5 py-10">
        {/* Filters */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="mb-8 space-y-4"
        >
          {/* Year Filter */}
          <div className="space-y-2">
            <label className="text-sm font-medium text-[#B3B3B3]">
              Filter by Year
            </label>
            <div className="flex flex-wrap gap-2">
              {years.map((year) => (
                <button
                  key={year}
                  onClick={() => setSelectedYear(year)}
                  className={`rounded-full px-4 py-2 text-sm font-medium transition-all ${
                    selectedYear === year
                      ? "bg-[#3B82F6] text-white shadow-lg shadow-[#3B82F6]/40"
                      : "bg-[#1E1E1E] text-[#B3B3B3] hover:bg-[#2A2A2A]"
                  }`}
                >
                  {year}
                </button>
              ))}
            </div>
          </div>

          {/* Technology Filter */}
          <div className="space-y-2">
            <label className="text-sm font-medium text-[#B3B3B3]">
              Filter by Technology
            </label>
            <div className="flex flex-wrap gap-2">
              {technologies.map((tech) => (
                <button
                  key={tech}
                  onClick={() => setSelectedTech(tech)}
                  className={`flex items-center space-x-2 rounded-full px-4 py-2 text-sm font-medium transition-all ${
                    selectedTech === tech
                      ? "bg-[#3B82F6] text-white shadow-lg shadow-[#3B82F6]/40"
                      : "bg-[#1E1E1E] text-[#B3B3B3] hover:bg-[#2A2A2A]"
                  }`}
                >
                  {tech !== "All" && (
                    <Icon icon={techIcons[tech] || "mdi:code-tags"} />
                  )}
                  <span>{tech}</span>
                </button>
              ))}
            </div>
          </div>

          {/* Active Filters Display */}
          {(selectedYear !== "All" || selectedTech !== "All") && (
            <div className="flex items-center space-x-2">
              <span className="text-sm text-[#B3B3B3]">Active filters:</span>
              {selectedYear !== "All" && (
                <span className="flex items-center space-x-1 rounded-full bg-[#1E1E1E] px-3 py-1 text-xs">
                  <span>Year: {selectedYear}</span>
                  <button onClick={() => setSelectedYear("All")}>
                    <Icon
                      icon="material-symbols:close"
                      className="text-sm hover:text-white"
                    />
                  </button>
                </span>
              )}
              {selectedTech !== "All" && (
                <span className="flex items-center space-x-1 rounded-full bg-[#1E1E1E] px-3 py-1 text-xs">
                  <span>Tech: {selectedTech}</span>
                  <button onClick={() => setSelectedTech("All")}>
                    <Icon
                      icon="material-symbols:close"
                      className="text-sm hover:text-white"
                    />
                  </button>
                </span>
              )}
              <button
                onClick={() => {
                  setSelectedYear("All");
                  setSelectedTech("All");
                }}
                className="text-xs text-[#3B82F6] hover:underline"
              >
                Clear all
              </button>
            </div>
          )}
        </motion.div>

        {/* Projects Grid */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate="visible"
          className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3"
        >
          {filteredProjects.map((project) => (
            <motion.div
              key={project.id}
              variants={itemVariants}
              className="group relative will-change-transform"
            >
              {/* Glow effect */}
              <div className="absolute -inset-2 rounded-3xl bg-[#7326F1] opacity-0 blur-2xl transition-all duration-500 group-hover:opacity-40" />

              {/* Card */}
              <div className="relative flex h-full flex-col rounded-2xl bg-[#1E1E1E] p-5 transition hover:shadow-[inset_0_0_0_3px_#303030]">
                <Image
                  src={project.image}
                  alt={project.title}
                  className="h-[200px] w-full rounded-lg object-cover object-top"
                />

                <div className="flex flex-1 flex-col space-y-3 pt-4">
                  <div className="flex items-start justify-between">
                    <h1 className="text-xl font-extrabold">{project.title}</h1>
                    <span className="rounded-full bg-[#121212]/69 px-3 py-1 text-xs text-[#A1A1AA]">
                      {project.year}
                    </span>
                  </div>

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
        </motion.div>

        {/* Empty State */}
        {filteredProjects.length === 0 && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            className="py-20 text-center"
          >
            <Icon
              icon="material-symbols:search-off"
              className="mx-auto mb-4 text-6xl text-[#303030]"
            />
            <h3 className="mb-2 text-xl font-bold">No projects found</h3>
            <p className="text-sm text-[#B3B3B3]">Try adjusting your filters</p>
          </motion.div>
        )}
      </div>
    </div>
  );
}

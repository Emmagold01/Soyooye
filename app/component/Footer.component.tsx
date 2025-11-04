"use client";

import { Icon } from "@iconify/react";

export default function Footer() {
  const socials = [
    { icon: "mdi:github", link: "https://github.com/Emmagold01" },
    {
      icon: "mdi:linkedin",
      link: "https://www.linkedin.com/in/soyooye-emmanuel-5b8769274/",
    },
    { icon: "mdi:twitter", link: "https://x.com/e_gold3" },
  ];

  return (
    <footer className="border-t border-[#2B2B2B] bg-transparent py-8">
      <div className="mx-auto flex max-w-7xl flex-col items-center justify-between gap-4 px-4 text-gray-400 sm:flex-row">
        <p className="text-sm text-gray-500">
          © {new Date().getFullYear()} Soyooye Emmanuel. All rights reserved.
        </p>

        <div className="flex items-center gap-5">
          {socials.map((social, index) => (
            <a
              key={index}
              href={social.link}
              target="_blank"
              rel="noopener noreferrer"
              className="transition-colors duration-300 hover:text-white"
            >
              <Icon icon={social.icon} className="text-xl" />
            </a>
          ))}
        </div>
      </div>
    </footer>
  );
}

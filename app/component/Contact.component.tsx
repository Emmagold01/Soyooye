import { Icon } from "@iconify/react";
import ellipse from "@/app/assets/Ellipse2.png";
import ellipse2 from "@/app/assets/Ellipse1.png";
import Image from "next/image";

export default function Contact() {
  const icons = [
    {
      icon: "proicons:x-twitter",
      link: "https://x.com/e_gold3",
    },
    { icon: "fa6-brands:whatsapp", link: "https://wa.me/+2347018560935" },
    {
      icon: "ri:linkedin-box-line",
      link: "https://www.linkedin.com/in/soyooye-emmanuel-5b8769274/",
    },
    { icon: "uil:instagram", link: "https://www.instagram.com/egold3_/" },
  ];

  return (
    <section id="contact" className="relative overflow-hidden py-20">
      {/* gradients */}
      <Image
        src={ellipse}
        alt="ellipse1"
        className="absolute right-100 bottom-0 lg:bottom-0 lg:right-170"
      />

      <Image
        src={ellipse2}
        alt="ellipse1"
        className="absolute top-30 lg:top-0 left-100 lg:left-160"
      />

      {/* content */}
      <div className="relative z-10 mx-auto max-w-7xl px-4">
        <div className="space-y-1 text-center">
          <h1 className="text-2xl font-extrabold md:text-4xl">
            Let's Work Together
          </h1>
          <p className="text-md text-[#B3B3B3] md:text-lg">
            Have a project in mind or just want to say hi? Let's connect.
          </p>
        </div>

        <div className="mt-10 flex items-center justify-center">
          <div className="relative flex flex-col items-center justify-center space-y-5 rounded-3xl border bg-[#0D0D0D]/86 px-5 py-10 md:space-y-9 md:p-10 lg:p-20">
            {/* email button */}
            <a
              href="mailto:soyooyeemmanuel@gmail.com"
              className="cursor-pointer rounded-lg bg-[#3B82F6] px-4 py-2 font-bold text-white transition hover:bg-[#3B82F6]/80"
            >
              Email me
            </a>

            {/* socials */}
            <div className="flex items-center space-x-6">
              {icons.map((icon, idx) => (
                <a
                  key={idx}
                  href={icon.link}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex cursor-pointer items-center justify-center rounded-full border p-4 transition hover:bg-[#3B82F6]/10"
                >
                  <Icon icon={icon.icon} className="text-4xl text-white" />
                </a>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

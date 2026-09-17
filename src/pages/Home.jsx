import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { Download } from "lucide-react";
import { FaGithub, FaLinkedin, FaXTwitter } from "react-icons/fa6";
import services from "../data/services";
import projects from "../data/projects";
import ProjectCard from "../components/ProjectCard";
import SkillsOrbit from "../components/SkillsOrbit";

const socials = [
  { href: "https://github.com/", icon: FaGithub, label: "GitHub" },
  { href: "https://linkedin.com/", icon: FaLinkedin, label: "LinkedIn" },
  { href: "https://twitter.com/", icon: FaXTwitter, label: "Twitter / X" },
];

const rotatingRoles = ["JavaScript", "React", "Next.js", "Node.js"];

function AnimatedRole() {
  const [index, setIndex] = useState(0);
  const currentRole = rotatingRoles[index];

  useEffect(() => {
    const timer = setInterval(() => {
      setIndex((prev) => (prev + 1) % rotatingRoles.length);
    }, 2200);

    return () => clearInterval(timer);
  }, []);

  return (
    <div className="relative inline-block min-w-[180px] text-left text-slate-700 dark:text-slate-100 md:min-w-[220px]">
      <div key={currentRole} className="animate-role-enter inline-flex flex-wrap items-end leading-none">
        {currentRole.split("").map((char, i) => (
          <span
            key={`${currentRole}-${i}`}
            className="role-letter"
            style={{ animationDelay: `${i * 70}ms` }}
          >
            {char === " " ? "\u00A0" : char}
          </span>
        ))}
      </div>
    </div>
  );
}

export default function Home() {
  return (
    <>
      {/* Hero */}
      <section className="container-page pt-16 pb-16 lg:pt-16 grid lg:grid-cols-2 gap-10 items-center">
        <div>
          <span className="inline-block rounded-full border border-slate-500/20 dark:border-slate-50/20 px-4 py-1.5 text-sm mb-5">
            Hey there! 🙂
          </span>

          <h1 className="text-4xl md:text-5xl font-extrabold leading-tight mb-4">
            I&apos;m{" "}
            <span className="bg-gradient-to-r from-indigo-400 via-fuchsia-400 to-teal-300 bg-clip-text text-transparent">
              Hammad Ur Rehman
            </span>
          </h1>

          <h2 className="mb-6 flex flex-row flex-wrap items-center gap-2 text-lg font-semibold text-slate-700 dark:text-slate-300 md:text-2xl">
            <span>I am a Web App Developer in</span>
            <AnimatedRole />
          </h2>

          <p className="max-w-2xl text-base md:text-lg text-slate-600 dark:text-slate-400 mb-8 space-y-3">
            Welcome to my portfolio! I hope you enjoy your visit. I specialize
            in Web development and Site SEO, Front-End development with
            React.js. I have worked on various projects, including a Real{" "}
            <span className="text-accent font-medium">Link-Shortener</span>,
            E-Commerce APIs,{" "}
            <span className="text-accent font-medium">React-based</span>{" "}
            Website Design and Development, and more.
            <br />
            <br />
            I am passionate about learning new technologies and building
            solutions that make a difference. Thank you for visiting my
            portfolio! I hope you like my work.{" "}
            <span className="text-amber-500 font-semibold">
              Happy coding! 🎉💻
            </span>
          </p>

          <div className="flex items-center gap-5 mb-8">
            {socials.map(({ href, icon: Icon, label }) => (
              <a
                key={label}
                href={href}
                target="_blank"
                rel="noreferrer"
                aria-label={label}
                className="text-slate-600 dark:text-slate-300 hover:text-accent transition-colors"
              >
                <Icon className="h-5 w-5" />
              </a>
            ))}
          </div>

          <div className="flex flex-col items-center gap-4 sm:flex-row sm:justify-center lg:justify-start">
            <a
              href="/resume.pdf"
              target="_blank"
              rel="noreferrer"
              className="group relative z-0 inline-flex cursor-pointer items-center justify-center overflow-hidden whitespace-nowrap border border-white/10 px-6 py-3 text-white shadow-2xl transition-transform duration-300 ease-in-out active:translate-y-px [background:var(--bg)] [border-radius:100px] [--bg:#0f172a] [--cut:0.05em] [--radius:100px] [--shimmer-color:#ffffff] [--speed:3s] [--spread:90deg]"
              style={{
                background: "#0f172a",
                borderRadius: "100px",
                boxShadow: "0 25px 50px -12px rgba(15, 23, 42, 0.55)",
              }}
            >
              <div className="absolute inset-0 -z-30 overflow-visible blur-[2px] [container-type:size]">
                <div className="absolute inset-0 h-[100cqh] animate-shimmer-slide [aspect-ratio:1] [border-radius:0] [mask:none]">
                  <div className="animate-spin-around absolute -inset-full w-auto rotate-0 [background:conic-gradient(from_calc(270deg-(var(--spread)*0.5)),transparent_0,var(--shimmer-color)_var(--spread),transparent_var(--spread))] [translate:0_0]" />
                </div>
              </div>
              <span className="whitespace-pre-wrap text-center text-sm font-medium leading-none tracking-tight text-white dark:from-white dark:to-slate-900/10 lg:text-base">
                Download Resume
              </span>
              <div className="absolute inset-0 rounded-[inherit] px-4 py-1.5 text-sm font-medium shadow-[inset_0_-8px_10px_#ffffff1f] transition-all duration-300 ease-in-out group-hover:shadow-[inset_0_-6px_10px_#ffffff3f] group-active:shadow-[inset_0_-10px_10px_#ffffff3f]" />
              <div className="absolute -z-20 [background:var(--bg)] [border-radius:var(--radius)] [inset:var(--cut)]" />
            </a>

            <Link
              to="/contact"
              className="relative flex h-min w-fit items-center justify-center overflow-visible rounded-full border border-white/10 bg-black/20 p-px decoration-clone transition duration-500 hover:bg-black/10 dark:bg-white/20"
            >
              <div className="z-10 flex items-center justify-center rounded-[inherit] bg-white px-5 py-2.5 text-sm font-medium text-black dark:bg-slate-900 dark:text-white sm:px-6 sm:py-3">
                Contact Me
              </div>
            </Link>
          </div>
        </div>

        <SkillsOrbit />
      </section>

      {/* Hero image */}
      <section className="container-page pb-20">
        <div className="aspect-[21/9] w-full rounded-xl bg-slate-300 dark:bg-slate-700 flex items-center justify-center text-slate-500">
          Your hero image here
        </div>
      </section>

      {/* Skills & Services */}
      <section className="w-full bg-gray-300/20 py-20 dark:bg-slate-900/30">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="mx-auto max-w-xl text-center">
            <h2 className="bg-gradient-to-r from-fuchsia-500 from-10% via-violet-500 via-30% to-sky-500 to-90% bg-clip-text text-3xl font-bold leading-tight text-transparent sm:text-4xl lg:text-5xl">
              Skills &amp; Services
            </h2>
            <p className="mt-4 text-base leading-relaxed">
              These are my working Skills &amp; Services I have done.
            </p>
          </div>

          <div className="mt-12 grid grid-cols-1 gap-y-8 px-6 text-center sm:grid-cols-2 sm:gap-12 lg:grid-cols-4 lg:px-0">
            {services.map((service) => (
              <div
                key={service.name}
                className="group relative flex size-full overflow-hidden rounded-xl bg-slate-100 text-black dark:bg-slate-900 dark:text-white"
              >
                <div className="relative z-10 w-full">
                  <div className="w-full rounded-lg p-5">
                    <div className="mx-auto flex h-20 w-20 items-center justify-center rounded-full">
                      <img src={service.icon} alt={service.name} className="h-16 w-16 object-contain" />
                    </div>
                    <h3 className="mt-8 text-lg font-semibold">{service.name}</h3>
                    <p className="mt-4 text-sm">{service.description}</p>
                  </div>

                  <div
                    style={{
                      "--size": 160,
                      "--duration": 12,
                      "--anchor": 90,
                      "--border-width": 3.5,
                      "--color-from": "#ffaa40",
                      "--color-to": "#9c40ff",
                      "--delay": "-9s",
                    }}
                    className="pointer-events-none absolute inset-0 rounded-xl [border:calc(var(--border-width)*1px)_solid_transparent] ![mask-clip:padding-box,border-box] ![mask-composite:intersect] [mask:linear-gradient(transparent,transparent),linear-gradient(white,white)] after:absolute after:aspect-square after:w-[calc(var(--size)*1px)] after:animate-border-beam after:[animation-delay:var(--delay)] after:[background:linear-gradient(to_left,var(--color-from),var(--color-to),transparent)] after:[offset-anchor:calc(var(--anchor)*1%)_50%] after:[offset-path:rect(0_auto_auto_0_round_calc(var(--size)*1px))]"
                  />
                </div>

                <div
                  className="pointer-events-none absolute -inset-px rounded-xl opacity-0 transition-opacity duration-300 group-hover:opacity-100"
                  style={{
                    opacity: 0.8,
                    background:
                      "radial-gradient(200px circle at -200px -200px, #e0e7ff, transparent 100%)",
                  }}
                />
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Projects preview */}
      <section className="container-page pb-24 text-center">
        <h2 className="text-3xl font-bold mb-2">
          <span className="bg-gradient-to-r from-indigo-400 to-fuchsia-400 bg-clip-text text-transparent">
            My Projects
          </span>
        </h2>
        <p className="text-slate-600 dark:text-slate-400 mb-10">
          Here are some of my projects I have done.
        </p>

        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3 text-left">
          {projects.map((project) => (
            <ProjectCard key={project.id} project={project} />
          ))}
        </div>

        <Link
          to="/projects"
          className="group relative z-0 mt-10 inline-flex cursor-pointer items-center justify-center overflow-hidden whitespace-nowrap border border-white/10 px-6 py-3 text-white shadow-2xl transition-transform duration-300 ease-in-out active:translate-y-px [background:var(--bg)] [border-radius:100px] [--bg:#0f172a] [--cut:0.05em] [--radius:100px] [--shimmer-color:#ffffff] [--speed:3s] [--spread:90deg]"
          style={{
            background: "#0f172a",
            borderRadius: "100px",
            boxShadow: "0 25px 50px -12px rgba(15, 23, 42, 0.55)",
          }}
        >
          <div className="absolute inset-0 -z-30 overflow-visible blur-[2px] [container-type:size]">
            <div className="absolute inset-0 h-[100cqh] animate-shimmer-slide [aspect-ratio:1] [border-radius:0] [mask:none]">
              <div className="animate-spin-around absolute -inset-full w-auto rotate-0 [background:conic-gradient(from_calc(270deg-(var(--spread)*0.5)),transparent_0,var(--shimmer-color)_var(--spread),transparent_var(--spread))] [translate:0_0]" />
            </div>
          </div>
          <span className="whitespace-pre-wrap text-center text-sm font-medium leading-none tracking-tight text-white dark:from-white dark:to-slate-900/10 lg:text-base">
            More Projects
          </span>
          <div className="absolute inset-0 rounded-[inherit] px-4 py-1.5 text-sm font-medium shadow-[inset_0_-8px_10px_#ffffff1f] transition-all duration-300 ease-in-out group-hover:shadow-[inset_0_-6px_10px_#ffffff3f] group-active:shadow-[inset_0_-10px_10px_#ffffff3f]" />
          <div className="absolute -z-20 [background:var(--bg)] [border-radius:var(--radius)] [inset:var(--cut)]" />
        </Link>
      </section>

      {/* Hire me CTA */}
      <section className="container-page pb-24 text-center">
        <h2 className="mb-3 text-2xl font-bold md:text-3xl">
          Hire me to build your{" "}
          <span className="animated-gradient-text">Next Project!</span>
        </h2>
        <p className="max-w-xl mx-auto text-slate-600 dark:text-slate-400 mb-6">
          I have a proven track record of delivering high-quality, efficient,
          and user-friendly web applications.
        </p>
        <div className="flex justify-center">
          <Link
            to="/contact"
            className="group relative z-0 inline-flex cursor-pointer items-center justify-center overflow-hidden whitespace-nowrap border border-white/10 px-6 py-3 text-white shadow-2xl transition-transform duration-300 ease-in-out active:translate-y-px [background:var(--bg)] [border-radius:100px] [--bg:#0f172a] [--cut:0.05em] [--radius:100px] [--shimmer-color:#ffffff] [--speed:3s] [--spread:90deg]"
            style={{
              background: "#0f172a",
              borderRadius: "100px",
              boxShadow: "0 25px 50px -12px rgba(15, 23, 42, 0.55)",
            }}
          >
            <div className="absolute inset-0 -z-30 overflow-visible blur-[2px] [container-type:size]">
              <div className="absolute inset-0 h-[100cqh] animate-shimmer-slide [aspect-ratio:1] [border-radius:0] [mask:none]">
                <div className="animate-spin-around absolute -inset-full w-auto rotate-0 [background:conic-gradient(from_calc(270deg-(var(--spread)*0.5)),transparent_0,var(--shimmer-color)_var(--spread),transparent_var(--spread))] [translate:0_0]" />
              </div>
            </div>
            <span className="whitespace-pre-wrap text-center text-sm font-medium leading-none tracking-tight text-white dark:from-white dark:to-slate-900/10 lg:text-base">
              Hire Me
            </span>
            <div className="absolute inset-0 rounded-[inherit] px-4 py-1.5 text-sm font-medium shadow-[inset_0_-8px_10px_#ffffff1f] transition-all duration-300 ease-in-out group-hover:shadow-[inset_0_-6px_10px_#ffffff3f] group-active:shadow-[inset_0_-10px_10px_#ffffff3f]" />
            <div className="absolute -z-20 [background:var(--bg)] [border-radius:var(--radius)] [inset:var(--cut)]" />
          </Link>
        </div>
      </section>
    </>
  );
}
import { ExternalLink } from "lucide-react";
import { FaGithub } from "react-icons/fa6";

export default function ProjectCard({ project }) {
  const { tag, title, description, tech = [], image, liveUrl, repoUrl } = project;

  return (
    <div className="group relative flex flex-col overflow-hidden rounded-xl bg-white/60 text-black shadow-sm transition-shadow hover:shadow-lg dark:bg-slate-900/60 dark:text-white">
      <div className="relative z-10 flex flex-1 flex-col">
        <div className="aspect-video w-full overflow-hidden bg-slate-200 dark:bg-slate-800/80 flex items-center justify-center text-xs text-slate-500">
          {image ? (
            <img
              src={image}
              alt={title}
              className="h-full w-full object-cover transition-transform duration-300 group-hover:scale-105"
            />
          ) : (
            "Project image"
          )}
        </div>
        <div className="p-5 flex flex-col flex-1">
          {tag && (
            <span className="text-xs font-mono text-accent mb-2">{tag}</span>
          )}
          <h3 className="text-lg font-bold mb-1">{title}</h3>
          <p className="text-sm text-slate-600 dark:text-slate-400 mb-3 flex-1">
            {description}
          </p>
          {tech.length > 0 && (
            <div className="flex flex-wrap gap-2 mb-4">
              {tech.map((t) => (
                <span
                  key={t}
                  className="rounded-full bg-accent/10 text-accent px-2.5 py-0.5 text-xs font-medium"
                >
                  {t}
                </span>
              ))}
            </div>
          )}
          {(liveUrl || repoUrl) && (
            <div className="flex items-center gap-4">
              {liveUrl && (
                <a
                  href={liveUrl}
                  target="_blank"
                  rel="noreferrer"
                  className="inline-flex items-center gap-1 text-sm font-semibold text-accent hover:underline"
                >
                  Live <ExternalLink className="h-3.5 w-3.5" />
                </a>
              )}
              {repoUrl && (
                <a
                  href={repoUrl}
                  target="_blank"
                  rel="noreferrer"
                  className="inline-flex items-center gap-1 text-sm font-semibold hover:underline"
                >
                  Code <FaGithub className="h-3.5 w-3.5" />
                </a>
              )}
            </div>
          )}
        </div>
      </div>

      <div
        style={{
          "--size": 220,
          "--duration": 16,
          "--anchor": 90,
          "--border-width": 4,
          "--color-from": "#ffaa40",
          "--color-to": "#9c40ff",
          "--delay": "-9s",
        }}
        className="pointer-events-none absolute inset-0 rounded-xl [border:calc(var(--border-width)*1px)_solid_transparent] ![mask-clip:padding-box,border-box] ![mask-composite:intersect] [mask:linear-gradient(transparent,transparent),linear-gradient(white,white)] after:absolute after:aspect-square after:w-[calc(var(--size)*1px)] after:animate-border-beam after:[animation-delay:var(--delay)] after:[background:linear-gradient(to_left,var(--color-from),var(--color-to),transparent)] after:[offset-anchor:calc(var(--anchor)*1%)_50%] after:[offset-path:rect(0_auto_auto_0_round_calc(var(--size)*1px))]"
      />

      <div
        className="pointer-events-none absolute -inset-px rounded-xl opacity-0 transition-opacity duration-300 group-hover:opacity-100"
        style={{
          opacity: 0.8,
          background:
            "radial-gradient(200px circle at -200px -200px, #e0e7ff, transparent 100%)",
        }}
      />
    </div>
  );
}
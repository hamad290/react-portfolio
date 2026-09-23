import { ArrowLeft } from "lucide-react";
import { FaGithub } from "react-icons/fa6";
import { Link, useParams } from "react-router-dom";
import projects from "../data/projects";

function DetailSection({ title, children }) {
  return (
    <section className="border-t border-slate-200 py-8 first:border-t-0 dark:border-slate-800">
      <h2 className="mb-4 text-xl font-bold text-slate-900 dark:text-white">{title}</h2>
      {children}
    </section>
  );
}

function Paragraph({ children }) {
  return (
    <p className="text-sm leading-6 text-slate-600 dark:text-slate-300">
      {children}
    </p>
  );
}

export default function ProjectDetails() {
  const { slug } = useParams();
  const project = projects.find((item) => String(item.id) === slug || item.slug === slug);

  if (!project) {
    return (
      <section className="container-page py-20 text-center">
        <h1 className="text-3xl font-bold">Project not found</h1>
        <Link to="/projects" className="mt-6 inline-flex text-accent hover:underline">
          Back to projects
        </Link>
      </section>
    );
  }

  const details = project.details || {};
  const githubUrl = project.repoUrl || "https://github.com/hamad290";
  const features = details.features || ["Responsive user experience", "Reusable project components"];
  const prerequisites = details.prerequisites || [];
  const structurePoints = details.structurePoints || [];

  return (
    <section className="container-page py-10 md:py-16">
      <div className="overflow-hidden rounded-2xl border border-slate-200/70 bg-white/70 shadow-xl dark:border-slate-800 dark:bg-slate-950/70">
        <div className="flex flex-col gap-3 border-b border-slate-200 px-4 py-4 sm:flex-row sm:items-center sm:justify-between sm:px-5 dark:border-slate-800">
          <Link to="/projects" className="inline-flex items-center gap-2 text-sm font-semibold text-slate-600 hover:text-accent dark:text-slate-300">
            <ArrowLeft className="h-4 w-4" />
            Back to projects
          </Link>
          <span className="text-[10px] font-semibold uppercase tracking-[0.2em] text-accent sm:text-xs">
            Featured case study
          </span>
        </div>

        <div className="grid gap-6 p-4 sm:gap-8 sm:p-5 lg:grid-cols-[minmax(0,1.35fr)_minmax(220px,0.65fr)] lg:p-8">
          <div className="min-w-0">
            {project.image && (
              <img
                src={project.image}
                alt={project.title}
                className="mb-6 h-auto max-h-[420px] w-full rounded-xl border border-slate-200 object-cover object-center dark:border-slate-800 sm:max-h-[520px]"
              />
            )}
            <span className="text-xs font-mono text-accent">{project.tag}</span>
            <h1 className="mt-3 text-2xl font-black sm:text-3xl md:text-4xl">{project.title}</h1>
            <p className="mt-4 text-sm leading-7 text-slate-600 dark:text-slate-400 sm:text-base">{project.description}</p>

            <div className="mt-8 rounded-xl border border-slate-200 p-4 sm:p-5 dark:border-slate-800">
              <DetailSection title="Features">
                <ul className="list-disc space-y-2 pl-5 text-sm text-slate-600 dark:text-slate-300">
                  {features.map((feature) => <li key={feature}>{feature}</li>)}
                </ul>
              </DetailSection>
              <DetailSection title="Tech Stack Highlights">
                <Paragraph>{details.highlights || `Built with ${project.tech.join(", ")}.`}</Paragraph>
              </DetailSection>
              <DetailSection title="Getting Started">
                <Paragraph>{details.gettingStarted}</Paragraph>
                <h3 className="mt-5 font-semibold text-slate-900 dark:text-white">Prerequisites</h3>
                <ul className="mt-2 list-disc space-y-1 pl-5 text-sm text-slate-600 dark:text-slate-300">
                  {prerequisites.map((item) => <li key={item}>{item}</li>)}
                </ul>
              </DetailSection>
              <DetailSection title="Installation & Launch">
                <Paragraph>{details.installation}</Paragraph>
                <pre className="mt-4 overflow-x-auto rounded-lg bg-slate-900 p-3 text-[11px] leading-6 text-slate-100 sm:p-4 sm:text-xs">
                  <code>{details.commands}</code>
                </pre>
              </DetailSection>
              <DetailSection title="About">
                <Paragraph>{details.about || project.description}</Paragraph>
              </DetailSection>
              <DetailSection title="Why This Structure Works">
                <Paragraph>{details.structure}</Paragraph>
                <ul className="mt-3 list-disc space-y-1 pl-5 text-sm text-slate-600 dark:text-slate-300">
                  {structurePoints.map((item) => <li key={item}>{item}</li>)}
                </ul>
              </DetailSection>
              <DetailSection title="Next Steps">
                <Paragraph>{details.nextSteps}</Paragraph>
              </DetailSection>
            </div>
          </div>

          <aside className="order-first h-fit space-y-4 lg:sticky lg:top-6 lg:order-none">
            <div className="rounded-xl border border-slate-200 p-4 dark:border-slate-800 sm:p-5">
              <p className="text-sm font-semibold text-slate-900 dark:text-white">Explore project</p>
              <div className="mt-4 flex flex-wrap gap-2">
                <a href={githubUrl} target="_blank" rel="noreferrer" className="inline-flex items-center gap-2 rounded-lg border border-slate-300 px-3 py-2 text-sm font-semibold hover:border-accent hover:text-accent dark:border-slate-700">
                  <FaGithub className="h-4 w-4" /> GitHub
                </a>
              </div>
            </div>
            <div className="rounded-xl border border-slate-200 p-4 dark:border-slate-800 sm:p-5">
              <p className="mb-3 text-sm font-semibold text-slate-900 dark:text-white">Tags</p>
              <div className="flex flex-wrap gap-2">
                {project.tech.map((technology) => (
                  <span key={technology} className="rounded-full bg-accent/10 px-3 py-1 text-xs font-medium text-accent">{technology}</span>
                ))}
              </div>
            </div>
          </aside>
        </div>
      </div>
    </section>
  );
}

import ProjectCard from "../components/ProjectCard";
import projects from "../data/projects";

export default function Projects() {
  return (
    <section className="container-page py-16 lg:py-24">
      <h1 className="mb-2 text-3xl font-bold md:text-5xl">
        <span className="bg-gradient-to-r from-indigo-400 via-fuchsia-400 to-teal-300 bg-clip-text text-transparent">
          Projects &amp; Products
        </span>
        <span className="text-accent">.</span>
      </h1>
      <p className="mb-10 text-slate-600 dark:text-slate-400">
        Here&apos;s some of the projects I&apos;ve finished.
      </p>

      <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
        {projects.map((project) => (
          <ProjectCard key={project.id} project={project} />
        ))}
      </div>
    </section>
  );
}

import { Link } from "react-router-dom";

const laneDirections = ["project-gallery-lane-forward", "project-gallery-lane-reverse", "project-gallery-lane-forward"];

export default function ProjectGallery({ projects }) {
	const galleryProjects = projects.filter((project) => project.image);

	return (
		<section className="project-gallery" aria-label="Animated project showcase">
			<div className="project-gallery-canvas">
				{laneDirections.map((direction, laneIndex) => {
					const laneProjects = galleryProjects.filter(
						(_, projectIndex) => projectIndex % 3 === laneIndex,
					);

					return (
						<div className={`project-gallery-lane ${direction}`} key={direction}>
							<div className="project-gallery-lane-track">
								{[...laneProjects, ...laneProjects].map((project, projectIndex) => (
									<Link
										className="project-gallery-card"
										to={`/projects/${project.slug || project.id}`}
										aria-label={`View details for ${project.title}`}
										key={`${project.id}-${projectIndex}`}
									>
										<img
											src={project.image}
											alt={`${project.title} project screenshot`}
											loading="lazy"
										/>
										<span>{project.title}</span>
									</Link>
								))}
							</div>
						</div>
					);
				})}
			</div>
		</section>
	);
}

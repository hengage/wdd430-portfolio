interface ProjectCardProps {
  title: string;
  description: string;
  technologies: string[];
  link?: string;
}

export default function ProjectCard({
  title,
  description,
  technologies,
  link,
}: ProjectCardProps) {
  return (
    <article className="flex h-full flex-col rounded-2xl border border-slate-200 bg-white p-6 shadow-sm transition hover:-translate-y-1 hover:shadow-md">
      <h3 className="text-xl font-bold text-slate-950">{title}</h3>
      <p className="mt-3 flex-1 leading-7 text-slate-700">{description}</p>
      <p className="mt-4 text-sm text-slate-600">
        <strong className="font-semibold text-slate-900">Technologies:</strong>{" "}
        {technologies.join(", ")}
      </p>
      {link && (
        <p className="mt-5">
          <a
            href={link}
            target="_blank"
            rel="noopener noreferrer"
            className="font-semibold text-blue-700 underline-offset-4 hover:underline"
          >
            View Project
          </a>
        </p>
      )}
    </article>
  );
}

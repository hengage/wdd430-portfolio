import ProjectList from "@/components/ProjectList";

const projects = [
  {
    title: "Service Impact",
    description:
      "A backend-driven service project site for browsing organizations, projects, categories, and volunteer signups.",
    technologies: ["Node.js", "Express", "PostgreSQL", "EJS", "CSS"],
    link: "https://github.com/hengage/cse340",
  },
  {
    title: "StudyTrack Proposal",
    description:
      "A planned full-stack student dashboard for organizing courses, assignments, due dates, and task completion.",
    technologies: ["Next.js", "React", "TypeScript", "Tailwind CSS"],
    link: "https://github.com/hengage/wdd430-portfolio",
  },
];

export default function Home() {
  return (
    <main className="mx-auto w-full max-w-5xl px-6 py-16">
      <section className="mb-12 rounded-3xl bg-gradient-to-br from-blue-700 to-slate-950 px-8 py-14 text-white shadow-lg">
        <p className="text-sm font-semibold uppercase tracking-[0.3em] text-blue-100">
          WDD 430 Portfolio
        </p>
        <h1 className="mt-4 max-w-3xl text-4xl font-bold tracking-tight sm:text-6xl">
          Full-stack development practice with Next.js and React.
        </h1>
        <p className="mt-6 max-w-2xl text-lg leading-8 text-blue-50">
          I am building a portfolio that documents my progress with modern web
          application structure, reusable components, typed props, and
          production deployment.
        </p>
      </section>

      <section>
        <div className="mb-6">
          <h2 className="text-3xl font-bold text-slate-950">Featured Projects</h2>
          <p className="mt-2 text-slate-600">
            A snapshot of current and planned work from my web development
            courses.
          </p>
        </div>
        <ProjectList projects={projects} />
      </section>
    </main>
  );
}

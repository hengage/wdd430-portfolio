interface SkillCardProps {
  title: string;
  description: string;
  skills: string[];
}

export default function SkillCard({
  title,
  description,
  skills,
}: SkillCardProps) {
  return (
    <section className="rounded-2xl border border-blue-100 bg-blue-50 p-6">
      <h3 className="text-2xl font-bold text-slate-950">{title}</h3>
      <p className="mt-3 leading-7 text-slate-700">{description}</p>
      <ul className="mt-5 flex flex-wrap gap-3">
        {skills.map((skill) => (
          <li
            key={skill}
            className="rounded-full bg-white px-4 py-2 text-sm font-medium text-blue-800 shadow-sm"
          >
            {skill}
          </li>
        ))}
      </ul>
    </section>
  );
}

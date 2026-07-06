import SkillCard from "@/components/SkillCard";

export default function About() {
  return (
    <main className="mx-auto max-w-4xl px-6 py-16">
      <section className="mb-10">
        <p className="text-sm font-semibold uppercase tracking-[0.3em] text-blue-700">
          About Me
        </p>
        <h1 className="mt-4 text-4xl font-bold tracking-tight text-slate-950 sm:text-5xl">
          Building practical full-stack skills one project at a time.
        </h1>
        <p className="mt-6 text-lg leading-8 text-slate-700">
          I am learning modern web development with React, Next.js, TypeScript,
          and backend tools. My goal is to build applications that are useful,
          readable, and easy for real users to navigate.
        </p>
      </section>

      <SkillCard
        title="Current Technical Focus"
        description="This card highlights the tools and concepts I am practicing in WDD 430 while building full-stack applications."
        skills={[
          "Next.js App Router",
          "React Components",
          "TypeScript Props",
          "Tailwind CSS",
          "API Routes",
        ]}
      />
    </main>
  );
}

interface SkillCategory {
  title: string
  skills: string[]
}

const skillCategories: SkillCategory[] = [
  {
    title: "Languages",
    skills: ["TypeScript", "JavaScript", "Python", "GoLang", "C#", "Java", "PHP", "SQL"],
  },
  {
    title: "Frontend",
    skills: ["React", "Next.js", "Vue.js", "Angular", "Tailwind CSS", "SolidJS"],
  },
  {
    title: "Backend & Data",
    skills: ["Node.js", "tRPC", "GraphQL", "PostgreSQL", "Supabase", "Redis"],
  },
  {
    title: "DevOps & Tools",
    skills: ["Docker", "Kubernetes", "AWS", "Azure", "Vercel", "Git"],
  },
]

export function SkillsSection() {
  return (
    <section className="py-20 md:py-32">
      <div className="mx-auto max-w-4xl px-6">
        <h2 className="text-sm uppercase tracking-widest text-muted-foreground mb-12">
          Skills & Technologies
        </h2>
        
        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-8">
          {skillCategories.map((category) => (
            <div key={category.title}>
              <h3 className="text-sm font-medium text-foreground mb-4">
                {category.title}
              </h3>
              <div className="flex flex-wrap gap-2">
                {category.skills.map((skill) => (
                  <span
                    key={skill}
                    className="text-xs px-2.5 py-1 bg-secondary text-secondary-foreground rounded-full"
                  >
                    {skill}
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

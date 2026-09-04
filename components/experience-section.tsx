import Link from "next/link"
import { ArrowUpRight } from "lucide-react"

interface ExperienceItem {
  period: string
  title: string
  company: string
  companyUrl?: string
  description: string
  skills: string[]
}

const experiences: ExperienceItem[] = [
  {
    period: "Aug 2026 — Present",
    title: "Software Engineer",
    company: "Aon",
    companyUrl: "https://aon.com",
    description: "Currently working on Climate Risk Monitor - an application designed to visualize climate risk forecasts for physical assets",
    skills: ["C#", "Angular", "TypeScript", "AI Integration"],
  },
  {
    period: "July 2024 — July 2026",
    title: "Graduate Software Engineer",
    company: "Aon",
    companyUrl: "https://aon.com",
    description: "Designed and developed Aon's first AI panelist showcased at an international Climate & Insurance Conference. Led launch of major features from requirements to production, contributing to applications used by hundreds of internal users. Initiated UX improvements that increased user traffic by ~20%.",
    skills: ["C#", "Angular", "React", "TypeScript", "AI Integration"],
  },
  {
    period: "Apr 2025 — Present",
    title: "Founder & Developer",
    company: "ClubPro Alpha",
    companyUrl: "https://clubproalpha.com",
    description: "Built a multi-tenant club management platform unifying bookings, memberships, payments, and online store. Designed full stack with Next.js, TypeScript, tRPC, PostgreSQL, and Expo for mobile. First customer going live Apr 2026.",
    skills: ["Next.js", "TypeScript", "tRPC", "PostgreSQL", "Stripe", "Expo", "Multi-tenancy"],
  },
  {
    period: "Apr 2025 — Present",
    title: "Founder & Developer",
    company: "Crossroad Pickleball",
    companyUrl: "https://www.pickleballcrossroad.com",
    description: "Built a PWA automating session bookings and credit purchases, replacing manual WhatsApp coordination. Reduced organizer admin workload by ~50%. Grew to 800 sign-ups and 245 MAUs with 80% satisfaction rate.",
    skills: ["PWA", "React", "TypeScript", "Product Development"],
  },
  {
    period: "May — Aug 2023",
    title: "Back-End Developer Intern",
    company: "Acronis",
    companyUrl: "https://www.acronis.com/en/",
    description: "Designed and implemented API-key authentication feature interacting with 3 major services. Followed Test-Driven Development with 85%+ code coverage. Part of Acronis' most expansive project.",
    skills: ["GoLang", "Kubernetes", "TDD", "API Design"],
  },
  {
    period: "May — Dec 2022",
    title: "Front-End Developer Intern",
    company: "Acronis",
    companyUrl: "https://www.acronis.com/en/",
    description: "Implemented document notarization application UI leveraging Ethereum blockchain. Built clean, reusable Vue components with 80%+ test coverage. Worked with Jenkins CI/CD pipeline.",
    skills: ["Vue.js", "TypeScript", "Jest", "Blockchain"],
  },
  {
    period: "May — Sep 2021",
    title: "Founding Front-End Engineer",
    company: "SolanaFM (acquired by Jupiter)",
    companyUrl: "https://jup.ag/",
    description: "Developed the user interface for a Solana Indexer application. Led integration of GraphQL IDE for database queries. Company was later acquired by Jupiter Exchange.",
    skills: ["React", "Tailwind CSS", "GraphQL", "Solana"],
  },
]

export function ExperienceSection() {
  return (
    <section id="experience" className="py-20 md:py-32">
      <div className="mx-auto max-w-4xl px-6">
        <h2 className="text-sm uppercase tracking-widest text-muted-foreground mb-12">
          Experience
        </h2>
        
        <div className="space-y-2">
          {experiences.map((exp, index) => (
            <ExperienceCard key={index} experience={exp} />
          ))}
        </div>
      </div>
    </section>
  )
}

function ExperienceCard({ experience }: { experience: ExperienceItem }) {
  return (
    <div className="group grid md:grid-cols-[140px,1fr] gap-4 md:gap-8 py-6 px-4 -mx-4 rounded-lg hover:bg-card/80 transition-colors">
      <div className="text-sm text-muted-foreground font-mono">
        {experience.period}
      </div>
      
      <div className="space-y-3">
        <div>
          <h3 className="font-medium text-foreground">
            {experience.title}
            <span className="text-muted-foreground"> · </span>
            {experience.companyUrl ? (
              <Link 
                href={experience.companyUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="text-foreground hover:text-accent transition-colors inline-flex items-center gap-1"
              >
                {experience.company}
                <ArrowUpRight className="h-3.5 w-3.5 opacity-60" />
              </Link>
            ) : (
              <span>{experience.company}</span>
            )}
          </h3>
        </div>
        
        <p className="text-muted-foreground leading-relaxed text-sm">
          {experience.description}
        </p>
        
        <div className="flex flex-wrap gap-2">
          {experience.skills.map((skill) => (
            <span 
              key={skill}
              className="text-xs px-2.5 py-1 bg-secondary text-secondary-foreground rounded-full"
            >
              {skill}
            </span>
          ))}
        </div>
      </div>
    </div>
  )
}

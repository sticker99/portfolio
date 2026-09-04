import Link from "next/link"
import { ArrowUpRight } from "lucide-react"

interface Project {
  title: string
  description: string
  url?: string
  stats?: string
  technologies: string[]
}

const projects: Project[] = [
  {
    title: "ClubPro Alpha",
    description: "Multi-tenant club management platform unifying bookings, memberships, payments, and an online store into a single system for sports clubs. Features admin dashboards, feature flags, and tenant-aware architecture.",
    url: "https://clubproalpha.com",
    technologies: ["Next.js", "React", "TypeScript", "tRPC", "PostgreSQL", "Supabase", "Stripe", "Expo"],
  },
  {
    title: "Crossroad Pickleball",
    description: "PWA that automates session bookings, waitlists, priority access, and credit purchases. Replaced manual WhatsApp coordination for a pickleball community, reducing organizer admin workload by more than 50% and enabled scaling of operations.",
    url: "https://www.pickleballcrossroad.com",
    stats: "800 sign-ups · 245 MAUs · 80% satisfaction",
    technologies: ["PWA", "Next.js", "TypeScript", "tRPC", "Product Development"],
  },
  {
    title: "Aon AI Panelist",
    description: "Designed and developed Aon's first AI panelist, showcased at an international Climate & Insurance Conference 2025. Answered 20+ audience questions live, positioning Aon as an AI innovation leader.",
    technologies: ["AI/ML", "Next.js", "TypeScript"],
  },
  {
    title: "SolanaFM Explorer",
    description: "Founding front-end engineer for a Solana blockchain indexer application. Led integration of GraphQL IDE for seamless database queries. Company was later acquired by Jupiter Exchange.",
    technologies: ["React", "Tailwind CSS", "GraphQL", "Solana", "Blockchain"],
  },
]

export function ProjectsSection() {
  return (
    <section id="projects" className="py-20 md:py-32 bg-secondary/30">
      <div className="mx-auto max-w-4xl px-6">
        <h2 className="text-sm uppercase tracking-widest text-muted-foreground mb-12">
          Selected Projects
        </h2>
        
        <div className="grid gap-6">
          {projects.map((project) => (
            <ProjectCard key={project.title} project={project} />
          ))}
        </div>
      </div>
    </section>
  )
}

function ProjectCard({ project }: { project: Project }) {
  const CardWrapper = project.url ? Link : "div"
  const cardProps = project.url ? {
    href: project.url,
    target: "_blank",
    rel: "noopener noreferrer",
  } : {}

  return (
    <CardWrapper
      {...cardProps}
      className="group block p-6 bg-card rounded-lg border border-border/60 hover:border-border hover:shadow-sm transition-all"
    >
      <div className="flex items-start justify-between gap-4">
        <div className="space-y-3 flex-1">
          <div className="flex items-center gap-2">
            <h3 className="font-medium text-foreground group-hover:text-accent transition-colors">
              {project.title}
            </h3>
            {project.url && (
              <ArrowUpRight className="h-4 w-4 text-muted-foreground group-hover:text-accent transition-colors" />
            )}
          </div>
          
          <p className="text-muted-foreground leading-relaxed text-sm">
            {project.description}
          </p>
          
          {project.stats && (
            <p className="text-sm text-accent font-medium">
              {project.stats}
            </p>
          )}
          
          <div className="flex flex-wrap gap-2 pt-2">
            {project.technologies.map((tech) => (
              <span 
                key={tech}
                className="text-xs px-2.5 py-1 bg-secondary text-secondary-foreground rounded-full"
              >
                {tech}
              </span>
            ))}
          </div>
        </div>
      </div>
    </CardWrapper>
  )
}

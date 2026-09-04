import Link from "next/link"
import { ArrowUpRight } from "lucide-react"

export function ContactSection() {
  return (
    <section id="contact" className="py-20 md:py-32 bg-secondary/30">
      <div className="mx-auto max-w-4xl px-6">
        <div className="max-w-xl">
          <h2 className="text-sm uppercase tracking-widest text-muted-foreground mb-6">
            Get in Touch
          </h2>
          
          <p className="text-xl md:text-2xl text-foreground leading-relaxed mb-8 text-balance">
            If you&apos;d like to discuss a project, opportunity, or just say hello, 
            I&apos;m always happy to connect.
          </p>
          
          <div className="space-y-4">
            <ContactLink 
              href="mailto:srikar.primary@gmail.com" 
              label="srikar.primary@gmail.com"
              description="Email"
            />
            <ContactLink
              href="https://www.linkedin.com/in/mahankalisrikar"
              label="linkedin.com/in/mahankalisrikar"
              description="LinkedIn"
            />
          </div>
        </div>
      </div>
    </section>
  )
}

function ContactLink({ 
  href, 
  label, 
  description 
}: { 
  href: string
  label: string
  description: string 
}) {
  return (
    <div className="flex items-baseline justify-between gap-4 py-3 border-b border-border/60 group">
      <span className="text-sm text-muted-foreground">{description}</span>
      <Link 
        href={href}
        target={href.startsWith("http") ? "_blank" : undefined}
        rel={href.startsWith("http") ? "noopener noreferrer" : undefined}
        className="text-foreground hover:text-accent transition-colors flex items-center gap-1"
      >
        {label}
        {href.startsWith("http") && (
          <ArrowUpRight className="h-3.5 w-3.5 opacity-60" />
        )}
      </Link>
    </div>
  )
}

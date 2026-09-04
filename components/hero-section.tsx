import Image from "next/image"
import Link from "next/link"
import { ArrowUpRight } from "lucide-react"

export function HeroSection() {
  return (
    <section className="min-h-[90vh] flex items-center pt-20">
      <div className="mx-auto max-w-4xl px-6 py-20 md:py-32">
        <div className="grid md:grid-cols-[1fr,1.5fr] gap-12 md:gap-16 items-start">
          {/* Left Column - Photo, Name & Title */}
          <div className="space-y-6">
            {/* TODO: replace with a real headshot in /public and swap the src below */}
            <div className="h-24 w-24 rounded-full bg-secondary border border-border/60 overflow-hidden">
              <Image
                src="/srikar-headshot.jpeg"
                alt="Srikar Mahankali"
                width={96}
                height={96}
                className="h-full w-full object-cover"
                priority
              />
            </div>

            <div>
              <h1 className="text-3xl md:text-4xl font-semibold tracking-tight text-foreground text-balance">
                Srikar Mahankali
              </h1>
              <p className="mt-2 text-lg text-accent font-medium">
                Software Engineer
              </p>
            </div>

            <p className="text-muted-foreground leading-relaxed">
              I build thoughtful digital products that solve real problems for real people.
            </p>

            {/* Navigation Links */}
            <nav className="space-y-3 pt-4">
              <NavLink href="#about" label="About" />
              <NavLink href="#experience" label="Experience" />
              <NavLink href="#projects" label="Projects" />
              <NavLink href="#contact" label="Contact" />
            </nav>

            {/* Social Links */}
            <div className="flex items-center gap-4 pt-6">
              <SocialLink
                href="https://www.linkedin.com/in/mahankalisrikar"
                label="LinkedIn"
              />
              <SocialLink
                href="mailto:srikar.primary@gmail.com"
                label="Email"
              />
            </div>
          </div>

          {/* Right Column - About */}
          <div className="space-y-6 leading-relaxed" id="about">
            <p className="text-foreground/90">
              I&apos;m an engineer who cares more about the problem than the stack.
              I like sitting with users until I understand what they&apos;re actually
              stuck on, then building the smallest thing that gets them unstuck —
              whether that&apos;s a feature at work or a product I&apos;ve started
              from nothing on a weekend.
            </p>

            <p className="text-foreground/90">
              That instinct is why I keep building outside of my day job at{" "}
              <Link href="https://aon.com" className="text-foreground font-medium underline underline-offset-2 decoration-border hover:decoration-accent transition-colors">
                Aon
              </Link>
              {" "}— see{" "}
              <Link href="#experience" className="text-foreground font-medium underline underline-offset-2 decoration-border hover:decoration-accent transition-colors">
                Experience
              </Link>
              {" "}and{" "}
              <Link href="#projects" className="text-foreground font-medium underline underline-offset-2 decoration-border hover:decoration-accent transition-colors">
                Projects
              </Link>
              {" "}below for what I&apos;ve shipped, at Aon and on my own.
            </p>

            <p className="text-foreground/90">
              I studied Information Systems at Singapore Management University,
              graduating Cum Laude. When I&apos;m not coding, you&apos;ll find me drinking coffee at a cafe in Bali.
            </p>
          </div>
        </div>
      </div>
    </section>
  )
}

function NavLink({ href, label }: { href: string; label: string }) {
  return (
    <Link 
      href={href}
      className="group flex items-center gap-3 text-sm text-muted-foreground hover:text-foreground transition-colors"
    >
      <span className="h-px w-8 bg-muted-foreground/40 group-hover:w-16 group-hover:bg-foreground transition-all" />
      <span className="uppercase tracking-widest">{label}</span>
    </Link>
  )
}

function SocialLink({ href, label }: { href: string; label: string }) {
  return (
    <Link
      href={href}
      target={href.startsWith("http") ? "_blank" : undefined}
      rel={href.startsWith("http") ? "noopener noreferrer" : undefined}
      className="text-muted-foreground hover:text-foreground transition-colors"
      aria-label={label}
    >
      <span className="text-sm">{label}</span>
    </Link>
  )
}

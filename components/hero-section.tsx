import Link from "next/link"
import { ArrowUpRight } from "lucide-react"

export function HeroSection() {
  return (
    <section className="min-h-[90vh] flex items-center pt-20">
      <div className="mx-auto max-w-4xl px-6 py-20 md:py-32">
        <div className="grid md:grid-cols-[1fr,1.5fr] gap-12 md:gap-16 items-start">
          {/* Left Column - Name & Title */}
          <div className="space-y-6">
            <div>
              <h1 className="text-3xl md:text-4xl font-semibold tracking-tight text-foreground text-balance">
                Srikar Mahankali
              </h1>
              <p className="mt-2 text-lg text-accent font-medium">
                Full-Stack Developer
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
          <div className="space-y-6 text-foreground/90 leading-relaxed" id="about">
            <p>
              I&apos;m an engineer passionate about building software that makes a difference. 
              My work lies at the intersection of product thinking and technical execution, 
              creating experiences that not only function well but genuinely help users 
              accomplish their goals.
            </p>
            
            <p>
              Currently, I&apos;m a <span className="text-foreground font-medium">Software Engineer</span> at{" "}
              <Link href="https://aon.com" className="text-foreground font-medium underline underline-offset-2 decoration-border hover:decoration-accent transition-colors">
                Aon
              </Link>
              , where I&apos;ve had the opportunity to design and develop their first AI panelist, 
              showcased at an international Climate & Insurance Conference.
            </p>

            <p>
              In my own time, I&apos;ve founded and built{" "}
              <Link href="https://clubproalpha.com" className="text-foreground font-medium underline underline-offset-2 decoration-border hover:decoration-accent transition-colors">
                ClubPro Alpha
              </Link>
              , a multi-tenant club management platform, and{" "}
              <Link href="https://www.pickleballcrossroad.com" className="text-foreground font-medium underline underline-offset-2 decoration-border hover:decoration-accent transition-colors">
                Crossroad Pickleball
              </Link>
              , a PWA that grew to 800+ sign-ups and 245 monthly active users with an 80% satisfaction rate.
            </p>

            <p>
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

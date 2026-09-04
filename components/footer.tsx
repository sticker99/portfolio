import Image from "next/image"

export function Footer() {
  const currentYear = new Date().getFullYear()

  return (
    <footer className="py-8 border-t border-border/60">
      <div className="mx-auto max-w-4xl px-6">
        <div className="flex flex-col sm:flex-row items-center justify-between gap-4 text-sm text-muted-foreground">
          <p>
            {currentYear} Srikar Mahankali
          </p>
          <p className="flex items-center gap-1.5">
            Built with care in Singapore
            <Image
              src="/lion-head.jpg"
              alt=""
              width={24}
              height={24}
              className="inline-block dark:invert"
            />
          </p>
        </div>
      </div>
    </footer>
  )
}

export function Footer() {
  const currentYear = new Date().getFullYear()
  
  return (
    <footer className="py-8 border-t border-border/60">
      <div className="mx-auto max-w-4xl px-6">
        <div className="flex flex-col sm:flex-row items-center justify-between gap-4 text-sm text-muted-foreground">
          <p>
            {currentYear} Srikar Mahankali
          </p>
          <p>
            Built with care in Singapore
          </p>
        </div>
      </div>
    </footer>
  )
}

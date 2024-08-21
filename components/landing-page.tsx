import Link from "next/link"

export function LandingPage() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-center bg-background px-4">
      <div className="mx-auto flex max-w-2xl flex-col items-center justify-between gap-16 text-center sm:gap-8">
        <h1 className="font-mono bg-gradient-to-r from-primary to-slate-400 bg-clip-text text-6xl font-extrabold text-transparent">
          LuseryLabs
        </h1>
        <p className="text-2xl text-muted-foreground">
          Explore the latest insights and trends in artificial intelligence at LuseryLabs.
        </p>
        <Link
          href="/ai"
          className="inline-flex items-center justify-center rounded-md bg-slate-300 px-5 py-3 text-lg font-semibold text-primary-foreground shadow-sm transition-colors hover:bg-slate-400 focus:outline-none focus:ring-2 focus:ring-slate-400 focus:ring-offset-2"
          prefetch={false}
        >
          IA
        </Link>
        <Link
          href="/blockchain"
          className="inline-flex items-center justify-center rounded-md bg-slate-300 px-5 py-3 text-lg font-semibold text-primary-foreground shadow-sm transition-colors hover:bg-slate-400 focus:outline-none focus:ring-2 focus:ring-slate-400 focus:ring-offset-2"
          prefetch={false}
        >
          Blockchain
        </Link>
        <Link
          href="/web3"
          className="inline-flex items-center justify-center rounded-md bg-slate-300 px-5 py-3 text-lg font-semibold text-primary-foreground shadow-sm transition-colors hover:bg-slate-400 focus:outline-none focus:ring-2 focus:ring-slate-400 focus:ring-offset-2"
          prefetch={false}
        >
          Programacion web3
        </Link>
      </div>
    </main>
  )
}

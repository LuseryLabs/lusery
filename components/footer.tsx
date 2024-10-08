import Link from "next/link"
import { JSX, SVGProps } from "react"

export function Footer() {
  return (
    <footer className="bg-muted py-6 text-muted-foreground">
      <div className="container mx-auto flex flex-col items-center justify-between gap-4 px-4 sm:flex-row sm:gap-0">
        <div className="flex items-center gap-2">
          <Link href="#" prefetch={false} className="flex items-center gap-2">
            <MountainIcon className="h-6 w-6" />
            <span className="text-lg font-medium">LuseryLabs</span>
          </Link>
        </div>
        <p className="text-sm">&copy; 2024 LuseryLabs. All rights reserved.</p>
        <nav className="flex items-center gap-4">
          <Link
            href="https://www.instagram.com/luserylabs"
            className="text-sm hover:underline flex items-center gap-2"
            prefetch={false}
            target="_blank"
            rel="noopener noreferrer"
          >
            <InstagramIcon className="w-4 h-4" />
            luserylabs
          </Link>
        </nav>
      </div>
    </footer>
  )
}

function InstagramIcon(props: JSX.IntrinsicAttributes & SVGProps<SVGSVGElement>) {
  return (
    <svg
      {...props}
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <rect width="20" height="20" x="2" y="2" rx="5" ry="5" />
      <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z" />
      <line x1="17.5" x2="17.51" y1="6.5" y2="6.5" />
    </svg>
  )
}


function MountainIcon(props: JSX.IntrinsicAttributes & SVGProps<SVGSVGElement>) {
  return (
    <svg
      {...props}
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <path d="m8 3 4 8 5-5 5 15H2L8 3z" />
    </svg>
  )
}


function XIcon(props: JSX.IntrinsicAttributes & SVGProps<SVGSVGElement>) {
  return (
    <svg
      {...props}
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <path d="M18 6 6 18" />
      <path d="m6 6 12 12" />
    </svg>
  )
}

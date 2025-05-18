import Link from "next/link"
import { Button } from "@/components/ui/button"
import Image from "next/image"

export default function Header() {
  return (
    <header className="sticky top-0 z-50 w-full border-b bg-white">
      <div className="container flex h-16 items-center justify-between">
        <div className="flex items-center gap-2">
          <Link href="/" className="flex items-center gap-2">
            <Image src="/logo.png" alt="CherryFlow Logo" width={32} height={32} />
            <span className="text-xl font-bold text-purple-700">CherryFlow</span>
          </Link>
        </div>
        <nav className="hidden md:flex items-center gap-6">
          <Link href="/" className="text-sm font-medium hover:text-purple-700 transition-colors">
            Main
          </Link>
          <Link href="/usecase" className="text-sm font-medium hover:text-purple-700 transition-colors">
            UseCase
          </Link>
          <Link href="/solution" className="text-sm font-medium hover:text-purple-700 transition-colors">
            Solution
          </Link>
          <Link href="/about-us" className="text-sm font-medium hover:text-purple-700 transition-colors">
            About Us
          </Link>
          <Link href="/board" className="text-sm font-medium hover:text-purple-700 transition-colors">
            Board
          </Link>
          <Link href="/contact-us" className="text-sm font-medium hover:text-purple-700 transition-colors">
            Contact Us
          </Link>
        </nav>
        <div className="flex items-center gap-4">
          <Button variant="outline" size="sm" className="hidden md:flex">
            로그인
          </Button>
          <Button
            size="sm"
            className="hidden md:flex bg-gradient-to-r from-purple-600 to-blue-500 hover:from-purple-700 hover:to-blue-600"
          >
            시작하기
          </Button>
          <Button variant="ghost" size="icon" className="md:hidden">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="24"
              height="24"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
              className="h-6 w-6"
            >
              <line x1="4" x2="20" y1="12" y2="12" />
              <line x1="4" x2="20" y1="6" y2="6" />
              <line x1="4" x2="20" y1="18" y2="18" />
            </svg>
          </Button>
        </div>
      </div>
    </header>
  )
}

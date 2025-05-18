import Link from "next/link"
import Image from "next/image"

export default function Footer() {
  return (
    <footer className="border-t bg-white">
      <div className="container py-8 md:py-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          <div className="space-y-4">
            <Link href="/" className="flex items-center gap-2">
              <Image src="/logo.png" alt="CherryFlow Logo" width={32} height={32} />
              <span className="text-xl font-bold text-purple-700">CherryFlow</span>
            </Link>
            <p className="text-sm text-gray-500">시스템 플로우 솔루션을 통해 업무 효율성을 높이세요.</p>
          </div>
          <div>
            <h3 className="text-sm font-medium mb-4">페이지</h3>
            <ul className="space-y-2">
              <li>
                <Link href="/" className="text-sm text-gray-500 hover:text-purple-700 transition-colors">
                  Main
                </Link>
              </li>
              <li>
                <Link href="/usecase" className="text-sm text-gray-500 hover:text-purple-700 transition-colors">
                  UseCase
                </Link>
              </li>
              <li>
                <Link href="/solution" className="text-sm text-gray-500 hover:text-purple-700 transition-colors">
                  Solution
                </Link>
              </li>
            </ul>
          </div>
          <div>
            <h3 className="text-sm font-medium mb-4">회사</h3>
            <ul className="space-y-2">
              <li>
                <Link href="/about-us" className="text-sm text-gray-500 hover:text-purple-700 transition-colors">
                  About Us
                </Link>
              </li>
              <li>
                <Link href="/board" className="text-sm text-gray-500 hover:text-purple-700 transition-colors">
                  Board
                </Link>
              </li>
              <li>
                <Link href="/contact-us" className="text-sm text-gray-500 hover:text-purple-700 transition-colors">
                  Contact Us
                </Link>
              </li>
            </ul>
          </div>
          <div>
            <h3 className="text-sm font-medium mb-4">문의</h3>
            <ul className="space-y-2">
              <li className="text-sm text-gray-500">이메일: info@cherryflow.com</li>
              <li className="text-sm text-gray-500">전화: 02-123-4567</li>
              <li className="text-sm text-gray-500">주소: 서울시 강남구</li>
            </ul>
          </div>
        </div>
        <div className="mt-8 border-t pt-8 flex flex-col md:flex-row justify-between items-center">
          <p className="text-xs text-gray-500">© {new Date().getFullYear()} CherryFlow. All rights reserved.</p>
          <div className="flex gap-4 mt-4 md:mt-0">
            <Link href="#" className="text-xs text-gray-500 hover:text-purple-700 transition-colors">
              개인정보처리방침
            </Link>
            <Link href="#" className="text-xs text-gray-500 hover:text-purple-700 transition-colors">
              이용약관
            </Link>
          </div>
        </div>
      </div>
    </footer>
  )
}

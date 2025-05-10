"use client"

import { useState } from "react"
import Link from "next/link"
import { Menu, X } from "lucide-react"

import { Button } from "@/components/ui/button"
import { useMobile } from "@/hooks/use-mobile"

export function Header() {
  const isMobile = useMobile()
  const [isMenuOpen, setIsMenuOpen] = useState(false)

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen)
  }

  return (
    <header className="sticky top-0 z-50 bg-white shadow-sm">
      <div className="pl-3 pr-3 flex h-16 items-center justify-between">
        <div className="flex items-center gap-2">
          <Link href="/" className="flex items-center">
            <div className="mr-2 flex h-8 w-8 items-center justify-center rounded-full bg-blue-600">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="16"
                height="16"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
                className="h-4 w-4 text-white"
              >
                <path d="M17.8 19.2 16 11l3.5-3.5C21 6 21.5 4 21 3c-1-.5-3 0-4.5 1.5L13 8 4.8 6.2c-.5-.1-.9.1-1.1.5l-.3.5c-.2.5-.1 1 .3 1.3L9 12l-2 3H4l-1 1 3 2 2 3 1-1v-3l3-2 3.5 5.3c.3.4.8.5 1.3.3l.5-.2c.4-.3.6-.7.5-1.2z" />
              </svg>
            </div>
            <span className="text-2xl font-bold">ShareefAir</span>
          </Link>
        </div>

        {isMobile ? (
          <>
            <Button
              variant="ghost"
              size="icon"
              onClick={toggleMenu}
              aria-label="Toggle menu"
              className="focus:ring-2 focus:ring-black focus:ring-offset-2"
            >
              {isMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
            </Button>

            {isMenuOpen && (
              <div className="fixed inset-0 top-16 z-50 bg-white p-4">
                <nav className="flex flex-col space-y-4 text-lg">
                  <Link
                    href="/"
                    className="rounded-md bg-blue-600 py-3 text-center font-medium text-white"
                    onClick={toggleMenu}
                  >
                    Home
                  </Link>
                  <Link
                    href="/hotels"
                    className="rounded-md bg-gray-200 py-3 text-center font-medium text-gray-700"
                    onClick={toggleMenu}
                  >
                    Hotels
                  </Link>
                  <Link
                    href="/cars"
                    className="rounded-md bg-gray-200 py-3 text-center font-medium text-gray-700"
                    onClick={toggleMenu}
                  >
                    Cars
                  </Link>
                  <Link
                    href="/support"
                    className="rounded-md bg-gray-200 py-3 text-center font-medium text-gray-700"
                    onClick={toggleMenu}
                  >
                    Customer Supports
                  </Link>
                  <div className="pt-4">
                    <Button
                      asChild
                      className="w-full rounded-md bg-blue-600 py-6 text-lg font-medium text-white focus:ring-2 focus:ring-blue-600 focus:ring-offset-2"
                      size="lg"
                    >
                      <Link href="/login" onClick={toggleMenu} className="flex items-center justify-center gap-1">
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          width="16"
                          height="16"
                          viewBox="0 0 24 24"
                          fill="none"
                          stroke="currentColor"
                          strokeWidth="2"
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          className="h-4 w-4"
                        >
                          <path d="M19 21v-2a4 4 0 0 0-4-4H9a4 4 0 0 0-4 4v2" />
                          <circle cx="12" cy="7" r="4" />
                        </svg>
                        Log In
                      </Link>
                    </Button>
                  </div>
                </nav>
              </div>
            )}
          </>
        ) : (
          <>
            <nav className="flex items-center gap-2">
              <Link
                href="/"
                className="flex items-center gap-1 rounded-full bg-blue-600 px-6 py-2 font-medium text-white transition-all hover:bg-blue-700 hover:shadow-md focus:outline-none focus:ring-2 focus:ring-blue-600 focus:ring-offset-2"
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="16"
                  height="16"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  className="h-4 w-4"
                >
                  <path d="m3 9 9-7 9 7v11a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2z" />
                  <polyline points="9 22 9 12 15 12 15 22" />
                </svg>
                Home
              </Link>
              <Link
                href="/hotels"
                className="flex items-center gap-1 rounded-full bg-gray-200 px-6 py-2 font-medium text-gray-700 transition-all hover:bg-gray-300 hover:shadow-md focus:outline-none focus:ring-2 focus:ring-gray-300 focus:ring-offset-2"
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="16"
                  height="16"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  className="h-4 w-4"
                >
                  <path d="M19 9V7a2 2 0 0 0-2-2H7a2 2 0 0 0-2 2v2" />
                  <path d="M1 17h22" />
                  <path d="M5 17v2" />
                  <path d="M19 17v2" />
                  <path d="M12 17v2" />
                  <path d="M3 9v8h18V9" />
                  <path d="M9 14v-3" />
                  <path d="M15 14v-3" />
                </svg>
                Hotels
              </Link>
              <Link
                href="/cars"
                className="flex items-center gap-1 rounded-full bg-gray-200 px-6 py-2 font-medium text-gray-700 transition-all hover:bg-gray-300 hover:shadow-md focus:outline-none focus:ring-2 focus:ring-gray-300 focus:ring-offset-2"
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="16"
                  height="16"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  className="h-4 w-4"
                >
                  <path d="M19 17h2c.6 0 1-.4 1-1v-3c0-.9-.7-1.7-1.5-1.9C18.7 10.6 16 10 16 10s-1.3-1.4-2.2-2.3c-.5-.4-1.1-.7-1.8-.7H5c-.6 0-1.1.4-1.4.9l-1.5 2.8C1.4 11.3 1 12.1 1 13v3c0 .6.4 1 1 1h2" />
                  <circle cx="7" cy="17" r="2" />
                  <path d="M9 17h6" />
                  <circle cx="17" cy="17" r="2" />
                </svg>
                Cars
              </Link>
              <Link
                href="/support"
                className="flex items-center gap-1 rounded-full bg-gray-200 px-6 py-2 font-medium text-gray-700 transition-all hover:bg-gray-300 hover:shadow-md focus:outline-none focus:ring-2 focus:ring-gray-300 focus:ring-offset-2"
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="16"
                  height="16"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  className="h-4 w-4"
                >
                  <path d="M18 18.72a9.094 9.094 0 0 0 3.741-.479 3 3 0 0 0-4.682-2.72m.94 3.198.001.031c0 .225-.012.447-.037.666A11.944 11.944 0 0 1 12 21c-2.17 0-4.207-.576-5.963-1.584A6.062 6.062 0 0 1 6 18.719m12 0a5.971 5.971 0 0 0-.941-3.197m0 0A5.995 5.995 0 0 0 12 12.75a5.995 5.995 0 0 0-5.058 2.772m0 0a3 3 0 0 0-4.681 2.72 8.986 8.986 0 0 0 3.74.477m.94-3.197a5.971 5.971 0 0 0-.94 3.197M15 6.75a3 3 0 1 1-6 0 3 3 0 0 1 6 0zm6 3a2.25 2.25 0 1 1-4.5 0 2.25 2.25 0 0 1 4.5 0zm-13.5 0a2.25 2.25 0 1 1-4.5 0 2.25 2.25 0 0 1 4.5 0z" />
                </svg>
                Support
              </Link>
            </nav>
            <div>
              <Button
                asChild
                className="rounded-full bg-blue-600 px-6 py-2 font-medium text-white transition-all hover:bg-blue-700 hover:shadow-md focus:outline-none focus:ring-2 focus:ring-blue-600 focus:ring-offset-2"
              >
                <Link href="/login" className="flex items-center gap-1">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="16"
                    height="16"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    className="h-4 w-4"
                  >
                    <path d="M19 21v-2a4 4 0 0 0-4-4H9a4 4 0 0 0-4 4v2" />
                    <circle cx="12" cy="7" r="4" />
                  </svg>
                  Log In
                </Link>
              </Button>
            </div>
          </>
        )}
      </div>
    </header>
  )
}

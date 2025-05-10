import Link from "next/link"
import { Facebook, Instagram, Twitter } from "lucide-react"

export function Footer() {
  return (
    <footer className="bg-white py-8">
      <div className="pl-3 pr-3">
        <div className="flex flex-col items-center justify-between gap-6 border-t border-gray-200 pt-8 md:flex-row">
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
              <span className="text-xl font-bold">ShareefAir</span>
            </Link>
          </div>

          <div className="flex flex-wrap justify-center gap-6">
            <Link
              href="/about"
              className="text-sm text-gray-600 hover:text-black focus:outline-none focus:ring-2 focus:ring-black focus:ring-offset-2"
            >
              About Us
            </Link>
            <Link
              href="/terms"
              className="text-sm text-gray-600 hover:text-black focus:outline-none focus:ring-2 focus:ring-black focus:ring-offset-2"
            >
              Terms & Conditions
            </Link>
            <Link
              href="/privacy"
              className="text-sm text-gray-600 hover:text-black focus:outline-none focus:ring-2 focus:ring-black focus:ring-offset-2"
            >
              Privacy Policy
            </Link>
            <Link
              href="/faq"
              className="text-sm text-gray-600 hover:text-black focus:outline-none focus:ring-2 focus:ring-black focus:ring-offset-2"
            >
              FAQ
            </Link>
            <Link
              href="/contact"
              className="text-sm text-gray-600 hover:text-black focus:outline-none focus:ring-2 focus:ring-black focus:ring-offset-2"
            >
              Contact Us
            </Link>
          </div>

          <div className="flex space-x-4">
            <Link
              href="#"
              className="text-gray-600 hover:text-black focus:outline-none focus:ring-2 focus:ring-black focus:ring-offset-2"
              aria-label="Facebook"
            >
              <Facebook className="h-5 w-5" />
            </Link>
            <Link
              href="#"
              className="text-gray-600 hover:text-black focus:outline-none focus:ring-2 focus:ring-black focus:ring-offset-2"
              aria-label="Twitter"
            >
              <Twitter className="h-5 w-5" />
            </Link>
            <Link
              href="#"
              className="text-gray-600 hover:text-black focus:outline-none focus:ring-2 focus:ring-black focus:ring-offset-2"
              aria-label="Instagram"
            >
              <Instagram className="h-5 w-5" />
            </Link>
          </div>
        </div>

        <div className="mt-6 grid grid-cols-2 gap-4 md:grid-cols-4 md:gap-8">
          <div>
            <h4 className="mb-3 font-semibold">Popular Destinations</h4>
            <ul className="space-y-2 text-sm text-gray-500">
              <li>
                <a href="#" className="hover:text-blue-600">
                  New York
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-blue-600">
                  London
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-blue-600">
                  Paris
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-blue-600">
                  Dubai
                </a>
              </li>
            </ul>
          </div>
          <div>
            <h4 className="mb-3 font-semibold">Travel Resources</h4>
            <ul className="space-y-2 text-sm text-gray-500">
              <li>
                <a href="#" className="hover:text-blue-600">
                  Travel Guide
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-blue-600">
                  Flight Status
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-blue-600">
                  Route Map
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-blue-600">
                  Travel Insurance
                </a>
              </li>
            </ul>
          </div>
          <div>
            <h4 className="mb-3 font-semibold">Customer Service</h4>
            <ul className="space-y-2 text-sm text-gray-500">
              <li>
                <a href="#" className="hover:text-blue-600">
                  Help Center
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-blue-600">
                  Baggage Info
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-blue-600">
                  Refund Policy
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-blue-600">
                  Contact Us
                </a>
              </li>
            </ul>
          </div>
          <div>
            <h4 className="mb-3 font-semibold">Newsletter</h4>
            <p className="mb-3 text-sm text-gray-500">Subscribe to get special offers and travel deals</p>
            <div className="flex">
              <input
                type="email"
                placeholder="Your email"
                className="w-full rounded-l-md border border-gray-300 px-3 py-2 text-sm focus:border-blue-500 focus:outline-none"
              />
              <button className="rounded-r-md bg-blue-600 px-3 py-2 text-sm text-white hover:bg-blue-700">
                Subscribe
              </button>
            </div>
          </div>
        </div>

        <div className="mt-8 text-center text-sm text-gray-500">
          &copy; {new Date().getFullYear()} ShareefAir. All rights reserved.
        </div>
      </div>
    </footer>
  )
}

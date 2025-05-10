import Link from "next/link"
import { ArrowRight, Clock, Luggage } from "lucide-react"

import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"

interface FlightProps {
  id: number | string
  airline: string
  airlineCode: string
  flightNumber: string
  departureCity: string
  departureCode: string
  departureTime: string
  arrivalCity: string
  arrivalCode: string
  arrivalTime: string
  duration: string
  stops: number
  stopCity?: string
  stopDuration?: string
  price: number
  logo: string
}

interface FlightCardProps {
  flight: FlightProps
}

export function FlightCard({ flight }: FlightCardProps) {
  return (
    <div className="mb-4 overflow-hidden rounded-lg bg-white p-6 shadow-sm transition-all hover:shadow-md hover:border-blue-100 hover:border group cursor-pointer">
      <div className="flex flex-col gap-4 md:flex-row md:items-center md:justify-between">
        <div className="flex items-center gap-4">
          <div className="h-12 w-12 flex-shrink-0">
            <img
              src={flight.logo || "/placeholder.svg"}
              alt={flight.airline}
              className="h-full w-full object-contain"
            />
          </div>
          <div>
            <div className="font-medium">{flight.airline}</div>
            <div className="text-sm text-gray-500">
              {flight.airlineCode} {flight.flightNumber}
            </div>
          </div>
        </div>

        <div className="flex flex-1 flex-col gap-6 w-full md:flex-row md:items-center md:justify-between">
          <div className="flex items-center gap-4">
            <div className="text-center">
              <div className="text-xl font-bold">{flight.departureTime}</div>
              <div className="text-sm text-gray-500">{flight.departureCode}</div>
            </div>

            <div className="flex flex-col items-center">
              <div className="mb-1 text-xs text-gray-500">{flight.duration}</div>
              <div className="relative w-24 md:w-32">
                <div className="absolute top-1/2 w-full border-t border-gray-300"></div>
                {flight.stops === 0 ? (
                  <ArrowRight className="absolute right-0 top-1/2 -translate-y-1/2 text-gray-400" />
                ) : (
                  <div className="absolute left-1/2 top-1/2 h-2 w-2 -translate-x-1/2 -translate-y-1/2 rounded-full bg-gray-400"></div>
                )}
              </div>
              {flight.stops > 0 && (
                <div className="mt-1 text-xs text-gray-500">
                  {flight.stops} stop · {flight.stopCity}
                </div>
              )}
            </div>

            <div className="text-center">
              <div className="text-xl font-bold">{flight.arrivalTime}</div>
              <div className="text-sm text-gray-500">{flight.arrivalCode}</div>
            </div>
          </div>

          <div className="flex flex-col items-end">
            <div className="text-2xl font-bold text-blue-600 group-hover:text-blue-700 transition-colors">
              ${flight.price}
            </div>
            <div className="text-sm text-gray-500">per person</div>
          </div>
        </div>
      </div>

      <div className="mt-6 flex flex-col border-t pt-4 md:flex-row md:items-center md:justify-between">
        <div className="mb-4 flex flex-wrap items-center gap-2 md:mb-0">
          <Badge variant="outline" className="flex items-center gap-1">
            <Clock className="h-3 w-3" />
            <span>{flight.duration}</span>
          </Badge>
          <Badge variant="outline" className="flex items-center gap-1">
            <Luggage className="h-3 w-3" />
            <span>Carry-on included</span>
          </Badge>
          {flight.stops === 0 && <Badge className="bg-green-100 text-green-800 hover:bg-green-100">Nonstop</Badge>}
        </div>

        <Button
          className="rounded-md bg-blue-600 text-white hover:bg-blue-700 hover:shadow-md focus:ring-2 focus:ring-blue-600 focus:ring-offset-2 transition-all"
          asChild
        >
          <Link href={`/checkout`} className="flex items-center gap-1">
            <span>Select</span>
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
              <path d="M5 12h14" />
              <path d="m12 5 7 7-7 7" />
            </svg>
          </Link>
        </Button>
      </div>
    </div>
  )
}

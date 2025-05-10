"use client"

import type React from "react"

import { useState } from "react"
import { CalendarIcon } from "lucide-react"
import { format } from "date-fns"
import Link from "next/link"

import { Button } from "@/components/ui/button"
import { Calendar } from "@/components/ui/calendar"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group"
import { Popover, PopoverContent, PopoverTrigger } from "@/components/ui/popover"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { cn } from "@/lib/utils"
import { searchFlights } from "@/lib/actions"

export function FlightSearchForm() {
  const [tripType, setTripType] = useState("one-way")
  const [departureDate, setDepartureDate] = useState<Date>()
  const [returnDate, setReturnDate] = useState<Date>()
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [error, setError] = useState<string | null>(null)

  const handleSubmit = async (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault()
    setIsSubmitting(true)
    setError(null)

    try {
      const formData = new FormData(event.currentTarget)
      formData.append("tripType", tripType)

      if (departureDate) {
        formData.append("departureDate", format(departureDate, "yyyy-MM-dd"))
      }

      if (returnDate && tripType === "round-trip") {
        formData.append("returnDate", format(returnDate, "yyyy-MM-dd"))
      }

      await searchFlights(formData)
    } catch (err) {
      setError("An error occurred while searching for flights. Please try again.")
      console.error(err)
    } finally {
      setIsSubmitting(false)
    }
  }

  return (
    <form id="flight-search" onSubmit={handleSubmit} className="space-y-6">
      <div className="flex flex-wrap items-center gap-4">
        <RadioGroup defaultValue="one-way" value={tripType} onValueChange={setTripType} className="flex gap-4">
          <div className="flex items-center space-x-2">
            <RadioGroupItem value="one-way" id="one-way" />
            <Label htmlFor="one-way" className="cursor-pointer">
              One Way
            </Label>
          </div>
          <div className="flex items-center space-x-2">
            <RadioGroupItem value="round-trip" id="round-trip" />
            <Label htmlFor="round-trip" className="cursor-pointer">
              Round Trip
            </Label>
          </div>
          <div className="flex items-center space-x-2">
            <RadioGroupItem value="multi-city" id="multi-city" />
            <Label htmlFor="multi-city" className="cursor-pointer">
              Multi-City
            </Label>
          </div>
        </RadioGroup>

        <div className="ml-auto">
          <Select name="class" defaultValue="economy">
            <SelectTrigger className="h-10 w-32">
              <SelectValue placeholder="Coach" />
            </SelectTrigger>
            <SelectContent>
              <SelectItem value="economy">Coach</SelectItem>
              <SelectItem value="premium">Premium</SelectItem>
              <SelectItem value="business">Business</SelectItem>
              <SelectItem value="first">First Class</SelectItem>
            </SelectContent>
          </Select>
        </div>
      </div>

      <div className="grid grid-cols-1 gap-4 md:grid-cols-2 lg:grid-cols-5">
        <div className="space-y-2 lg:col-span-1">
          <Label htmlFor="from" className="text-sm font-medium">
            From
          </Label>
          <Input
            id="from"
            name="from"
            placeholder="Origin"
            className="h-12"
            required
            aria-required="true"
            autoComplete="off"
          />
          <div className="mt-1 flex flex-wrap gap-1">
            <button
              type="button"
              className="rounded-full bg-blue-50 px-2 py-1 text-xs text-blue-600 hover:bg-blue-100"
              onClick={() => document.getElementById("from")?.setAttribute("value", "New York")}
            >
              New York
            </button>
            <button
              type="button"
              className="rounded-full bg-blue-50 px-2 py-1 text-xs text-blue-600 hover:bg-blue-100"
              onClick={() => document.getElementById("from")?.setAttribute("value", "London")}
            >
              London
            </button>
            <button
              type="button"
              className="rounded-full bg-blue-50 px-2 py-1 text-xs text-blue-600 hover:bg-blue-100"
              onClick={() => document.getElementById("from")?.setAttribute("value", "Dubai")}
            >
              Dubai
            </button>
          </div>
        </div>

        <div className="flex items-center justify-center">
          <div className="hidden cursor-pointer rounded-full border border-gray-300 p-2 transition-colors hover:bg-gray-100 lg:flex lg:items-center lg:justify-center">
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
              <path d="M20 17h-7m-7-3H3m11-3h7M6 7h3" />
              <path d="M18 21V3h3v18h-3zM3 3v18h3V3H3z" />
            </svg>
          </div>
        </div>

        <div className="space-y-2 lg:col-span-1">
          <Label htmlFor="to" className="text-sm font-medium">
            To
          </Label>
          <Input
            id="to"
            name="to"
            placeholder="Destination"
            className="h-12"
            required
            aria-required="true"
            autoComplete="off"
          />
          <div className="mt-1 flex flex-wrap gap-1">
            <button
              type="button"
              className="rounded-full bg-blue-50 px-2 py-1 text-xs text-blue-600 hover:bg-blue-100"
              onClick={() => document.getElementById("to")?.setAttribute("value", "Paris")}
            >
              Paris
            </button>
            <button
              type="button"
              className="rounded-full bg-blue-50 px-2 py-1 text-xs text-blue-600 hover:bg-blue-100"
              onClick={() => document.getElementById("to")?.setAttribute("value", "Tokyo")}
            >
              Tokyo
            </button>
            <button
              type="button"
              className="rounded-full bg-blue-50 px-2 py-1 text-xs text-blue-600 hover:bg-blue-100"
              onClick={() => document.getElementById("to")?.setAttribute("value", "Sydney")}
            >
              Sydney
            </button>
          </div>
        </div>

        <div className="space-y-2">
          <Label htmlFor="departure" className="text-sm font-medium">
            Depart
          </Label>
          <Popover>
            <PopoverTrigger asChild>
              <Button
                id="departure"
                type="button"
                variant="outline"
                className={cn(
                  "w-full h-12 justify-start text-left font-normal",
                  !departureDate && "text-gray-500",
                  "focus:ring-2 focus:ring-black focus:ring-offset-2",
                )}
              >
                <CalendarIcon className="mr-2 h-4 w-4" />
                {departureDate ? format(departureDate, "PPP") : "Date"}
              </Button>
            </PopoverTrigger>
            <PopoverContent className="w-auto p-0">
              <Calendar mode="single" selected={departureDate} onSelect={setDepartureDate} initialFocus />
            </PopoverContent>
          </Popover>
          <div className="mt-1 flex flex-wrap gap-1">
            <button type="button" className="rounded-full bg-blue-50 px-2 py-1 text-xs text-blue-600 hover:bg-blue-100">
              Today
            </button>
            <button type="button" className="rounded-full bg-blue-50 px-2 py-1 text-xs text-blue-600 hover:bg-blue-100">
              Tomorrow
            </button>
            <button type="button" className="rounded-full bg-blue-50 px-2 py-1 text-xs text-blue-600 hover:bg-blue-100">
              Weekend
            </button>
          </div>
        </div>

        <div className="space-y-2">
          <Label htmlFor="return" className="text-sm font-medium">
            Return
          </Label>
          <Popover>
            <PopoverTrigger asChild>
              <Button
                id="return"
                type="button"
                variant="outline"
                className={cn(
                  "w-full h-12 justify-start text-left font-normal",
                  !returnDate && "text-gray-500",
                  "focus:ring-2 focus:ring-black focus:ring-offset-2",
                )}
                disabled={tripType === "one-way"}
              >
                <CalendarIcon className="mr-2 h-4 w-4" />
                {returnDate ? format(returnDate, "PPP") : "Date"}
              </Button>
            </PopoverTrigger>
            <PopoverContent className="w-auto p-0">
              <Calendar mode="single" selected={returnDate} onSelect={setReturnDate} initialFocus />
            </PopoverContent>
          </Popover>
        </div>
      </div>

      <div className="grid grid-cols-1 gap-4 md:grid-cols-3">
        <div className="space-y-2">
          <Label htmlFor="travelers" className="text-sm font-medium">
            Traveler
          </Label>
          <Select name="passengers" defaultValue="1">
            <SelectTrigger id="travelers" className="h-12">
              <SelectValue placeholder="1" />
            </SelectTrigger>
            <SelectContent>
              <SelectItem value="1">1</SelectItem>
              <SelectItem value="2">2</SelectItem>
              <SelectItem value="3">3</SelectItem>
              <SelectItem value="4">4</SelectItem>
              <SelectItem value="5">5+</SelectItem>
            </SelectContent>
          </Select>
        </div>

        <div className="flex items-center space-x-4 md:col-span-2">
          <RadioGroup defaultValue="regular" className="flex gap-4" name="fareType">
            <div className="flex items-center space-x-2">
              <RadioGroupItem value="regular" id="regular" />
              <Label htmlFor="regular" className="cursor-pointer">
                Regular Fare
              </Label>
            </div>
            <div className="flex items-center space-x-2">
              <RadioGroupItem value="student" id="student" />
              <Label htmlFor="student" className="cursor-pointer">
                Student Fare
              </Label>
            </div>
          </RadioGroup>
        </div>
      </div>

      <div className="flex items-center justify-between">
        <div className="flex flex-wrap items-center gap-4">
          <Button variant="outline" className="h-10 gap-2 focus:ring-2 focus:ring-black focus:ring-offset-2" asChild>
            <Link href="/my-trips">
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
                <path d="M16 4h2a2 2 0 0 1 2 2v14a2 2 0 0 1-2 2H6a2 2 0 0 1-2-2V6a2 2 0 0 1 2-2h2" />
                <path d="M15 2H9a1 1 0 0 0-1 1v2a1 1 0 0 0 1 1h6a1 1 0 0 0 1-1V3a1 1 0 0 0-1-1z" />
                <path d="M12 11h4" />
                <path d="M12 16h4" />
                <path d="M8 11h.01" />
                <path d="M8 16h.01" />
              </svg>
              My Booking
            </Link>
          </Button>

          <Button variant="outline" className="h-10 gap-2 focus:ring-2 focus:ring-black focus:ring-offset-2" asChild>
            <Link href="/flight-status">
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
                <path d="M2 12h2" />
                <path d="M12 2v2" />
                <path d="M22 12h-2" />
                <path d="M12 22v-2" />
                <path d="M19.07 4.93l-1.41 1.41" />
                <path d="M4.93 19.07l1.41-1.41" />
                <path d="M4.93 4.93l1.41 1.41" />
                <path d="M19.07 19.07l-1.41-1.41" />
                <circle cx="12" cy="12" r="5" />
              </svg>
              Flight Status
            </Link>
          </Button>
        </div>

        {error && <div className="text-sm text-red-500">{error}</div>}

        <Button
          type="submit"
          size="lg"
          className="h-12 w-12 rounded-md bg-blue-600 p-0 text-white hover:bg-blue-700 hover:shadow-md focus:ring-2 focus:ring-blue-600 focus:ring-offset-2 transition-all"
          disabled={isSubmitting}
          aria-label="Search flights"
        >
          {isSubmitting ? (
            <svg className="h-5 w-5 animate-spin" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
              <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
              <path
                className="opacity-75"
                fill="currentColor"
                d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"
              ></path>
            </svg>
          ) : (
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
              <circle cx="11" cy="11" r="8" />
              <path d="m21 21-4.3-4.3" />
            </svg>
          )}
        </Button>
      </div>
    </form>
  )
}

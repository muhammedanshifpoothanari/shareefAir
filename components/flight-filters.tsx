"use client"

import type React from "react"

import { useState } from "react"
import { filterFlights } from "@/lib/actions"

import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Checkbox } from "@/components/ui/checkbox"
import { Label } from "@/components/ui/label"

export function FlightFilters() {
  const [minPrice, setMinPrice] = useState("")
  const [maxPrice, setMaxPrice] = useState("")
  const [isSubmitting, setIsSubmitting] = useState(false)

  const handleSubmit = async (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault()
    setIsSubmitting(true)

    try {
      const formData = new FormData(event.currentTarget)
      await filterFlights(formData)
    } catch (error) {
      console.error("Error filtering flights:", error)
    } finally {
      setIsSubmitting(false)
    }
  }

  const handleReset = () => {
    setMinPrice("")
    setMaxPrice("")
    // Reset checkboxes by reloading the page
    window.location.href = "/flights"
  }

  return (
    <Card className="sticky top-24 bg-white border border-gray-100 hover:border-blue-100 transition-colors">
      <CardContent className="p-6">
        <form onSubmit={handleSubmit}>
          <div className="mb-6 flex items-center justify-between">
            <h2 className="text-lg font-semibold">Filters</h2>
            <Button
              type="button"
              variant="ghost"
              size="sm"
              className="h-auto p-0 text-blue-600 hover:text-blue-800 focus:ring-2 focus:ring-blue-600 focus:ring-offset-2 flex items-center gap-1"
              onClick={handleReset}
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
                className="h-3 w-3"
              >
                <path d="M3 12a9 9 0 1 0 9-9 9.75 9.75 0 0 0-6.74 2.74L3 8" />
                <path d="M3 3v5h5" />
              </svg>
              Reset
            </Button>
          </div>

          <div className="space-y-6">
            <div>
              <h3 className="mb-3 font-medium">Price Range</h3>
              <div className="flex items-center gap-2">
                <Input
                  placeholder="Min"
                  className="h-10"
                  name="minPrice"
                  type="number"
                  value={minPrice}
                  onChange={(e) => setMinPrice(e.target.value)}
                  min="0"
                />
                <span>-</span>
                <Input
                  placeholder="Max"
                  className="h-10"
                  name="maxPrice"
                  type="number"
                  value={maxPrice}
                  onChange={(e) => setMaxPrice(e.target.value)}
                  min="0"
                />
              </div>
            </div>

            <div>
              <h3 className="mb-3 font-medium">Stops</h3>
              <div className="space-y-2">
                <div className="flex items-center space-x-2">
                  <Checkbox id="nonstop" name="stops" value="0" />
                  <Label htmlFor="nonstop" className="cursor-pointer text-sm font-normal">
                    Nonstop
                  </Label>
                </div>
                <div className="flex items-center space-x-2">
                  <Checkbox id="1-stop" name="stops" value="1" />
                  <Label htmlFor="1-stop" className="cursor-pointer text-sm font-normal">
                    1 Stop
                  </Label>
                </div>
                <div className="flex items-center space-x-2">
                  <Checkbox id="2-stops" name="stops" value="2" />
                  <Label htmlFor="2-stops" className="cursor-pointer text-sm font-normal">
                    2+ Stops
                  </Label>
                </div>
              </div>
            </div>

            <div>
              <h3 className="mb-3 font-medium">Airlines</h3>
              <div className="space-y-2">
                <div className="flex items-center space-x-2">
                  <Checkbox id="delta" name="airlines" value="DL" />
                  <Label htmlFor="delta" className="cursor-pointer text-sm font-normal">
                    Delta Airlines
                  </Label>
                </div>
                <div className="flex items-center space-x-2">
                  <Checkbox id="american" name="airlines" value="AA" />
                  <Label htmlFor="american" className="cursor-pointer text-sm font-normal">
                    American Airlines
                  </Label>
                </div>
                <div className="flex items-center space-x-2">
                  <Checkbox id="united" name="airlines" value="UA" />
                  <Label htmlFor="united" className="cursor-pointer text-sm font-normal">
                    United Airlines
                  </Label>
                </div>
                <div className="flex items-center space-x-2">
                  <Checkbox id="jetblue" name="airlines" value="B6" />
                  <Label htmlFor="jetblue" className="cursor-pointer text-sm font-normal">
                    JetBlue
                  </Label>
                </div>
              </div>
            </div>

            <div>
              <h3 className="mb-3 font-medium">Departure Time</h3>
              <div className="space-y-2">
                <div className="flex items-center space-x-2">
                  <Checkbox id="morning" name="departureTimes" value="morning" />
                  <Label htmlFor="morning" className="cursor-pointer text-sm font-normal">
                    Morning (5am - 12pm)
                  </Label>
                </div>
                <div className="flex items-center space-x-2">
                  <Checkbox id="afternoon" name="departureTimes" value="afternoon" />
                  <Label htmlFor="afternoon" className="cursor-pointer text-sm font-normal">
                    Afternoon (12pm - 5pm)
                  </Label>
                </div>
                <div className="flex items-center space-x-2">
                  <Checkbox id="evening" name="departureTimes" value="evening" />
                  <Label htmlFor="evening" className="cursor-pointer text-sm font-normal">
                    Evening (5pm - 11pm)
                  </Label>
                </div>
              </div>
            </div>

            <Button
              type="submit"
              className="w-full rounded-md bg-blue-600 text-white hover:bg-blue-700 hover:shadow-md focus:ring-2 focus:ring-blue-600 focus:ring-offset-2 transition-all"
              disabled={isSubmitting}
            >
              {isSubmitting ? "Applying..." : "Apply Filters"}
            </Button>
          </div>
        </form>
      </CardContent>
    </Card>
  )
}

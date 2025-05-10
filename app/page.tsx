import { CalendarIcon, Plane, User } from "lucide-react"
import Link from "next/link"

import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Header } from "@/components/header"
import { Footer } from "@/components/footer"

export default function Home() {
  return (
    <div className="flex min-h-screen flex-col bg-[#f5f5f5]">
      <Header />
      <main className="flex-1">
        {/* Hero Section */}
        <section className="relative overflow-hidden bg-gradient-to-r from-blue-50 via-white to-indigo-50">
          <div className=" relative z-10 py-16 md:py-24 px-4 md:px-8">
            <div className="mx-auto max-w-4xl text-center">
              <h1 className="mb-4 text-5xl font-bold tracking-tight md:text-7xl">WHERE TO FLY?</h1>
              <p className="mb-8 text-lg text-gray-600">
                Find Countless Flights Options & Deals To Various Destinations Around The World
              </p>
            </div>

            <div className="relative mx-auto mt-8 max-w-5xl rounded-2xl bg-white p-6 shadow-lg">
              <Tabs defaultValue="flights" className="w-full">
                <TabsList className="mb-6 grid w-full grid-cols-4 ">
                  <TabsTrigger value="flights" className="flex items-center gap-2">
                    <Plane className="h-4 w-4" />
                    Flights
                  </TabsTrigger>
                  <TabsTrigger value="hotels" className="flex items-center gap-2">
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
                  </TabsTrigger>
                  <TabsTrigger value="cars" className="flex items-center gap-2">
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
                  </TabsTrigger>
                  {/* <TabsTrigger value="support" className="flex items-center gap-2">
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
                    Customer Support
                  </TabsTrigger> */}
                </TabsList>

                <TabsContent value="flights" className="space-y-6">
                  <div className="flex flex-wrap items-center gap-4">
                    <RadioGroup defaultValue="one-way" className="flex gap-4">
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
                      <select className="h-10 rounded-md border border-gray-300 bg-white px-4 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-black focus:ring-offset-2">
                        <option>Coach</option>
                        <option>Business</option>
                        <option>First Class</option>
                      </select>
                    </div>
                  </div>

                  <div className="grid grid-cols-1 gap-4 md:grid-cols-2 lg:grid-cols-5">
                    <div className="space-y-2 lg:col-span-1">
                      <Label htmlFor="from" className="text-sm font-medium">
                        From
                      </Label>
                      <Input id="from" placeholder="Origin" className="h-12" />
                      <div className="flex items-center mt-10">
                    
                       
                    <svg width="32" height="32" version="1.1" viewBox="0 0 1200 1200" xmlns="http://www.w3.org/2000/svg">
                     <path d="m578.88 620.81h-53.516l26.594-177.54c-23.48-1.207-46.672-3.168-67.602-5.7188l-46.844 60.441h-34.637l11.27-74.172c-14.738-4.7031-28.992-11.398-28.992-26.156 0-14.559 14.691-22.152 29.016-27.035l-11.27-74.891 34.625-0.03125 46.844 60.863c24.008-3 46.203-5.0469 67.57-6.2344l-26.602-177.41h53.527l92.992 176.34c57.727 1.457 101.34 5.4688 129.67 11.93 32.312 7.3711 48.023 19.113 48.023 35.902 0 16.805-15.719 28.539-48.051 35.867-28.258 6.4062-71.871 10.395-129.66 11.859zm-41.23-10.582h34.852l92.883-175.83 3.1055-0.074219c58.633-1.3828 102.6-5.3125 130.68-11.676 26.414-5.9883 39.809-14.582 39.809-25.547 0-10.957-13.387-19.562-39.793-25.586-28.145-6.418-72.109-10.371-130.67-11.742l-3.1055-0.074219-92.922-176.19h-34.855l26.512 176.81-5.8438 0.28516c-23.77 1.1523-48.496 3.3945-75.602 6.8477l-3.0117 0.38281-47.363-61.539-17.125 0.015625 10.785 71.672-4.3398 1.3477c-23.219 7.207-25.902 13.918-25.902 18.336 0 6.9727 7.2422 11.844 25.832 17.363l4.418 1.3125-10.797 71.062h17.137l47.359-61.109 2.9961 0.375c23.148 2.9141 49.297 5.0977 75.621 6.3047l5.8594 0.26953z"/>
                     <path d="m722.39 942.21h-42.309l-92.926-175.89c-59.223-1.3867-103.68-5.3594-132.13-11.809-29.004-6.5781-43.102-16.281-43.102-29.668 0-13.387 14.094-23.109 43.082-29.719 28.516-6.5039 72.969-10.492 132.14-11.859l92.93-176.27h42.336l-26.523 177.04c24.297 1.1484 49.75 3.4453 77.68 7.0078l47.145-61.27 24.125 0.019532-10.965 72.938c14.215 4.3086 29.727 10.789 29.727 22.633 0 10.672-11.316 16.301-29.715 21.676l10.961 72.312h-24.121l-47.141-60.84c-23.762 3.0078-50.559 5.2344-77.738 6.4609zm-35.934-10.582h23.645l-26.469-176.71 9.4023-0.40234c28.148-1.207 55.949-3.5039 80.398-6.6406l4.8047-0.61328 47.668 61.523h6.625l-10.512-69.352 7.1719-2.0391c15.805-4.4961 23.816-8.5391 23.816-12.012 0-1-1.1523-6.332-23.895-13.008l-7.0859-2.0781 10.508-69.914-6.625-0.007813-47.672 61.953-4.8242-0.62109c-29.008-3.7305-55.293-6.082-80.352-7.1953l-9.3906-0.41406 26.445-176.51h-23.664l-92.859 176.12-4.9766 0.11328c-59.086 1.3242-103.25 5.2344-131.27 11.625-22.148 5.0508-34.852 12.121-34.852 19.398 0 7.2734 12.707 14.324 34.859 19.348 27.965 6.3398 72.133 10.234 131.27 11.578l4.9688 0.11328 2.3242 4.3945z"/>
                    </svg>
                    
                                       
                     </div>
                    </div>

                  
                    <div className="space-y-2 lg:col-span-1">
                      <Label htmlFor="to" className="text-sm font-medium">
                        To
                      </Label>
                      <Input id="to" placeholder="Destination" className="h-12" />
                    </div>

                    <div className="space-y-2">
                      <Label htmlFor="depart" className="text-sm font-medium">
                        Depart
                      </Label>
                      <div className="relative">
                        <Input id="depart" placeholder="Date" className="h-12 pl-10" />
                        <CalendarIcon className="absolute left-3 top-3 h-5 w-5 text-gray-400" />
                      </div>
                    </div>

                    <div className="space-y-2">
                      <Label htmlFor="return" className="text-sm font-medium">
                        Return
                      </Label>
                      <div className="relative">
                        <Input id="return" placeholder="Date" className="h-12 pl-10" />
                        <CalendarIcon className="absolute left-3 top-3 h-5 w-5 text-gray-400" />
                      </div>
                    </div>
                  </div>

                  <div className="grid grid-cols-1 gap-4 md:grid-cols-3">
                    <div className="space-y-2">
                      <Label htmlFor="travelers" className="text-sm font-medium">
                        Traveler
                      </Label>
                      <div className="relative">
                        <Input id="travelers" placeholder="1" className="h-12 pl-10" />
                        <User className="absolute left-3 top-3 h-5 w-5 text-gray-400" />
                      </div>
                    </div>

                    <div className="flex items-center space-x-4 md:col-span-2">
                      <RadioGroup defaultValue="regular" className="flex gap-4">
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
                    <div className="flex items-center gap-4">
                      <Button variant="outline" className="h-10 gap-2" asChild>
                        <Link href="/my-booking">
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

                      <Button variant="outline" className="h-10 gap-2" asChild>
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

                    <Button
                      size="lg"
                      className="h-12 w-12 rounded-md bg-black p-0 text-white hover:bg-gray-800 focus:ring-2 focus:ring-black focus:ring-offset-2"
                      asChild
                    >
                      <Link href="/flights">
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
                        <span className="sr-only">Search</span>
                      </Link>
                    </Button>
    
                    <div className="hidden mt-4 sm:flex flex-nowrap items-center justify-center gap-1 overflow-x-auto  sm:text-sm text-gray-500 whitespace-nowrap">
  <div className="flex items-center gap-[2px] sm:gap-1">
    <svg
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
      className="h-3 w-3 sm:h-4 sm:w-4 text-blue-500"
    >
      <path d="M12 2a10 10 0 1 0 0 20 10 10 0 0 0 0-20z" />
      <path d="m9 12 2 2 4-4" />
    </svg>
    <span>Price Match Guarantee</span>
  </div>
  <div className="flex items-center gap-[2px] sm:gap-1">
    <svg
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
      className="h-3 w-3 sm:h-4 sm:w-4 text-blue-500"
    >
      <path d="M12 2a10 10 0 1 0 0 20 10 10 0 0 0 0-20z" />
      <path d="m9 12 2 2 4-4" />
    </svg>
    <span>No Hidden Fees</span>
  </div>
  <div className="flex items-center gap-[2px] sm:gap-1">
    <svg
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
      className="h-3 w-3 sm:h-4 sm:w-4 text-blue-500"
    >
      <path d="M12 2a10 10 0 1 0 0 20 10 10 0 0 0 0-20z" />
      <path d="m9 12 2 2 4-4" />
    </svg>
    <span>Free Cancellation</span>
  </div>
</div>
                  </div>
                  <div>
                  <div className="mt-4 flex sm:hidden flex-nowrap items-center justify-center gap-1 overflow-x-auto text-[10px] sm:text-xs text-gray-500 whitespace-nowrap">
  <div className="flex items-center gap-[2px] sm:gap-1">
    <svg
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
      className="h-3 w-3 sm:h-4 sm:w-4 text-blue-500"
    >
      <path d="M12 2a10 10 0 1 0 0 20 10 10 0 0 0 0-20z" />
      <path d="m9 12 2 2 4-4" />
    </svg>
    <span>Price Match Guarantee</span>
  </div>
  <div className="flex items-center gap-[2px] sm:gap-1">
    <svg
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
      className="h-3 w-3 sm:h-4 sm:w-4 text-blue-500"
    >
      <path d="M12 2a10 10 0 1 0 0 20 10 10 0 0 0 0-20z" />
      <path d="m9 12 2 2 4-4" />
    </svg>
    <span>No Hidden Fees</span>
  </div>
  <div className="flex items-center gap-[2px] sm:gap-1">
    <svg
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
      className="h-3 w-3 sm:h-4 sm:w-4 text-blue-500"
    >
      <path d="M12 2a10 10 0 1 0 0 20 10 10 0 0 0 0-20z" />
      <path d="m9 12 2 2 4-4" />
    </svg>
    <span>Free Cancellation</span>
  </div>
</div>

                  </div>
                </TabsContent>

                <TabsContent value="hotels">
                  <div className="flex h-40 items-center justify-center">
                    <p className="text-lg text-gray-500">Hotel booking coming soon</p>
                  </div>
                </TabsContent>

                <TabsContent value="cars">
                  <div className="flex h-40 items-center justify-center">
                    <p className="text-lg text-gray-500">Car rental coming soon</p>
                  </div>
                </TabsContent>

                <TabsContent value="support">
                  <div className="flex h-40 items-center justify-center">
                    <p className="text-lg text-gray-500">Customer support coming soon</p>
                  </div>
                </TabsContent>
              </Tabs>
            </div>
          </div>

          {/* Background pattern */}
          <div className="absolute inset-0 z-0 opacity-10">
            <svg xmlns="http://www.w3.org/2000/svg" width="100%" height="100%" className="text-blue-500">
              <defs>
                <pattern id="flight-pattern" x="0" y="0" width="40" height="40" patternUnits="userSpaceOnUse">
                  <path
                    d="M17.8 19.2 16 11l3.5-3.5C21 6 21.5 4 21 3c-1-.5-3 0-4.5 1.5L13 8 4.8 6.2c-.5-.1-.9.1-1.1.5l-.3.5c-.2.5-.1 1 .3 1.3L9 12l-2 3H4l-1 1 3 2 2 3 1-1v-3l3-2 3.5 5.3c.3.4.8.5 1.3.3l.5-.2c.4-.3.6-.7.5-1.2z"
                    fill="currentColor"
                  />
                </pattern>
              </defs>
              <rect width="100%" height="100%" fill="url(#flight-pattern)" />
            </svg>
          </div>

          {/* Promo card */}
     
        </section>

        {/* Popular Destinations */}
        <section className="bg-white py-16">
          <div className="pl-3 pr-3">
            <h2 className="mb-12 text-center text-3xl font-bold">Popular Destinations</h2>
            <div className="grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-3">
              {[
                {
                  city: "New York",
                  country: "United States",
                  price: "299",
                  image: "/placeholder.svg?height=300&width=400&text=New+York",
                },
                {
                  city: "Paris",
                  country: "France",
                  price: "399",
                  image: "/placeholder.svg?height=300&width=400&text=Paris",
                },
                {
                  city: "Tokyo",
                  country: "Japan",
                  price: "599",
                  image: "/placeholder.svg?height=300&width=400&text=Tokyo",
                },
                {
                  city: "London",
                  country: "United Kingdom",
                  price: "349",
                  image: "/placeholder.svg?height=300&width=400&text=London",
                },
                {
                  city: "Dubai",
                  country: "United Arab Emirates",
                  price: "499",
                  image: "/placeholder.svg?height=300&width=400&text=Dubai",
                },
                {
                  city: "Sydney",
                  country: "Australia",
                  price: "799",
                  image: "/placeholder.svg?height=300&width=400&text=Sydney",
                },
              ].map((destination) => (
                <div
                  key={destination.city}
                  className="group relative overflow-hidden rounded-xl shadow-md transition-all hover:shadow-lg"
                >
                  <img
                    src={destination.image || "/placeholder.svg"}
                    alt={`${destination.city}, ${destination.country}`}
                    className="h-64 w-full object-cover transition-transform duration-300 group-hover:scale-105"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/30 to-transparent"></div>
                  <div className="absolute bottom-0 left-0 p-6 text-white">
                    <h3 className="text-xl font-bold">{destination.city}</h3>
                    <p className="mb-2 text-white/80">{destination.country}</p>
                    <div className="flex items-center justify-between">
                      <p className="text-lg font-bold">From ${destination.price}</p>
                      <Button
                        size="sm"
                        variant="secondary"
                        className="bg-white text-black hover:bg-gray-100 focus:ring-2 focus:ring-white"
                        asChild
                      >
                        <Link href={`/flights?to=${destination.city}`}>Book Now</Link>
                      </Button>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Special Offers */}
        <section className="py-16">
          <div className="pl-3 pr-3">
            <h2 className="mb-12 text-center text-3xl font-bold">Special Offers</h2>
            <div className="grid grid-cols-1 gap-8 md:grid-cols-3">
              <div className="rounded-xl bg-white shadow-md transition-transform hover:scale-105">
                <div className="relative h-48">
                  <img
                    src="/placeholder.svg?height=200&width=400&text=New+York"
                    alt="New York"
                    className="h-full w-full rounded-t-xl object-cover"
                  />
                  <div className="absolute right-4 top-4 rounded-full bg-red-500 px-3 py-1 text-sm font-bold text-white">
                    20% OFF
                  </div>
                </div>
                <div className="p-6">
                  <h3 className="mb-2 text-xl font-bold">New York Weekend Getaway</h3>
                  <p className="mb-4 text-gray-600">Explore the Big Apple with our special weekend rates.</p>
                  <div className="flex items-center justify-between">
                    <div>
                      <span className="text-sm text-gray-500">From</span>
                      <p className="text-2xl font-bold text-blue-600">$299</p>
                    </div>
                    <Button
                      className="bg-black text-white hover:bg-gray-800 focus:ring-2 focus:ring-black focus:ring-offset-2"
                      asChild
                    >
                      <Link href="/flights?to=New+York">Book Now</Link>
                    </Button>
                  </div>
                </div>
              </div>

              <div className="rounded-xl bg-white shadow-md transition-transform hover:scale-105">
                <div className="relative h-48">
                  <img
                    src="/placeholder.svg?height=200&width=400&text=London"
                    alt="London"
                    className="h-full w-full rounded-t-xl object-cover"
                  />
                  <div className="absolute right-4 top-4 rounded-full bg-red-500 px-3 py-1 text-sm font-bold text-white">
                    15% OFF
                  </div>
                </div>
                <div className="p-6">
                  <h3 className="mb-2 text-xl font-bold">London City Break</h3>
                  <p className="mb-4 text-gray-600">Experience the charm of London with discounted flights.</p>
                  <div className="flex items-center justify-between">
                    <div>
                      <span className="text-sm text-gray-500">From</span>
                      <p className="text-2xl font-bold text-blue-600">$349</p>
                    </div>
                    <Button
                      className="bg-black text-white hover:bg-gray-800 focus:ring-2 focus:ring-black focus:ring-offset-2"
                      asChild
                    >
                      <Link href="/flights?to=London">Book Now</Link>
                    </Button>
                  </div>
                </div>
              </div>

              <div className="rounded-xl bg-white shadow-md transition-transform hover:scale-105">
                <div className="relative h-48">
                  <img
                    src="/placeholder.svg?height=200&width=400&text=Tokyo"
                    alt="Tokyo"
                    className="h-full w-full rounded-t-xl object-cover"
                  />
                  <div className="absolute right-4 top-4 rounded-full bg-red-500 px-3 py-1 text-sm font-bold text-white">
                    25% OFF
                  </div>
                </div>
                <div className="p-6">
                  <h3 className="mb-2 text-xl font-bold">Tokyo Adventure</h3>
                  <p className="mb-4 text-gray-600">Discover the wonders of Tokyo with our special fares.</p>
                  <div className="flex items-center justify-between">
                    <div>
                      <span className="text-sm text-gray-500">From</span>
                      <p className="text-2xl font-bold text-blue-600">$599</p>
                    </div>
                    <Button
                      className="bg-black text-white hover:bg-gray-800 focus:ring-2 focus:ring-black focus:ring-offset-2"
                      asChild
                    >
                      <Link href="/flights?to=Tokyo">Book Now</Link>
                    </Button>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  )
}

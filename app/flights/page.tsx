import { Filter } from "lucide-react"
import { Suspense } from "react"

import { Button } from "@/components/ui/button"
import { Header } from "@/components/header"
import { Footer } from "@/components/footer"
import { FlightSearchForm } from "@/components/flight-search-form"
import type { FlightSearchParams } from "@/lib/actions"
import { FlightSearchResults } from "@/components/flight-search-results"
import { FlightFilters } from "@/components/flight-filters"

export default async function FlightsPage({
  searchParams,
}: {
  searchParams: { [key: string]: string | string[] | undefined }
}) {
  // Parse search params
  const params: FlightSearchParams = {
    tripType: (searchParams.tripType as string) || "round-trip",
    from: (searchParams.from as string) || "",
    to: (searchParams.to as string) || "",
    departureDate: (searchParams.departureDate as string) || "",
    returnDate: searchParams.returnDate as string,
    passengers: (searchParams.passengers as string) || "1",
    class: (searchParams.class as string) || "economy",
    promoCode: searchParams.promoCode as string,
  }

  // Get origin and destination for display
  const origin = params.from || "New York"
  const destination = params.to || "Los Angeles"
  const date = params.departureDate || "Select a date"

  return (
    <div className="flex min-h-screen flex-col bg-[#f5f5f5]">
      <Header />
      <main className="flex-1">
        {/* Search Form Section */}
        <section className="bg-white py-8">
          <div className="pl-3 pr-3">
            <div className="rounded-xl bg-white p-6 shadow-lg">
              <FlightSearchForm />
            </div>
          </div>
        </section>

        <div className="pl-3 pr-3 py-8">
          <div className="flex flex-col gap-8 md:flex-row">
            {/* Filters Sidebar */}
            <div className="w-full md:w-64 shrink-0">
              <FlightFilters />
            </div>

            {/* Flight Results */}
            <div className="flex-1">
              <div className="mb-6 flex flex-col gap-4 md:flex-row md:items-center md:justify-between">
                <div>
                  <h1 className="text-2xl font-bold">
                    {origin} to {destination}
                  </h1>
                  <p className="text-gray-600">{date}</p>
                </div>
                <div className="flex items-center gap-2">
                  <Button variant="outline" className="gap-2">
                    <Filter className="h-4 w-4" />
                    Sort by: Price
                  </Button>
                </div>
              </div>

              <Suspense fallback={<FlightResultsSkeleton />}>
                <FlightSearchResults searchParams={params} />
              </Suspense>
            </div>
          </div>
        </div>
      </main>
      <Footer />
    </div>
  )
}

function FlightResultsSkeleton() {
  return (
    <div className="space-y-4">
      {[1, 2, 3, 4].map((i) => (
        <div key={i} className="rounded-lg bg-white p-6 shadow-sm animate-pulse">
          <div className="flex flex-col gap-4 md:flex-row md:items-center md:justify-between">
            <div className="flex items-center gap-4">
              <div className="h-12 w-12 rounded-full bg-gray-200"></div>
              <div className="space-y-2">
                <div className="h-4 w-24 rounded bg-gray-200"></div>
                <div className="h-3 w-16 rounded bg-gray-200"></div>
              </div>
            </div>
            <div className="flex flex-1 flex-col gap-6 w-full md:flex-row md:items-center md:justify-between">
              <div className="flex items-center gap-4">
                <div className="space-y-1">
                  <div className="h-5 w-12 rounded bg-gray-200"></div>
                  <div className="h-3 w-8 rounded bg-gray-200"></div>
                </div>
                <div className="h-4 w-24 rounded bg-gray-200"></div>
                <div className="space-y-1">
                  <div className="h-5 w-12 rounded bg-gray-200"></div>
                  <div className="h-3 w-8 rounded bg-gray-200"></div>
                </div>
              </div>
              <div className="space-y-1">
                <div className="h-6 w-16 rounded bg-gray-200"></div>
                <div className="h-3 w-20 rounded bg-gray-200"></div>
              </div>
            </div>
          </div>
          <div className="mt-6 flex flex-col border-t pt-4 md:flex-row md:items-center md:justify-between">
            <div className="mb-4 flex items-center gap-4 md:mb-0">
              <div className="h-6 w-20 rounded bg-gray-200"></div>
              <div className="h-6 w-32 rounded bg-gray-200"></div>
            </div>
            <div className="h-9 w-24 rounded bg-gray-200"></div>
          </div>
        </div>
      ))}
    </div>
  )
}

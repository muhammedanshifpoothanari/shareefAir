import { getFlightsBySearch, type FlightSearchParams } from "@/lib/actions"
import { FlightCard } from "./flight-card"

export async function FlightSearchResults({ searchParams }: { searchParams: FlightSearchParams }) {
  // Get flights based on search params
  const flights = await getFlightsBySearch(searchParams)

  if (!flights || flights.length === 0) {
    return (
      <div className="bg-white rounded-lg shadow-sm p-8 text-center">
        <h2 className="text-xl font-semibold mb-2">No flights found</h2>
        <p className="text-slate-600">
          We couldn't find any flights matching your search criteria. Please try different dates or destinations.
        </p>
      </div>
    )
  }

  return (
    <div className="space-y-4">
      {flights.map((flight) => (
        <FlightCard key={flight.id} flight={flight} />
      ))}
    </div>
  )
}

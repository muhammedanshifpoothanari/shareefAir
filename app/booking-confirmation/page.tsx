import Link from "next/link"
import { CheckCircle, Download, Plane } from "lucide-react"

import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { Header } from "@/components/header"
import { Footer } from "@/components/footer"

export default function BookingConfirmationPage({
  searchParams,
}: {
  searchParams: { [key: string]: string | string[] | undefined }
}) {
  const bookingReference = (searchParams.ref as string) || "ABC123XYZ"

  return (
    <div className="flex min-h-screen flex-col">
      <Header />
      <main className="flex-1 py-12">
        <div className="pl-3 pr-3 ">
          <div className="text-center mb-8">
            <div className="inline-flex items-center justify-center w-16 h-16 bg-green-100 rounded-full mb-4">
              <CheckCircle className="h-8 w-8 text-green-600" />
            </div>
            <h1 className="text-3xl font-bold mb-2">Booking Confirmed!</h1>
            <p className="text-xl text-slate-600">
              Your flight has been successfully booked. Your booking reference is:
            </p>
            <div className="text-2xl font-bold text-blue-600 mt-2">{bookingReference}</div>
          </div>

          <Card className="mb-8">
            <CardContent className="p-6">
              <div className="flex items-center gap-3 mb-6 pb-4 border-b">
                <div className="w-10 h-10">
                  <img
                    src="/placeholder.svg?height=40&width=40&text=DL"
                    alt="Delta Airlines"
                    className="w-full h-full object-contain"
                  />
                </div>
                <div>
                  <div className="font-medium">Delta Airlines</div>
                  <div className="text-sm text-slate-500">DL 405</div>
                </div>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
                <div>
                  <h3 className="font-medium text-slate-500 mb-1">Departure</h3>
                  <div className="text-xl font-bold">New York (JFK)</div>
                  <div className="text-lg">June 15, 2025</div>
                  <div className="text-lg">08:30 AM</div>
                  <div className="text-slate-500">Terminal 4</div>
                </div>
                <div>
                  <h3 className="font-medium text-slate-500 mb-1">Arrival</h3>
                  <div className="text-xl font-bold">Los Angeles (LAX)</div>
                  <div className="text-lg">June 15, 2025</div>
                  <div className="text-lg">11:45 AM</div>
                  <div className="text-slate-500">Terminal 5</div>
                </div>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-6 pb-6 border-b">
                <div>
                  <h3 className="font-medium text-slate-500 mb-1">Flight Duration</h3>
                  <div>6h 15m</div>
                </div>
                <div>
                  <h3 className="font-medium text-slate-500 mb-1">Seat(s)</h3>
                  <div>15C</div>
                </div>
                <div>
                  <h3 className="font-medium text-slate-500 mb-1">Class</h3>
                  <div>Economy</div>
                </div>
              </div>

              <div>
                <h3 className="font-medium mb-3">Passenger(s)</h3>
                <div className="space-y-2">
                  <div className="flex justify-between">
                    <div>John Doe</div>
                    <div className="text-slate-500">Adult</div>
                  </div>
                </div>
              </div>
            </CardContent>
          </Card>

          <div className="flex flex-col md:flex-row gap-4 justify-center mb-8">
            <Button className="gap-2" asChild>
              <Link href="/my-trips">
                <Plane className="h-4 w-4" />
                View My Trips
              </Link>
            </Button>
            <Button variant="outline" className="gap-2" asChild>
              <Link href="#">
                <Download className="h-4 w-4" />
                Download E-Ticket
              </Link>
            </Button>
          </div>

          <div className="bg-blue-50 border border-blue-200 rounded-lg p-6">
            <h2 className="text-lg font-semibold mb-4">Important Information</h2>
            <ul className="space-y-2 text-slate-700">
              <li>• Please arrive at the airport at least 2 hours before your scheduled departure time.</li>
              <li>• Don't forget to bring a valid photo ID or passport for all passengers.</li>
              <li>• Check-in opens 24 hours before departure and closes 45 minutes before departure.</li>
              <li>• Each passenger is allowed one carry-on bag and one personal item.</li>
              <li>• You can manage your booking, select seats, and add baggage through the "My Trips" section.</li>
            </ul>
          </div>
        </div>
      </main>
      <Footer />
    </div>
  )
}

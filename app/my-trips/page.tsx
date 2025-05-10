import Link from "next/link"
import { ArrowRight, Search } from "lucide-react"

import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Header } from "@/components/header"
import { Footer } from "@/components/footer"

export default function MyTripsPage() {
  return (
    <div className="flex min-h-screen flex-col">
      <Header />
      <main className="flex-1">
        <section className="bg-blue-600 py-12">
          <div className="pl-3 pr-3">
            <div className="max-w-2xl mx-auto text-center text-white mb-8">
              <h1 className="text-3xl font-bold mb-4">My Trips</h1>
              <p className="text-blue-100">
                View and manage your upcoming and past trips. Enter your booking reference and last name to retrieve
                your booking.
              </p>
            </div>

            <div className="max-w-xl mx-auto bg-white rounded-xl shadow-xl p-6">
              <Tabs defaultValue="retrieve" className="w-full">
                <TabsList className="grid w-full grid-cols-2 mb-6">
                  <TabsTrigger value="retrieve">Retrieve Booking</TabsTrigger>
                  <TabsTrigger value="login">Login to Account</TabsTrigger>
                </TabsList>
                <TabsContent value="retrieve">
                  <form className="space-y-4">
                    <div className="space-y-2">
                      <Label htmlFor="booking-reference">Booking Reference</Label>
                      <Input id="booking-reference" placeholder="e.g. ABC123XYZ" />
                    </div>
                    <div className="space-y-2">
                      <Label htmlFor="last-name">Last Name</Label>
                      <Input id="last-name" placeholder="As shown on your booking" />
                    </div>
                    <Button type="submit" className="w-full">
                      <Search className="mr-2 h-4 w-4" />
                      Retrieve Booking
                    </Button>
                  </form>
                </TabsContent>
                <TabsContent value="login">
                  <form className="space-y-4">
                    <div className="space-y-2">
                      <Label htmlFor="email">Email</Label>
                      <Input id="email" type="email" placeholder="your.email@example.com" />
                    </div>
                    <div className="space-y-2">
                      <Label htmlFor="password">Password</Label>
                      <Input id="password" type="password" />
                    </div>
                    <Button type="submit" className="w-full">
                      Login
                    </Button>
                    <div className="text-center text-sm">
                      <Link href="/forgot-password" className="text-blue-600 hover:underline">
                        Forgot password?
                      </Link>
                    </div>
                  </form>
                </TabsContent>
              </Tabs>
            </div>
          </div>
        </section>

        <section className="pl-3 pr-3 py-12">
          <h2 className="text-2xl font-bold mb-6">Sample Bookings</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <Card>
              <CardContent className="p-6">
                <div className="flex items-center gap-3 mb-4">
                  <div className="w-10 h-10">
                    <img
                      src="/placeholder.svg?height=40&width=40&text=DL"
                      alt="Delta Airlines"
                      className="w-full h-full object-contain"
                    />
                  </div>
                  <div>
                    <div className="font-medium">New York to Los Angeles</div>
                    <div className="text-sm text-slate-500">Delta Airlines · DL 405</div>
                  </div>
                </div>

                <div className="flex justify-between mb-4">
                  <div>
                    <div className="text-sm text-slate-500">Departure</div>
                    <div className="font-medium">June 15, 2025</div>
                    <div>08:30 AM</div>
                  </div>
                  <div className="text-right">
                    <div className="text-sm text-slate-500">Booking Reference</div>
                    <div className="font-medium">ABC123XYZ</div>
                  </div>
                </div>

                <Button variant="outline" className="w-full" asChild>
                  <Link href="/booking-confirmation?ref=ABC123XYZ">
                    View Details
                    <ArrowRight className="ml-2 h-4 w-4" />
                  </Link>
                </Button>
              </CardContent>
            </Card>

            <Card>
              <CardContent className="p-6">
                <div className="flex items-center gap-3 mb-4">
                  <div className="w-10 h-10">
                    <img
                      src="/placeholder.svg?height=40&width=40&text=UA"
                      alt="United Airlines"
                      className="w-full h-full object-contain"
                    />
                  </div>
                  <div>
                    <div className="font-medium">Chicago to Miami</div>
                    <div className="text-sm text-slate-500">United Airlines · UA 892</div>
                  </div>
                </div>

                <div className="flex justify-between mb-4">
                  <div>
                    <div className="text-sm text-slate-500">Departure</div>
                    <div className="font-medium">July 10, 2025</div>
                    <div>10:15 AM</div>
                  </div>
                  <div className="text-right">
                    <div className="text-sm text-slate-500">Booking Reference</div>
                    <div className="font-medium">XYZ789ABC</div>
                  </div>
                </div>

                <Button variant="outline" className="w-full" asChild>
                  <Link href="/booking-confirmation?ref=XYZ789ABC">
                    View Details
                    <ArrowRight className="ml-2 h-4 w-4" />
                  </Link>
                </Button>
              </CardContent>
            </Card>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  )
}

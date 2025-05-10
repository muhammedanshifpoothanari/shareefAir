"use client"

import type React from "react"

import { useState } from "react"
import Link from "next/link"
import { useRouter, useSearchParams } from "next/navigation"
import { ArrowLeft, CreditCard, Lock, Plane } from "lucide-react"

import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { Header } from "@/components/header"
import { Footer } from "@/components/footer"
import { PassengerForm } from "@/components/passenger-form"
import { bookFlight } from "@/lib/actions"

export default function CheckoutPage() {
  const router = useRouter()
  const searchParams = useSearchParams()
  const flightId = searchParams.get("flightId") || "1"

  const [isSubmitting, setIsSubmitting] = useState(false)
  const [error, setError] = useState<string | null>(null)
  const [passengerCount, setPassengerCount] = useState(1)
  const [paymentMethod, setPaymentMethod] = useState("credit-card")

  const handleSubmit = async (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault()
    setIsSubmitting(true)
    setError(null)

    try {
      const formData = new FormData(event.currentTarget)
      formData.append("flightId", flightId)
      formData.append("passengerCount", passengerCount.toString())

      // Add selected seats from localStorage if available
      const selectedSeats = localStorage.getItem("selectedSeats")
      if (selectedSeats) {
        JSON.parse(selectedSeats).forEach((seat: string) => {
          formData.append("selectedSeats", seat)
        })
      }

      // Add selected addons from localStorage if available
      const selectedAddons = localStorage.getItem("selectedAddons")
      if (selectedAddons) {
        JSON.parse(selectedAddons).forEach((addon: string) => {
          formData.append("addons", addon)
        })
      }

      await bookFlight(formData)
    } catch (err) {
      setError("An error occurred while processing your booking. Please try again.")
      console.error(err)
    } finally {
      setIsSubmitting(false)
    }
  }

  return (
    <div className="flex min-h-screen flex-col">
      <Header />
      <main className="flex-1 py-8">
        <div className="pl-3 pr-3">
          <div className="mb-6">
            <Button variant="ghost" className="gap-2" asChild>
              <Link href={`/flights`}>
                <ArrowLeft className="h-4 w-4" />
                Back to Flight Selection
              </Link>
            </Button>
          </div>

          <div className="mb-8">
            <h1 className="text-2xl font-bold">Complete Your Booking</h1>
            <div className="flex items-center gap-2 text-slate-600 mt-1">
              <Plane className="h-4 w-4" />
              <span>New York (JFK) to Los Angeles (LAX) · June 15, 2025</span>
            </div>
          </div>

          <form onSubmit={handleSubmit}>
            <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
              <div className="lg:col-span-2 space-y-8">
                {/* Passenger Information */}
                <Card>
                  <CardContent className="p-6">
                    <h2 className="text-xl font-semibold mb-6">Passenger Information</h2>
                    <PassengerForm passengerCount={passengerCount} setPassengerCount={setPassengerCount} />
                  </CardContent>
                </Card>

                {/* Contact Information */}
                <Card>
                  <CardContent className="p-6">
                    <h2 className="text-xl font-semibold mb-6">Contact Information</h2>
                    <div className="space-y-4">
                      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                        <div className="space-y-2">
                          <Label htmlFor="email">Email Address</Label>
                          <Input id="email" name="email" type="email" placeholder="your.email@example.com" required />
                          <p className="text-sm text-slate-500">We'll send your e-ticket to this email</p>
                        </div>
                        <div className="space-y-2">
                          <Label htmlFor="phone">Phone Number</Label>
                          <Input id="phone" name="phone" type="tel" placeholder="+1 (123) 456-7890" required />
                          <p className="text-sm text-slate-500">For updates about your flight</p>
                        </div>
                      </div>
                    </div>
                  </CardContent>
                </Card>

                {/* Payment Information */}
                <Card>
                  <CardContent className="p-6">
                    <h2 className="text-xl font-semibold mb-6">Payment Method</h2>
                    <RadioGroup
                      defaultValue="credit-card"
                      value={paymentMethod}
                      onValueChange={setPaymentMethod}
                      className="space-y-4"
                      name="paymentMethod"
                    >
                      <div className="flex items-center space-x-2 border rounded-lg p-4">
                        <RadioGroupItem value="credit-card" id="credit-card" />
                        <Label htmlFor="credit-card" className="flex items-center cursor-pointer">
                          <CreditCard className="mr-2 h-5 w-5" />
                          Credit or Debit Card
                        </Label>
                      </div>

                      {paymentMethod === "credit-card" && (
                        <div className="border rounded-lg p-6 space-y-4">
                          <div className="space-y-2">
                            <Label htmlFor="card-number">Card Number</Label>
                            <Input
                              id="card-number"
                              name="cardNumber"
                              placeholder="1234 5678 9012 3456"
                              required={paymentMethod === "credit-card"}
                            />
                          </div>
                          <div className="grid grid-cols-2 gap-4">
                            <div className="space-y-2">
                              <Label htmlFor="expiry">Expiration Date</Label>
                              <div className="grid grid-cols-2 gap-2">
                                <Select name="expiryMonth" required={paymentMethod === "credit-card"}>
                                  <SelectTrigger id="month">
                                    <SelectValue placeholder="MM" />
                                  </SelectTrigger>
                                  <SelectContent>
                                    {Array.from({ length: 12 }, (_, i) => i + 1).map((month) => (
                                      <SelectItem key={month} value={month.toString().padStart(2, "0")}>
                                        {month.toString().padStart(2, "0")}
                                      </SelectItem>
                                    ))}
                                  </SelectContent>
                                </Select>
                                <Select name="expiryYear" required={paymentMethod === "credit-card"}>
                                  <SelectTrigger id="year">
                                    <SelectValue placeholder="YY" />
                                  </SelectTrigger>
                                  <SelectContent>
                                    {Array.from({ length: 10 }, (_, i) => new Date().getFullYear() + i).map((year) => (
                                      <SelectItem key={year} value={year.toString().slice(-2)}>
                                        {year.toString().slice(-2)}
                                      </SelectItem>
                                    ))}
                                  </SelectContent>
                                </Select>
                              </div>
                            </div>
                            <div className="space-y-2">
                              <Label htmlFor="cvv">CVV</Label>
                              <Input id="cvv" name="cvv" placeholder="123" required={paymentMethod === "credit-card"} />
                            </div>
                          </div>
                          <div className="space-y-2">
                            <Label htmlFor="name-on-card">Name on Card</Label>
                            <Input
                              id="name-on-card"
                              name="nameOnCard"
                              placeholder="John Doe"
                              required={paymentMethod === "credit-card"}
                            />
                          </div>
                        </div>
                      )}

                      <div className="flex items-center space-x-2 border rounded-lg p-4">
                        <RadioGroupItem value="paypal" id="paypal" />
                        <Label htmlFor="paypal" className="cursor-pointer">
                          PayPal
                        </Label>
                      </div>

                      <div className="flex items-center space-x-2 border rounded-lg p-4">
                        <RadioGroupItem value="apple-pay" id="apple-pay" />
                        <Label htmlFor="apple-pay" className="cursor-pointer">
                          Apple Pay
                        </Label>
                      </div>
                    </RadioGroup>
                  </CardContent>
                </Card>

                {/* Billing Address */}
                <Card>
                  <CardContent className="p-6">
                    <h2 className="text-xl font-semibold mb-6">Billing Address</h2>
                    <div className="space-y-4">
                      <div className="space-y-2">
                        <Label htmlFor="address">Street Address</Label>
                        <Input id="address" name="address" placeholder="123 Main St" required />
                      </div>
                      <div className="space-y-2">
                        <Label htmlFor="address2">Apartment, suite, etc. (optional)</Label>
                        <Input id="address2" name="address2" placeholder="Apt 4B" />
                      </div>
                      <div className="grid grid-cols-2 gap-4">
                        <div className="space-y-2">
                          <Label htmlFor="city">City</Label>
                          <Input id="city" name="city" placeholder="New York" required />
                        </div>
                        <div className="space-y-2">
                          <Label htmlFor="state">State</Label>
                          <Select name="state" required>
                            <SelectTrigger id="state">
                              <SelectValue placeholder="Select state" />
                            </SelectTrigger>
                            <SelectContent>
                              <SelectItem value="NY">New York</SelectItem>
                              <SelectItem value="CA">California</SelectItem>
                              <SelectItem value="TX">Texas</SelectItem>
                              <SelectItem value="FL">Florida</SelectItem>
                              <SelectItem value="IL">Illinois</SelectItem>
                            </SelectContent>
                          </Select>
                        </div>
                      </div>
                      <div className="grid grid-cols-2 gap-4">
                        <div className="space-y-2">
                          <Label htmlFor="zip">ZIP Code</Label>
                          <Input id="zip" name="zip" placeholder="10001" required />
                        </div>
                        <div className="space-y-2">
                          <Label htmlFor="country">Country</Label>
                          <Select name="country" defaultValue="US" required>
                            <SelectTrigger id="country">
                              <SelectValue placeholder="Select country" />
                            </SelectTrigger>
                            <SelectContent>
                              <SelectItem value="US">United States</SelectItem>
                              <SelectItem value="CA">Canada</SelectItem>
                              <SelectItem value="UK">United Kingdom</SelectItem>
                              <SelectItem value="AU">Australia</SelectItem>
                              <SelectItem value="DE">Germany</SelectItem>
                            </SelectContent>
                          </Select>
                        </div>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              </div>

              {/* Order Summary */}
              <div>
                <Card className="sticky top-6">
                  <CardContent className="p-6">
                    <h2 className="text-xl font-semibold mb-4">Booking Summary</h2>

                    <div className="border rounded-lg p-4 mb-6">
                      <div className="flex items-center gap-3 mb-3">
                        <div className="w-8 h-8">
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

                      <div className="flex justify-between text-sm mb-1">
                        <div className="font-medium">JFK</div>
                        <div className="text-slate-500">6h 15m</div>
                        <div className="font-medium">LAX</div>
                      </div>
                      <div className="flex justify-between text-sm text-slate-500 mb-3">
                        <div>08:30</div>
                        <div>11:45</div>
                      </div>
                      <div className="text-sm text-slate-500">June 15, 2025</div>
                    </div>

                    <div className="space-y-3 mb-6">
                      <div className="flex justify-between">
                        <span>Base fare</span>
                        <span>$349.00</span>
                      </div>
                      <div className="flex justify-between">
                        <span>Taxes & fees</span>
                        <span>$45.60</span>
                      </div>
                      <div className="flex justify-between">
                        <span>Seat selection (15C)</span>
                        <span>$12.00</span>
                      </div>
                      <div className="flex justify-between">
                        <span>Checked baggage (1)</span>
                        <span>$30.00</span>
                      </div>
                    </div>

                    <div className="flex justify-between font-bold text-lg pt-4 border-t mb-6">
                      <span>Total</span>
                      <span>$436.60</span>
                    </div>

                    <div className="space-y-4">
                      {error && <div className="text-red-500 text-sm">{error}</div>}

                      <Button type="submit" className="w-full h-12" size="lg" disabled={isSubmitting}>
                        {isSubmitting ? "Processing..." : "Complete Booking"}
                      </Button>

                      <div className="flex items-center justify-center text-sm text-slate-500 gap-1">
                        <Lock className="h-4 w-4" />
                        <span>Secure payment</span>
                      </div>

                      <div className="text-xs text-slate-500 text-center">
                        By completing this booking, you agree to our{" "}
                        <Link href="/terms" className="text-blue-600 hover:underline">
                          Terms of Service
                        </Link>{" "}
                        and{" "}
                        <Link href="/privacy" className="text-blue-600 hover:underline">
                          Privacy Policy
                        </Link>
                        .
                      </div>
                    </div>
                  </CardContent>
                </Card>
              </div>
            </div>
          </form>
        </div>
      </main>
      <Footer />
    </div>
  )
}

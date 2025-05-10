"use server"

import { revalidatePath } from "next/cache"
import { redirect } from "next/navigation"

// Types
export interface FlightSearchParams {
  tripType: string
  from: string
  to: string
  departureDate: string
  returnDate?: string
  passengers: string
  class: string
  promoCode?: string
}

export interface PassengerInfo {
  title: string
  firstName: string
  lastName: string
  dateOfBirth: {
    day: string
    month: string
    year: string
  }
  nationality: string
  passportNumber?: string
}

export interface ContactInfo {
  email: string
  phone: string
}

export interface PaymentInfo {
  method: string
  cardNumber?: string
  expiryMonth?: string
  expiryYear?: string
  cvv?: string
  nameOnCard?: string
}

export interface BillingAddress {
  address: string
  address2?: string
  city: string
  state: string
  zip: string
  country: string
}

export interface BookingData {
  flightId: string
  passengers: PassengerInfo[]
  contactInfo: ContactInfo
  paymentInfo: PaymentInfo
  billingAddress: BillingAddress
  selectedSeats: string[]
  addons: string[]
}

// Mock database of flights
const flights = [
  {
    id: "1",
    airline: "Delta Airlines",
    airlineCode: "DL",
    flightNumber: "405",
    departureCity: "New York",
    departureCode: "JFK",
    departureTime: "08:30",
    arrivalCity: "Los Angeles",
    arrivalCode: "LAX",
    arrivalTime: "11:45",
    duration: "6h 15m",
    stops: 0,
    price: 349,
    logo: "/placeholder.svg?height=40&width=40&text=DL",
  },
  {
    id: "2",
    airline: "American Airlines",
    airlineCode: "AA",
    flightNumber: "1022",
    departureCity: "New York",
    departureCode: "JFK",
    departureTime: "10:15",
    arrivalCity: "Los Angeles",
    arrivalCode: "LAX",
    arrivalTime: "13:40",
    duration: "6h 25m",
    stops: 0,
    price: 329,
    logo: "/placeholder.svg?height=40&width=40&text=AA",
  },
  {
    id: "3",
    airline: "United Airlines",
    airlineCode: "UA",
    flightNumber: "528",
    departureCity: "New York",
    departureCode: "EWR",
    departureTime: "12:45",
    arrivalCity: "Los Angeles",
    arrivalCode: "LAX",
    arrivalTime: "16:20",
    duration: "6h 35m",
    stops: 0,
    price: 315,
    logo: "/placeholder.svg?height=40&width=40&text=UA",
  },
  {
    id: "4",
    airline: "JetBlue",
    airlineCode: "B6",
    flightNumber: "1789",
    departureCity: "New York",
    departureCode: "JFK",
    departureTime: "15:30",
    arrivalCity: "Los Angeles",
    arrivalCode: "LAX",
    arrivalTime: "19:15",
    duration: "6h 45m",
    stops: 0,
    price: 299,
    logo: "/placeholder.svg?height=40&width=40&text=B6",
  },
  {
    id: "5",
    airline: "Delta Airlines",
    airlineCode: "DL",
    flightNumber: "289",
    departureCity: "New York",
    departureCode: "LGA",
    departureTime: "07:15",
    arrivalCity: "Los Angeles",
    arrivalCode: "LAX",
    arrivalTime: "12:30",
    duration: "8h 15m",
    stops: 1,
    stopCity: "Chicago (ORD)",
    stopDuration: "1h 20m",
    price: 275,
    logo: "/placeholder.svg?height=40&width=40&text=DL",
  },
]

// Search flights action
export async function searchFlights(formData: FormData) {
  const tripType = formData.get("tripType") as string
  const from = formData.get("from") as string
  const to = formData.get("to") as string
  const departureDate = formData.get("departureDate") as string
  const returnDate = formData.get("returnDate") as string
  const passengers = formData.get("passengers") as string
  const travelClass = formData.get("class") as string
  const promoCode = formData.get("promoCode") as string

  // Validate required fields
  if (!from || !to || !departureDate || !passengers || !travelClass) {
    return { error: "Please fill in all required fields" }
  }

  // In a real app, you would search a database or call an API
  // For now, we'll just redirect to the flights page with query params
  const searchParams = new URLSearchParams({
    tripType,
    from,
    to,
    departureDate,
    ...(returnDate && { returnDate }),
    passengers,
    class: travelClass,
    ...(promoCode && { promoCode }),
  })

  redirect(`/flights?${searchParams.toString()}`)
}

// Get flight by ID
export async function getFlightById(id: string) {
  // In a real app, you would fetch from a database
  return flights.find((flight) => flight.id === id) || null
}

// Get flights by search params
export async function getFlightsBySearch(params: FlightSearchParams) {
  // In a real app, you would query a database with these params
  // For now, we'll just return our mock flights
  return flights
}

// Book flight action
export async function bookFlight(formData: FormData) {
  // Extract and validate form data
  const flightId = formData.get("flightId") as string
  const passengerCount = Number.parseInt(formData.get("passengerCount") as string)

  // Collect passenger information
  const passengers: PassengerInfo[] = []
  for (let i = 0; i < passengerCount; i++) {
    passengers.push({
      title: formData.get(`passenger[${i}].title`) as string,
      firstName: formData.get(`passenger[${i}].firstName`) as string,
      lastName: formData.get(`passenger[${i}].lastName`) as string,
      dateOfBirth: {
        day: formData.get(`passenger[${i}].dobDay`) as string,
        month: formData.get(`passenger[${i}].dobMonth`) as string,
        year: formData.get(`passenger[${i}].dobYear`) as string,
      },
      nationality: formData.get(`passenger[${i}].nationality`) as string,
      passportNumber: formData.get(`passenger[${i}].passportNumber`) as string,
    })
  }

  // Contact information
  const contactInfo: ContactInfo = {
    email: formData.get("email") as string,
    phone: formData.get("phone") as string,
  }

  // Payment information
  const paymentInfo: PaymentInfo = {
    method: formData.get("paymentMethod") as string,
    cardNumber: formData.get("cardNumber") as string,
    expiryMonth: formData.get("expiryMonth") as string,
    expiryYear: formData.get("expiryYear") as string,
    cvv: formData.get("cvv") as string,
    nameOnCard: formData.get("nameOnCard") as string,
  }

  // Billing address
  const billingAddress: BillingAddress = {
    address: formData.get("address") as string,
    address2: formData.get("address2") as string,
    city: formData.get("city") as string,
    state: formData.get("state") as string,
    zip: formData.get("zip") as string,
    country: formData.get("country") as string,
  }

  // Selected seats and addons
  const selectedSeats = formData.getAll("selectedSeats") as string[]
  const addons = formData.getAll("addons") as string[]

  // Create booking data
  const bookingData: BookingData = {
    flightId,
    passengers,
    contactInfo,
    paymentInfo,
    billingAddress,
    selectedSeats,
    addons,
  }

  // In a real app, you would save this to a database
  // For now, we'll just redirect to a confirmation page
  // Generate a random booking reference
  const bookingReference = Math.random().toString(36).substring(2, 10).toUpperCase()

  redirect(`/booking-confirmation?ref=${bookingReference}`)
}

// Filter flights action
export async function filterFlights(formData: FormData) {
  const minPrice = formData.get("minPrice") as string
  const maxPrice = formData.get("maxPrice") as string
  const stops = formData.getAll("stops") as string[]
  const airlines = formData.getAll("airlines") as string[]
  const departureTimes = formData.getAll("departureTimes") as string[]

  // In a real app, you would apply these filters to a database query
  // For now, we'll just revalidate the path to simulate filtering
  revalidatePath("/flights")
}

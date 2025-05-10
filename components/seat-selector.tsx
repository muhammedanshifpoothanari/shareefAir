"use client"

import { useState } from "react"
import React from "react"

import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"

type SeatType = "available" | "selected" | "occupied" | "premium" | "exit"

interface SeatProps {
  id: string
  type: SeatType
  price?: number
  onClick: (id: string) => void
}

function Seat({ id, type, price, onClick }: SeatProps) {
  const getStyles = () => {
    switch (type) {
      case "available":
        return "bg-white border-slate-300 hover:border-blue-500 cursor-pointer"
      case "selected":
        return "bg-blue-500 border-blue-600 text-white cursor-pointer"
      case "occupied":
        return "bg-slate-200 border-slate-300 text-slate-400 cursor-not-allowed"
      case "premium":
        return "bg-amber-50 border-amber-300 hover:border-blue-500 cursor-pointer"
      case "exit":
        return "bg-green-50 border-green-300 hover:border-blue-500 cursor-pointer"
      default:
        return "bg-white border-slate-300"
    }
  }

  return (
    <button
      className={`w-10 h-10 border-2 rounded flex items-center justify-center text-sm font-medium ${getStyles()}`}
      onClick={() => type !== "occupied" && onClick(id)}
      disabled={type === "occupied"}
      aria-label={`Seat ${id} ${type === "occupied" ? "occupied" : ""}`}
    >
      {id}
    </button>
  )
}

export function SeatSelector() {
  const [selectedSeats, setSelectedSeats] = useState<string[]>([])

  // Generate sample seat data
  const generateSeats = () => {
    const rows = ["A", "B", "C", "D", "E", "F"]
    const seatMap: Record<string, SeatType> = {}

    // Create seats for rows 1-30
    for (let i = 1; i <= 30; i++) {
      for (const row of rows) {
        const seatId = `${i}${row}`

        // Set some seats as occupied randomly
        if (Math.random() < 0.3) {
          seatMap[seatId] = "occupied"
        }
        // Set exit row seats
        else if (i === 15 || i === 16) {
          seatMap[seatId] = "exit"
        }
        // Set premium seats for first 5 rows
        else if (i <= 5) {
          seatMap[seatId] = "premium"
        }
        // Regular available seats
        else {
          seatMap[seatId] = "available"
        }
      }
    }

    return seatMap
  }

  const initialSeats = generateSeats()
  const [seats, setSeats] = useState(initialSeats)

  const handleSeatClick = (id: string) => {
    if (seats[id] === "occupied") return

    const newSeats = { ...seats }

    if (selectedSeats.includes(id)) {
      // Deselect the seat
      setSelectedSeats(selectedSeats.filter((seatId) => seatId !== id))
      newSeats[id] =
        newSeats[id] === "selected"
          ? id.startsWith("15") || id.startsWith("16")
            ? "exit"
            : Number.parseInt(id) <= 5
              ? "premium"
              : "available"
          : newSeats[id]
    } else {
      // Select the seat
      setSelectedSeats([...selectedSeats, id])
      newSeats[id] = "selected"
    }

    setSeats(newSeats)
  }

  const rows = ["A", "B", "C", "D", "E", "F"]

  // Calculate total price
  const calculateTotalPrice = () => {
    let total = 0
    selectedSeats.forEach((seatId) => {
      const row = Number.parseInt(seatId)
      if (row <= 5) {
        // Premium seats
        total += 25
      } else if (row === 15 || row === 16) {
        // Exit row seats
        total += 15
      } else {
        // Regular seats
        total += 0 // Regular seats are included in the ticket price
      }
    })
    return total
  }

  return (
    <div>
      <div className="mb-6">
        <div className="flex justify-center items-center gap-6 mb-8">
          <div className="flex items-center gap-2">
            <div className="w-6 h-6 bg-white border-2 border-slate-300 rounded"></div>
            <span className="text-sm">Available</span>
          </div>
          <div className="flex items-center gap-2">
            <div className="w-6 h-6 bg-blue-500 border-2 border-blue-600 rounded"></div>
            <span className="text-sm">Selected</span>
          </div>
          <div className="flex items-center gap-2">
            <div className="w-6 h-6 bg-slate-200 border-2 border-slate-300 rounded"></div>
            <span className="text-sm">Occupied</span>
          </div>
          <div className="flex items-center gap-2">
            <div className="w-6 h-6 bg-amber-50 border-2 border-amber-300 rounded"></div>
            <span className="text-sm">Premium (+$25)</span>
          </div>
          <div className="flex items-center gap-2">
            <div className="w-6 h-6 bg-green-50 border-2 border-green-300 rounded"></div>
            <span className="text-sm">Exit Row (+$15)</span>
          </div>
        </div>

        <Card>
          <CardContent className="p-6">
            <div className="flex justify-center mb-8">
              <div className="w-1/2 h-10 bg-slate-200 rounded-t-lg flex items-center justify-center text-slate-600 font-medium">
                FRONT OF AIRCRAFT
              </div>
            </div>

            <div className="grid grid-cols-[repeat(6,40px)] gap-2 justify-center">
              {/* Seat labels */}
              <div className="text-center font-medium">A</div>
              <div className="text-center font-medium">B</div>
              <div className="text-center font-medium">C</div>
              <div className="text-center font-medium">D</div>
              <div className="text-center font-medium">E</div>
              <div className="text-center font-medium">F</div>

              {/* Generate seats */}
              {Array.from({ length: 30 }, (_, i) => i + 1).map((row) => (
                <React.Fragment key={row}>
                  {rows.map((seatLetter) => {
                    const seatId = `${row}${seatLetter}`
                    return <Seat key={seatId} id={seatId} type={seats[seatId]} onClick={handleSeatClick} />
                  })}

                  {/* Add row number after every 6 seats */}
                  {row % 1 === 0 && (
                    <div className="col-span-6 text-center text-sm text-slate-500 mt-1 mb-3">Row {row}</div>
                  )}
                </React.Fragment>
              ))}
            </div>
          </CardContent>
        </Card>
      </div>

      <div className="mt-6">
        <h3 className="font-semibold mb-2">Selected Seats: {selectedSeats.join(", ") || "None"}</h3>
        {selectedSeats.length > 0 && (
          <div>
            <p className="text-slate-600 mb-4">Additional cost: ${calculateTotalPrice().toFixed(2)}</p>
            <Button className="mt-2">Confirm Seat Selection</Button>
          </div>
        )}
      </div>
    </div>
  )
}

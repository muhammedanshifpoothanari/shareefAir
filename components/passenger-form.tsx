"use client"

import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"

interface PassengerFormProps {
  passengerCount: number
  setPassengerCount: (count: number) => void
}

export function PassengerForm({ passengerCount, setPassengerCount }: PassengerFormProps) {
  const addPassenger = () => {
    if (passengerCount < 9) {
      setPassengerCount(passengerCount + 1)
    }
  }

  const removePassenger = () => {
    if (passengerCount > 1) {
      setPassengerCount(passengerCount - 1)
    }
  }

  return (
    <div className="space-y-8">
      {Array.from({ length: passengerCount }).map((_, index) => (
        <div key={index} className="space-y-4 pb-6 border-b last:border-b-0 last:pb-0">
          <h3 className="font-medium">Passenger {index + 1}</h3>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
            <div className="space-y-2">
              <Label htmlFor={`title-${index}`}>Title</Label>
              <Select name={`passenger[${index}].title`} required>
                <SelectTrigger id={`title-${index}`}>
                  <SelectValue placeholder="Select" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="mr">Mr</SelectItem>
                  <SelectItem value="mrs">Mrs</SelectItem>
                  <SelectItem value="ms">Ms</SelectItem>
                  <SelectItem value="dr">Dr</SelectItem>
                </SelectContent>
              </Select>
            </div>
            <div className="space-y-2">
              <Label htmlFor={`first-name-${index}`}>First Name</Label>
              <Input
                id={`first-name-${index}`}
                name={`passenger[${index}].firstName`}
                placeholder="As shown on ID"
                required
              />
            </div>
            <div className="space-y-2">
              <Label htmlFor={`last-name-${index}`}>Last Name</Label>
              <Input
                id={`last-name-${index}`}
                name={`passenger[${index}].lastName`}
                placeholder="As shown on ID"
                required
              />
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
            <div className="space-y-2">
              <Label htmlFor={`dob-${index}`}>Date of Birth</Label>
              <div className="grid grid-cols-3 gap-2">
                <Select name={`passenger[${index}].dobDay`} required>
                  <SelectTrigger id={`dob-day-${index}`}>
                    <SelectValue placeholder="Day" />
                  </SelectTrigger>
                  <SelectContent>
                    {Array.from({ length: 31 }, (_, i) => i + 1).map((day) => (
                      <SelectItem key={day} value={day.toString()}>
                        {day}
                      </SelectItem>
                    ))}
                  </SelectContent>
                </Select>
                <Select name={`passenger[${index}].dobMonth`} required>
                  <SelectTrigger id={`dob-month-${index}`}>
                    <SelectValue placeholder="Month" />
                  </SelectTrigger>
                  <SelectContent>
                    {[
                      "January",
                      "February",
                      "March",
                      "April",
                      "May",
                      "June",
                      "July",
                      "August",
                      "September",
                      "October",
                      "November",
                      "December",
                    ].map((month, i) => (
                      <SelectItem key={month} value={(i + 1).toString()}>
                        {month}
                      </SelectItem>
                    ))}
                  </SelectContent>
                </Select>
                <Select name={`passenger[${index}].dobYear`} required>
                  <SelectTrigger id={`dob-year-${index}`}>
                    <SelectValue placeholder="Year" />
                  </SelectTrigger>
                  <SelectContent>
                    {Array.from({ length: 100 }, (_, i) => new Date().getFullYear() - i).map((year) => (
                      <SelectItem key={year} value={year.toString()}>
                        {year}
                      </SelectItem>
                    ))}
                  </SelectContent>
                </Select>
              </div>
            </div>
            <div className="space-y-2">
              <Label htmlFor={`nationality-${index}`}>Nationality</Label>
              <Select name={`passenger[${index}].nationality`} required>
                <SelectTrigger id={`nationality-${index}`}>
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
            <div className="space-y-2">
              <Label htmlFor={`passport-${index}`}>Passport Number</Label>
              <Input
                id={`passport-${index}`}
                name={`passenger[${index}].passportNumber`}
                placeholder="For international flights"
              />
            </div>
          </div>

          {index > 0 && (
            <div className="mt-4">
              <Button type="button" variant="outline" size="sm" onClick={removePassenger} className="text-red-500">
                Remove Passenger
              </Button>
            </div>
          )}
        </div>
      ))}

      {passengerCount < 9 && (
        <Button type="button" variant="outline" onClick={addPassenger} className="mt-4">
          Add Another Passenger
        </Button>
      )}
    </div>
  )
}

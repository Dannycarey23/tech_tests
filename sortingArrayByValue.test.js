import { describe, it, expect } from 'vitest'
import { sortByProperty } from './sortingArrayByValue'

const people = [
    { name: "John", age: 25 },
    { name: "Jane", age: 30 },
    { name: "Alice", age: 20 }
]

const vehicles = [
    { type: "Car", capacity: 5 },
    { type: "Train", capacity: 130 },
    { type: "Bus", capacity: 60 },
    { type: "Star Destroyer", capacity: 90000 },
    { type: "Ferry", capacity: 99 },
]

describe("sortByProperty() function", () => {
    it("should rearrange the array of objects by the specified value", () => {
        expect(sortByProperty(people, "age")).toStrictEqual([
            { name: "Alice", age: 20 },
            { name: "John", age: 25 },
            { name: "Jane", age: 30 }
        ])
    })
    it("should rearrange the array of objects by the specified value", () => {
        expect(sortByProperty(vehicles, "capacity")).toStrictEqual([
            { type: "Car", capacity: 5 },
            { type: "Bus", capacity: 60 },
            { type: "Ferry", capacity: 99 },
            { type: "Train", capacity: 130 },
            { type: "Star Destroyer", capacity: 90000 }
        ])
    })
})
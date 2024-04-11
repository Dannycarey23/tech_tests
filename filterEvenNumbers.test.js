import { describe, it, expect } from 'vitest'
import { filterEvenNumbers } from './filterEvenNumbers'

describe("filterEvenNumbers() function", () => {
    it("returns only the even numbers from the submitted array", () => {
        expect(filterEvenNumbers([1, 2, 3, 4, 5, 6, 7, 8, 9, 10])).toStrictEqual([2, 4, 6, 8, 10])
    })
    it("returns only the even numbers from the submitted array", () => {
        expect(filterEvenNumbers([9, 8, 7, 6, 5, 4, 3, 2, 1])).toStrictEqual([8, 6, 4, 2])
    })
    it("returns only the even numbers from the submitted array", () => {
        expect(filterEvenNumbers([11, 22, 33, 44, 55, 66])).toStrictEqual([22, 44, 66])
    })

})
import { describe, it, expect } from 'vitest'
import { findIntersection } from './intersectingArrays'

describe("findIntersection() function", () => {
    it("compares 2 arrays and returns an array containing the common elements.", () => {
        expect(findIntersection([1, 2, 3, 4], [3, 4, 5, 6])).toStrictEqual([3, 4])
    })
    it("compares 2 arrays and returns an array containing the common elements.", () => {
        expect(findIntersection([2, 4, 6, 8, 10, 12, 14, 16], [8, 9, 10, 11, 12, 13, 14, 15, 16])).toStrictEqual([8, 10, 12, 14, 16])
    })
})
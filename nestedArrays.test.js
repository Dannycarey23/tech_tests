import { describe, it, expect } from 'vitest'
import { flattenArray } from './nestedArrays'

describe("flattenArray() function", () => {
    it("creates a single array from multiple nested arrays", () => {
        expect(flattenArray([1, [2, [3, 4], 5], 6])).toStrictEqual([1, 2, 3, 4, 5, 6])
    })
})
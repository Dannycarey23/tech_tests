import { describe, it, expect } from 'vitest'
import { sumOfAllNumbers } from './sumOfAllNums'

describe("sumOfAllNumbers() function", () => {
    it('Calculate the sum of digits in a number', () => {
        expect(sumOfAllNumbers(12345)).toBe(15)
    })
    it('Calculate the sum of digits in a number', () => {
        expect(sumOfAllNumbers(123456789)).toBe(45)
    })
    it('Calculate the sum of digits in a number', () => {
        expect(sumOfAllNumbers(987654321)).toBe(45)
    })
})
import { describe, it, expect } from 'vitest'
import { calculateFactorial } from './factorial'

describe("calculateFactorial() function", () => {
    it('returns the correct value for 0', () => {
        expect(calculateFactorial(0)).toBe(0)
    });

    it('returns the correct value for 1', () => {
        expect(calculateFactorial(1)).toBe(1)
    });

    it('returns the correct value for 5', () => {
        expect(calculateFactorial(5)).toBe(120)
    });

    it('returns the correct value for 10', () => {
        expect(calculateFactorial(10)).toBe(3628800)
    });
});
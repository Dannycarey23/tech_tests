import { describe, it, expect } from "vitest";
import { calculateLeapYear } from "./leapYear";

describe("calculateLeapYear() function", () => {
    it('confirms that 2020 was a leap year', () => {
        expect(calculateLeapYear(2020)).toBe(true)
    })
    it('confirms that 2023 is not a leap year', () => {
        expect(calculateLeapYear(2023)).toBe(false)
    })
    it('confirms that 2022 is not a leap year', () => {
        expect(calculateLeapYear(2022)).toBe(false)
    })
    it('confirms that 1700 is not a leap year', () => {
        expect(calculateLeapYear(1700)).toBe(false)
    })
})
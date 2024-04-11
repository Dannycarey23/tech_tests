import { describe, it, expect } from 'vitest'
import { isIsogram } from './isogram'

describe("isIsogram() function", () => {
    it('Confirm that diablo is an isogram', () => {
        expect(isIsogram("DiAblo")).toBe(true)
    })
    it('Confirm that deed is not an isogram', () => {
        expect(isIsogram("deed")).toBe(false)
    })
    it('Confirm that intestines is not an isogram', () => {
        expect(isIsogram("intestines")).toBe(false)
    })
})
import { describe, it, expect } from 'vitest'
import { removeDuplicateCharacters } from './duplicateCharacters'

describe(" function", () => {
    it('check that hello becomes helo', () => {
        expect(removeDuplicateCharacters("hello")).toBe("helo")
    })
    it('check that movement becomes movent', () => {
        expect(removeDuplicateCharacters("movement")).toBe("movent")
    })
    it('check that congratulatory becomes congratuly', () => {
        expect(removeDuplicateCharacters("congratulatory")).toBe("congratuly")
    })
})

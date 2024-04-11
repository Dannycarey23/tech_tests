import { describe, it, expect } from 'vitest'
import { findLongestWord } from './longestWord'

describe("findLongestWord() function", () => {
    it('Returns the longest word from the supplied sentence', () => {
        expect(findLongestWord("a game of thrones")).toBe("thrones")
    })
    it('Returns the longest word from the supplied sentence', () => {
        expect(findLongestWord("congratulations on your new job")).toBe("congratulations")
    })
}) 
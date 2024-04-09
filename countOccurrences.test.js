import { describe, it, expect } from 'vitest'
import { countOccurences } from './countOccurrences'

describe("countOccurences() function", () => {
    it("returns h:1 e:1 y:1 when the word 'hey' is passed in", () => {
        expect(countOccurences("hey")).toStrictEqual({ h: 1, e: 1, y: 1 })

    })

    it("returns h:1 e:1 l:2 o:1 when the word 'hey' is passed in", () => {
        expect(countOccurences("hello")).toStrictEqual({ h: 1, e: 1, l: 2, o: 1 })
    })
})

import { expect, test } from 'vitest'
import { sum, calculateFactorial } from './challenge'

test('adds 1 + 2 to equal 3', () => {
    expect(sum(1, 2)).toBe(3)
})

test('factorial of 5 is 120', () => {
    expect(calculateFactorial(5)).toBe(120)
})
test('factorial of 10 is 3628800', () => {
    expect(calculateFactorial(10)).toBe(3628800)
})
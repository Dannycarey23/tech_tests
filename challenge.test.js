
import { expect, test } from 'vitest'
import { sum, calculateFactorial, calculateLeapYear, removeDuplicateCharacters, isIsogram } from './challenge'

test('adds 1 + 2 to equal 3', () => {
    expect(sum(1, 2)).toBe(3)
})

test('factorial of 5 is 120', () => {
    expect(calculateFactorial(5)).toBe(120)
})
test('factorial of 10 is 3628800', () => {
    expect(calculateFactorial(10)).toBe(3628800)
})

test('check if 2020 was a leap year', () => {
    expect(calculateLeapYear(2020)).toBe(true)
})

test('check that 2023 is not a leap year', () => {
    expect(calculateLeapYear(2023)).toBe(false)
})

test('check that 2022 is not a leap year', () => {
    expect(calculateLeapYear(2022)).toBe(false)
})

test('check that hello becomes helo', () => {
    expect(removeDuplicateCharacters("hello")).toBe("helo")
})

test('check that movement becomes movent', () => {
    expect(removeDuplicateCharacters("movement")).toBe("movent")
})

test('check that congratulatory becomes congratuly', () => {
    expect(removeDuplicateCharacters("congratulatory")).toBe("congratuly")
})

test('Confirm that diablo is an isogram', () => {
    expect(isIsogram("DiAblo")).toBe(true)
})
test('Confirm that deed is not an isogram', () => {
    expect(isIsogram("deed")).toBe(false)
})
test('Confirm that intestines is an isogram', () => {
    expect(isIsogram("intestines")).toBe(false)
})
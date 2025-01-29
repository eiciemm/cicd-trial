import { describe, test, expect } from '@jest/globals'
import { useCalculate } from './useCalculate'

const { add, subtract, multiple } = useCalculate()

describe('useCalculate', () => {
  test('add 1 + 2 to equal 3', () => {
    expect(add(1, 2)).toBe(3)
  })

  test('subtract 10 - 2 to equal 8', () => {
    expect(subtract(10, 2)).toBe(8)
  })

  test('subtract 15 * 2 to equal 30', () => {
    expect(multiple(15, 2)).toBe(30)
  })
})

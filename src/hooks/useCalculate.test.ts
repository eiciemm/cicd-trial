import { describe, test, expect } from '@jest/globals'
import { useCalculate } from './useCalculate'

const { add, subtract } = useCalculate()

describe('useCalculate', () => {
  test('add 1 + 2 to equal 3', () => {
    expect(add(1, 2)).toBe(3)
  })

  test('subtract 10 - 2 to equal 8', () => {
    expect(subtract(10, 2)).toBe(8)
  })
})

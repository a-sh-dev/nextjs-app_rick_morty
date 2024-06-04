import { render, screen } from '@testing-library/react'
import { expect, test } from 'vitest'
import Info from './page'

test('Info page', () => {
  render(<Info />)
  expect(screen.getByText('Information')).toBeDefined()
  // expect(screen.getByRole('heading', { level: 1, name: 'Home' })).toBeDefined()
})

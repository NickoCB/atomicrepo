import { act, fireEvent, render, screen } from '@testing-library/react'
import userEvent from '@testing-library/user-event'
import '@testing-library/jest-dom'
import { Button } from '.'

const mockOnClick = jest.fn()
const TestComponent = <Button text="Click me" onClick={mockOnClick} />

describe('Button', () => {
  it('renders Button', () => {
    render(TestComponent)
  })
  it('Button has text', () => {
    render(TestComponent)
    expect(screen.getByRole('button')).toHaveTextContent('Click me')
  })
  it('Button has onClick', async () => {
    await render(TestComponent)
    await userEvent.click(screen.getByRole('button'))
    expect(mockOnClick).toHaveBeenCalled()
  })
})
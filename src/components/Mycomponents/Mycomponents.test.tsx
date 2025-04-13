import { render, screen } from '@testing-library/react'
import { Mycomponents } from '.'

describe('Mycomponents', () => {
  it('should render a heading', () => {
    render(<Mycomponents />)

    expect(screen.getByRole('heading', { level: 1 })).toBeInTheDocument()
  })
})

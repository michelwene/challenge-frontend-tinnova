import { screen } from '@testing-library/react'

import { render } from 'src/@context'

import { Button } from '.'

import '@testing-library/jest-dom'

const renderComponent = () => {
  return render(<Button>Test</Button>)

}

describe('Button component', () => {
  it('should render button component', () => {
    renderComponent()

    expect(screen.getByRole('button')).toBeInTheDocument()
  })
})
import { screen } from '@testing-library/react'
import type { ComponentProps } from 'react'

import { render } from 'src/@context'

import { Button } from '.'

import '@testing-library/jest-dom'

const renderComponent = (props?: ComponentProps<typeof Button>) => {
  return render(<Button {...props}>Test</Button>)
}

describe('Button component', () => {
  it('should render button component', () => {
    renderComponent()

    expect(screen.getByRole('button')).toBeInTheDocument()
  })

  it('should render button component with text', () => {
    renderComponent()

    expect(screen.getByText('Test')).toBeInTheDocument()
  })

  it('should render button component circle shape', () => {
    renderComponent({
      shape: 'circle',
    })

    expect(screen.getByRole('button')).toHaveStyle('border-radius: 50%')
  })

  it('should render button component default shape', () => {
    renderComponent({
      shape: 'default',
    })

    expect(screen.getByRole('button')).toHaveStyle('border-radius: 8px')
  })

  it('should render button component round shape', () => {
    renderComponent({
      shape: 'round',
    })

    expect(screen.getByRole('button')).toHaveStyle('border-radius: 32px')
  })
})

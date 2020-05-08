import React from 'react'
import ShallowRenderer from 'react-test-renderer/shallow'

// import components
import Home from '../components/HomePage'

describe('the Home component', () => {
  it('matches previous snapshot', () => {
    const renderer = new ShallowRenderer()
    renderer.render(<Home />)
    const output = renderer.getRenderOutput()
    expect(output).toMatchSnapshot()
  })
})

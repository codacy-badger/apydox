import React from 'react'
import { mount } from 'enzyme'
import { MemoryRouter } from 'react-router'
import { act } from 'react-test-renderer'

import Sidebar from './Sidebar'
import { ListIcon } from './sidebar.styles'

describe('Sidebar', (): void => {
  /* let container: HTMLDivElement
  beforeEach(
    (): void => {
      container = document.createElement('div')
      document.body.appendChild(container)
    }
  ) */
  it('Should render without crashing', (): void => {
    const wrapper = mount(<Sidebar match="" />)
    expect(wrapper.find('div').length).toBeGreaterThan(0)
  })

  it("Should show when the user's mouse enters the sidebar", (): void => {
    const wrapper = mount(<Sidebar match="" />)
    act(
      (): void => {
        wrapper.simulate('mouseenter', {})
      }
    )
    expect(wrapper).toHaveStyleRule('left', '0')
    expect(wrapper.find(ListIcon)).toHaveStyleRule('opacity', '0')
  })

  it("Should hide when the user's mouse exits the sidebar", (): void => {
    const wrapper = mount(<Sidebar match="" />)
    act(
      (): void => {
        wrapper.simulate('mouseleave', {})
      }
    )
    expect(wrapper).toHaveStyleRule('left', '-192px')
    expect(wrapper.find(ListIcon)).toHaveStyleRule('opacity', '1')
  })

  it('Should hide when user selects a service from the menu', () => {
    <MemoryRouter>
      <Sidebar />
    <MemoryRouter />
  })
})

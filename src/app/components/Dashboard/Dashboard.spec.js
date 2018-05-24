import React from 'react'
import { shallow } from 'enzyme'
import Dashboard from './Dashboard'
import DonutChart from '../DonutChart/DonutChart'

describe('Dashboard', () => {
  let wrapper
  beforeEach(() => {
    wrapper = shallow(<Dashboard />)
  })

  it('renders Dashboard', () => {
    expect(wrapper.exists()).toBe(true)
  })

  it('renders DonutChart component', () => {
    expect(wrapper.find(DonutChart)).toHaveLength(1)
  })
})
import * as renderer from 'react-test-renderer'
import React from 'react'
import Icon from '../icon'
import { mount } from 'enzyme'

describe('icon', () => {
  it('render successfully', () => {
    const json = renderer.create(<Icon name="wechat" />).toJSON()
    expect(json).toMatchSnapshot()
  })

  it('onclick', () => {
    const fn = jest.fn()
    const c = mount(<Icon name="wechat" onClick={fn} />)
    c.find('svg').simulate('click')
    expect(fn).toBeCalled()
  })
})

import React from 'react'
import {describe, it} from 'mocha'
import {shallow} from 'enzyme'
import {expect} from 'chai'
import sinon from 'sinon'

import {{pascalCase name}} from '../'

describe('{{pascalCase name}}', () => {
  it('renders a title', () => {
    const subject = shallow(<{{pascalCase name}} title='Test Title' />)
    expect(subject.text()).to.eql('Test Title')
  })

  it('fires an onClick handler', () => {
    const spyClick = sinon.spy()
    const subject = shallow(<{{pascalCase name}} onClick={spyClick} />)
    subject.simulate('click')
    expect(spyClick.callCount).to.equal(1)
  })
})

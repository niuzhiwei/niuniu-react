import renderer  from 'react-test-renderer'
import Button from '../button'
import React from 'react'
describe('button ',()=>{
    it('is div',()=>{
     const json =  renderer.create(<Button></Button>).toJSON()
     expect(json).toMatchSnapshot()
    })
})
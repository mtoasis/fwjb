import React from 'react'
import { shallow } from 'enzyme'
import Header from './header.component'

describe('Header component', () => {

    let wrapper;
    beforeEach(() => {
        wrapper = shallow(<Header />);
    })

    it('should render Header component', () => {
        expect(wrapper).toMatchSnapshot();
    })
})


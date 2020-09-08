import React from 'react'
import { shallow, mount } from 'enzyme'
import * as SearchBar from './search-bar.component'
import { mockStore } from '../../redux/mock-store'

describe('Search-bar component', () => {
    let wrapper;
    let mockImportUserlistStart;
    let store;

    beforeEach(() => {
        mockImportUserlistStart = jest.fn();
        store = mockStore();
        wrapper = shallow(<SearchBar store={store}/>);
    });

    it('should render Search-bar component', () => {              
        expect(wrapper).toMatchSnapshot();
    })

    it('should handle change search term on input change', ()=>{

        const setSearchTerm = jest.fn();
        const newWrapper = mount(<SearchBar onChange={setSearchTerm}/>);
        const handleChange = jest.spyOn(React, 'useState');
        handleChange.mockImplementation(searchTerm => [searchTerm, setSearchTerm]);

        newWrapper.find('FormInputContainer').simulate('change');
        expect(setSearchTerm).toBeTruthy();

    })
})
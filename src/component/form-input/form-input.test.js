import React from 'react';
import FormInput from './form-input.component';
import { shallow } from 'enzyme'


describe('Form-input', () => {
 
    let wrapper;
    let mockHandleChange = jest.fn()

    beforeEach(() => {
        const mockProps = {
            label: 'name',
            value: 'Julian',
            handleChange: mockHandleChange
        };
        wrapper = shallow(<FormInput {...mockProps} />)
    })


    it('should render the form-input component', ()=>{
        expect(wrapper).toMatchSnapshot();
    })

    it('should call handleChange when input changes', ()=>{
        wrapper.find('FormInputContainer').simulate('change');
        expect(mockHandleChange).toHaveBeenCalled();
    })    

 
    it('should show the label if there is a lable', ()=>{
        expect(wrapper.exists('FormInputLabelContainer')).toBe(true);
    })

    it('should not show the label if there is no lable', ()=>{
        const mockNewProps = {
            label: '',
            value: 'Julian',
            handleChange: mockHandleChange
        };
        const newWrapper = shallow(<FormInput {...mockNewProps} />)
        expect(newWrapper.exists('FormInputLabelContainer')).toBe(false);
    })

})
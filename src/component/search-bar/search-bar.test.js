import React from "react";
import { shallow, mount } from "enzyme";
import SearchBar from "./search-bar.component";
import { mockStore } from "../../redux/mock-store";
import { Provider } from "react-redux";
import * as Search from './search-bar.component';

describe("Search-bar component", () => {
  let wrapper;
  let mockImportUserlistStart;
  let store;

  beforeEach(() => {
    mockImportUserlistStart = jest.fn();
    store = mockStore();
    wrapper = mount(
      <Provider store={store}>
        <SearchBar />
      </Provider>
    );

  });

  it("should render Search-bar component", () => {
    expect(wrapper).toMatchSnapshot();
  });

  it('should handle change search term on input change', ()=>{

      const setSearchTerm = jest.fn();
      const newWrapper = mount(
        <Provider store={store}>
          <SearchBar onChange={setSearchTerm}/>
        </Provider>
      );;
      const handleChange = jest.spyOn(React, 'useState');
      handleChange.mockImplementation(searchTerm => [searchTerm, setSearchTerm]);
      newWrapper.find('FormInputContainer').simulate('change');
    // console.log(handleChange.mockImplementation(searchTerm => [searchTerm, setSearchTerm]))
      expect(setSearchTerm).toBeTruthy();
//   }
    //   expect(setSearchTerm).toBeFalsy();

  })
// it('should handle change search term on input change', ()=>{
//     //const mockInput = 'a'
//     //expect(Search.handleChange(mockInput)).toEqual('a')
// })
});

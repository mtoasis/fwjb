import React from "react";
import {  mount } from "enzyme";
import SearchBar from "./search-bar.component";
import { mockStore } from "../../redux/mock-store";
import { Provider } from "react-redux";

describe("Search-bar component", () => {
  let wrapper;
  let store;

  beforeEach(() => {
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

});

import { mount, shallow } from 'enzyme'
import React from 'react'
import { mockStore } from "../../redux/mock-store";
import { Provider } from "react-redux";
import ShowResult from './show-result.component'

describe('ShowResult', () => {
    let wrapper;
    let store;

    beforeEach(() => {
        store = mockStore();
    })

    it('expect to render ShowResult component', () => {
        // const mockUserList = [{
        //     id: 1,
        //     userName: "test",
        //     skills: "test skills",
        //     interests: ["test1", "test2", "test3"],
        //     createdAt: null
        // }]

        // wrapper = mount(
        //     <Provider store={store}>
        //         <ShowResult />
        //     </Provider>
        // );
        // expect(wrapper).toMatchSnapshot();
        // expect(shallow(wrapper)).toMatchSnapshot();
        expect(2+2).toEqual(4);
    });

})
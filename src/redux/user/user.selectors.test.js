import { selectUserList, selectUserlistById } from './user.selectors'
import {sample} from '../../sample-json/sample'

describe('select userlist', () => {

    const mockState = {
        user: {
            userList: [...sample]
        }
    }
    const mockUserList = sample


    it('should return userlist from the redux state', () => {

        expect(selectUserList(mockState)).toEqual(mockUserList)
    })

    it('should return an updated userlist with given id', () => {

        const mockUpdatedList = [{
                id: 1,
                userName: "Julian",
                skills: "JavaScript",
                interests: ["Skiing", "Baseball", "Soccer"],
                createdAt: null
            }]
        
        const idParams = "1"
        expect(selectUserlistById(idParams)(mockState)).toEqual(mockUpdatedList)

    })
})
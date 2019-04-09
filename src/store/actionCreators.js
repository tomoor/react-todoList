import { CHANGE_INPUT_VALUE, ADD_TODO_ITEM, DELETE_TODO_ITEM, INIT_LIST_ACTION} from './actionTypes'
import Axios from 'axios'

export const getInputChange = (value) => ({
    type: CHANGE_INPUT_VALUE,
    inputValue: value
})

export const getAddItemAction = () => ({
    type: ADD_TODO_ITEM
})

export const getItemDeleteAction = (index) => ({
    type: DELETE_TODO_ITEM,
    index: index
})

export const InitListAction = (data) => ({
    type: INIT_LIST_ACTION,
    data
})

export const getTodoList = () => {
    return (dispatch) => {
        Axios.get('/api/todoList')
        .then((res) => {
            const data = res.data;
            const action = InitListAction(data)
            dispatch(action)
        })
    }
}
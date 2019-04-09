import React,{ Component } from 'react'
import "antd/dist/antd.css";
import TodoListUI from './TodoListUI.js'
import store from './store/index.js';
import { getInputChange, getAddItemAction, getItemDeleteAction, getTodoList } from './store/actionCreators'

class TodoList extends Component {

    constructor(props) {
        super(props);
        this.state = store.getState();
        this.handleStoreChange = this.handleStoreChange.bind(this);
        this.handleBtnClick= this.handleBtnClick.bind(this);
        this.handleItemDelete = this.handleItemDelete.bind(this);
        this.handleInputChange = this.handleInputChange.bind(this);
        store.subscribe(this.handleStoreChange);
    }

    componentDidMount() {
        const action = getTodoList();
        console.log(action);
        store.dispatch(action);
    }

    render() {
        return (
            <TodoListUI 
                inputValue = {this.state.inputValue}
                list = {this.state.list}
                handleBtnClick = {this.handleBtnClick}
                handleItemDelete = {this.handleItemDelete}
                handleInputChange = {this.handleInputChange}
            />
        )
    }

    handleStoreChange() {
        this.setState(store.getState())
    }

    handleInputChange(e) {
        const value = e.target.value;
        const action = getInputChange(value)
        store.dispatch(action);
    }

    handleBtnClick() {
        const action = getAddItemAction();
        store.dispatch(action);
    }

    handleItemDelete(index) {
        const action = getItemDeleteAction(index)
        store.dispatch(action);
    }
}

export default TodoList;
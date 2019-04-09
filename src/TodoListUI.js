import React from 'react'
import { Input, Button, List } from 'antd'

const TodoListUI = (props) => {
    return (
        <div style={{marginLeft:'10px'}}>
            <div>
                <Input placeholder="Basic usage" value={props.inputValue} onChange={props.handleInputChange}
                    style={{width:'300px',marginRight:'10px', marginTop:'10px'}}/>
                <Button type="primary" onClick= {props.handleBtnClick}>保存</Button>
            </div>
            <div>
                <List
                    style={{width:'300px',marginTop:'10px'}}
                    bordered
                    dataSource={props.list}
                    renderItem={(item,index) => (<List.Item onClick= {() => props.handleItemDelete(index)}>{item}</List.Item>)}
                    />
            </div>
        </div>
    )
}
export default TodoListUI;
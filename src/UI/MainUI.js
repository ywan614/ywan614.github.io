import React ,{Fragment}from "react";
import 'antd/dist/antd.css'; 
import { Input,Button,List} from 'antd';
import '../css/mainUI.css'
const MainUI = (props)=>{
    return (
        <Fragment> 
            <div>
                <Input 
                    className = "text-input" 
                    placeholder = "type here" 
                    value = {props.input}
                    onChange = {props.inputOnChange}
                />
                <Button 
                    type = "primary" 
                    onClick = {props.addItem}
                >
                    submit
                </Button>
            </div>
        {/* 遍历list循环 */}
            <List
                className = "list-item"
                bordered
                dataSource={props.todos}
                renderItem={(item,index)=> (
                            <List.Item
                                actions=
                                {[               
                                    <Button
                                        className = "list-button"
                                        shape = "circle" 
                                        size = "small" 
                                        type = "danger"
                                        icon = "delete"
                                        ghost 
                                        onClick = {props.deleteItem.bind(this,index)}
                                    />
                                    
                                ]}
                            >
                                {item}
                            </List.Item>
                    
                )}
            />
            {/* <ul>
               {props.todos.map((item,index)=>{
                    return <div key = {index}>
                        <li >{item}<Button type = "danger" shape = "circle" size = "small" icon = "delete" ghost onClick = {props.deleteItem.bind(this,index)}/></li>
                        </div>
                })}
            </ul> */}
        </Fragment>
    )
}

export default MainUI;
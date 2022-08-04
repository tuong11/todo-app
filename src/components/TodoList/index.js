import { Col, Row, Input, Button, Select, Tag } from 'antd';
import Todo from '../Todo';
import { useDispatch, useSelector } from 'react-redux';
import {v4 as uuidv4} from 'uuid'
import { useRef, useState } from 'react';
import { todoRemainingSelector } from '../../redux/selectors';
import todoListSlice from '../../redux/reducers/todoListSlice';

export default function TodoList() {
  const [todoName, setTodoName] = useState('');
  const [priority, setPriority] = useState('Medium');
  const inputRref = useRef();

  const todoList = useSelector(todoRemainingSelector);

  const dispatch = useDispatch();

  const handleAddButton = () => {
    if(todoName.trim()){
      dispatch(todoListSlice.actions.addTodo({
        id: uuidv4(),
        name: todoName,
        priority: priority,
        completed: false
      }));
      setTodoName('');
      setPriority('Medium');
      inputRref.current.focus();
    }
  }
    

  const handleInputChange = (e) => {
    setTodoName(e.target.value);
  }

  const handlePriorityChange = (value) => {
    setPriority(value);
  }

  return (
    <Row style={{ height: 'calc(100% - 40px)' }}>
      <Col span={24} style={{ height: 'calc(100% - 40px)', overflowY: 'auto' }}>
        {todoList.map(todo => <Todo key={todo.id} id={todo.id} name={todo.name} priority={todo.priority} completed={todo.completed} />)}
      </Col>
      <Col span={24}>
        <Input.Group style={{ display: 'flex' }} compact>
          <Input
            ref={inputRref}
            value={todoName}
            onChange={handleInputChange}
          />
          <Select defaultValue="Medium" value={priority} onChange={handlePriorityChange}>
            <Select.Option value='High' label='High'>
              <Tag color='red'>High</Tag>
            </Select.Option>
            <Select.Option value='Medium' label='Medium'>
              <Tag color='blue'>Medium</Tag>
            </Select.Option>
            <Select.Option value='Low' label='Low'>
              <Tag color='gray'>Low</Tag>
            </Select.Option>
          </Select>
          <Button type='primary' onClick={handleAddButton}>
            Add
          </Button>
        </Input.Group>
      </Col>
    </Row>
  );
}

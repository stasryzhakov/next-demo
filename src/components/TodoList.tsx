import { memo, useCallback } from 'react';
import Todo, { TodoType } from './Todo/Todo';
import { Button, Col, Form, Input, Row } from 'antd';
import axios from 'axios';

export type TodoListType = {
    todos: TodoType[];
};

const TodoList = memo(({ todos }: TodoListType) => {
    console.log(todos);
    const onToggleDone = useCallback(e => {
        const { id, done } = e;
        console.log(id);
        axios.put(`http://localhost:3000/api/todos/${id}`, { done });
    }, []);

    return (
        <div>
            <Form onFinish={v => console.log(v)} size={'large'}>
                <Row>
                    <Col span={22}>
                        <Form.Item name={'todo'} rules={[{ required: true, message: 'You did not enter anything!' }]}>
                            <Input placeholder={'What to you need to do?'} />
                        </Form.Item>
                    </Col>

                    <Col span={2}>
                        <Form.Item>
                            <Button htmlType="submit">Add</Button>
                        </Form.Item>
                    </Col>
                </Row>
            </Form>

            {todos.length ? (
                todos.map(todo => <Todo key={todo.id} todo={todo} onToggleDone={onToggleDone} />)
            ) : (
                <div>No todos yet</div>
            )}
        </div>
    );
});

export default TodoList;

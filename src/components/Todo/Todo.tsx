import { memo, useCallback } from 'react';
import styles from './Todo.module.scss';
import { Button, Tooltip } from 'antd';

export type TodoType = {
    id: number;
    todo: string;
    done: boolean;
};

export type TodoComponentType = {
    todo: TodoType;
    onToggleDone?: (todo: TodoType) => void;
};

const Todo = memo<TodoComponentType>(function Todo({ todo, onToggleDone }) {
    const onDelete = () => {
        console.log('onDelete');
    };

    const toggleDone = useCallback(() => {
        onToggleDone?.(todo);
    }, []);

    return (
        <div className={styles.host}>
            <div className={styles.todo}>{todo.todo}</div>

            <Button
                size={'large'}
                type={todo.done ? 'default' : 'primary'}
                danger={todo.done}
                className={styles.done}
                onClick={toggleDone}
            >
                {todo.done ? 'Undone' : 'Done'}
            </Button>

            <Button size={'large'} type="primary" danger={true} className={styles.delete} onClick={onDelete}>
                Delete
            </Button>
        </div>
    );
});

export default Todo;

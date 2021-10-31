import TodoList from '../../components/TodoList';
import { TodoType } from '../../components/Todo/Todo';
import axios from 'axios';

export type TodosPageType = {
    todos: TodoType[];
};

export default function TodosPage({ todos }: TodosPageType) {
    return (
        <>
            <h1>My Todos List</h1>
            <TodoList todos={todos} />
        </>
    );
}

export async function getServerSideProps() {
    const res = await axios.get('http://localhost:3000/api/todos');

    return {
        props: {
            todos: await res.data,
        },
    };
}

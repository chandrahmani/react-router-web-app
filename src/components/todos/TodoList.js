import "./style.css"

const TodoList = (props) => {
    const deleteTodo = (index) => {
        const newTodos = [...props.todos];
        newTodos.splice(index, 1);

        props.setTodos(newTodos);
    }

    const updateTodo = (index) => {
        props.todoInputRef.current.value = props.todos[index];
        props.setIsUpdate(true);
        props.setIndexArr(index);

    }

    return <div>
        <ul>
            {
                props.todos.map((todo, index) => <li key={index}>{todo}
                    <button className="edit" onClick={() => updateTodo(index)}>Edit</button>
                    <button className="dlt" onClick={() => deleteTodo(index)}>X</button>
                </li>)
            }
        </ul>
    </div>
}

export default TodoList; 
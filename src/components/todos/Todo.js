import { useRef, useState } from "react";
import TodoList from "./TodoList";
import FormTodo from "./FormTodo";

const Todo = () => {
    const myCars = ["Xuv500", "BMW", "Audi", "Hyundai", " Fortuner"]

    // immutability
    const [todos, setTodos] = useState(myCars);

    const [msg, setMsg] = useState("");

    const [isUpdate, setIsUpdate] = useState(false);
    const [indexArr, setIndexArr] = useState(0);

    // const [buttonText, setButtonText] = useState(false);



    const todoInputRef = useRef(null)

    const handelSubmit = (e) => {
        e.preventDefault();

        console.log(e.target)


        if (todoInputRef.current.value !== '') {
            if (!isUpdate) {
                setTodos([...todos, todoInputRef.current.value]); 
            }
            else {
                setTodos([...todos, todoInputRef.current.value])
                const todoV = [...todos];
                todoV[indexArr] = todoInputRef.current.value;
                setTodos([...todoV]);
                setIsUpdate(false)
            }
            todoInputRef.current.value = "";
            todoInputRef.current.focus();
            setMsg("")

        } else {
            setMsg("Enter Car Name")
        }
    }


    return <div>

        <h2>{msg}</h2>

        <FormTodo
            isUpdate={isUpdate}
            handelSubmit={handelSubmit} txt="text" placeholder="Enter your Car Name" todoInputRef={todoInputRef}>
        </FormTodo>

        <TodoList
            todos={todos} setTodos={setTodos} setIsUpdate={setIsUpdate} setIndexArr={setIndexArr} todoInputRef={todoInputRef}>
        </TodoList>
    </div>
}

export default Todo;
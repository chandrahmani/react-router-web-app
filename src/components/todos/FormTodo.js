
const FormTodo = (props) => {
    const todoInputRef = props.todoInputRef;
    const txt = props.text;
    const place = props.placeholder

    return <div>
        <form onSubmit={props.handelSubmit} >
            <input type={txt} placeholder={place} ref={todoInputRef} />
            <button type="submit" >{props.isUpdate ? 'Update' : 'Add'}</button>
        </form>
    </div>
}

export default FormTodo; 
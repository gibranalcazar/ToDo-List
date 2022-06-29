function TodoForm({todos, setTodos}){
    
    const [valueX, setValueX] = React.useState('');

    const addTodo = value2 => {
        const newTodos = [...todos, {text:value2, isCompleted: false}];
        setTodos(newTodos);
    }

    const handleSubmit= e => {
        e.preventDefault();
        if(!valueX) return;
        addTodo(valueX);
        setValueX('');
    };

    return(
        <form className="form" onSubmit={handleSubmit}>
            <input 
            type="text"
            className="input" 
            value={valueX} // This variable is gona save every change
            placeholder="Add ToDo..."
            onChange={e => setValueX(e.target.value)}
            ></input>
            <div className="subButton"><button onClick={handleSubmit}>Submit</button></div>
        </form>
    );
}


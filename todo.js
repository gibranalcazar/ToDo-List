function Todo({todos, setTodos}){

    const removeTodo= e => {
        const index = Number(e.target.id);
        let temp = [...todos];
        console.log(temp);
        temp.splice(index,1);
        setTodos(temp);
    }
    
    return(
        todos.map((todo,i) => <div className="todo" id={i}  key={i} >{`${todo.text}`} <span id={i} onClick={removeTodo}>{`[x]`}</span> </div>)
    )
}
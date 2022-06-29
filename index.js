function App(){
    const [todos, setTodos] = React.useState([  //Here we are gonna write our initial state
        {
            text: 'Learn react',
            isCompleted: false,
        },
        {
            text: 'Meet friend for lunch',
            isCompleted: false,
        },
        {
            text: 'Build todo app',
            isCompleted: false,
        },
        {
            text: 'Have fun!',
            isCompleted: false,
        }
    ]);

   
    return (
        <div className="app">
            <div className="todo-list">
                <Todo todos={todos} setTodos={setTodos}/>
            </div>
            <TodoForm todos={todos} setTodos={setTodos} />
        </div>
    );
}

ReactDOM.render(<App/>, document.getElementById("root"));


const initialState = [{
    id: 1,
    todo:"Aprender React",
    done: false
}]

const todoReducer =(state = initialState, action) =>{

return state
}

const newTodo ={
    id: 2,
    todo:"Aprender Redux",
    done: false
}

let todos = todoReducer()
todos = todoReducer(todos, )
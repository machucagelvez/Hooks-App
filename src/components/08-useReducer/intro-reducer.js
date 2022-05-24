// Estado inicial:
const initialState = [
  {
    id: 1,
    todo: 'Comprar pan',
    done: false,
  },
]

//Un reducer usualmente recibe dos argumentos: state y action (es la que modifica el state)
//Siempre retorna un nuevo estado
//No puede ser asíncrona, debe resolver con los argumentos que se le dan
const todoReducer = (state = initialState, action) => {
  if (action?.type === 'agregar') {
    return [...state, action.payload]
  }
  return state
}

//Inicialización:
let todos = todoReducer()

//Para agregar un nuevo objeto al reducer:
// No se puede usar array.push(). En general es mejor no usarlo en React porque modifica el estado
const newTodo = {
  id: 2,
  todo: 'Comprar leche',
  done: false,
}

//El objeto action tiene un elemento llamado type que es el que le dice al reducer que se va a hacer:
const agregarTodoAction = {
  type: 'agregar', //Puede ser cualquier nombre
  payload: newTodo, //Usualmente se llama payload al objeto que se va a enviar
}

//Se envía el estado y la acción al reducer para agregar el nuevo objeto:
todos = todoReducer(todos, agregarTodoAction)

console.log(todos)

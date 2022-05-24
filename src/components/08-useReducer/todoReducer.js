export const todoReducer = (state = [], action) => {
  switch (action.type) {
    case 'add':
      return [...state, action.payload]

    case 'delete':
      return state.filter((todo) => todo.id !== action.payload) //devuelve un array con todos los elementos que cumplan la condición todo.id !== action.payload

    case 'toggle':
      return state.map((todo) =>
        todo.id === action.payload ? { ...todo, done: !todo.done } : todo
      )

    default:
      return state
  }
}

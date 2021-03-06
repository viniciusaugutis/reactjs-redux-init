//Reducer vai ser sempre uma função. Ele é o cara que ouve sempre que uma action que o componente dispara
//state: como o estado está antes da alteração do reducer
//action: action para realizar a alteração solicitada. Possui o parametro type que é um id único.

const INITIAL_STATE = [
  { id: 1, text: 'Ir na academia' },
  { id: 2, text: 'Tomar café' },
];

export default function todos(state = INITIAL_STATE, action) {
  switch (action.type) {
    case 'ADD_TODO':
      return [...state, { id: Math.random(), text: action.payload.text }];
    case 'REMOVE_TODO':
      return state.filter(todo => todo.id !== action.payload.id);
    default:
      return state;
  }
}

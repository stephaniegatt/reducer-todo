export const initialState = [
    {
        item: 'Learn about reducers',
        completed: false,
        id: 3892987589
    },
    {
        item: 'Eat',
        completed: false,
        id: 3892987590
    },
    {
        item: 'Cry',
        completed: false,
        id: 3892987591
    },
    {
        item: 'Go to bed',
        completed: false,
        id: 3892987592
    },
];

export const reducer = (state, action) => {
    switch (action.type) {
        case "ADD_TODO":
            // console.log(new Date());
          return [...state, {
              item: action.payload,
              completed: false,
              id: new Date(),
          }]
        case "TOGGLE_COMPLETED":
            return state.map(todo => {
                const todoCopy = { ...todo }
                if (todoCopy.id === action.payload) {
                    todoCopy.completed = !todoCopy.completed;
                }
                return todoCopy;
            })
        case "CLEAR_COMPLETED":
            return state.filter(todo => {
                return !todo.completed; 
            })
        default:
          return state;
      }
}
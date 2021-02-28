const SETALLMENU = 'menu/SETALLMENU';

export const setallmenu = (new_list) => ({
  type: SETALLMENU,
  new_list,
});

const initialState = {
  allmenu: {
    menu01: [],
    menu02: [],
    menu03: [],
    menu04: [],
    menu05: [],
  },
};

function menus(state = initialState, action) {
  switch (action.type) {
    case SETALLMENU:
      return {
        ...state,
        allmenu: action.new_list,
      };

    // case CHANGE_INPUT:
    //   return {
    //     ...state,
    //     input: action.input,
    //   };
    // case INSERT:
    //   return {
    //     ...state,
    //     todos: state.todos.concat(action.todo),
    //   };

    // case TOGGLE:
    //   return {
    //     ...state,
    //     todos: state.todos.map((todo) =>
    //       todo.id === action.id ? { ...todo, done: !todo.done } : todo
    //     ),
    //   };

    // case REMOVE:
    //   return {
    //     ...state,
    //     todos: state.todos.filter((todo) => todo.id !== action.id),
    //   };

    default:
      return state;
  }
}

export default menus;

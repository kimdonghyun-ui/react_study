const SETALLMENU = 'menu/SETALLMENU';
const SETDATA = 'menu/SETDATA';

export const setallmenu = (new_list) => ({
  type: SETALLMENU,
  new_list,
});

export const setdata = (data) => ({
  type: SETDATA,
  data,
});

const initialState = {
  typemenu: [],
  allmenu: [],
};

function foodmenus(state = initialState, action) {
  switch (action.type) {
    case SETALLMENU:
      return {
        ...state,
        allmenu: action.new_list,
      };

    case SETDATA:
      return {
        ...state,
        typemenu: [
          ...state.typemenu,
          state.allmenu.filter((todo) => todo.type === action.data),
        ],
      };
    // case SETDATA:
    //   return {
    //     ...state,
    //     typemenu: state.allmenu.filter((todo) => todo.type === action.data),
    //   };
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

export default foodmenus;

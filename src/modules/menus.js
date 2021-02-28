const SETALLMENU = 'menu/SETALLMENU';
const TYPEMENU1 = 'menu/TYPEMENU1';
const TYPEMENU2 = 'menu/TYPEMENU2';
const TYPEMENU3 = 'menu/TYPEMENU3';
const TYPEMENU4 = 'menu/TYPEMENU4';
const TYPEMENU5 = 'menu/TYPEMENU5';

export const setallmenu = (new_list) => ({
  type: SETALLMENU,
  new_list,
});

export const typemenu1 = (type_data) => ({
  type: TYPEMENU1,
  type_data,
});
export const typemenu2 = (type_data) => ({
  type: TYPEMENU2,
  type_data,
});
export const typemenu3 = (type_data) => ({
  type: TYPEMENU3,
  type_data,
});
export const typemenu4 = (type_data) => ({
  type: TYPEMENU4,
  type_data,
});
export const typemenu5 = (type_data) => ({
  type: TYPEMENU5,
  type_data,
});

const initialState = {
  type_data1: [
    {
      id: 1,
      type: '기본',
      name: '기본',
      img:
        'http://bizvalley.co.kr/bt_templet/new_franchise02/images/sub/menu_img02.png',
      icon: '기본',
    },
  ],
  type_data2: [
    {
      id: 1,
      type: '기본',
      name: '기본',
      img:
        'http://bizvalley.co.kr/bt_templet/new_franchise02/images/sub/menu_img02.png',
      icon: '기본',
    },
  ],
  type_data3: [
    {
      id: 1,
      type: '기본',
      name: '기본',
      img:
        'http://bizvalley.co.kr/bt_templet/new_franchise02/images/sub/menu_img02.png',
      icon: '기본',
    },
  ],
  type_data4: [
    {
      id: 1,
      type: '기본',
      name: '기본',
      img:
        'http://bizvalley.co.kr/bt_templet/new_franchise02/images/sub/menu_img02.png',
      icon: '기본',
    },
  ],
  type_data5: [
    {
      id: 1,
      type: '기본',
      name: '기본',
      img:
        'http://bizvalley.co.kr/bt_templet/new_franchise02/images/sub/menu_img02.png',
      icon: '기본',
    },
  ],
  allmenu: [
    {
      id: 1,
      type: '기본',
      name: '기본',
      img:
        'http://bizvalley.co.kr/bt_templet/new_franchise02/images/sub/menu_img02.png',
      icon: '기본',
    },
  ],
};

function menus(state = initialState, action) {
  switch (action.type) {
    case SETALLMENU:
      return {
        ...state,
        allmenu: action.new_list,
      };

    case TYPEMENU1:
      return {
        ...state,
        type_data1: state.allmenu.filter(
          (menus) => menus.type === action.type_data,
        ),
      };
    case TYPEMENU2:
      return {
        ...state,
        type_data2: state.allmenu.filter(
          (menus) => menus.type === action.type_data,
        ),
      };
    case TYPEMENU3:
      return {
        ...state,
        type_data3: state.allmenu.filter(
          (menus) => menus.type === action.type_data,
        ),
      };
    case TYPEMENU4:
      return {
        ...state,
        type_data4: state.allmenu.filter(
          (menus) => menus.type === action.type_data,
        ),
      };
    case TYPEMENU5:
      return {
        ...state,
        type_data5: state.allmenu.filter(
          (menus) => menus.type === action.type_data,
        ),
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

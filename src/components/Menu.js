import React, { useEffect } from 'react';
import Layout from './common/Layout';

import { connect } from 'react-redux';
import {
  setallmenu,
  typemenu1,
  typemenu2,
  typemenu3,
  typemenu4,
  typemenu5,
} from '../modules/menus';

import Divider from '@material-ui/core/Divider';

const Menu = ({
  allmenu,
  setallmenu,
  typemenu1,
  typemenu2,
  typemenu3,
  typemenu4,
  typemenu5,
  type_data1,
  type_data2,
  type_data3,
  type_data4,
  type_data5,
}) => {
  useEffect(() => {
    console.log('초기 데이터 넣기');
    setallmenu([
      {
        id: 1,
        type: '떡볶이',
        name: '치즈떡볶이',
        img:
          'http://bizvalley.co.kr/bt_templet/new_franchise02/images/sub/menu_img02.png',
        icon: 'NEW',
      },
      {
        id: 2,
        type: '떡볶이',
        name: '짜장떡볶이',
        img:
          'http://bizvalley.co.kr/bt_templet/new_franchise02/images/sub/menu_img02.png',
        icon: 'HOT',
      },
      {
        id: 3,
        type: '튀김',
        name: '고구마튀김',
        img:
          'http://bizvalley.co.kr/bt_templet/new_franchise02/images/sub/menu_img02.png',
        icon: 'HOT',
      },
      {
        id: 4,
        type: '튀김',
        name: '야채튀김',
        img:
          'http://bizvalley.co.kr/bt_templet/new_franchise02/images/sub/menu_img02.png',
        icon: 'nomal',
      },
      {
        id: 5,
        type: '순대와어묵',
        name: '순대1',
        img:
          'http://bizvalley.co.kr/bt_templet/new_franchise02/images/sub/menu_img02.png',
        icon: 'nomal',
      },
      {
        id: 6,
        type: '김밥',
        name: '치즈김밥',
        img:
          'http://bizvalley.co.kr/bt_templet/new_franchise02/images/sub/menu_img02.png',
        icon: 'nomal',
      },
      {
        id: 7,
        type: '음료',
        name: '사이다',
        img:
          'http://bizvalley.co.kr/bt_templet/new_franchise02/images/sub/menu_img02.png',
        icon: 'nomal',
      },
    ]);
    typemenu1('떡볶이');
    typemenu2('튀김');
    typemenu3('순대와어묵');
    typemenu4('김밥');
    typemenu5('음료');
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return (
    <div>
      <Layout>
        <h1>메뉴</h1>
        <div>
          {type_data1.map((types, index) => (
            <div key={types.id}>
              {index === 0 && <h2>{types.type}</h2>}
              <div>
                <span>{types.icon}</span>
                <img src={types.img} alt={types.name} />
                <p>{types.name}</p>
              </div>
            </div>
          ))}
          <Divider />

          {type_data2.map((types, index) => (
            <div key={types.id}>
              {index === 0 && <h2>{types.type}</h2>}
              <div>
                <span>{types.icon}</span>
                <img src={types.img} alt={types.name} />
                <p>{types.name}</p>
              </div>
            </div>
          ))}
          <Divider />

          {type_data3.map((types, index) => (
            <div key={types.id}>
              {index === 0 && <h2>{types.type}</h2>}
              <div>
                <span>{types.icon}</span>
                <img src={types.img} alt={types.name} />
                <p>{types.name}</p>
              </div>
            </div>
          ))}
          <Divider />

          {type_data4.map((types, index) => (
            <div key={types.id}>
              {index === 0 && <h2>{types.type}</h2>}
              <div>
                <span>{types.icon}</span>
                <img src={types.img} alt={types.name} />
                <p>{types.name}</p>
              </div>
            </div>
          ))}
          <Divider />

          {type_data5.map((types, index) => (
            <div key={types.id}>
              {index === 0 && <h2>{types.type}</h2>}
              <div>
                <span>{types.icon}</span>
                <img src={types.img} alt={types.name} />
                <p>{types.name}</p>
              </div>
            </div>
          ))}
          <Divider />
        </div>
      </Layout>
    </div>
  );
};

const mapStateToProps = (state) => ({
  allmenu: state.menus.allmenu,
  type_data1: state.menus.type_data1,
  type_data2: state.menus.type_data2,
  type_data3: state.menus.type_data3,
  type_data4: state.menus.type_data4,
  type_data5: state.menus.type_data5,
});
const mapDispatchToProps = (dispatch) => ({
  setallmenu: (val) => {
    dispatch(setallmenu(val));
  },
  typemenu1: (val) => {
    dispatch(typemenu1(val));
  },
  typemenu2: (val) => {
    dispatch(typemenu2(val));
  },
  typemenu3: (val) => {
    dispatch(typemenu3(val));
  },
  typemenu4: (val) => {
    dispatch(typemenu4(val));
  },
  typemenu5: (val) => {
    dispatch(typemenu5(val));
  },
});

export default connect(mapStateToProps, mapDispatchToProps)(Menu);

import React, { useEffect } from 'react';
import Layout from './common/Layout';

import { connect } from 'react-redux';
import { setallmenu } from '../modules/menus';

import Divider from '@material-ui/core/Divider';

const Menu = ({ allmenu, setallmenu }) => {
  useEffect(() => {
    console.log('초기 데이터 넣기');
    setallmenu({
      //떡볶이
      menu01: [
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
      ],
      //튀김
      menu02: [
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
      ],
      //순대와어묵
      menu03: [
        {
          id: 5,
          type: '순대와어묵',
          name: '순대1',
          img:
            'http://bizvalley.co.kr/bt_templet/new_franchise02/images/sub/menu_img02.png',
          icon: 'nomal',
        },
      ],
      //김밥
      menu04: [
        {
          id: 6,
          type: '김밥',
          name: '치즈김밥',
          img:
            'http://bizvalley.co.kr/bt_templet/new_franchise02/images/sub/menu_img02.png',
          icon: 'nomal',
        },
      ],
      //음료
      menu05: [
        {
          id: 7,
          type: '음료',
          name: '사이다',
          img:
            'http://bizvalley.co.kr/bt_templet/new_franchise02/images/sub/menu_img02.png',
          icon: 'nomal',
        },
      ],
    });

    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return (
    <div>
      <Layout>
        <h1>메뉴</h1>
        <div>
          {allmenu.menu01.map((alls, index) => (
            <div key={alls.id}>
              {index === 0 && <h2>{alls.type}</h2>}
              <div>
                <span>{alls.icon}</span>
                <img src={alls.img} alt={alls.name} />
                <p>{alls.name}</p>
              </div>
            </div>
          ))}

          <Divider />

          {allmenu.menu02.map((alls, index) => (
            <div key={alls.id}>
              {index === 0 && <h2>{alls.type}</h2>}
              <div>
                <span>{alls.icon}</span>
                <img src={alls.img} alt={alls.name} />
                <p>{alls.name}</p>
              </div>
            </div>
          ))}

          <Divider />

          {allmenu.menu03.map((alls, index) => (
            <div key={alls.id}>
              {index === 0 && <h2>{alls.type}</h2>}
              <div>
                <span>{alls.icon}</span>
                <img src={alls.img} alt={alls.name} />
                <p>{alls.name}</p>
              </div>
            </div>
          ))}

          <Divider />

          {allmenu.menu04.map((alls, index) => (
            <div key={alls.id}>
              {index === 0 && <h2>{alls.type}</h2>}
              <div>
                <span>{alls.icon}</span>
                <img src={alls.img} alt={alls.name} />
                <p>{alls.name}</p>
              </div>
            </div>
          ))}

          <Divider />

          {allmenu.menu05.map((alls, index) => (
            <div key={alls.id}>
              {index === 0 && <h2>{alls.type}</h2>}
              <div>
                <span>{alls.icon}</span>
                <img src={alls.img} alt={alls.name} />
                <p>{alls.name}</p>
              </div>
            </div>
          ))}
        </div>
      </Layout>
    </div>
  );
};

const mapStateToProps = (state) => ({
  allmenu: state.menus.allmenu,
});
const mapDispatchToProps = (dispatch) => ({
  setallmenu: (val) => {
    dispatch(setallmenu(val));
  },
});

export default connect(mapStateToProps, mapDispatchToProps)(Menu);

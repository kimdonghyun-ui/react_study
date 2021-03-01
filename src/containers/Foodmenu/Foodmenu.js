import React, { useEffect } from 'react';
import Layout from '../../components/common/Layout';

import { connect } from 'react-redux';
import { setallmenu, setdata } from '../../modules/foodmenus';

import Divider from '@material-ui/core/Divider';

const Foodmenu = ({ allmenu, typemenu, setallmenu, setdata }) => {
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

    setdata('떡볶이');
    setdata('튀김');
    setdata('순대와어묵');
    setdata('김밥');
    setdata('음료');

    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return (
    <div>
      <Layout>
        <h1>메뉴</h1>
        <div>
          {typemenu.map((typs, index) => (
            <div key={index}>
              {typs.map((alls, index) => (
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
            </div>
          ))}
        </div>
      </Layout>
    </div>
  );
};

const mapStateToProps = (state) => ({
  allmenu: state.foodmenus.allmenu,
  typemenu: state.foodmenus.typemenu,
});
const mapDispatchToProps = (dispatch) => ({
  setallmenu: (val) => {
    dispatch(setallmenu(val));
  },
  setdata: (val) => {
    dispatch(setdata(val));
  },
});

export default connect(mapStateToProps, mapDispatchToProps)(Foodmenu);

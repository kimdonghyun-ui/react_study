import React, { useEffect } from 'react';
import Layout from "../../components/common/Layout";
import { setallmenu } from '../../modules/foodmenus';
import { connect } from 'react-redux';

function Main({setallmenu}) {

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



    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);


  return (
    <div>
      <Layout>
        <h1>메인</h1>
      </Layout>
    </div>
  );
}


const mapDispatchToProps = (dispatch) => ({
  setallmenu: (val) => {
    dispatch(setallmenu(val));
  },
});

export default connect(null, mapDispatchToProps)(Main);

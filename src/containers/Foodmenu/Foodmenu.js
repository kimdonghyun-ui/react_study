import React, { useEffect, useState } from 'react';
import axios from 'axios';
import Layout from '../../components/common/Layout';
import Foodlist from './Foodlist';
import { connect } from 'react-redux';
import { setallmenu, remove } from '../../modules/foodmenus';

const Foodmenu = ({ allmenu, setallmenu, remove }) => {
  const [users, setUsers] = useState(null);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);

  const fetchUsers = async () => {
    try {
      // 요청이 시작 할 때에는 error 와 users 를 초기화하고
      setError(null);
      setUsers(null);
      // loading 상태를 true 로 바꿉니다.
      setLoading(true);
      const response = await axios.get('/react_data/data_menu.json');

      setUsers(response.data); // 데이터는 response.data 안에 들어있습니다.
      setallmenu(response.data);
    } catch (e) {
      setError(e);
    }
    setLoading(false);
  };

  useEffect(() => {
    fetchUsers();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  if (loading) return <div>로딩중..</div>;
  if (error) return <div>에러가 발생했습니다</div>;
  if (!users) return null;

  return (
    <div>
      <Layout>
        <h1>메뉴</h1>
        <Foodlist allmenu={allmenu} onRemove={remove} />
      </Layout>
    </div>
  );
};

const mapStateToProps = (state) => ({
  allmenu: state.foodmenus.allmenu,
});
const mapDispatchToProps = (dispatch) => ({
  setallmenu: (val) => {
    dispatch(setallmenu(val));
  },
  remove: (val) => {
    dispatch(remove(val));
  },
});

export default connect(mapStateToProps, mapDispatchToProps)(Foodmenu);

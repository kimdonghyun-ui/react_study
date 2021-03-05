import React from 'react';
import Layout from '../../components/common/Layout';
import Foodlist from './Foodlist';
import { connect } from 'react-redux';
import { remove } from '../../modules/foodmenus';



const Foodmenu = ({ allmenu, typemenu, setallmenu, setdata,remove }) => {




  return (
    <div>
      <Layout>
        <h1>메뉴</h1>
        <Foodlist typemenu={typemenu} allmenu={allmenu} onRemove={remove} />
      </Layout>
    </div>
  );
};

const mapStateToProps = (state) => ({
  allmenu: state.foodmenus.allmenu,
  typemenu: state.foodmenus.typemenu,
});
const mapDispatchToProps = (dispatch) => ({
  remove: (val) => {
    dispatch(remove(val));
  },
});

export default connect(mapStateToProps, mapDispatchToProps)(Foodmenu);

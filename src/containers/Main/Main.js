import React, { useEffect } from 'react';
import Layout from '../../components/common/Layout';

function Main({ setallmenu }) {
  useEffect(() => {
    console.log('메인시작');
  }, []);

  return (
    <div>
      <Layout>
        <h1>메인</h1>
      </Layout>
    </div>
  );
}

export default Main;

import React, { useEffect } from 'react';
import Layout from '../../components/common/Layout';
import Slider from 'react-slick';

function Main({ setallmenu }) {
  useEffect(() => {
    console.log('메인시작');
  }, []);

  var settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
  };

  return (
    <div>
      <Layout>
        <h1>메인</h1>
        <div
          style={{
            padding: '0 20%',
            position: 'relative',
            background: 'pink',
          }}
        >
          <Slider {...settings}>
            <div>
              <div
                style={{ width: '90%', height: '200px', background: 'blue' }}
              ></div>
            </div>
            <div>
              <div
                style={{ width: '90%', height: '200px', background: 'gold' }}
              ></div>
            </div>
          </Slider>
          <br />
          <br />
        </div>
      </Layout>
    </div>
  );
}

export default Main;

import React, { useEffect } from 'react';
import Layout from '../../components/common/Layout';
import Slider from 'react-slick';
import { makeStyles } from '@material-ui/core/styles';
import imgA from '../../images/main_img_01.jpg';
import imgB from '../../images/main_img_02.jpg';
import imgC from '../../images/main_img_03.jpg';

const useStyles = makeStyles((theme) => ({
  introduce: {
    boxSizing: 'border-box',
    padding: '45px 0 50px',
    backgroundSize: 'cover',
    backgroundColor: '#000',
    textAlign: 'center',
  },
  titleh2: {
    color: '#fff',
    display: 'inline-block',
    borderBottom: '2px #FFF solid',
    marginBottom: '10px',
    fontWeight: 'bold',
    margin: '0',
  },
  introText: {
    color: '#fff',
    fontSize: '13px',
    wordBreak: 'keep-all',
    width: '73%',
    margin: '0 auto',
  },
  bgD13: {
    background: '#d13030',
    padding: '3px',
    color: '#fff',
  },
  underlineFFF: {
    borderBottom: '1px #fff solid',
    fontWeight: '600',
  },
  introBtn: {
    color: 'red',
    '& a': {
      fontSize: '13px',
      color: '#fff',
      border: '2px #fff solid',
      boxSizing: 'border-box',
      width: '40%',
      height: '42px',
      textAlign: 'left',
      lineHeight: '42px',
      padding: '0 15px',
      display: 'inline-block',
    },
  },
  mR15: {
    color: 'blue',
    marginRight: '15px',
  },
}));

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

  const classes = useStyles();

  return (
    <div>
      <Layout>
        <h1>메인</h1>
        <div
          style={{
            padding: '0 1%',
            position: 'relative',
            background: 'pink',
          }}
        >
          <Slider {...settings}>
            <div>
              <div>
                <img src={imgA} />
              </div>
            </div>
            <div>
              <div>
                <img src={imgB} />
              </div>
            </div>
            <div>
              <div>
                <img src={imgC} />
              </div>
            </div>
            {/* <div>
              <div
                style={{ width: '90%', height: '200px', background: 'gold' }}
              ></div>
            </div> */}
          </Slider>
          <br />
          <br />
        </div>

        <div className={classes.introduce}>
          <div>
            <h2 className={classes.titleh2}>원효로떡볶이</h2>
            <br />
            <h2 className={classes.titleh2}>브랜드소개</h2>
          </div>

          <div className={classes.introText}>
            <p>
              한국인이 학창시절부터 가장 먼저 찾는 간식인
              <span className={classes.bgD13}>떡볶이와 튀김.</span>
              <br />
              그러나 떡볶이 매장은 거리마다 흔하디 흔하고 전문화된 떡볶이 체인
              브랜드도 우후죽순 많습니다.
            </p>
            <p>
              원효로떡볶이는 지난
              <span className={classes.underlineFFF}>
                3년간의 시장조사와 원자재 확보를 통해
              </span>
              <br />
              고객이 다시 찾게끔 만드는 '맛'과 차별화된 '관리'를 자신있게 준비할
              수 있었습니다.
            </p>
          </div>

          <div className={classes.introBtn}>
            <a href="#" className={classes.mR15}>
              브랜드 스토리
            </a>
            <a href="#">브랜드 경쟁력</a>
          </div>
        </div>
      </Layout>
    </div>
  );
}

export default Main;

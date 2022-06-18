import React from 'react';
import PropTypes from 'prop-types';

function Food({name, picture, rating}){
  return (
    <div>
      <h2>I like {name}</h2>;
      <h4>{rating}/5.0</h4>
      <img src ={picture} alt = {name}/>    
    </div>
  );
}

const foodILike =[
  {
    id : 1,
    name : 'Kimchi',
    image : 'https://search.pstatic.net/sunny/?src=https%3A%2F%2Fdnvefa72aowie.cloudfront.net%2Forigin%2Farticle%2F202205%2Feecc9ef435c79be6492a20c71433cfb794f46ae645823d87021b312ee0173357.webp%3Fq%3D95%26s%3D1440x1440%26t%3Dinside&type=sc960_832',
    rating : 5,
  },
  {
    id : 2,
    name : 'Samgyeopsal',
    image : 'https://search.pstatic.net/common/?src=http%3A%2F%2Fblogfiles.naver.net%2FMjAyMjA0MTlfMjc0%2FMDAxNjUwMzQxODk4OTY4.DXN25DrD83BCv6y3ddbHNyUgNAC-MDfGJCHRuuUJfeYg.XEPCzwlpYCdSvM3U6y6o7zuSFiTNoPVbEkZkLhGtOIQg.JPEG.dlsdo525%2F20220419%25A3%25DF131807.jpg&type=a340',
    rating : 4.9,
  },{
    id : 3,
    name : 'Bibimbap',
    image : 'https://search.pstatic.net/common/?src=http%3A%2F%2Fblogfiles.naver.net%2FMjAyMjA2MDNfMjA1%2FMDAxNjU0MjQzMTYzNDk2.dLtgFEw8nSBl-Wz6wgk4n0WsVtD0p0MLJxmLjFgP4TUg.qzW7UcCmGMJ8U-EA1rXlj-k47BcNQaCJmE-hC5Pq8J0g.JPEG.erty2345%2F20220601_115609.jpg&type=a340',
    rating : 4.8,
  },{
    id : 4,
    name : 'Doncasu',
    image : 'https://search.pstatic.net/common/?src=http%3A%2F%2Fblogfiles.naver.net%2FMjAyMjA1MjVfMjgz%2FMDAxNjUzNDgwNjg4NTM4.h2m7lxaKsPLSNpt1QWRVUUKFYzxqnjh5qcn0I5J-Vv4g.uXAFB7O8Jy0Xr9YZEzgQXkMzp5TNiHXuz_Ak1owKWaEg.JPEG.yeji7321%2F20220514_%25C3%25BB%25B8%25F1_%252814%2529_%25BA%25B9%25BB%25E7.jpg&type=a340',
    rating : 3.5,
  },{
    id : 5,
    name : 'Kimbap',
    image : 'https://search.pstatic.net/sunny/?src=https%3A%2F%2Fcdn.visitkorea.or.kr%2Fimg%2Fcall%3Fcmd%3DVIEW%26id%3Dd029f43b-71a4-45f2-a325-3c10dcb803a6&type=a340',
    rating : 3.0,
  },
];

function App() {
  return (
  <div>
    {foodILike.map(dish => (
    <Food key = {dish.id} name = {dish.name} picture ={dish.image} rating = {dish.rating}/>
    ))}
  </div>
  );
}

Food.propTypes = {
  name : PropTypes.string.isRequired,
  picture : PropTypes.string.isRequired,
  rating : PropTypes.number.isRequired,
};

export default App;

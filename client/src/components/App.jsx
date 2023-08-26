import React, { useState, useEffect } from 'react';
import ReactDOM from 'react-dom';
import axios from 'axios';
import RatingsReviews from './R&R/R&R.jsx';
import getProducts from '../../fetch.jsx';
import QA from './QA/QA.jsx';
import Overview from './Overview/Overview.jsx';
import RIC from './RI&C/RIC.jsx';
import HomePage from './HomePage/HomePage.jsx';

const App = () => {
  const [ productId, setProductId ] = useState(0);
  const [ clicked, setClicked ] = useState(false);
  const [outfitImage, setOutfitImage] = useState('');
  const [outfitInfo, setOutfitInfo] = useState();
  const [productRating, setProductRating] = useState(0);


  const goHome = (e) => {
    e.preventDefault();
    setClicked(false);
  };

  const handleClick = (id) => {
    setClicked(true);
    setProductId(id);
  };

  return (
    <div>
      <div className='header'>
        <p onClick={goHome}><u style={{cursor: 'pointer', marginLeft: '20px', fontSize: '24px'}}>Comic Sans</u></p>
      </div>
      {clicked ?
        (<div>
          <Overview id={productId} setOutfitImage={setOutfitImage} setOutfitInfo={setOutfitInfo}/>
          <RIC product_id={productId} setProductId={setProductId} outfitInfo={outfitInfo} outfitImage={outfitImage} productRating={productRating}/>
          <QA product_id={productId}/>
          <RatingsReviews id={37312} setProductRating={setProductRating}/>
        </div>) : (<HomePage set={handleClick}/>)
      }
    </div>
  );
};

export default App;
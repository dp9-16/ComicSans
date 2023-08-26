import { render } from '@testing-library/react';
import renderer from 'react-test-renderer';
import Overview from '../components/Overview/Overview.jsx';
import ProductInfo, { getRating } from '../components/Overview/ProductInfo.jsx';
import ImageView from '../components/Overview/ImageView.jsx';
import ProductStyles from '../components/Overview/ProductStyles.jsx';
import ProductSelection from '../components/Overview/ProductSelection.jsx';

import { average } from '../components/R&R/Helper.jsx';
var mockStyles = {
  "product_id": "37311",
  "results": [
      {
          "style_id": 220998,
          "name": "Forest Green & Black",
          "original_price": "140.00",
          "sale_price": null,
          "default?": true,
          "photos": [
              {
                  "thumbnail_url": ""
              }
          ],
          "skus": {
              "1281032": {
                  "quantity": 8,
                  "size": "XS"
              },
          }
      },
  ]
}
var mockProduct = {
  "id": 37311,
  "campus": "hr-rfe",
  "name": "Camo Onesie",
  "slogan": "Blend in to your crowd",
  "description": "The So Fatigues will wake you up and fit you in. This high energy camo will have you blending in to even the wildest surroundings.",
  "category": "Jackets",
  "default_price": "140.00"
}
describe('Overview main components render', () => {
  it('Overview Renders', () => {
    render(<Overview id={1} setOutfitImage={()=>{}} setOutfitInfo={()=>{}}/>);
  });
  it('ImagesView Renders', () => {
    render(<ImageView images={mockStyles.results[0]} />);
  });
  it('ProductInfo Renders', () => {
    render(<ProductInfo product={mockProduct} info={mockStyles.results[0]} />);
  });
  it('ProductStyles Renders', () => {
    render(<ProductStyles styles={mockStyles.results} style={0} setStyleIndex={()=>{}} />);
  });
  it('ProductSelection Renders', () => {
    render(<ProductSelection style={{skus:{a:'1'}}} />);
  });
});

describe('getRating', () => {
  it('calculates average rating correctly', async () => {

  });

  it('handles error gracefully', async () => {
    //jest.spyOn(global, 'getMetaReviews').mockRejectedValue(new Error('Failed to fetch'));

    // You can use try-catch or async/await with .rejects to test error cases
    //await expect(getMRating('123')).rejects.toThrow('Failed to fetch');
  });
});
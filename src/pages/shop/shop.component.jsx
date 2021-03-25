import React, { Component } from 'react';
import SHOP_DATA from './shopCollection';
import CollectionPreview from '../../components/collection-preview/colletion-preview.component';

import './shop.styles.scss';

class Shop extends Component {
  constructor(props){
    super(props);
    this.state = {
      collections: SHOP_DATA
    };
  }

  render(){
    const {collections} = this.state;
    return(
      <div className="shop-page">
        {
          collections.map(({id, ...otherProps}) => (
            <CollectionPreview key={id} {...otherProps} />
          ))
        }
      </div>
    )
  }
}

export default Shop;
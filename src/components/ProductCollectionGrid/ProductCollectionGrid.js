import React from 'react';
import * as styles from './ProductCollectionGrid.module.css';

import ProductCollection from '../ProductCollection';

const ProductCollectionGrid = (props) => {
  return (
    <div className={styles.root}>
      <ProductCollection
        image={'/collections/artworks-sAbZSnXBJsbDusRP-XmtA7A-t500x500.jpg'}
        title={'Digital'}
        text={'View NOW'}
        link={'/shop'}
      />
      <ProductCollection
        image={'/static/artworks-sAbZSnXBJsbDusRP-XmtA7A-t500x500.jpg'}
        title={'Physical'}
        text={'View NOW'}
        link={'/shop'}
      />
      <ProductCollection
        image={'/collections/collection1.png'}
        title={'Apparel'}
        text={'SHOP NOW'}
        link={'/shop'}
      />
      <ProductCollection
        image={'/collections/fabd80a453e230c80b3bda84f2c6f256.jpg'}
        title={'Statues&models'}
        text={'SHOP NOW'}
        link={'/shop'}
      />
    </div>
  );
};

export default ProductCollectionGrid;

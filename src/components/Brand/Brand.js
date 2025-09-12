import React from 'react';
import { navigate } from 'gatsby';

import * as styles from './Brand.module.css';

const Brand = (props) => {
  return (
    <div
      className={styles.root}
      role={'presentation'}
      onClick={() => navigate('/')}
    >
      <h4>Hertling</h4>

      <svg
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 122 24"
        role="img"
        aria-label="logo"
      >
        <path
          fill="currentColor"
          d="M14.14,11.84a38.37,38.37,0,0,0-3.26-2.05C9.73,9.13,8.81,8.57,8.13,8.1a7.8,7.8,0,0,1-1.7-1.64..."
        />
        {/* rest of your <path> elements here */}
      </svg>
    </div>
  );
};

export default Brand;

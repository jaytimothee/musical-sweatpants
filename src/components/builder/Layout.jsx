import React from 'react';
import ImageContainer from './ImageContainer';
import ContentContainer from './ContentContainer';
import CartBadge from './CartBadge';
import '../../css/Layout.css';

const Layout = () => {
  return (
    <div className="root">
      <CartBadge />
      <ImageContainer />
      <ContentContainer />
    </div >
  );
};

export default Layout;

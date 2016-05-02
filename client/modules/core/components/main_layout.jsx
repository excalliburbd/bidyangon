import React from 'react';
import Navigation from './navigation';

const Layout = ({content = () => null }) => (
  <div>
    <Navigation />
    <div>
      {content()}
    </div>
  </div>
);

export default Layout;

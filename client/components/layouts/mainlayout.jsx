import React from 'react';
import { Link } from 'react-router';

export default props => (
  <div>
    <nav className='navBar'>
      <span>
        <Link to='/home' activeClassName="active">HOME</Link>
      </span>
      <span> | </span>
      <span>
        <Link to='/upload' activeClassName="active">UPLOAD PHOTO</Link>
      </span>
      <span> | </span>
      <span>
        <Link to='/signin' activeClassName="active">SIGN OUT</Link>
      </span>
    </nav>
    <main>
      {props.children}
    </main>
  </div>
);
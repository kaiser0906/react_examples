import React from 'react';
import { Link } from 'react-router';

import './BlogLinks.css';


const BlogLinks = () => {
  return (
    <div className='blog-links'>
      <Link to='/blog/1'>1</Link>
      <Link to='/blog/2'>2</Link>
      <Link to='/blog/3'>3</Link>
      <Link to='/blog/4'>4</Link>
    </div>
  );
};


export default BlogLinks;

import React from 'react';
import BlogLinks from '../components/BlogLinks';


const Blogs = ({ children }) => {
  return (
    <div>
      <h1>Blogs</h1>
      <BlogLinks />
      { children }
    </div>
  );
};


export default Blogs;

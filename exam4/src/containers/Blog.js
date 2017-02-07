import React from 'react';


const Blog = ({ params }) => {
  return (
    <div>
      <h1>{ params.id }</h1>
    </div>
  );
};


export default Blog;

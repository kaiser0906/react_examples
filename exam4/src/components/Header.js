import React from 'react';
import { Link } from 'react-router';

import './Header.css';
import logo from '../logo.svg';


const MenuItem = ({ active, children, to }) => {
  return (
    <Link to={ to } className={ `menu-item ${active ? 'active' : ''}` }>
      { children }
    </Link>
  );
};


class Header extends React.Component {
  render() {
    const router = this.context.router;
    return (
      <div>
        <div className="logo">
          <img src={ logo } className="App-logo" alt="logo" />
        </div>
        <div className="menu">
          <MenuItem to={ '/' } active={ router.isActive('/', true) }>Home</MenuItem>
          <MenuItem to={ '/about' } active={ router.isActive('/about') }>About Us</MenuItem>
          <MenuItem to={ '/blog' } active={ router.isActive('/blog') }>Blog</MenuItem>
        </div>
      </div>
    );
  }
}


// const Header = (props, context) => {
//   const { router } = context;
//   return (
//     <div>
//       <div className="logo">
//         <img src={logo} className="App-logo" alt="logo" />
//       </div>
//       <div className="menu">
//         <MenuItem to={ '/' } active={ router.isActive('/', true) }>Home</MenuItem>
//         <MenuItem to={ '/about' } active={ router.isActive('/about') }>About Us</MenuItem>
//         <MenuItem to={ '/blog' } active={ router.isActive('/blog') }>Blog</MenuItem>
//       </div>
//     </div>
//   );
// };


Header.contextTypes = {
  router: React.PropTypes.object,
};


export default Header;

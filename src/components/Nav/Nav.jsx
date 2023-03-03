import React from 'react';
import Logo from '../../img/LogoHenry.png'
import SearchBar from '../SearchBar/SearchBar';
// import './Nav.css';

function Nav({onSearch}) {
  return (
    <div className='Nav'>
      <img src={Logo} alt="logo Henrry" />
      <SearchBar onSearch={onSearch}/>
    </div>
  );
};

export default Nav;
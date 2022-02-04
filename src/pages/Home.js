import React from 'react'
import './Home.css'
import {
  Link
} from "react-router-dom";
import AppsIcon from '@mui/icons-material/Apps';
import Avatar from '@mui/material/Avatar';
import Search from '../Search';
function Home() {
  return (
    <div className='home'>
      <div className='home__header'>
        <div className='home_headerLeft'>
            <Link to='/about'>
              About
            </Link>
            <Link to='/about'>
              About
            </Link>
            <Link to='/Store'>
              Store
            </Link>
        </div>
        <div className='home_headerRight'>
          <Link to='/Gmail'>
            Gmail
          </Link>
          <Link to='/Images'>
            Images
          </Link>
          <AppsIcon />
          <Avatar />
          </div>
      </div>

      <div className='home__body'>
        <img src="https://www.freepnglogos.com/uploads/google-logo-png/file-google-logo-svg-wikimedia-commons-23.png"/>
      </div>
      <div className='home__inputContainer'>
        <Search />
      </div>
    </div>
  )
}

export default Home

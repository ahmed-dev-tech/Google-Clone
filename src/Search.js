import React, { useState } from 'react'
import './Search.css'
import MicIcon from '@mui/icons-material/Mic';
import SearchIcon from '@mui/icons-material/Search';
import { Button } from '@mui/material';
import { useHistory } from 'react-router';
import { useStateValue } from './StateProvider';
import {actionTypes} from './reducer';

function Search({hideButtons=false}) {
    const [{},dispatch]=useStateValue();
    const [input,setInput]=useState("");
    const history = useHistory();
    const search = (e) => {
        e.preventDefault();
        console.log("hit");
        dispatch({
            type: actionTypes.SET_SEARCH_TERM,
            term: input
        })
        history.push('/search')
    }
  return (
    <form className='search'>
      <div className='search__input'>
        <SearchIcon />
          <input value={input} onChange={e => setInput(e.target.value)} />
        <MicIcon />   
      </div>
        {!hideButtons ? (
            <div className='search__buttons'>
            <Button type='submit' onClick={search} variant='outlined'>
              Google Search
            </Button>
            <Button variant='outlined'>
                I'm feeling Luckey 
            </Button>
        </div>
        ):
        <div className='search__buttons'>
          <Button className='search__buttonsHidden' type='submit' onClick={search} variant='outlined'>
            Google Search
          </Button>
          <Button className='search__buttonsHidden' variant='outlined'>
              I'm feeling Luckey 
          </Button>
      </div>
      }
      
    </form>
  )
}

export default Search

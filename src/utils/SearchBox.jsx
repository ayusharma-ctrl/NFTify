import React from 'react'
import { SampleContext } from '../App';

const SearchBox = () => {
  // accessing or destructuring props from context
  const { isXsScreen, setSearchInput, handleSearch } = React.useContext(SampleContext)

  // func to handle or invoke search request
  const handleClick = (event) =>{
    if(event.key === 'Enter'){
      handleSearch();
    }
  }

  return (
    <div>
      <input type="text" name="search" onKeyDown={handleClick} onChange={(e)=>setSearchInput(e.target.value)} className={isXsScreen ? 'searchBar searchBarXs' : 'searchBar'} placeholder='Search' />
    </div>
  )
}

export default SearchBox
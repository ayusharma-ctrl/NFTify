import './App.css'
import React from 'react';
import { useMediaQuery } from '@mui/material';

// component-imports
import Sidebar from './components/Sidebar'
import HeaderXs from './components/HeaderXs';
import Token from './components/Token'
import Pair from './components/Pair'
import axios from 'axios';

// creating context to share props
const SampleContext = React.createContext();

function App() {
  const isXsScreen = useMediaQuery('(max-width:767px)');
  const [selectedDiv, setSelectedDiv] = React.useState('div1');
  const [searchInput, setSearchInput] = React.useState('');
  const [isMenuOpen, setIsMenuOpen] = React.useState(false);
  const [fetchedData, setFetchedData] = React.useState([]);

  // func to handle of switch between Token & Pair tabs ( pair address, token address, token name or token symbol.)
  const handleDivClick = (divId) => {
    setSelectedDiv(divId);
    setIsMenuOpen(prev => !prev)
  };

  // func to handle search request for either a token address or any other query
  const handleSearch = async () => {
    // validation on text entered by the user
    if (searchInput.length < 1) {
      alert("Invalid Search. Please Enter a valid Token/Pair")
      return
    }
    // trimming the input string
    const updatedSearchText = searchInput.trim()
    // checking from which section we are making a search request
    if (selectedDiv === 'div1') {
      // if from div1 i.e., Token address
      try {
        const { data } = await axios.get(`https://api.dexscreener.com/latest/dex/tokens/${updatedSearchText}`)
        if (data) {
          if (data.pairs === null) {
            alert("No data found. Token address is invalid.")
            return
          }
          // sorting data as per Price in USD, descending order
          let response = data.pairs.sort((a, b) => b.priceUsd - a.priceUsd)
          // selecting only top 10 pairs
          if (response.length > 10) {
            response = response.slice(0, 10)
          }
          // updating state
          setFetchedData(response)
        }
      } catch (err) {
        console.log(err)
      }
    }
    // if from div2 i.e.,  pair address, token address, token name or token symbol
    else {
      try {
        const { data } = await axios.get(`https://api.dexscreener.com/latest/dex/search/?q=${updatedSearchText}`)
        if (data) {
          if (data.pairs === null) {
            alert("No data found.")
            return
          }
          let response = data.pairs.sort((a, b) => b.priceUsd - a.priceUsd)
          if (response.length > 10) {
            response = response.slice(0, 10)
          }
          setFetchedData(response)
        }
      } catch (err) {
        console.log(err)
      }
    }
  }

  return (
    <SampleContext.Provider value={{ isXsScreen, selectedDiv, fetchedData, handleDivClick, setSearchInput, handleSearch }}>
      <div className='main'>
        <div className='mainDiv'>
          <HeaderXs setIsMenuOpen={setIsMenuOpen} />
          {
            !isXsScreen ? <Sidebar isMenuOpenXs={true} /> : <Sidebar isMenuOpenXs={isMenuOpen} />
          }
          {
            selectedDiv === 'div1' ? <Token /> : <Pair />
          }
          <div className='footer'></div>
        </div>
      </div>
    </SampleContext.Provider>
  )
}

export default App
export { SampleContext }
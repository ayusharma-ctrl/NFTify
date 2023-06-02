import React from 'react'
import { SampleContext } from '../App'
import CardsCollection from '../utils/CardsCollection'

const Token = () => {
  const { isXsScreen, fetchedData } = React.useContext(SampleContext)

  return (
    <div>
      <span className={isXsScreen ? 'heading headingXs' : 'heading'}>Token Search Result</span>
      <div className='cardsDiv'>
          {
            fetchedData.map((e,i)=>{
              return <CardsCollection key={i} data={e} />
            })
          }
      </div>
    </div>
  )
}

export default Token
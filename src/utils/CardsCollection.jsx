import React from 'react'
import Card from './Card'

const CardsCollection = ({ data }) => {
  return (
    <div className='cardCollection'>
      <Card heading={'Basic Info'} imgNum='1' pairCreatedAt={data?.pairCreatedAt} symbol={data?.baseToken?.symbol} dexId={data?.dexId} pairAddress={data?.pairAddress} />
      <Card heading={'Basic Token'} imgNum='2' baseName={data?.baseToken?.name} baseSymbol={data?.baseToken?.symbol} baseAddress={data?.baseToken?.address} />
      <Card heading={'Quote Token'} imgNum='2' quoteName={data?.quoteToken?.name} quoteSymbol={data?.quoteToken?.symbol} quoteAddress={data?.quoteToken?.address} />
      <Card heading={'Price'} imgNum='3' priceNative={data?.priceNative} priceUsd={data?.priceUsd} />
    </div>
  )
}

export default CardsCollection
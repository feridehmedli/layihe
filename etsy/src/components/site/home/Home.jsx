import React from 'react'
import Hero from '../hero/Hero'
import ViewedSection from '../viewedSection/ViewedSection'
import EtsySeller from '../etsySeller/etsySeller'
import FavouritesCategory from '../favouritesCategory/FavouritesCategory'

const Home = () => {
  return (
    <>
      <Hero/>
      <ViewedSection/>
      <EtsySeller/>
      <FavouritesCategory/>
    </>
  )
}

export default Home

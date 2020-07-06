import React from 'react'

import { Header, Carousel, Sections, Products, Clients, Footer } from '../components'

export const Home = (props)=> {
  return <div>
    <Header />
    <Carousel />
    <Sections />
    <Products />
    <Clients />
    <Footer />
  </div>
}
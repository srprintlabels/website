import React from 'react'

import { Header, Welcome, Sections, Products, Clients, Footer } from '../components'

export const Home = (props)=> {
  return <div>
    <Header />
    <Welcome />
    <Sections />
    <Products />
    <Clients />
    <Footer />
  </div>
}
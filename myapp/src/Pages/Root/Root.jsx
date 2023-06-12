import React from 'react'
import { Outlet } from 'react-router-dom'
import Container from '../../Components/Container/Container'
import Header from '../../Components/Header/Header'
import Body from '../../Components/Body/Body'
import Footer from '../../Components/Footer/Footer'


export default function 
() {
  return (
   
      <Container>
        <Header />
        <Outlet />
        <Footer />
      </Container>
    
  )
}

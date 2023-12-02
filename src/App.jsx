import React, { useState } from "react"

import Footer from "./components/Footer"
import { Routes, Route } from "react-router-dom"
import Home from "./Pages/Home"
import Cart from "./components/Cart"
import Wishlist from "./components/Wishlist"
import Header from "./components/Header"

function App() {

  const [searchQuery,setSearchQuery]=useState("")


  return (
    < >
      <Header searchQuery={searchQuery} setSearchQuery={setSearchQuery} />

<Routes>
  <Route path="/" element={<Home searchQuery={searchQuery} setSearchQuery={setSearchQuery}/>} />
  <Route path="/cart" element={<Cart />} />
  <Route path="/wishlist" element={<Wishlist />} />
</Routes>


      <Footer/>

    </>
  )
}

export default App

import React from "react"
import Navbar from "./project/Navbar"
import Main from "./project/Main"
import Footer from "./project/Footer"
import "./project/Style.css"
import Data from "./Data"

export default function App(){
  
  const copyData = Data.map((item) => {
      return(  
        <Footer 
                key = {item.id}
                img = {item.coverImg}
                rating = {item.stats.rating}
                reviewCount = {item.stats.reviewCount}
                location = {item.location}
                title = {item.title}
                price = {item.price}
                openSpots = {item.openSpots}
            />
      ) 
  })
  return(
    <div className="appDiv">
              

        <Navbar/>
        <Main/>
        <section className="cards-list">
            {copyData}
        </section>
    </div>
  )
}

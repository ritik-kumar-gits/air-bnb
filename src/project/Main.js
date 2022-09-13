import React from "react"
import Image from "../Image.png"

export default function Main(){
    return(
        <section className="hero">
            <img src= {Image} className="hero--photo" alt="img"/>
            <h1 className="hero--header">Online Experiences</h1>
            <p className="hero--text">Join unique interactive activities led by 
            one-of-a-kind hosts—all without leaving home.</p>
        </section>
    )
}
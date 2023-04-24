import React from "react";
import Main from'./components/Main'
import Navbar from './components/Navbar'
import Hero from './components/Hero'
import Card from './components/Card'
import Data from './components/Data'
import personOne from "./images/katie-zaferes.png"
import star from "./images/star.png"


import "./App.css"
import Jokes from "./components/Jokes";
function App() {
  const card_elements=Data.map((card_data) =>{
    return <Card
      key={card_data.id}
      item={card_data}
      // title={card_data.title}
      // // description={card_data.description}
      // price={card_data.price}
      // image={card_data.coverImg}
      // rating={card_data.stats.rating}
      // reviewCount={card_data.stats.reviewCount}
      // location={card_data.location}
      // openSpots={card_data.openSpots}
      //You can also use spread syntax that passes properties like individual items
      // {...card_data}
    />
 });
  return(
    <div className="container">
      <Navbar/>
      <Hero/>
      <section className="cards-list">
        {card_elements}
      </section>

     
    </div>
  );
}

export default App;

import React from 'react'
import Card from './Card'

function CardPArent() {
  let data = [
    {
      name: "mobile",
      price: 1000,
      description: "Some quick example text to build on the card title and make up the bulk of the card's content.",
      img: require("../assets/images/download.jfif")
    },
    {
      name: "Laptop",
      price: 1500,
      description: "Some quick example text to build on the card title and make up the bulk of the card's content.",
      img: require("../assets/images/download (1).jfif")
    },
    {
      name: "Computer",
      price: 2500,
      description: "Some quick example text to build on the card title and make up the bulk of the card's content.",
      img: require("../assets/images/download (2).jfif")
    },
    {
      name: "Camera",
      price: 3000,
      description: "Some quick example text to build on the card title and make up the bulk of the card's content.",
      img: require("../assets/images/download (3).jfif")
    },
    {
      name: "Watch",
      price: 50,
      description: "Some quick example text to build on the card title and make up the bulk of the card's content.",
      img: require("../assets/images/download (4).jfif")
    },
    {
      name: "Gogles",
      price: 10,
      description: "Some quick example text to build on the card title and make up the bulk of the card's content.",
      img: require("../assets/images/download (4).jfif")
    },
    {
      name: "Camera",
      price: 3000,
      description: "Some quick example text to build on the card title and make up the bulk of the card's content.",
      img: require("../assets/images/download (3).jfif")
    },  
  ]
  return (
    <div className='row row-cols-3 g-5'>
      {
        data.map((x,i) => {
          return (
            <Card item={x} key={i}/>
          )
        })
      }

      {/* <div className='col'>
      <div className="card">
        <img src={require("../assets/images/download (1).jfif")} className="card-img-top" alt="..." />
        <div className="card-body">
          <h5 className="card-title">Camera</h5>
          <h3>Price : $1000</h3>
          <p className="card-text">Some quick example text to build on the card title and make up the bulk of </p>
          <a href="#" className="btn btn-primary">Buy Now</a>
        </div>
      </div>

      </div>
      <div className='col'>
      <div className="card">
        <img src={require("../assets/images/download (2).jfif")} className="card-img-top" alt="..." />
        <div className="card-body">
          <h5 className="card-title">Laptop</h5>
          <h3>Price : $2000</h3>
          <p className="card-text">Lorem ipsum dolor sit amet consectetur adipisicing elit. Nam impedit laboriosam minus voluptatum commodi!</p>
          <a href="#" className="btn btn-primary">Buy Now</a>
        </div>
      </div>

      </div>
      <div className='col'>
      <div className="card">
        <img src={require("../assets/images/download (3).jfif")} className="card-img-top" alt="..." />
        <div className="card-body">
          <h5 className="card-title">Computer</h5>
          <h3>Price : $1500</h3>
          <p className="card-text">Lorem ipsum dolor sit amet consectetur adipisicing elit. Illum vero similique quo qui. Eligendi, quas?</p>
          <a href="#" className="btn btn-primary">Buy Now</a>
        </div>
      </div>

      </div>
        <div className='col'>
        <div className="card">
          <img src={require("../assets/images/download (4).jfif")} className="card-img-top" alt="..." />
          <div className="card-body">
            <h5 className="card-title">Watch</h5>
            <h3>Price : $250</h3>
            <p className="card-text">Lorem ipsum dolor sit, amet consectetur adipisicing elit. Deleniti, fuga?</p>
            <a href="#" className="btn btn-primary">Buy Now</a>
          </div>
        </div>

        </div> */}

    </div>
  )
}

export default CardPArent

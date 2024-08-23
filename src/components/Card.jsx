import React from 'react'

function Card(props) {
  return (
    <div className='col'>
              <div className="card h-100">
                <img src={props.item.img} className="card-img-top" alt="..." />
                <div className="card-body">
                  <h5 className="card-title">{props.item.name}</h5>
                  <h3>Price : ${props.item.price}</h3>
                  <p className="card-text">{props.item.description}</p>
                  <a href="#" className="btn btn-primary">Buy Now</a>
                </div>
              </div>

            </div>
  )
}

export default Card

import React from 'react'
import Button from './Button'

import  Header   from './Header'
import Footer from './Footer'
const Main = () => {
  return (
    <>
    <div className="container ">
        <div className="text-center p-5 bg-light-dark rounded-3 my-3">

        <h1>Stock Prediction Portal</h1>
        <p>Welcome to the Stock Prediction Portal. Here you can analyze and predict stock market trends using advanced machine learning algorithms. Data is processed through a neural network model trained on historical stock data.</p>
        <Button text="Login" class='btn btn-outline-info' url="/login"/>
      </div>
        </div>
    </>
  )
}

export default Main

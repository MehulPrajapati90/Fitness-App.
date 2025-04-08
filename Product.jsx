import React, { useState, useEffect } from 'react'
import ReactDom from "react-dom/client"
import fitnessProducts from './data'


export default function Product() {
  // console.log(fitnessProducts);

  return (
    <>
      <div className='product'>
        <h1>Fitness Products.</h1>
        <p>"We do not support or Endorse Any thing this is just for project purpose".
        </p>
        <div className='product-lower'>
          {
            fitnessProducts.map((val) => {
              return (
                <div key={val.id} className='card'>
                  <img height={200} width={200} src={val.image} alt="Oops" />
                  <h3>{val.name}</h3>
                  <h3>{val.price}</h3>
                  <h3>{val.company}</h3>
                  <a href={val.link} target='_blank'>visit</a>
                </div>
              )
            })
          }
        </div>
      </div>
    </>
  )
}
import React from 'react'
import cat1 from '../assets/category1.png'
import cat2 from '../assets/category2.png'
import cat3 from '../assets/category3.png'
import './category.css'

export default function Category() {
  return (
    <div className='category-cont'>
      <h1>Shop by Category</h1>
      <div className="category-card">
        <div className="card">
            <img src={cat1}alt="" />
            <p>Bed Frame</p>
        </div>
        <div className="card">
            <img src={cat2}alt="" />
            <p>Bed Frame</p>
        </div>
        <div className="card">
            <img src={cat3}alt="" />
            <p>Bed Frame</p>
        </div>
      </div>
  
    </div>
  )
}

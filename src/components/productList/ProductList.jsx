import React from 'react'
import Product from '../product/Product'
import "./productList.css"
import {products} from "../../data"

function ProductList() {
    return (
        <div className='pl'>
            <div className="pl-texts">
                <h1 className="pl-title">Create & Inspire.</h1>
                <p className="pl-desc">
                These are some of my projects that I have worked on in the past. All the projects you
                see here are all Full Stack Applications utilizing Node.js, Javascript, React, Python,
                Postgresql, Express, HTML5, CSS, and many more tools.
                </p>
            </div>
            <div className="pl-list">
                {products.map((item) => (
                    <Product key={item.id} img={item.img} link={item.link}/>
                    ))}
            </div>
        </div>
    )
}

export default ProductList

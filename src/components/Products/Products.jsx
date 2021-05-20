import React from 'react'
import Card from './Card';
import './Products.css';

const Products = () => {
    return (
        <div id='products'>
            <div className='container cardproducts'>
                <h1>Our Products</h1>
                    <div className='row gy-5'>
                        <div className='mx-auto col-10 col-lg-4 col-md-6 col-sm-12 cardhover'>
                            <Card/>
                        </div>
                        <div className='mx-auto col-10 col-lg-4 col-md-6 col-sm-12 cardhover'>
                            <Card/>
                        </div>
                        <div className='mx-auto col-10 col-lg-4 col-md-6 col-sm-12 cardhover'>
                            <Card/>
                        </div>
                        <div className='mx-auto col-10 col-lg-4 col-md-6 col-sm-12 cardhover'>
                            <Card/>
                        </div>
                        <div className='mx-auto col-10 col-lg-4 col-md-6 col-sm-12 cardhover'>
                            <Card/>
                        </div>
                        <div className='mx-auto col-10 col-lg-4 col-md-6 col-sm-12 cardhover'>
                            <Card/>
                        </div>
                    </div>           
            </div>
        </div>
    )
}

export default Products
